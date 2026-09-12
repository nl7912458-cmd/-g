// js/auth.js
import { auth, db } from './firebase-config.js'; // Lấy thẳng auth và db từ file config của bạn
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { doc, getDoc, setDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const loginBtn = document.getElementById('loginBtn');
const loginSpinner = document.getElementById('loginSpinner');
const globalLoader = document.getElementById('globalLoader');

function goTo(page) {
    window.location.href = page;
}

function hideLoader() {
    if (globalLoader) globalLoader.classList.add('hidden');
}

// ------------------------------------------------------------------
// HÀM TẠO HOẶC LẤY DEVICE ID
// ------------------------------------------------------------------
function getDeviceId() {
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
        deviceId = 'device_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
}

let isLoggingIn = false; // Cờ kiểm soát vòng lặp chuyển trang

// ------------------------------------------------------------------
// 1. XỬ LÝ KHI BẤM ĐĂNG NHẬP (Chỉ chạy ở trang login.html)
// ------------------------------------------------------------------
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        isLoggingIn = true; 
        loginBtn.disabled = true;
        loginSpinner.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        const currentDeviceId = getDeviceId();

        try {
            // A. Xác thực email/mật khẩu
            const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
            const user = userCredential.user;

            // B. Kiểm tra: Máy này có đang bị gắn với tài khoản khác không?
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("deviceId", "==", currentDeviceId));
            const querySnapshot = await getDocs(q);

            let isDeviceUsedByOther = false;
            querySnapshot.forEach((document) => {
                if (document.id !== user.uid) {
                    isDeviceUsedByOther = true;
                }
            });

            if (isDeviceUsedByOther) {
                await signOut(auth);
                throw new Error("device_used");
            }

            // C. Kiểm tra: Tài khoản này đã từng đăng nhập ở máy khác chưa?
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const registeredDeviceId = userDocSnap.data().deviceId;
                if (registeredDeviceId && registeredDeviceId !== currentDeviceId) {
                    await signOut(auth);
                    throw new Error("account_locked");
                }
            } else {
                // D. Lần đầu đăng nhập: Lưu ID máy này lên Firestore
                await setDoc(userDocRef, {
                    email: user.email,
                    deviceId: currentDeviceId,
                    createdAt: new Date()
                });
            }

            // Hợp lệ toàn bộ -> Về trang chủ
            goTo('index.html');

        } catch (error) {
            // Hiển thị lỗi
            if (error.message === "device_used") {
                errorMessage.textContent = "❌ Thiết bị này đã đăng nhập tài khoản khác. 1 máy chỉ dùng 1 tài khoản!";
            } else if (error.message === "account_locked") {
                errorMessage.textContent = "❌ Tài khoản này đã được sử dụng ở một thiết bị khác!";
            } else {
                errorMessage.textContent = "Sai email hoặc mật khẩu. Vui lòng thử lại!";
            }
            
            errorMessage.classList.remove('hidden');
            loginBtn.disabled = false;
            loginSpinner.classList.add('hidden');
            isLoggingIn = false; 
        }
    });
}

// ------------------------------------------------------------------
// 2. KIỂM TRA TRẠNG THÁI ĐĂNG NHẬP & BẢO VỆ TRANG (Toàn bộ web)
// ------------------------------------------------------------------
const currentFileName = window.location.pathname.split('/').pop() || 'index.html';
const protectedPages = ['kienthuc.html', 'thucchien.html'];

function setNavToLoggedIn() {
    document.querySelectorAll('.auth-nav-btn').forEach((btn) => {
        btn.textContent = 'Đăng xuất';
        btn.href = '#';
        btn.onclick = (e) => {
            e.preventDefault();
            signOut(auth).then(() => goTo('login.html'));
        };
    });
}

function setNavToLoggedOut() {
    document.querySelectorAll('.auth-nav-btn').forEach((btn) => {
        btn.textContent = 'Đăng nhập';
        btn.href = 'login.html';
        btn.onclick = null;
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        if (currentFileName === 'login.html' && !isLoggingIn) {
            goTo('index.html');
            return;
        }
        
        if (!isLoggingIn) {
            setNavToLoggedIn();
            hideLoader();
        }
    } else {
        if (protectedPages.includes(currentFileName)) {
            goTo('login.html');
            return;
        }
        setNavToLoggedOut();
        hideLoader();
    }
});

// js/auth.js
import { app, auth } from './firebase-config.js'; // Nhớ export cả 'app' từ file config nhé
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Khởi tạo Firestore
const db = getFirestore(app);

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

let isLoggingIn = false; // Biến cờ để ngăn onAuthStateChanged chuyển trang quá sớm

// ------------------------------------------------------------------
// 1. XỬ LÝ KHI BẤM ĐĂNG NHẬP (Chỉ có ở login.html)
// ------------------------------------------------------------------
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        isLoggingIn = true; // Bật cờ: Bắt đầu quá trình đăng nhập và kiểm tra
        loginBtn.disabled = true;
        loginSpinner.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        const currentDeviceId = getDeviceId();

        try {
            // A. Xác thực bằng Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
            const user = userCredential.user;

            // B. Kiểm tra: Thiết bị này đã bị gắn với tài khoản khác chưa?
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

            // C. Kiểm tra: Tài khoản này đã đăng nhập ở thiết bị khác chưa?
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const registeredDeviceId = userDocSnap.data().deviceId;
                if (registeredDeviceId && registeredDeviceId !== currentDeviceId) {
                    await signOut(auth);
                    throw new Error("account_locked");
                }
            } else {
                // D. Lần đầu đăng nhập: Khóa tài khoản này vào thiết bị hiện tại
                await setDoc(userDocRef, {
                    email: user.email,
                    deviceId: currentDeviceId,
                    createdAt: new Date()
                });
            }

            // Mọi thứ hợp lệ -> Chuyển hướng
            goTo('index.html');

        } catch (error) {
            // Xử lý các thông báo lỗi tương ứng
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
            isLoggingIn = false; // Tắt cờ nếu lỗi
        }
    });
}

// ------------------------------------------------------------------
// 2. KIỂM TRA TRẠNG THÁI ĐĂNG NHẬP (Áp dụng toàn trang)
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
        // Chỉ tự động chuyển hướng từ trang login NẾU người dùng vừa mở trang (đã đăng nhập từ trước)
        // Nếu người dùng đang bấm nút đăng nhập (isLoggingIn = true), chờ form submit xử lý
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

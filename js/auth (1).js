// js/auth.js
import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// ==== TÍNH NĂNG: CHỈ CHO PHÉP 1 THIẾT BỊ ĐĂNG NHẬP CÙNG LÚC ====
// Cơ chế: mỗi lần đăng nhập, tạo 1 mã "sessionId" ngẫu nhiên, lưu vào
// localStorage của máy đó và ghi đè lên Firestore tại sessions/{uid}.
// Mọi trang đều lắng nghe (onSnapshot) document này; nếu phát hiện
// sessionId trên Firestore khác với sessionId lưu cục bộ (nghĩa là có
// máy khác vừa đăng nhập và ghi đè), máy hiện tại sẽ tự động bị đăng xuất.
const SESSION_KEY = 'authSessionId';
let sessionUnsub = null; // hàm hủy lắng nghe Firestore hiện tại

function generateSessionId() {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
    return 'sess-' + Date.now() + '-' + Math.random().toString(36).slice(2);
}

// Tạo phiên đăng nhập mới cho máy này và "chiếm quyền" trên Firestore
// (mọi máy khác đang giữ session cũ sẽ bị đăng xuất khi listener của họ nhận cập nhật này)
async function claimSession(uid) {
    const sessionId = generateSessionId();
    localStorage.setItem(SESSION_KEY, sessionId);
    try {
        await setDoc(doc(db, 'sessions', uid), {
            sessionId,
            updatedAt: Date.now()
        });
    } catch (err) {
        console.error('Không thể cập nhật session lên Firestore:', err);
    }
    return sessionId;
}

// Theo dõi Firestore để phát hiện khi có máy khác đăng nhập và chiếm session
function watchSession(uid) {
    if (sessionUnsub) sessionUnsub();
    sessionUnsub = onSnapshot(doc(db, 'sessions', uid), (snap) => {
        if (!snap.exists()) return;
        const remoteSessionId = snap.data().sessionId;
        const localSessionId = localStorage.getItem(SESSION_KEY);
        if (remoteSessionId && localSessionId && remoteSessionId !== localSessionId) {
            // Có máy khác vừa đăng nhập -> đăng xuất máy này ngay lập tức, không cần thông báo
            if (sessionUnsub) { sessionUnsub(); sessionUnsub = null; }
            signOut(auth);
        }
    });
}

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const loginBtn = document.getElementById('loginBtn');
const loginSpinner = document.getElementById('loginSpinner');
const globalLoader = document.getElementById('globalLoader');

// BUG ĐÃ SỬA: file gốc hard-code "/Ghd/" trước mọi đường dẫn chuyển hướng.
// Điều này chỉ đúng khi repo GitHub Pages tên đúng là "Ghd" và luôn lệch
// khi chạy local hoặc đổi tên repo. Dùng đường dẫn tương đối (không có "/"
// ở đầu) để nó tự đúng dù host ở domain gốc hay ở bất kỳ sub-path nào.
function goTo(page) {
    window.location.href = page;
}

function hideLoader() {
    if (globalLoader) globalLoader.classList.add('hidden');
}

// 1. Xử lý logic khi bấm nút Đăng nhập (chỉ tồn tại trên login.html)
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        loginBtn.disabled = true;
        loginSpinner.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        try {
            const cred = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
            await claimSession(cred.user.uid); // chiếm session -> máy đăng nhập trước đó (nếu có) sẽ bị đăng xuất
            // onAuthStateChanged bên dưới sẽ tự động điều hướng về trang chủ
        } catch (error) {
            errorMessage.textContent = "Sai email hoặc mật khẩu. Vui lòng thử lại!";
            errorMessage.classList.remove('hidden');
            loginBtn.disabled = false;
            loginSpinner.classList.add('hidden');
        }
    });
}

// 2. Kiểm tra trạng thái đăng nhập
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

// BUG ĐÃ SỬA: bản gốc tìm nút bằng querySelector('nav a[href="./login.html"]'),
// nhưng nút đó chỉ tồn tại trên index.html — kienthuc.html và thucchien.html
// không có nút đăng nhập/đăng xuất nào cả. Giờ mọi trang đều có nút mang
// class "auth-nav-btn" nên logic này áp dụng đồng nhất trên toàn site.
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Nếu máy này chưa có sessionId cục bộ (vd: phiên đăng nhập có từ
        // trước khi bật tính năng này), tự nhận 1 session mới cho nó.
        if (!localStorage.getItem(SESSION_KEY)) {
            claimSession(user.uid);
        }
        watchSession(user.uid); // bắt đầu theo dõi, phát hiện máy khác chiếm session

        if (currentFileName === 'login.html') {
            goTo('index.html');
            return; // đang điều hướng đi, không cần gỡ loader ở trang này
        }
        setNavToLoggedIn();
        hideLoader();
    } else {
        if (sessionUnsub) { sessionUnsub(); sessionUnsub = null; }
        localStorage.removeItem(SESSION_KEY);
        if (protectedPages.includes(currentFileName)) {
            goTo('login.html');
            return; // đang điều hướng đi, không cần gỡ loader ở trang này
        }
        setNavToLoggedOut();
        hideLoader();
    }
});

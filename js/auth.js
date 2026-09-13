// js/auth.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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
            await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
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
        if (currentFileName === 'login.html') {
            goTo('index.html');
            return; // đang điều hướng đi, không cần gỡ loader ở trang này
        }
        setNavToLoggedIn();
        hideLoader();
    } else {
        if (protectedPages.includes(currentFileName)) {
            goTo('login.html');
            return; // đang điều hướng đi, không cần gỡ loader ở trang này
        }
        setNavToLoggedOut();
        hideLoader();
    }
});

// js/auth.js
import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { doc, setDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

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

// Cờ này đánh dấu: user vừa bấm nút Đăng nhập ở CHÍNH trang này (khác với
// trường hợp mở lại login.html trong khi phiên cũ vẫn còn hiệu lực).
// Mục đích: để onAuthStateChanged phía dưới KHÔNG tự chuyển trang giùm khi
// đang trong luồng đăng nhập tươi, tránh chuyển trang trước khi sessionId
// mới kịp ghi xong lên Firestore (đây chính là nguyên nhân gây bug tự đăng
// xuất ngay sau khi đăng nhập ở bản trước).
let freshLoginInProgress = false;

// 1. Xử lý logic khi bấm nút Đăng nhập (chỉ tồn tại trên login.html)
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        freshLoginInProgress = true;

        loginBtn.disabled = true;
        loginSpinner.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        try {
            const cred = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
            // Tạo "phiên" mới cho lần đăng nhập này, lưu cục bộ trên thiết bị
            // này và ghi lên Firestore. Đây là "chữ ký" của thiết bị hiện tại.
            const newSessionId = crypto.randomUUID();
            localStorage.setItem('sessionId', newSessionId);
            await setDoc(doc(db, 'sessions', cred.user.uid), {
                sessionId: newSessionId,
                updatedAt: serverTimestamp()
            });
            // CHỈ chuyển trang SAU KHI đã ghi Firestore xong hẳn, để trang
            // index.html khi tải lên sẽ luôn đọc được sessionId mới nhất.
            goTo('index.html');
        } catch (error) {
            freshLoginInProgress = false;
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
// 3. Chặn đăng nhập song song: mỗi tài khoản chỉ được coi là "đang online"
// trên MỘT thiết bị. Khi đăng nhập ở máy khác, sessionId trên Firestore sẽ
// đổi -> mọi thiết bị cũ đang mở sẽ tự phát hiện lệch sessionId và bị đăng
// xuất ngay (server đẩy dữ liệu về real-time qua onSnapshot, không cần F5).
let sessionUnsubscribe = null;

function watchSession(uid) {
    if (sessionUnsubscribe) sessionUnsubscribe(); // gỡ listener cũ nếu có

    sessionUnsubscribe = onSnapshot(doc(db, 'sessions', uid), (snap) => {
        const remote = snap.data();
        if (!remote) return; // chưa có document (user chưa từng đăng nhập lần nào với tính năng này), bỏ qua

        const localSessionId = localStorage.getItem('sessionId');
        if (remote.sessionId !== localSessionId) {
            // Có thiết bị/máy khác vừa đăng nhập -> tự đăng xuất ở đây
            if (sessionUnsubscribe) sessionUnsubscribe();
            localStorage.removeItem('sessionId');
            signOut(auth).then(() => {
                alert('Tài khoản của bạn vừa được đăng nhập ở một thiết bị khác. Bạn đã bị đăng xuất khỏi thiết bị này.');
                goTo('login.html');
            });
        }
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        if (currentFileName === 'login.html') {
            // Chỉ tự chuyển trang ở đây khi user mở lại login.html trong lúc
            // phiên cũ vẫn còn hiệu lực (Firebase khôi phục session persisted).
            // Nếu đang trong luồng vừa bấm nút Đăng nhập (freshLoginInProgress),
            // để submit handler tự chuyển trang SAU KHI ghi Firestore xong.
            if (!freshLoginInProgress) {
                goTo('index.html');
            }
            return;
        }
        setNavToLoggedIn();
        watchSession(user.uid);
        hideLoader();
    } else {
        if (sessionUnsubscribe) {
            sessionUnsubscribe();
            sessionUnsubscribe = null;
        }
        if (protectedPages.includes(currentFileName)) {
            goTo('login.html');
            return; // đang điều hướng đi, không cần gỡ loader ở trang này
        }
        setNavToLoggedOut();
        hideLoader();
    }
});

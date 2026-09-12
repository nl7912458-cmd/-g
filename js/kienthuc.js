// js/kienthuc.js
import { listTaiLieu } from '../data/list-data.js';
import { exportElementToPDF } from './pdf-export.js';

const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const documentGrid = document.getElementById('documentGrid');
const backBtn = document.getElementById('backBtn');
const pdfContent = document.getElementById('pdfContent');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');

let currentDocTitle = 'TaiLieu';

// Sắp xếp mảng: Tài liệu nào ưu tiên (priority nhỏ) sẽ lên trước, nếu không có mặc định là 99 (đẩy xuống dưới)
const sortedTaiLieu = [...listTaiLieu].sort((a, b) => (a.priority || 99) - (b.priority || 99));

// 1. Render danh sách tài liệu
function renderList() {
    documentGrid.innerHTML = '';
    
    sortedTaiLieu.forEach(doc => {
        // Kiểm tra xem thẻ này có phải thẻ quan trọng không
        const isImportant = doc.isImportant === true;
        
        // Cài đặt class CSS tùy biến dựa theo độ quan trọng
        const borderClass = isImportant ? 'border-red-400 card-important' : 'border-gray-100 hover:shadow-md';
        
        // Render huy hiệu (badge) nếu có
        const badgeHTML = (isImportant && doc.badge) 
            ? `<span class="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 animate-bounce">
                ${doc.badge}
               </span>` 
            : '';

        const card = document.createElement('div');
        // Thêm 'relative' để badge (absolute) định vị chuẩn xác
        card.className = `apple-card relative bg-white p-6 rounded-[1.5rem] border ${borderClass} transition-all duration-300 cursor-pointer flex flex-col h-full`;
        
        // Đã xóa phần render date, thêm icon sách phong cách Apple
        card.innerHTML = `
            ${badgeHTML}
            <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-apple-blue mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 class="text-lg font-bold mb-3 text-apple-dark leading-snug line-clamp-2 pr-4">${doc.title}</h3>
            <p class="text-gray-500 text-sm flex-grow line-clamp-3">${doc.description}</p>
        `;

        // Sự kiện click để mở chi tiết
        card.addEventListener('click', () => loadDocument(doc.id, doc.title));
        documentGrid.appendChild(card);
    });
}

// 2. Mở nội dung tài liệu
async function loadDocument(id, title) {
    try {
        // Import động (Template literal chuẩn)
        const module = await import(`../data/${id}.js`);
        pdfContent.innerHTML = module.content;
        currentDocTitle = title;

        // Chuyển giao diện
        listView.classList.add('hidden');
        detailView.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error(error);
        alert('Nội dung bài học này đang được cập nhật!');
    }
}

// 3. Nút quay lại
backBtn.addEventListener('click', () => {
    detailView.classList.add('hidden');
    listView.classList.remove('hidden');
    pdfContent.innerHTML = '';
});

// 4. Xử lý xuất PDF chuẩn A4 (logic dùng chung nằm trong pdf-export.js)
downloadPdfBtn.addEventListener('click', () => {
    exportElementToPDF(pdfContent, currentDocTitle, [downloadPdfBtn]);
});

// 5. Chạy các hàm khi DOM load xong
document.addEventListener('DOMContentLoaded', () => {
    // Ẩn loader nếu có
    const loader = document.getElementById('globalLoader');
    if(loader) loader.style.display = 'none';
    
    // Gọi hàm render danh sách
    renderList();
});

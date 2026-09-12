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

// 1. Render danh sách tài liệu
function renderList() {
    documentGrid.innerHTML = '';
    listTaiLieu.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'apple-card bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer flex flex-col h-full';
        card.innerHTML = `
            <div class="text-xs font-semibold text-apple-blue mb-2">${doc.date}</div>
            <h3 class="text-xl font-bold mb-3 text-apple-dark">${doc.title}</h3>
            <p class="text-gray-500 text-sm flex-grow">${doc.description}</p>
        `;

        // Sự kiện click để mở chi tiết
        card.addEventListener('click', () => loadDocument(doc.id, doc.title));
        documentGrid.appendChild(card);
    });
}

// 2. Mở nội dung tài liệu
async function loadDocument(id, title) {
    try {
        // BUG ĐÃ SỬA: bản gốc có dấu "\" thừa trước dấu backtick và "${...}"
        // (import(\`../data/\${id}.js\`)) khiến chuỗi không còn là một
        // template literal hợp lệ nữa — id không bao giờ được nội suy vào
        // đường dẫn, nên mọi lần click đều rơi vào catch (alert "đang cập nhật").
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

// Chạy hàm render khi web tải xong
renderList();

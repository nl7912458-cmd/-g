// js/pdf-export.js
export function exportElementToPDF(element, filename, elementsToHideWhileCapturing = []) {
    elementsToHideWhileCapturing.forEach((el) => el.classList.add('no-print', 'hidden'));

    const opt = {
        margin: [15, 15, 15, 15], // Căn lề đồng đều 4 góc (Top, Left, Bottom, Right)
        filename: `${filename}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            scrollY: 0, // Fix lỗi chỉ chụp được phần trang web đang cuộn tới
            windowWidth: element.scrollWidth // Đảm bảo lấy đủ chiều rộng nội dung
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy', 'avoid-all'] } // Ép tự động ngắt trang, tránh cắt ngang dòng chữ/hình ảnh
    };

    return html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            elementsToHideWhileCapturing.forEach((el) => el.classList.remove('hidden'));
        })
        .catch((err) => {
            elementsToHideWhileCapturing.forEach((el) => el.classList.remove('hidden'));
            console.error('Xuất PDF thất bại:', err);
            alert('Đã có lỗi khi xuất PDF, vui lòng thử lại.');
        });
}

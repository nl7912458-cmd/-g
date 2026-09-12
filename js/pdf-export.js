// js/pdf-export.js
// Logic dùng chung để chuyển một phần tử DOM thành file PDF khổ A4 dọc.
export function exportElementToPDF(element, filename, elementsToHideWhileCapturing = []) {
    elementsToHideWhileCapturing.forEach((el) => el.classList.add('no-print', 'hidden'));

    const opt = {
        margin: 15,
        filename: `${filename}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
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

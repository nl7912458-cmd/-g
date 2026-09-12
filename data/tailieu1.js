// data/tailieu1.js
export const content = `
<div style="font-family: 'Inter', system-ui, sans-serif; color: #1d1d1f; max-width: 800px; margin: 0 auto; background: #ffffff; padding: 20px; position: relative; min-height: 800px; z-index: 1;">
    
    <!-- WATERMARK (Tuyệt đối an toàn cho xuất PDF: Dùng margin và text-align) -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; text-align: center; z-index: -1; pointer-events: none;">
        <!-- Đã gắn chuẩn file 1.png của bạn -->
        <img src="./Anh/1.png" style="width: 350px; margin-top: 250px; opacity: 0.15; filter: grayscale(100%); display: inline-block;">
    </div>

    <!-- NỘI DUNG CHÍNH -->
    <div style="position: relative; z-index: 2;">
        
        <!-- KHUNG HEADER -->
        <div style="background-color: #00a8ff; color: white; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 24px; border-radius: 4px;">
            <span>TĐĐT_ĐGNL</span>
            <span>TỌA ĐỘ ĐỊNH TÍNH - LUYỆN THI ĐGNL</span>
        </div>

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: HỆ THỐNG TỪ LOẠI & DẤU HIỆU NHẬN BIẾT</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Để xử lý tốt các câu hỏi về ngữ pháp, sửa lỗi sai câu hoặc đọc hiểu trong đề thi Đánh giá năng lực, học sinh cần nắm vững bản chất của các loại từ. Dưới đây là hệ thống phân loại chuẩn mực, kèm theo "phép thử" để nhận diện nhanh chóng trong phòng thi.
        </p>

        <!-- TIÊU ĐỀ PHỤ -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 20px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 1: NHÓM TỪ MANG Ý NGHĨA THỰC (THỰC TỪ)</h2>
        <p style="font-size: 13px; color: #4b5563; margin-bottom: 10px; font-style: italic;">Nhóm từ cấu tạo nên thành phần chính của câu (Chủ ngữ - Vị ngữ). Thí sinh thường bị nhầm lẫn giữa Động từ chỉ trạng thái và Tính từ.</p>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">1. Danh từ (Chỉ sự vật, hiện tượng, khái niệm)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Dấu hiệu:</strong> Kết hợp với số lượng từ phía trước (những, các, mọi) hoặc từ chỉ định phía sau (này, kia).</li>
                <li><strong>Ví dụ:</strong> (Những) học sinh (này), (mọi) suy nghĩ, (các) niềm vui.</li>
                <li><strong>Bẫy thực chiến:</strong> "Danh từ trừu tượng" (sự, niềm, nỗi, cái) đi trước biến động/tính từ thành danh từ.</li>
            </ul>
        </div>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">2. Động từ (Chỉ hành động, trạng thái)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Dấu hiệu:</strong> Kết hợp với phó từ thời gian/mệnh lệnh phía trước: đã, đang, sẽ, sắp, hãy, đừng, chớ.</li>
                <li><strong>Ví dụ:</strong> (Đang) chạy, (đã) suy nghĩ, (đừng) buồn.</li>
                <li><strong>Bẫy thực chiến:</strong> Động từ trạng thái (yêu, ghét, buồn, vui) đi được với từ chỉ mức độ. Dùng phép thử mệnh lệnh: "Đừng buồn!" (Được) vs "Đừng xanh!" (Không được - xanh là tính từ).</li>
            </ul>
        </div>

        <div style="margin-bottom: 16px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">3. Tính từ (Chỉ đặc điểm, tính chất)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Dấu hiệu:</strong> Kết hợp với từ chỉ mức độ như: rất, hơi, khá, quá, lắm, vô cùng.</li>
                <li><strong>Ví dụ:</strong> (Rất) đẹp, (hơi) mệt, thông minh (lắm).</li>
                <li><strong>Bẫy thực chiến:</strong> Tính từ tuyệt đối (đỏ chót, xanh lè) không đi kèm từ chỉ mức độ (không nói "rất đỏ chót").</li>
            </ul>
        </div>

        <!-- TIÊU ĐỀ PHỤ -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 20px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 2: NHÓM TỪ THAY THẾ VÀ BỔ TRỢ (HƯ TỪ)</h2>
        <p style="font-size: 13px; color: #4b5563; margin-bottom: 10px; font-style: italic;">Không mang ý nghĩa sự vật độc lập, chuyên dùng liên kết câu hoặc bộc lộ sắc thái (Hay bị bẫy ở câu hỏi tìm lỗi sai).</p>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">1. Đại từ & 2. Quan hệ từ & 3. Phó từ</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Đại từ:</strong> Dùng trỏ/thay thế (tôi, ta, hắn, thế, vậy, ai, gì...) nhằm tránh lặp từ.</li>
                <li><strong>Quan hệ từ:</strong> Biểu thị quan hệ ý nghĩa (và, với, nhưng, của, ở, bằng, như, để...). <em>Lỗi kinh điển:</em> Dùng sai/thừa quan hệ từ gây mất chủ ngữ (Ví dụ: "Qua tác phẩm cho ta thấy..." -> Thừa chữ "Qua").</li>
                <li><strong>Phó từ:</strong> Bổ sung ý nghĩa cho động/tính từ, không bao giờ đứng một mình (đã, đang, sẽ, rất, không, chưa...).</li>
            </ul>
        </div>

        <!-- CHÂN TRANG (FOOTER) -->
        <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 14px; text-align: center; font-size: 12px; color: #4b5563;">
            Theo dõi kênh TikTok chính thức để nhận thêm mẹo định tính: 
            <a href="https://www.tiktok.com/@toado.dinhtinhhsa?_r=1&_t=ZS-99fiBWJaql5" target="_blank" style="color: #00a8ff; font-weight: bold; text-decoration: none;">
                @toado.dinhtinhhsa
            </a>
        </div>
    </div>
</div>
`;

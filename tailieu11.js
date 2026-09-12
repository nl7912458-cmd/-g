// data/tailieu11.js
export const content = `
<div style="font-family: 'Inter', system-ui, sans-serif; color: #1d1d1f; max-width: 800px; margin: 0 auto; background: #ffffff; padding: 20px; position: relative; min-height: 1000px; z-index: 1;">
    
    <!-- WATERMARK CHUẨN XUẤT PDF ĐA TRANG -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; text-align: center; z-index: -1; pointer-events: none; overflow: hidden;">
        <img src="./Anh/1.png" style="width: 350px; margin-top: 250px; opacity: 0.15; filter: grayscale(100%); display: inline-block;">
        <img src="./Anh/1.png" style="width: 350px; margin-top: 650px; opacity: 0.15; filter: grayscale(100%); display: inline-block;">
    </div>

    <!-- NỘI DUNG CHÍNH -->
    <div style="position: relative; z-index: 2;">
        
        <!-- KHUNG HEADER -->
        <div style="background-color: #00a8ff; color: white; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 24px; border-radius: 4px;">
            <span>TĐĐT_ĐGNL</span>
            <span>TỌA ĐỘ ĐỊNH TÍNH - LUYỆN THI ĐGNL</span>
        </div>

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: 4 CHIẾN THUẬT ĐỌC HIỂU "THỰC CHIẾN" TRÊN GIAO DIỆN MÁY TÍNH</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Chính xác! Bài thi ĐGNL (HSA) được thực hiện 100% trên máy tính, nên thao tác "cầm bút gạch chân" là hoàn toàn vô lý. Khi đối diện với một đoạn văn bản dài ngoằng phải cuộn chuột nhiều lần trên màn hình, chiến thuật đọc hiểu phải thay đổi hoàn toàn để chống mỏi mắt và tránh "trôi" thông tin. Dưới đây là phiên bản chiến thuật chuẩn xác cho môi trường Thi trên máy tính (CBT):
        </p>

        <!-- CHIẾN THUẬT 1 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">1. QUY TẮC "ĐỌC NGƯỢC" & TỐI ƯU HÓA GIẤY NHÁP</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vấn đề:</strong> Không thể gạch chân từ khóa trên màn hình. Nhìn qua nhìn lại giữa câu hỏi và đoạn văn rất dễ hoa mắt.</li>
            <li><strong style="color:#1d1d1f;">Giải pháp:</strong>
                <ul style="margin-top: 4px; margin-bottom: 4px; padding-left: 20px;">
                    <li>Luôn cuộn chuột xuống đọc câu hỏi trước.</li>
                    <li>Chỉ bốc ra 1-2 "từ khóa lõi" (tên riêng, mốc thời gian, thuật ngữ) của câu hỏi và ghi thật nhanh ra giấy nháp.</li>
                    <li>Khi cuộn ngược lên đọc văn bản, não bạn chỉ cần tìm đúng từ khóa đang nằm trên mặt giấy, không phải nhớ quá nhiều thứ.</li>
                </ul>
            </li>
        </ul>

        <!-- CHIẾN THUẬT 2 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">2. KỸ NĂNG QUÉT (SCANNING) BẰNG TRỎ CHUỘT</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vấn đề:</strong> Màn hình máy tính phát sáng, nếu chỉ nhìn bằng mắt thường dọc theo các dòng chữ dài sẽ rất dễ bị nhảy dòng, mất tập trung.</li>
            <li><strong style="color:#1d1d1f;">Giải pháp (Tracking bằng chuột):</strong> Hãy dùng chính con trỏ chuột làm "ngòi bút" dẫn đường cho mắt. Kéo trỏ chuột lướt nhanh qua các dòng, mắt bám sát theo vị trí của trỏ chuột để dò tìm cái "từ khóa" bạn vừa ghi ra nháp. Tuyệt đối không đọc nhẩm thành tiếng.</li>
        </ul>

        <!-- CHIẾN THUẬT 3 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">3. LẬP BẢN ĐỒ ĐOẠN VĂN (Dành cho bài đọc dài)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vấn đề:</strong> Các văn bản khoa học, nghị luận thường chia thành 4-5 đoạn. Khi đề hỏi "Nội dung chính", bạn phải cuộn chuột lên xuống liên tục làm gãy mạch tư duy.</li>
            <li><strong style="color:#1d1d1f;">Giải pháp:</strong> Hãy dùng phương pháp <em>"Bắt hai đầu"</em>. Chỉ đọc kỹ câu mở đầu và câu kết thúc của mỗi đoạn. Trên giấy nháp, hãy ghi nhẩm cấu trúc bài đọc.
                <ul style="margin-top: 4px; margin-bottom: 4px; padding-left: 20px;">
                    <li><strong>Ví dụ ghi nháp:</strong> Đ1: Thực trạng / Đ2: Nguyên nhân / Đ3: Giải pháp.</li>
                    <li>Khi có bản đồ này, nếu câu hỏi thứ 3 hỏi về "hậu quả", bạn lập tức cuộn chuột kéo thẳng đến Đoạn 2 để quét, bỏ qua tất cả phần còn lại.</li>
                </ul>
            </li>
        </ul>
        
        <!-- CHIẾN THUẬT 4 - BLOCK BẪY THỰC CHIẾN -->
        <div style="background-color: #fff1f2; border-left: 4px solid #e11d48; padding: 14px; margin-top: 24px; border-radius: 0 8px 8px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <h3 style="font-size: 14px; font-weight: 700; color: #be123c; margin-top: 0; margin-bottom: 10px;">🚨 4. BẪY "TỪ TUYỆT ĐỐI" TRÊN GIAO DIỆN TRẮC NGHIỆM</h3>
            <ul style="font-size: 13px; color: #3f3f46; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li style="margin-bottom: 6px;"><strong>Dấu hiệu:</strong> Người ra đề thường cài cắm bẫy logic vào các đáp án của dạng câu hỏi <em>"Nhận định nào sau đây là KHÔNG đúng / SAI?"</em>.</li>
                <li><strong>Giải pháp:</strong> Dù đọc trên màn hình rất dễ lướt chữ, hãy luôn khựng lại và cảnh giác cao độ với các đáp án chứa các từ khẳng định tuyệt đối: <em>chỉ có, duy nhất, tất cả, luôn luôn, hoàn toàn, chắc chắn</em>. Trong văn bản nghị luận hay khoa học, hiếm có điều gì là tuyệt đối 100%. Nhận định chứa từ tuyệt đối thường chính là <strong>nhận định SAI</strong> (đáp án cần khoanh).</li>
            </ul>
        </div>

        <p style="font-size: 14px; font-weight: 600; color: #1d1d1f; text-align: center; margin-top: 28px;">
            Sự điều chỉnh này đã bám sát hoàn toàn trải nghiệm thực tế trong phòng thi máy tính. Chúc bạn tối ưu hóa thao tác thành công!
        </p>

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


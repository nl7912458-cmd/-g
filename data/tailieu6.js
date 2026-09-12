// data/tailieu6.js
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

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: 6 THAO TÁC LẬP LUẬN CỐT LÕI</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Trong phần thi Đọc hiểu, khi đề bài hỏi "Thao tác lập luận chính", người ra đề đang yêu cầu bạn tìm ra công cụ chủ lực mà tác giả dùng để thuyết phục người đọc. Hãy dùng các dấu hiệu nhận diện sau để khoanh vùng đáp án.
        </p>

        <!-- NHÓM 1 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">1. NHÓM LÀM RÕ VẤN ĐỀ (GIẢI THÍCH & PHÂN TÍCH)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Giải thích (Cắt nghĩa):</strong> Trả lời câu hỏi "Nó là gì?". Mục đích là làm rõ một khái niệm hoặc từ ngữ trừu tượng. <br><em>Dấu hiệu:</em> Chứa các cấu trúc định nghĩa như “là”, “nghĩa là”, “được hiểu là”.</li>
            <li><strong style="color:#1d1d1f;">Phân tích (Mổ xẻ):</strong> Chia nhỏ một vấn đề tổng thể thành nhiều khía cạnh (nguyên nhân, biểu hiện, hậu quả) để xem xét tận gốc rễ. <br><em>Dấu hiệu:</em> Có các từ nối chia tách ý như “thứ nhất, thứ hai”, “một mặt, mặt khác”.</li>
        </ul>

        <!-- NHÓM 2 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">2. NHÓM CỦNG CỐ LUẬN ĐIỂM (CHỨNG MINH & SO SÁNH)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Chứng minh (Đưa bằng chứng):</strong> Dùng sự thật khách quan để buộc người đọc phải tin vào luận điểm. <br><em>Dấu hiệu:</em> Mật độ dẫn chứng (số liệu, nhân vật, sự kiện lịch sử có thật) chiếm ưu thế áp đảo so với lý lẽ.</li>
            <li><strong style="color:#1d1d1f;">So sánh (Đối chiếu):</strong> Đặt đối tượng này cạnh đối tượng khác để làm nổi bật đặc trưng. <br><em>Dấu hiệu:</em> Xuất hiện các cặp từ tương quan “giống như”, “trái ngược với”, “kém hơn”, “khác với”.</li>
        </ul>

        <!-- NHÓM 3 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">3. NHÓM ĐÁNH GIÁ CHỦ QUAN (BÌNH LUẬN & BÁC BỎ)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Bình luận (Nhận định):</strong> Bàn bạc, mở rộng vấn đề và bộc lộ thái độ (khen/chê, đúng/sai) của tác giả. <br><em>Dấu hiệu:</em> Chứa các từ bộc lộ góc nhìn cá nhân mạnh mẽ như “thật đáng buồn”, “cấp thiết phải”, “thật tuyệt vời”.</li>
            <li><strong style="color:#1d1d1f;">Bác bỏ (Phản biện):</strong> Chỉ ra sự sai lệch, phi lý của một quan điểm đối lập nhằm bảo vệ ý kiến của mình. <br><em>Dấu hiệu:</em> Thường đi kèm cấu trúc “nhiều người lầm tưởng rằng... nhưng thực ra”, “quan niệm đó hoàn toàn sai lầm”.</li>
        </ul>
        
        <!-- BLOCK BẪY THỰC CHIẾN -->
        <div style="background-color: #fff1f2; border-left: 4px solid #e11d48; padding: 14px; margin-top: 24px; border-radius: 0 8px 8px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <h3 style="font-size: 14px; font-weight: 700; color: #be123c; margin-top: 0; margin-bottom: 8px;">🚨 BẪY THỰC CHIẾN CẦN TRÁNH</h3>
            <ul style="font-size: 13px; color: #3f3f46; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li><strong>Nhầm lẫn Phân tích và Chứng minh:</strong> Phân tích dùng sức mạnh của <em>lý lẽ</em> (tư duy logic của người viết). Chứng minh dùng sức mạnh của <em>dẫn chứng</em> (những sự thật hiển nhiên bên ngoài).</li>
                <li><strong>Tìm thao tác chính:</strong> Một đoạn văn nghị luận luôn hòa trộn nhiều thao tác. Thao tác chính phải là thao tác <em>phục vụ trực tiếp cho câu chủ đề (câu chốt)</em> của đoạn văn đó.</li>
            </ul>
        </div>

        <p style="font-size: 14px; font-weight: 600; color: #1d1d1f; text-align: center; margin-top: 28px;">
            Bạn có muốn mình đưa ra một đoạn văn mẫu ngắn để bạn tự tay "quét" thử xem nó đang dùng thao tác lập luận chính nào không?
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


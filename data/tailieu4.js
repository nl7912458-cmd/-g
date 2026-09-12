// data/tailieu4.js
export const content = `
<div style="font-family: 'Inter', system-ui, sans-serif; color: #1d1d1f; max-width: 800px; margin: 0 auto; background: #ffffff; padding: 20px; position: relative; min-height: 1400px; z-index: 1;">
    
    <!-- WATERMARK CHUẨN XUẤT PDF (Lặp lại 2 lần cho trang dài) -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; text-align: center; z-index: -1; pointer-events: none; overflow: hidden;">
        <img src="./Anh/1.png" style="width: 350px; margin-top: 250px; opacity: 0.15; filter: grayscale(100%); display: inline-block;">
        <img src="./Anh/1.png" style="width: 350px; margin-top: 550px; opacity: 0.15; filter: grayscale(100%); display: inline-block;">
    </div>

    <!-- NỘI DUNG CHÍNH -->
    <div style="position: relative; z-index: 2;">
        
        <!-- KHUNG HEADER -->
        <div style="background-color: #00a8ff; color: white; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 24px; border-radius: 4px;">
            <span>TĐĐT_ĐGNL</span>
            <span>TỌA ĐỘ ĐỊNH TÍNH - LUYỆN THI ĐGNL</span>
        </div>

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: BÁCH KHOA TOÀN THƯ CÁC THỂ LOẠI VĂN HỌC</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Để nắm trọn vẹn "lưới" kiến thức văn học phục vụ bài thi ĐGNL, chúng ta sẽ đi sâu vào các Thể loại cụ thể. Đề thi thường rất hay hỏi xoáy vào sự khác biệt giữa các thể loại này để kiểm tra năng lực đọc hiểu đặc trưng của thí sinh.
        </p>

        <!-- PHẦN 1: DÂN GIAN -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 1: NHÓM VĂN HỌC DÂN GIAN (TRUYỀN MIỆNG)</h2>
        <p style="font-size: 13px; color: #4b5563; margin-bottom: 10px; font-style: italic;">Nhóm này thường bị khai thác ở các câu hỏi tìm điểm chung/điểm riêng về nội dung hoặc đặc trưng nhân vật.</p>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Truyện cổ tích:</strong> Tự sự dân gian, phản ánh đấu tranh thiện - ác, có yếu tố hoang đường kì ảo (Bụt, tiên). Nhân vật chia tuyến rõ rệt (mồ côi, con út, kẻ ác).</li>
            <li><strong style="color:#1d1d1f;">Truyện ngụ ngôn:</strong> Tự sự dân gian, mượn chuyện loài vật/đồ vật để nói bóng gió chuyện con người, đúc kết triết lý nhân sinh <em>(Thầy bói xem voi)</em>.</li>
            <li><strong style="color:#1d1d1f;">Truyện cười:</strong> Tự sự dân gian ngắn gọn, dùng mâu thuẫn tạo tiếng cười giải trí hoặc châm biếm thói hư tật xấu <em>(Tam đại con gà)</em>.</li>
            <li><strong style="color:#1d1d1f;">Ca dao:</strong> Thơ ca dân gian, chủ yếu sử dụng thể thơ Lục bát thuần Việt, lời lẽ mộc mạc, gần gũi với lao động.</li>
            <li><strong style="color:#1d1d1f;">Sử thi & Thần thoại:</strong> Kể về thần hoặc anh hùng vĩ đại mang sức mạnh siêu nhiên, đại diện khát vọng cộng đồng <em>(Đăm Săn)</em>.</li>
        </ul>

        <!-- PHẦN 2: TRUNG ĐẠI -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 2: NHÓM VĂN HỌC TRUNG ĐẠI (CHỮ HÁN/NÔM)</h2>
        <p style="font-size: 13px; color: #4b5563; margin-bottom: 10px; font-style: italic;">Đề thi thi thoảng trích đoạn văn cổ và yêu cầu xác định thể loại. Nhóm này có tính quy phạm rất cao.</p>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Chiếu:</strong> Do nhà vua dùng để ban bố mệnh lệnh cho quần thần và nhân dân <em>(Chiếu dời đô)</em>.</li>
            <li><strong style="color:#1d1d1f;">Hịch:</strong> Vua chúa, tướng lĩnh dùng khích lệ tinh thần, kêu gọi chiến đấu. Giọng điệu hùng hồn, đanh thép <em>(Hịch tướng sĩ)</em>.</li>
            <li><strong style="color:#1d1d1f;">Cáo:</strong> Trình bày chủ trương, hay tuyên bố kết quả một sự kiện trọng đại mang tính quốc gia <em>(Bình Ngô đại cáo)</em>.</li>
            <li><strong style="color:#1d1d1f;">Phú:</strong> Thể văn vần/biền ngẫu, chuyên dùng miêu tả phong cảnh, vịnh vật để gửi gắm suy nghĩ.</li>
            <li><strong style="color:#1d1d1f;">Văn tế:</strong> Đọc khi tế lễ người đã khuất. Bố cục 4 phần, giọng điệu vô cùng bi thương, thống thiết <em>(Văn tế nghĩa sĩ Cần Giuộc)</em>.</li>
            <li><strong style="color:#1d1d1f;">Ngâm khúc:</strong> Thơ dài (song thất lục bát), bộc lộ nỗi niềm sầu muộn, oán hờn, dằn vặt <em>(Chinh phụ ngâm)</em>.</li>
            <li><strong style="color:#1d1d1f;">Truyện truyền kỳ:</strong> Ghi chép chuyện kì lạ, hoang đường dân gian, mượn cái kì ảo phản ánh hiện thực <em>(Truyền kỳ mạn lục)</em>.</li>
        </ul>

        <!-- PHẦN 3: HIỆN ĐẠI TỰ SỰ & TRỮ TÌNH -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 3: CÁC THỂ LOẠI TỰ SỰ & TRỮ TÌNH HIỆN ĐẠI</h2>
        <div style="margin-bottom: 16px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">1. Phân nhánh Tự sự (Có cốt truyện, nhân vật)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 10px;">
                <li><strong style="color:#1d1d1f;">Tiểu thuyết:</strong> Dung lượng đồ sộ, nhân vật phức tạp, nhiều tuyến cốt truyện đan xen phản ánh bức tranh xã hội rộng lớn <em>(Số đỏ, Tắt đèn)</em>.</li>
                <li><strong style="color:#1d1d1f;">Truyện ngắn:</strong> Dung lượng nhỏ gọn, ít nhân vật. Tập trung khắc họa một "lát cắt", tình huống độc đáo làm thay đổi nhận thức <em>(Vợ nhặt)</em>.</li>
            </ul>
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">2. Phân nhánh Trữ tình (Tập trung bộc lộ cảm xúc)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li><strong style="color:#1d1d1f;">Thơ Đường luật:</strong> Quy định cực kỳ khắt khe về số câu, chữ, niêm, luật, vần, đối. Ngôn từ mang tính ước lệ cao <em>(Qua đèo Ngang)</em>.</li>
                <li><strong style="color:#1d1d1f;">Thơ tự do:</strong> Phá vỡ mọi quy tắc vần nhịp cổ điển, số chữ/câu linh hoạt chạy theo mạch cảm xúc tuôn trào <em>(Sóng)</em>.</li>
            </ul>
        </div>

        <!-- PHẦN 4: KỊCH & KÝ -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 4: CÁC THỂ LOẠI KỊCH, KÝ & PHI HƯ CẤU</h2>
        <div style="margin-bottom: 16px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">1. Phân nhánh Kịch (Xung đột hành động)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 10px;">
                <li><strong style="color:#1d1d1f;">Bi kịch:</strong> Nhân vật có khát vọng lớn nhưng rơi vào éo le, mâu thuẫn không thể giải quyết, kết cục bi thảm <em>(Vũ Như Tô)</em>.</li>
                <li><strong style="color:#1d1d1f;">Hài kịch:</strong> Dùng tiếng cười chế giễu, đả kích cái xấu, lố bịch <em>(Trưởng giả học làm sang)</em>.</li>
                <li><strong style="color:#1d1d1f;">Chính kịch:</strong> Phản ánh mâu thuẫn thực tế (không quá bi thảm, không châm biếm) <em>(Hồn Trương Ba, da hàng thịt)</em>.</li>
            </ul>
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">2. Phân nhánh Ký (Ghi chép người thật, việc thật)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 10px;">
                <li><strong style="color:#1d1d1f;">Tùy bút:</strong> Vô cùng phóng túng. Tự do trôi theo cảm xúc, liên tưởng tản mạn mang đậm "cái tôi" tài hoa <em>(Người lái đò Sông Đà)</em>.</li>
                <li><strong style="color:#1d1d1f;">Bút ký:</strong> Ghi chép sự thật nhưng thiên về lập luận, đánh giá, chiêm nghiệm trí tuệ, khách quan và chặt chẽ hơn <em>(Ai đã đặt tên cho dòng sông?)</em>.</li>
                <li><strong style="color:#1d1d1f;">Phóng sự:</strong> Tính báo chí cao, bóc trần sự thật/vấn đề nóng hổi.</li>
                <li><strong style="color:#1d1d1f;">Hồi ký / Nhật ký:</strong> Lời kể quá khứ của chính tác giả hoặc ghi chép sự việc/cảm xúc diễn ra hàng ngày mang tính riêng tư cao.</li>
            </ul>
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">3. Văn bản Phi hư cấu (Nghị luận & Thông tin)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li><strong style="color:#1d1d1f;">Nghị luận:</strong> Trình bày luận điểm, lý lẽ, dẫn chứng logic để thuyết phục người đọc tin vào một quan điểm tư tưởng.</li>
                <li><strong style="color:#1d1d1f;">Thông tin:</strong> Cung cấp tri thức khoa học/đời sống. Hoàn toàn vắng bóng cảm xúc và các biện pháp tu từ.</li>
            </ul>
        </div>
        
        <!-- BLOCK NOTE ĐẶC BIỆT -->
        <div style="background-color: #f0f9ff; border-left: 4px solid #00a8ff; padding: 12px; margin-top: 24px; border-radius: 0 8px 8px 0;">
            <p style="font-size: 13px; color: #0369a1; margin: 0; font-style: italic;">
                <strong>💡 Lưu ý thực chiến:</strong> Trong phòng thi, hãy nhớ kỹ ranh giới giữa <strong>Tùy bút</strong> (phóng túng, cảm xúc) và <strong>Bút ký</strong> (trí tuệ, lập luận khách quan). Đồng thời, lưu ý mục đích sử dụng của các thể văn cổ như <strong>Chiếu</strong> (ban lệnh), <strong>Hịch</strong> (khích lệ) và <strong>Cáo</strong> (tuyên bố).
            </p>
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


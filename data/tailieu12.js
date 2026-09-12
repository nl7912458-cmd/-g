// data/tailieu12.js
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

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: "MÁY QUÉT" 4 LỖI SAI KINH ĐIỂN TRONG CÂU</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Dạng bài "Tìm lỗi sai" của HSA cực kỳ nguy hiểm vì khi đọc lướt, não bộ chúng ta có xu hướng tự động "điền vào chỗ trống" hoặc tự sửa lỗi cho câu nghe có vẻ xuôi tai. Để trị dạng này, bạn tuyệt đối không đọc bằng "cảm giác", mà phải đưa câu qua 4 lớp quét (scan) sau đây:
        </p>

        <!-- LỚP QUÉT 1 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 8px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">1. QUÉT CẤU TRÚC: LỖI THIẾU CHỦ NGỮ / VỊ NGỮ</h2>
        <p style="font-size: 13px; color: #374151; margin-top: 0; margin-bottom: 10px;">Đây là lỗi xuất hiện với tần suất dày đặc nhất. Người ra đề thường dùng các cụm từ rất dài để làm bạn quên mất câu chưa có nòng cốt.</p>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Bẫy thiếu Chủ ngữ (Bẫy Quan hệ từ):</strong> Đứng đầu câu là các từ <em>Qua, Bằng, Nhờ, Với, Trong, Từ</em>. Khi có các từ này, toàn bộ cụm đằng sau chỉ là Trạng ngữ. Nếu cụm tiếp theo bắt đầu luôn bằng Động từ &rarr; Câu vô chủ.
                <ul style="margin-top: 4px; margin-bottom: 4px; padding-left: 20px;">
                    <li><strong>Câu sai:</strong> <em>Qua tác phẩm "Vợ nhặt"</em> đã cho ta thấy số phận bi thảm của người nông dân. (Ai cho ta thấy? Không có chủ ngữ).</li>
                    <li><strong>Cách sửa:</strong> Bỏ chữ "Qua" <em>(Tác phẩm Vợ nhặt đã cho ta thấy...)</em> hoặc thêm chủ ngữ <em>(Qua tác phẩm..., tác giả Kim Lân đã cho ta thấy...)</em>.</li>
                </ul>
            </li>
            <li><strong style="color:#1d1d1f;">Bẫy thiếu Vị ngữ (Bẫy Định ngữ):</strong> Cả một câu dài ngoằng chỉ có Chủ ngữ và phần giải thích cho Chủ ngữ, chưa hề có hành động/trạng thái.
                <ul style="margin-top: 4px; margin-bottom: 4px; padding-left: 20px;">
                    <li><strong>Câu sai:</strong> Hình ảnh người mẹ già còm cõi gánh nước trong những buổi chiều đông lạnh giá. (Người mẹ già làm sao? Câu chưa có Vị ngữ).</li>
                </ul>
            </li>
        </ul>

        <!-- LỚP QUÉT 2 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 8px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">2. QUÉT TỪ VỰNG: LỖI THỪA TỪ / LẶP NGHĨA (BỆNH RƯỜM RÀ)</h2>
        <p style="font-size: 13px; color: #374151; margin-top: 0; margin-bottom: 10px;">Lỗi này rất tinh vi vì đọc lên nghe rất "văn vẻ" và quen miệng, nhưng về mặt từ vựng học lại bị lặp nghĩa (chữ sau đã bao hàm nghĩa của chữ trước).</p>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Các tổ hợp thừa từ kinh điển cần nhớ ngay:</strong>
                <ul style="margin-top: 4px; margin-bottom: 8px; padding-left: 20px;">
                    <li><em>Tối ưu nhất</em> ("Tối" vốn dĩ đã là "nhất").</li>
                    <li><em>Đề cập đến</em> ("Cập" đã mang nghĩa là "đến").</li>
                    <li><em>Quốc kỳ của nước ta</em> ("Quốc" đã là nước).</li>
                    <li><em>Cảnh quan môi trường xung quanh</em> ("Quan" đã mang nghĩa là nhìn bao quát xung quanh).</li>
                    <li><em>Bao gồm có / Chứng kiến tận mắt.</em></li>
                </ul>
            </li>
            <li><strong style="color:#1d1d1f;">Câu sai:</strong> Phương pháp này mang lại hiệu quả tối ưu nhất. &rarr; Bỏ chữ "nhất".</li>
        </ul>

        <!-- LỚP QUÉT 3 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 8px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">3. QUÉT SẮC THÁI: LỖI SAI TỪ HÁN VIỆT / GẦN ÂM</h2>
        <p style="font-size: 13px; color: #374151; margin-top: 0; margin-bottom: 10px;">Đề thi sẽ đánh tráo một từ bằng một từ khác có phát âm hoặc mặt chữ na ná nhau, nhưng sai hoàn toàn về bản chất hoặc hoàn cảnh sử dụng.</p>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Các cặp từ hay bị đánh tráo:</strong>
                <ul style="margin-top: 4px; margin-bottom: 4px; padding-left: 20px;">
                    <li><em>Điểm yếu</em> (nhược điểm) vs <em>Yếu điểm</em> (điểm quan trọng nhất). &rarr; <strong>Sai:</strong> Tiếng Anh là yếu điểm của tôi.</li>
                    <li><em>Bàng quan</em> (thờ ơ, đứng ngoài cuộc) vs <em>Bàng quang</em> (bọng đái). &rarr; <strong>Sai:</strong> Hắn ta có thái độ bàng quang trước nỗi đau của người khác.</li>
                    <li><em>Tự phụ</em> (kiêu ngạo) vs <em>Tự trọng</em> (giữ gìn phẩm giá).</li>
                    <li><em>Đề bạt</em> (cấp dưới tiến cử cấp trên) vs <em>Bổ nhiệm</em> (cấp trên giao chức cho cấp dưới).</li>
                </ul>
            </li>
        </ul>

        <!-- LỚP QUÉT 4 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 8px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">4. QUÉT LOGIC: LỖI SAI QUAN HỆ TỪ / MÂU THUẪN Ý</h2>
        <p style="font-size: 13px; color: #374151; margin-top: 0; margin-bottom: 10px;">Lỗi này nằm ở việc sử dụng sai các cặp từ nối, hoặc các vế trong câu "đá" nhau chan chát về mặt số lượng, thời gian, nhân quả.</p>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Dấu hiệu:</strong> Chú ý các cặp từ nối <em>Vì... nên, Tuy... nhưng, Mặc dù... nhưng, Không những... mà còn</em>.</li>
            <li><strong style="color:#1d1d1f;">Câu sai quan hệ từ:</strong> Mặc dù hoàn cảnh gia đình rất khó khăn <strong>nên</strong> Lan vẫn vươn lên học giỏi. <br>
            <em>(Đã dùng "Mặc dù" mang tính tương phản thì phải đi với "nhưng", không thể đi với "nên" mang tính nhân quả).</em></li>
            <li><strong style="color:#1d1d1f;">Câu sai logic tập hợp:</strong> Trong thanh niên nói chung và trong sinh viên nói riêng. <br>
            <em>(Sinh viên nằm trong tập hợp thanh niên, không thể đặt ngang hàng bằng từ "và").</em></li>
        </ul>
        
        <p style="font-size: 14px; font-weight: 600; color: #1d1d1f; text-align: center; margin-top: 28px; background-color: #f0fdf4; padding: 12px; border-radius: 8px; border: 1px solid #bbf7d0;">
            Với 4 "máy quét" này, bạn đã đủ sức lôi cổ mọi lỗi sai ra ánh sáng!
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


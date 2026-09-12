// data/tailieu7.js
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

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: 5 MÔ HÌNH CẤU TRÚC ĐOẠN VĂN CỐT LÕI</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Trong bài thi ĐGNL, việc nhận diện đúng mô hình đoạn văn chính là chìa khóa để bạn áp dụng kỹ năng "Chụp X-Quang" (đã bàn ở phần tìm Nội dung chính). Biết đoạn văn được viết theo mô hình nào, bạn sẽ biết chính xác "câu chủ đề" đang nằm lẩn trốn ở đâu mà không cần đọc hết cả đoạn. Dưới đây là 5 mô hình trình bày đoạn văn phổ biến nhất cùng dấu hiệu nhận diện:
        </p>

        <!-- MÔ HÌNH 1 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">1. MÔ HÌNH DIỄN DỊCH (Đi từ Khái quát &rarr; Cụ thể)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vị trí câu chủ đề:</strong> Nằm ở đầu đoạn (thường là câu số 1).</li>
            <li><strong style="color:#1d1d1f;">Đặc điểm:</strong> Tác giả ném ngay luận điểm chính ra đầu tiên. Các câu phía sau chỉ làm nhiệm vụ giải thích, chứng minh hoặc phân tích cho câu mở đầu.</li>
            <li><strong style="color:#1d1d1f;">Mô hình trực quan:</strong> [Câu Chủ Đề] &rarr; Câu chi tiết 1 &rarr; Câu chi tiết 2 &rarr; Câu chi tiết 3.</li>
        </ul>

        <!-- MÔ HÌNH 2 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">2. MÔ HÌNH QUY NẠP (Đi từ Cụ thể &rarr; Khái quát)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vị trí câu chủ đề:</strong> Nằm ở cuối đoạn.</li>
            <li><strong style="color:#1d1d1f;">Đặc điểm:</strong> Tác giả đưa ra hàng loạt dẫn chứng, lập luận, phân tích trước. Đến câu cuối cùng mới rút ra kết luận, chốt lại vấn đề.</li>
            <li><strong style="color:#1d1d1f;">Mô hình trực quan:</strong> Câu chi tiết 1 &rarr; Câu chi tiết 2 &rarr; Câu chi tiết 3 &rarr; [Câu Chủ Đề].</li>
            <li><strong style="color:#1d1d1f;">Dấu hiệu bứt tốc:</strong> Câu cuối thường bắt đầu bằng các từ chốt hạ như: <em>Tóm lại, Nhìn chung, Tựu trung lại, Do đó, Rõ ràng là...</em></li>
        </ul>

        <!-- MÔ HÌNH 3 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">3. MÔ HÌNH TỔNG - PHÂN - HỢP (Khái quát &rarr; Cụ thể &rarr; Khái quát nâng cao)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vị trí câu chủ đề:</strong> Nằm ở đầu đoạn VÀ cuối đoạn.</li>
            <li><strong style="color:#1d1d1f;">Đặc điểm:</strong> Mở đầu bằng một câu nêu ý khái quát. Tiếp theo phân tích chi tiết. Cuối cùng chốt lại bằng một câu khẳng định lại vấn đề nhưng ở mức độ sâu sắc hơn, mở rộng hơn (không lặp lại y nguyên câu đầu).</li>
            <li><strong style="color:#1d1d1f;">Mô hình trực quan:</strong> [Câu Chủ Đề 1] &rarr; Các câu chi tiết &rarr; [Câu Chủ Đề 2].</li>
        </ul>

        <!-- MÔ HÌNH 4 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">4. MÔ HÌNH SONG HÀNH (Ngang hàng, độc lập)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vị trí câu chủ đề:</strong> KHÔNG CÓ câu chủ đề.</li>
            <li><strong style="color:#1d1d1f;">Đặc điểm:</strong> Các câu trong đoạn có vị trí ngữ pháp và ý nghĩa bình đẳng như nhau. Mỗi câu nêu lên một khía cạnh của vấn đề. Muốn tìm nội dung chính, bạn bắt buộc phải đọc lướt tất cả các câu và tự rút ra điểm chung.</li>
            <li><strong style="color:#1d1d1f;">Mô hình trực quan:</strong> Ý A // Ý B // Ý C (Cùng hướng về một chủ đề ẩn).</li>
            <li><strong style="color:#1d1d1f;">Dấu hiệu:</strong> Thường hay dùng các cấu trúc lặp lại hoặc từ liệt kê <em>(Một là... Hai là... / Không những... mà còn...)</em>.</li>
        </ul>

        <!-- MÔ HÌNH 5 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">5. MÔ HÌNH MÓC XÍCH (Nối tiếp nhau)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Vị trí câu chủ đề:</strong> Thường khái quát ở ý chung toàn đoạn, ý các câu đan cài vào nhau.</li>
            <li><strong style="color:#1d1d1f;">Đặc điểm:</strong> Ý cuối của câu phía trước trở thành ý khởi đầu của câu phía sau. Cứ thế nối tiếp nhau như một sợi dây chuyền để phát triển logic của lập luận.</li>
            <li><strong style="color:#1d1d1f;">Mô hình trực quan:</strong> Câu 1 kết thúc bằng (A) &rarr; Câu 2 bắt đầu bằng (A) và kết thúc bằng (B) &rarr; Câu 3 bắt đầu bằng (B)...</li>
        </ul>
        
        <!-- BLOCK BẪY THỰC CHIẾN -->
        <div style="background-color: #fff1f2; border-left: 4px solid #e11d48; padding: 14px; margin-top: 24px; border-radius: 0 8px 8px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <h3 style="font-size: 14px; font-weight: 700; color: #be123c; margin-top: 0; margin-bottom: 8px;">🚨 BẪY THỰC CHIẾN CẦN TRÁNH</h3>
            <ul style="font-size: 13px; color: #3f3f46; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>Đề thi rất thích cho một đoạn văn <strong>Tổng - Phân - Hợp</strong> nhưng lại giấu nhẹm câu cuối đi, khiến bạn dễ nhầm thành đoạn <strong>Diễn dịch</strong>. Hãy cẩn thận kiểm tra thật kỹ đoạn kết.</li>
            </ul>
        </div>

        <p style="font-size: 14px; font-weight: 600; color: #1d1d1f; text-align: center; margin-top: 28px;">
            Đến đây, bạn đã nạp đủ bộ công cụ từ vựng, thể loại, phương thức, lập luận và cấu trúc đoạn. Bạn có muốn tổng duyệt lại toàn bộ các "máy quét" này bằng một đoạn văn bản trích xuất từ đề thi ĐGNL thật không?
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


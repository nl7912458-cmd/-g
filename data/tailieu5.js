// data/tailieu5.js
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

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: MÁY QUÉT 6 PHƯƠNG THỨC BIỂU ĐẠT</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Chuyên đề Phương thức biểu đạt là câu hỏi <strong>bắt buộc phải lấy trọn điểm</strong>. Trong đề thi HSA, người ra đề thường hỏi "Phương thức biểu đạt chính", nghĩa là đoạn văn có thể trộn lẫn nhiều phương thức, nhưng bạn phải tìm ra "bộ khung" cốt lõi nhất. Dưới đây là "Máy quét" giúp bạn nhận diện nhanh chóng mà không cần đọc từng chữ.
        </p>

        <!-- NHÓM 1 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">1. NHÓM BÁM SÁT HIỆN THỰC (TỰ SỰ & MIÊU TẢ)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Tự sự (Kể):</strong> Quét bề mặt văn bản tìm nhân vật và hệ thống động từ chỉ hành động nối tiếp nhau. Trả lời câu hỏi: <em>Chuyện gì đã xảy ra trước/sau?</em></li>
            <li><strong style="color:#1d1d1f;">Miêu tả (Vẽ):</strong> Quét bề mặt tìm mật độ dày đặc của các tính từ, từ láy, biện pháp tu từ (so sánh, nhân hóa). Trả lời câu hỏi: <em>Khung cảnh/Con người đó trông như thế nào?</em></li>
        </ul>

        <!-- NHÓM 2 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">2. NHÓM TƯ TƯỞNG & TÂM LÝ (NGHỊ LUẬN & BIỂU CẢM)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 10px;">
            <li><strong style="color:#1d1d1f;">Nghị luận (Thuyết phục):</strong> Quét tìm các từ nối logic (do vậy, tuy nhiên, tóm lại) và các câu mang tính đánh giá chủ quan (tốt/xấu, đúng/sai). Mục đích cốt lõi là bảo vệ một quan điểm.</li>
            <li><strong style="color:#1d1d1f;">Biểu cảm (Cảm xúc):</strong> Quét tìm các từ cảm thán (ôi, chao, than ôi) và các từ chỉ trạng thái tâm lý.</li>
        </ul>
        <div style="background-color: #f9fafb; border-left: 3px solid #9ca3af; padding: 10px; margin: 10px 0 16px 20px; border-radius: 0 4px 4px 0;">
            <p style="font-size: 13px; color: #4b5563; margin: 0; font-style: italic;">
                <strong>⚡ Bỏ túi:</strong> Khoảng 90% các đoạn trích Thơ (không phải thơ tự sự như sử thi) sẽ có phương thức biểu đạt chính là Biểu cảm.
            </p>
        </div>

        <!-- NHÓM 3 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 24px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">3. NHÓM TRI THỨC KHÁCH QUAN (THUYẾT MINH & HÀNH CHÍNH)</h2>
        <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.6; margin-bottom: 16px;">
            <li><strong style="color:#1d1d1f;">Thuyết minh (Giới thiệu):</strong> Quét tìm các số liệu chính xác, năm tháng, thuật ngữ chuyên ngành hoặc cấu trúc định nghĩa ("A là B"). Thông tin cung cấp là chân lý khách quan, không có cảm xúc cá nhân.</li>
            <li><strong style="color:#1d1d1f;">Hành chính - Công vụ:</strong> Quét tìm khuôn mẫu quy định của nhà nước (Quốc hiệu, tiêu ngữ, điều luật, chữ ký). Dạng này hầu như không xuất hiện trong các bài đọc hiểu HSA.</li>
        </ul>
        
        <!-- BLOCK BẪY THỰC CHIẾN -->
        <div style="background-color: #fff1f2; border-left: 4px solid #e11d48; padding: 14px; margin-top: 24px; border-radius: 0 8px 8px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <h3 style="font-size: 14px; font-weight: 700; color: #be123c; margin-top: 0; margin-bottom: 8px;">🚨 BẪY THỰC CHIẾN: THUYẾT MINH vs. NGHỊ LUẬN</h3>
            <p style="font-size: 13px; color: #3f3f46; margin-bottom: 8px;">
                Đây là cái bẫy "chí mạng" nhất vì cả hai phương thức đều trình bày thông tin, lập luận rất dài. Khi phân vân, hãy dùng <strong>mẹo "Thử phản đối"</strong>:
            </p>
            <ul style="font-size: 13px; color: #3f3f46; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>Nếu bạn đọc đoạn văn và thấy thông tin đó <strong>không thể cãi lại</strong> (Ví dụ: Cấu tạo của ADN, nguồn gốc của Vịnh Hạ Long) &rarr; Đó là <strong>Thuyết minh</strong>.</li>
                <li>Nếu bạn đọc xong và thấy mình <strong>có quyền đồng tình hoặc phản đối</strong> (Ví dụ: Sống chậm lại là cách tốt nhất để hạnh phúc) &rarr; Đó chắc chắn là <strong>Nghị luận</strong>.</li>
            </ul>
        </div>

        <p style="font-size: 14px; font-weight: 600; color: #1d1d1f; text-align: center; margin-top: 28px;">
            Bạn đã sẵn sàng đưa bộ nhận diện này vào thử sức với một đoạn trích ngắn mang tính chất "gài bẫy" cao chưa?
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


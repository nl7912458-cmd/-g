// data/tailieu2.js
export const content = `
<div style="font-family: 'Inter', system-ui, sans-serif; color: #1d1d1f; max-width: 800px; margin: 0 auto; background: #ffffff; padding: 20px; position: relative; min-height: 800px; z-index: 1;">
    
    <!-- WATERMARK CHUẨN XUẤT PDF -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; text-align: center; z-index: -1; pointer-events: none;">
        <img src="./Anh/1.png" style="width: 350px; margin-top: 250px; opacity: 0.3; filter: grayscale(100%); display: inline-block;">
    </div>

    <!-- NỘI DUNG CHÍNH -->
    <div style="position: relative; z-index: 2;">
        
        <!-- KHUNG HEADER -->
        <div style="background-color: #00a8ff; color: white; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 24px; border-radius: 4px;">
            <span>TĐĐT_ĐGNL</span>
            <span>TỌA ĐỘ ĐỊNH TÍNH - LUYỆN THI ĐGNL</span>
        </div>

        <h1 style="font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #1d1d1f; text-align: center; text-transform: uppercase;">TÀI LIỆU CHUYÊN ĐỀ: PHƯƠNG PHÁP GIẢI DẠNG BÀI TÌM TỪ, THÀNH NGỮ, TỤC NGỮ KHÁC LOẠI</h1>
        <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
            Để giải quyết dạng câu hỏi tìm yếu tố khác loại trong bài thi Đánh giá năng lực, học sinh không nên chỉ dựa vào cảm tính để dịch nghĩa. Thay vào đó, cần áp dụng các tiêu chí phân loại của ngôn ngữ học. Dưới đây là hệ thống các tiêu chí cụ thể để xử lý từng dạng bài.
        </p>

        <!-- TIÊU ĐỀ PHỤ 1 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 20px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 1: DẠNG BÀI TÌM TỪ KHÁC LOẠI</h2>
        <p style="font-size: 13px; color: #4b5563; margin-bottom: 10px; font-style: italic;">Khi gặp 4 đáp án là các từ đơn hoặc từ ghép, học sinh cần lần lượt xét chúng qua 4 tiêu chí sau để tìm ra sự khác biệt.</p>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">1. Tiêu chí Từ loại (Danh từ - Động từ - Tính từ)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Phương pháp:</strong> Xét xem các từ dùng để gọi tên sự vật (Danh từ), chỉ hành động (Động từ) hay chỉ tính chất, trạng thái (Tính từ).</li>
                <li><strong>Ví dụ:</strong> A. Vui vẻ (Tính từ) | B. Buồn bã (Tính từ) | C. Hạnh phúc (Tính từ) | D. Khóc lóc (Động từ)</li>
                <li><strong>Kết luận:</strong> Chọn D vì là động từ miêu tả hành động, 3 đáp án còn lại là tính từ chỉ trạng thái.</li>
            </ul>
        </div>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">2. Tiêu chí Cấu tạo từ (Từ ghép - Từ láy)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Phương pháp:</strong> Phân tích xem các âm tiết trong từ đó có nghĩa độc lập khi tách rời (Từ ghép), hay chỉ có sự hòa phối về âm thanh và có âm tiết vô nghĩa (Từ láy).</li>
                <li><strong>Ví dụ:</strong> A. Trắng trẻo (Từ láy) | B. Tròn trịa (Từ láy) | C. Tươi tốt (Từ ghép - cả hai chữ đều có nghĩa) | D. Nhỏ nhắn (Từ láy)</li>
                <li><strong>Kết luận:</strong> Chọn C vì là từ ghép đẳng lập, 3 đáp án còn lại là từ láy.</li>
            </ul>
        </div>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">3. Tiêu chí Sắc thái nghĩa (Tích cực - Tiêu cực)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Phương pháp:</strong> Đánh giá thái độ mà từ đó mang lại là ca ngợi, đồng tình (tích cực) hay chê bai, phê phán (tiêu cực).</li>
                <li><strong>Ví dụ:</strong> A. Khôn ngoan (Tích cực) | B. Thông minh (Tích cực) | C. Xảo quyệt (Tiêu cực) | D. Lanh lợi (Tích cực)</li>
                <li><strong>Kết luận:</strong> Chọn C vì mang sắc thái chê bai, 3 đáp án còn lại mang sắc thái khen ngợi.</li>
            </ul>
        </div>

        <div style="margin-bottom: 16px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">4. Tiêu chí Phạm vi nghĩa (Nghĩa khái quát - Nghĩa cụ thể)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Phương pháp:</strong> Xác định xem có từ nào mang ý nghĩa bao trùm, dùng để gọi tên cả một nhóm sự vật chứa 3 đáp án còn lại hay không.</li>
                <li><strong>Ví dụ:</strong> A. Áo sơ mi (Cụ thể) | B. Quần đùi (Cụ thể) | C. Trang phục (Khái quát) | D. Áo khoác (Cụ thể)</li>
                <li><strong>Kết luận:</strong> Chọn C vì đây là từ chỉ phạm vi bao quát.</li>
            </ul>
        </div>

        <!-- TIÊU ĐỀ PHỤ 2 -->
        <h2 style="font-size: 16px; font-weight: 700; margin-top: 20px; margin-bottom: 10px; color: #00a8ff; border-bottom: 2px solid #e0f2fe; padding-bottom: 4px;">PHẦN 2: DẠNG BÀI TÌM THÀNH NGỮ, TỤC NGỮ KHÁC LOẠI</h2>
        <p style="font-size: 13px; color: #4b5563; margin-bottom: 10px; font-style: italic;">Đối với dạng bài này, các đáp án thường có nội dung hoặc hình ảnh tương đồng nhau (cùng chỉ con vật, cùng chỉ một nét tính cách). Để phân loại, học sinh cần áp dụng 3 bước sau:</p>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">1. Phân biệt bản chất (Thành ngữ vs. Tục ngữ)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Thành ngữ:</strong> Là một cụm từ cố định, dùng để miêu tả hình dáng, trạng thái, tính cách (thường chưa cấu tạo thành một câu hoàn chỉnh về mặt ngữ pháp).</li>
                <li><strong>Tục ngữ:</strong> Là một câu nói hoàn chỉnh, đúc kết kinh nghiệm sống, hiện tượng tự nhiên hoặc răn dạy đạo lý.</li>
                <li><strong>Ví dụ:</strong> A. Chó chê mèo lắm lông (Tục ngữ) | B. Lươn ngắn lại chê chạch dài (Tục ngữ) | C. Chuột chù chê khỉ rằng hôi (Tục ngữ) | D. Mèo mả gà đồng (Thành ngữ)</li>
                <li><strong>Kết luận:</strong> Chọn D vì là thành ngữ, 3 đáp án còn lại là tục ngữ dù cả 4 đều xuất hiện hình ảnh con vật.</li>
            </ul>
        </div>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">2. Xét tiêu chí Nội dung biểu đạt (Ca ngợi vs. Phê phán)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Phương pháp:</strong> Xem xét thông điệp cốt lõi của câu là hướng tới việc khuyên răn những phẩm chất tốt đẹp hay chê trách những thói hư tật xấu.</li>
                <li><strong>Ví dụ:</strong> A. Vắt chanh bỏ vỏ (Phê phán) | B. Ăn cháo đá bát (Phê phán) | C. Qua cầu rút ván (Phê phán) | D. Uống nước nhớ nguồn (Ca ngợi)</li>
                <li><strong>Kết luận:</strong> Chọn D vì mang nội dung ca ngợi, trái ngược với 3 đáp án còn lại.</li>
            </ul>
        </div>

        <div style="margin-bottom: 14px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #1d1d1f; margin-bottom: 4px;">3. Xét tiêu chí Hình thức tu từ (Phép tiểu đối / Từ trái nghĩa)</h3>
            <ul style="font-size: 13px; color: #374151; margin: 0; padding-left: 20px; line-height: 1.5;">
                <li><strong>Phương pháp:</strong> Nếu 4 đáp án đều giống nhau về bản chất và nội dung, hãy quan sát cấu trúc bề mặt để tìm các cặp từ trái nghĩa (Lên - xuống, Ra - vào, Sáng - tối).</li>
                <li><strong>Ví dụ:</strong> A. Lên thác xuống ghềnh (Có đối lập) | B. Vào sinh ra tử (Có đối lập) | C. Trống đánh xuôi kèn thổi ngược (Có đối lập) | D. Chân ướt chân ráo (Không có đối lập)</li>
                <li><strong>Kết luận:</strong> Chọn D vì không sử dụng thủ pháp đối lập trong cấu tạo câu.</li>
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


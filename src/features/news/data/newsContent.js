// Event Photos for News & Gallery
import img1 from '../../../assets/0736c690-186d-4c7f-8d4d-66e7ac0d77a9.jpg'
import img2 from '../../../assets/0959a3ca-785c-438e-8d96-be9ae26ad715.jpg'
import img3 from '../../../assets/1631aa5b-7a6f-4e9a-b40e-59e3867b7c51.jpg'
import img4 from '../../../assets/1bed1d2d-e217-4c49-bdee-1ff0c58964f6.jpg'
import img5 from '../../../assets/22702251-2ab9-4b07-b91e-02192f2c06fa.jpg'
import img6 from '../../../assets/29378fcd-c00a-44a4-ac19-04dfb8eddc07.jpg'
import img7 from '../../../assets/2f121252-7df7-40f7-a3af-660a57ec689f.jpg'
import img8 from '../../../assets/5dc974fa-a66d-4f84-a28f-572d181b693b.jpg'
import img9 from '../../../assets/629c7528-096a-42f4-86b7-50811384d5f0.jpg'
import img10 from '../../../assets/64a5fde2-5f60-4a73-9cbb-4ef6bd50c8fc.jpg'
import img11 from '../../../assets/6649bc97-ef9b-4f0e-84c2-beef539128d7.jpg'
import img12 from '../../../assets/744cfeae-bbd4-4add-bda1-e1227b6dcea3.jpg'
import img13 from '../../../assets/83c5e62c-4de8-4b50-9279-46c700bc85b8.jpg'
import img14 from '../../../assets/8ba88395-a2b9-47a9-8bef-c663b06bafeb.jpg'
import img15 from '../../../assets/903b1eb2-a9d1-4370-a187-9600ee187529.jpg'
import img16 from '../../../assets/96d953fe-3878-4204-ad7d-f3ee07a0b0c8.jpg'
import img17 from '../../../assets/9ad4e38e-c076-4ec6-ac4c-dc48a1eadb4e.jpg'
import img18 from '../../../assets/a74a5ab8-cddb-4600-8177-cee1dd5d9cd4.jpg'
import img19 from '../../../assets/b0f74571-410e-4238-b90f-0a1cf423b4fc.jpg'
import img20 from '../../../assets/d0e4083c-a202-456e-b712-7b2e84c19072.jpg'
import img21 from '../../../assets/d2b27800-3041-4de5-8d60-007ac239d128.jpg'
import img22 from '../../../assets/d632589a-f3f7-4dfe-a014-a22714e68b9c.jpg'
import img23 from '../../../assets/d8902cbf-1b09-423a-853d-cc4e3b6d566f.jpg'
import img24 from '../../../assets/e02b895f-9428-4905-8b0d-be261b5c5f37.jpg'
import img25 from '../../../assets/e5d08bbb-53dd-4b1a-bd76-a924f9cb979b.jpg'

export const newsCategories = [
  { id: 'all', label: 'TẤT CẢ' },
  { id: 'kinh-nghiem', label: 'KINH NGHIỆM' },
  { id: 'am-thanh-anh-sang', label: 'ÂM THANH ÁNH SÁNG' },
  { id: 'du-an', label: 'DỰ ÁN' },
  { id: 'kien-thuc', label: 'KIẾN THỨC SỰ KIỆN' },
]

export const newsArticles = [
  {
    id: 1,
    slug: 'kinh-nghiem-lua-chon-he-thong-am-thanh-cho-su-kien',
    title: 'Kinh nghiệm lựa chọn hệ thống âm thanh cho sự kiện',
    category: 'ÂM THANH ÁNH SÁNG',
    categoryId: 'am-thanh-anh-sang',
    date: '20/08/2026',
    author: 'Nam Thành Audio Master',
    image: img2,
    readTime: '5 phút đọc',
    summary:
      'Những yếu tố cốt lõi cần quan tâm khi lựa chọn công suất loa line-array, mixer digital và micro không dây phù hợp với từng quy mô chương trình trong nhà và ngoài trời.',
    content: `
      Khi tổ chức một sự kiện, âm thanh là yếu tố tiên quyết quyết định cảm xúc và sự thành công của chương trình. Một hệ thống âm thanh chất lượng cao cần đảm bảo độ phủ âm đồng đều, rõ lời và không bị hú rít.

      ### 1. Xác định quy mô và không gian sự kiện
      - **Sự kiện dưới 200 khách (Hội thảo, khai trương nhỏ):** Hệ thống loa cột hoặc loa full 2-way công suất vừa phải, kết hợp 1-2 sub để giọng nói ấm và rõ.
      - **Sự kiện từ 300 - 1000 khách (Gala Dinner, tiệc tất niên, đám cưới):** Bắt buộc dùng dàn loa Line Array chuyên dụng (như MAXO Audio) để âm thanh lan tỏa đều khắp không gian mà không bị chói tai ở cự ly gần.
      - **Sự kiện ngoài trời:** Cần tính toán độ tiêu âm tự nhiên và chuẩn bị công suất dự phòng lớn hơn 30-50%.

      ### 2. Lựa chọn Mixer và Micro không dây chuẩn
      - Sử dụng Digital Mixer để kỹ thuật viên cân chỉnh EQ chi tiết từng dải tần số, tự động cắt dải hú rít (anti-feedback) nhanh chóng.
      - Micro không dây cao cấp chính hãng (Shure, Sennheiser) đảm bảo sóng khỏe, không bị trùng tần số hoặc mất tiếng khi MC/ca sĩ di chuyển trong không gian rộng.

      ### 3. Vị trí bố trí loa và tháp Delay
      Đối với các khán phòng có chiều sâu trên 30 mét hoặc bãi cỏ ngoài trời dài, việc bố trí thêm các cụm loa Delay đồng pha giúp khách ngồi xa vẫn nghe được âm thanh tròn vành, rõ chữ mà không bị trễ tiếng.
    `,
    gallery: [img2, img9, img12, img21],
  },
  {
    id: 2,
    slug: '5-yeu-to-quan-trong-khi-thiet-ke-anh-sang-san-khau',
    title: '5 yếu tố quan trọng khi thiết kế ánh sáng sân khấu',
    category: 'ÂM THANH ÁNH SÁNG',
    categoryId: 'am-thanh-anh-sang',
    date: '18/08/2026',
    author: 'Nam Thành Lighting Crew',
    image: img1,
    readTime: '4 phút đọc',
    summary:
      'Cách bố trí ánh sáng Beam, Par LED, Profile và Follow giúp sân khấu nổi bật, tôn vinh nhân vật chính và tạo hiệu ứng cảm xúc bùng nổ cho khách tham dự.',
    content: `
      Ánh sáng sân khấu không đơn thuần là để chiếu sáng mà là nghệ thuật dẫn dắt thị giác và cảm xúc của khán giả trong từng phân đoạn chương trình.

      ### 1. Ánh sáng mặt (Key Light) & Ánh sáng nền (Back Light)
      Đảm bảo khuôn mặt của MC, diễn giả và ca sĩ luôn sáng rõ, tươi tắn khi chụp ảnh và quay phim 4K, không bị bóng đen hay tối vùng trán/mắt.

      ### 2. Hiệu ứng Beam chuyển động & Laser
      Tạo ra các luồng sáng mạnh mẽ quét không gian, tăng sự hoành tráng trong các khoảnh khắc mở màn (Opening), vinh danh hoặc biểu diễn cao trào.

      ### 3. Đèn Par LED nhuộm màu không gian (Wash Light)
      Tạo tone màu chủ đạo theo nhận diện thương hiệu của doanh nghiệp (đỏ đô sang trọng, vàng hoàng gia, xanh dương công nghệ hoặc tím lãng mạn).

      ### 4. Đèn Follow Spot tập trung tiêu điểm
      Rọi theo từng bước chân của nhân vật chính từ cổng bước lên sân khấu, tạo cảm giác trang trọng và quyền lực.

      ### 5. Kết hợp khói lạnh và hiệu ứng sân khấu
      Sử dụng máy khói lạnh / máy haze giúp các tia sáng Beam hiển thị rõ nét hơn gấp nhiều lần, tạo không gian huyền ảo như trên các sân khấu đại nhạc hội.
    `,
    gallery: [img1, img6, img15, img24],
  },
  {
    id: 3,
    slug: 'nen-su-dung-man-hinh-led-kich-thuoc-bao-nhieu',
    title: 'Nên sử dụng màn hình LED kích thước bao nhiêu?',
    category: 'KIẾN THỨC SỰ KIỆN',
    categoryId: 'kien-thuc',
    date: '15/08/2026',
    author: 'Kỹ thuật viên Nam Thành',
    image: img4,
    readTime: '6 phút đọc',
    summary:
      'Hướng dẫn lựa chọn kích thước màn hình LED P2.5, P3.91 dựa trên kích thước sân khấu, số lượng khách mời và khoảng cách quan sát tối ưu.',
    content: `
      Màn hình LED là trung tâm hiển thị nội dung visual, video clip giới thiệu và backdrop động của toàn bộ sự kiện.

      ### 1. Tỷ lệ màn hình chuẩn
      Nên ưu tiên tỷ lệ 16:9 hoặc tỷ lệ sân khấu cân đối để tránh bị méo hình hoặc cắt mất chữ trong slide trình chiếu của diễn giả.

      ### 2. Khoảng cách quan sát & Độ phân giải
      - **Trong nhà (Indoor):** Nên chọn LED P2.5 hoặc P3.0 cho hình ảnh mịn màng, sắc nét ngay cả khi khách ngồi cách sân khấu 2 - 3m.
      - **Ngoài trời (Outdoor):** Chọn LED P3.91 chống nước chuẩn IP65, độ sáng cao trên 4500 nits để hình ảnh rõ nét ngay dưới ánh nắng mặt trời.

      ### 3. Gợi ý kích thước theo quy mô sự kiện
      - **Sự kiện 100 - 200 khách:** Kích thước LED từ 3m x 2m đến 4m x 2.5m.
      - **Sự kiện 300 - 500 khách:** Kích thước LED từ 5m x 3m đến 6m x 3.5m.
      - **Sự kiện trên 800 khách / Đại tiệc:** Kích thước LED từ 8m x 4m trở lên hoặc bố trí thêm 2 màn hình phụ cánh gà (LED Wings).
    `,
    gallery: [img4, img10, img19, img22],
  },
  {
    id: 4,
    slug: 'kinh-nghiem-to-chuc-gala-dinner-chuyen-nghiep',
    title: 'Kinh nghiệm tổ chức Gala Dinner chuyên nghiệp',
    category: 'KINH NGHIỆM',
    categoryId: 'kinh-nghiem',
    date: '12/08/2026',
    author: 'Ban Tổ Chức Sự Kiện',
    image: img3,
    readTime: '5 phút đọc',
    summary:
      'Những bước quan trọng từ lựa chọn địa điểm, thiết kế sân khấu, âm thanh ánh sáng đến kịch bản MC và điều phối vận hành chương trình trơn tru.',
    content: `
      Gala Dinner là dịp tri ân, gắn kết nội bộ và tôn vinh những thành tựu của doanh nghiệp sau một chặng đường nỗ lực.

      ### 1. Concept và thông điệp chủ đạo (Key Theme)
      Xác định rõ chủ đề chương trình để đồng bộ từ thiết kế thư mời, backdrop check-in, visual màn hình LED đến trang phục của khách mời.

      ### 2. Kịch bản chương trình chặt chẽ
      - Phân chia thời lượng hợp lý giữa phần Lễ (Trang trọng, báo cáo, trao thưởng) và phần Hội (Khai tiệc, văn nghệ, minigame, bốc thăm may mắn).
      - Âm nhạc và hiệu ứng ánh sáng cần khớp nối chính xác theo từng khoảnh khắc vinh danh để tạo sự phấn khích cho người tham dự.

      ### 3. Ekip vận hành trực tiếp tại hiện trường
      Có đạo diễn sân khấu, âm thanh ánh sáng, MC và lễ tân phối hợp liên tục qua bộ đàm chuyên dụng để xử lý linh hoạt mọi tình huống phát sinh.
    `,
    gallery: [img3, img5, img13, img20],
  },
  {
    id: 5,
    slug: 'checklist-thiet-bi-can-co-cho-mot-su-kien',
    title: 'Checklist thiết bị cần có cho một sự kiện',
    category: 'KINH NGHIỆM',
    categoryId: 'kinh-nghiem',
    date: '08/08/2026',
    author: 'Nam Thành Sự Kiện',
    image: img5,
    readTime: '4 phút đọc',
    summary:
      'Danh sách những thiết bị cơ bản và thiết bị dự phòng giúp hạn chế tối đa thiếu sót, đảm bảo sự kiện diễn ra an toàn và đúng tiến độ.',
    content: `
      Bảng danh mục kiểm tra (Checklist) chi tiết giúp ban tổ chức và đơn vị cho thuê thiết bị không bỏ sót bất kỳ hạng mục quan trọng nào:

      ### 1. Nguồn điện & An toàn kỹ thuật
      - Tủ điện phân phối 3 pha có aptomat chống giật riêng cho âm thanh, ánh sáng và LED.
      - Máy phát điện dự phòng cho các sự kiện ngoài trời quy mô lớn.

      ### 2. Hệ thống Âm thanh - Ánh sáng
      - Loa FOH (Front of House), Loa Sub, Loa Monitor sân khấu.
      - Digital Mixer, bộ xử lý tín hiệu DSP.
      - Micro không dây chính và micro dự phòng kèm pin sạc đầy đủ.
      - Đèn Beam, Par LED, Profile, Follow Spot và bàn điều khiển DMX/GrandMA.

      ### 3. Sân khấu & Hiệu ứng
      - Khung sắt chịu lực, bục sân khấu bọc thảm mới hoặc dán decal bóng.
      - Máy bắn khói lạnh, pháo điện, máy thổi bóng bay hoặc kim tuyến.
    `,
    gallery: [img5, img8, img11, img16],
  },
  {
    id: 6,
    slug: 'am-thanh-su-kien-ngoai-troi-can-luu-y-gi',
    title: 'Âm thanh sự kiện ngoài trời cần lưu ý gì?',
    category: 'ÂM THANH ÁNH SÁNG',
    categoryId: 'am-thanh-anh-sang',
    date: '05/08/2026',
    author: 'Kỹ sư âm thanh Nam Thành',
    image: img6,
    readTime: '5 phút đọc',
    summary:
      'Công suất loa, vị trí dựng tháp loa delay và những yếu tố kỹ thuật chống gió, chống ẩm khi triển khai hệ thống ngoài trời.',
    content: `
      Không gian mở ngoài trời không có tường phản xạ nên âm thanh bị suy hao nhanh theo khoảng cách và dễ bị ảnh hưởng bởi gió, tiếng ồn xung quanh.

      ### 1. Công suất loa và cấu hình Line Array
      Cần sử dụng cụm loa Line Array treo cao trên giàn khung Truss để góc phóng âm thanh hướng xuống khán giả, giảm tối đa tán xạ lên bầu trời.

      ### 2. Thiết lập tháp loa Delay đồng bộ
      Bố trí thêm các cụm loa Delay đối với sân bãi dài trên 40 mét để khán giả phía sau nghe rõ như phía trước mà không phải tăng âm lượng loa chính quá mức.

      ### 3. Phương án che chắn chống thời tiết
      Luôn chuẩn bị sẵn bạt che chuyên dụng chống nước mưa và bụi cho hệ thống Mixer, tủ Amply công suất và micro.
    `,
    gallery: [img6, img7, img17, img23],
  },
  {
    id: 7,
    slug: 'du-an-le-khai-truong-showroom-van-phong-cao-cap',
    title: 'Dự án Lễ Khai Trương Showroom & Văn Phòng Cao Cấp',
    category: 'DỰ ÁN',
    categoryId: 'du-an',
    date: '02/08/2026',
    author: 'Ekip Thực Hiện',
    image: img7,
    readTime: '4 phút đọc',
    summary:
      'Hình ảnh thực tế trọn gói tổ chức lễ khai trương bao gồm nhà bạt không gian, sân khấu backdrop 3D, âm thanh ánh sáng và múa lân khai lộc.',
    content: `
      Nam Thành Sự Kiện vừa hoàn thành trọn gói lễ khai trương showroom cao cấp trong 24 giờ thi công liên tục.

      ### Các hạng mục thực hiện:
      - Nhà bạt không gian khẩu độ lớn, phủ trần lụa trắng đỏ sang trọng.
      - Sân khấu chính kết hợp màn hình LED P3.91 outdoor hiển thị video clip giới thiệu công ty.
      - Hệ thống âm thanh Line Array MAXO và dàn micro Shure không dây.
      - Bộ cắt băng khai trương mạ vàng và đoàn lân sư rồng biểu diễn khai lộc may mắn.
    `,
    gallery: [img7, img10, img14, img23],
  },
  {
    id: 8,
    slug: 'du-an-dai-tiec-cuoi-phong-cach-hoang-gia-mai-vom',
    title: 'Dự án Đại Tiệc Cưới Phong Cách Hoàng Gia Mái Vòm',
    category: 'DỰ ÁN',
    categoryId: 'du-an',
    date: '28/07/2026',
    author: 'Ekip Thực Hiện',
    image: img8,
    readTime: '6 phút đọc',
    summary:
      'Toàn cảnh đại tiệc cưới 1000 khách với không gian nhà vòm lụa, trần sao lung linh, hệ thống đèn Moving Head và dàn âm thanh MAXO biểu diễn đỉnh cao.',
    content: `
      Một trong những đại tiệc cưới quy mô hoành tráng bậc nhất được Nam Thành Sự Kiện thiết kế và thi công trọn gói:

      ### Điểm nhấn ấn tượng:
      - Không gian mái vòm che phủ toàn bộ 1000m² với trần sao dạ quang lấp lánh hàng ngàn bóng LED nhỏ.
      - Đèn chùm pha lê khổng lồ đặt ngay trung tâm sân khấu chính.
      - Lối đi Runway hoa tươi lụa kết hợp đèn chiếu sáng điểm tôn vinh cô dâu chú rể.
      - Âm thanh biểu diễn ca nhạc chất lượng cao với hệ thống loa Line Array và ban nhạc sống.
    `,
    gallery: [img8, img2, img3, img5],
  },
]

// Real Client & Event Gallery Photos
export const galleryPhotos = [
  { id: 1, image: img1, title: 'Sân Khấu Ánh Sáng Gala Dinner', category: 'Sân khấu & Ánh sáng' },
  { id: 2, image: img2, title: 'Hệ Thống Dàn Loa Line Array MAXO', category: 'Âm thanh chuyên nghiệp' },
  { id: 3, image: img3, title: 'Không Gian Tiệc Cưới Hoàng Gia', category: 'Tiệc cưới & Đại tiệc' },
  { id: 4, image: img4, title: 'Màn Hình LED & Visual Sân Khấu', category: 'Sân khấu & Ánh sáng' },
  { id: 5, image: img5, title: 'Đường Runway Hoa & Ánh Sáng Pha Lê', category: 'Tiệc cưới & Đại tiệc' },
  { id: 6, image: img6, title: 'Dàn Đèn Moving Head & Sân Khấu', category: 'Sân khấu & Ánh sáng' },
  { id: 7, image: img7, title: 'Lễ Khởi Công & Khai Trương Ngoài Trời', category: 'Sự kiện ngoài trời' },
  { id: 8, image: img8, title: 'Toàn Cảnh Nhà Bạt Không Gian Cao Cấp', category: 'Sự kiện ngoài trời' },
  { id: 9, image: img9, title: 'Hệ Thống Loa Sub & Mixer Kỹ Thuật Số', category: 'Âm thanh chuyên nghiệp' },
  { id: 10, image: img10, title: 'Không Gian Hội Nghị & Hội Thảo Doanh Nghiệp', category: 'Hội nghị doanh nghiệp' },
  { id: 11, image: img11, title: 'Đêm Nhạc Hội & Biểu Diễn Nghệ Thuật', category: 'Sân khấu & Ánh sáng' },
  { id: 12, image: img12, title: 'Setup Khung Truss & Dàn Treo Loa Đèn', category: 'Âm thanh chuyên nghiệp' },
  { id: 13, image: img13, title: 'Khu Vực Bàn Tiệc & Trang Trí Hoa Tươi', category: 'Tiệc cưới & Đại tiệc' },
  { id: 14, image: img14, title: 'Lễ Trao Giải & Vinh Danh Cuối Năm', category: 'Hội nghị doanh nghiệp' },
  { id: 15, image: img15, title: 'Trần Sao Lung Linh & Đèn Laser Sân Khấu', category: 'Sân khấu & Ánh sáng' },
  { id: 16, image: img16, title: 'Đại Tiệc Ngoài Trời 800 Khách', category: 'Sự kiện ngoài trời' },
  { id: 17, image: img17, title: 'Ekip Kỹ Thuật Viên Vận Hành Trực Tiếp', category: 'Âm thanh chuyên nghiệp' },
  { id: 18, image: img18, title: 'Bàn Tròn VIP & Lối Đi Trải Thảm Đỏ', category: 'Tiệc cưới & Đại tiệc' },
  { id: 19, image: img19, title: 'Sự Kiện Ra Mắt Sản Phẩm Mới', category: 'Hội nghị doanh nghiệp' },
  { id: 20, image: img20, title: 'Không Gian Gala Dinner Ấm Cúng', category: 'Tiệc cưới & Đại tiệc' },
  { id: 21, image: img21, title: 'Cụm Loa Monitor Sân Khấu Biểu Diễn', category: 'Âm thanh chuyên nghiệp' },
  { id: 22, image: img22, title: 'Toàn Cảnh Sân Khấu Đêm Hội', category: 'Sân khấu & Ánh sáng' },
  { id: 23, image: img23, title: 'Lễ Cắt Băng Khai Trương Trang Trọng', category: 'Sự kiện ngoài trời' },
  { id: 24, image: img24, title: 'Dàn Đèn Par LED Nhuộm Sắc Sân Khấu', category: 'Sân khấu & Ánh sáng' },
  { id: 25, image: img25, title: 'Khoảnh Khắc Khách Mời Rạng Rỡ', category: 'Tiệc cưới & Đại tiệc' },
]

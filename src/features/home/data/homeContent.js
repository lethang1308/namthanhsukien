import heroBannerImage from '../../../assets/4a261f7f-d4d6-402e-bbc9-428aed0dea2b.png'
import aboutStageImage from '../../../assets/0959a3ca-785c-438e-8d96-be9ae26ad715.jpg'
import projectOneImage from '../../../assets/0959a3ca-785c-438e-8d96-be9ae26ad715.jpg'
import projectTwoImage from '../../../assets/29378fcd-c00a-44a4-ac19-04dfb8eddc07.jpg'
import projectThreeImage from '../../../assets/0736c690-186d-4c7f-8d4d-66e7ac0d77a9.jpg'
import projectFourImage from '../../../assets/d632589a-f3f7-4dfe-a014-a22714e68b9c.jpg'

export const contact = {
  brandName: 'Thành Nam Sự Kiện',
  slogan: 'Tạo nên khoảnh khắc đáng nhớ',
  address: '1A8/LK1/7 tổ 8 khu phố Hoà Lân 2, Phường Thuận Giao, Thành phố Hồ Chí Minh',
  hotline: '0938 161 222',
  phone: '0938 161 222',
  zalo: 'https://zalo.me/0938161222',
  facebook: 'https://www.facebook.com/Thanhnamsukien',
  email: 'thanhnamsukien81@gmail.com',
  hours: '08:00 - 21:00',
  website: 'https://thanhnamsukien.vn',
}

export const navItems = [
  { label: 'TRANG CHỦ', path: '/', targetId: 'home' },
  { label: 'GIỚI THIỆU', path: '/gioi-thieu', targetId: 'about' },
  { label: 'DỊCH VỤ', path: '/dich-vu', targetId: 'services' },
  { label: 'DỰ ÁN', path: '/du-an', targetId: 'projects' },
  { label: 'TIN TỨC', path: '/tin-tuc', targetId: 'news' },
  { label: 'LIÊN HỆ', path: '/lien-he', targetId: 'contact' },
]

export const hero = {
  bannerImage: heroBannerImage,
  brandSmall: 'Thành Nam',
  brandCategory: 'SỰ KIỆN',
  title: 'TỔ CHỨC SỰ KIỆN',
  titleHighlight: 'CHUYÊN NGHIỆP',
  script: 'Tạo nên khoảnh khắc đáng nhớ',
  description:
    'Thành Nam Sự Kiện mang đến giải pháp tổ chức sự kiện trọn gói, chuyên nghiệp và khác biệt cho mọi khách hàng.',
}

export const serviceCards = [
  {
    id: 'khai-truong',
    name: 'LỄ KHAI TRƯƠNG',
    shortName: 'Khai Trương',
    iconType: 'gift',
    description: 'Tổ chức lễ khai trương, khánh thành hồng phát, trang trọng và hoành tráng.',
  },
  {
    id: 'tat-nien',
    name: 'TIỆC TẤT NIÊN',
    shortName: 'Tất Niên',
    iconType: 'party',
    description: 'Year End Party bùng nổ cảm xúc, gắn kết đội ngũ và tri ân thành công.',
  },
  {
    id: 'hoi-nghi',
    name: 'HỘI NGHỊ - HỘI THẢO',
    shortName: 'Hội Thảo',
    iconType: 'podium',
    description: 'Hội nghị khách hàng, hội thảo chuyên đề đẳng cấp và quy chuẩn quốc tế.',
  },
  {
    id: 'cuoi-hoi',
    name: 'SỰ KIỆN CƯỚI HỎI',
    shortName: 'Cưới Hỏi',
    iconType: 'wedding',
    description: 'Không gian tiệc cưới lộng lẫy, kịch bản độc bản ghi dấu ngày hạnh phúc.',
  },
  {
    id: 'khoi-cong',
    name: 'LỄ KHỞI CÔNG',
    shortName: 'Khởi Công',
    iconType: 'construction',
    description: 'Lễ khởi công, động thổ chuẩn phong thủy, an toàn và bài bản.',
  },
]

export const aboutUs = {
  tag: 'VỀ CHÚNG TÔI',
  title: 'ĐỒNG HÀNH CÙNG MỌI SỰ KIỆN THÀNH CÔNG',
  description:
    'Với đội ngũ giàu kinh nghiệm, sáng tạo và tận tâm, chúng tôi cam kết mang đến trải nghiệm sự kiện chuyên nghiệp, ấn tượng và khác biệt.',
  subDescription:
    'Từ khâu lên ý tưởng concept, thiết kế sân khấu 3D, dàn dựng âm thanh ánh sáng hiện đại đến điều phối nhân sự trực tiếp, Thành Nam Sự Kiện luôn là người bạn đồng hành tin cậy kiến tạo những dấu ấn vượt thời gian.',
  image: aboutStageImage,
  alt: 'Sân khấu sự kiện Gala Dinner rực rỡ và chuyên nghiệp do Thành Nam Sự Kiện thực hiện',
}

export const featuredProjects = [
  {
    id: 1,
    title: 'Tiệc Cưới Sân Khấu Hoa & Âm Thanh MAXO',
    category: 'TIỆC CƯỚI TRỌN GÓI',
    location: 'TP. Hồ Chí Minh',
    scale: 'Quy mô 500 khách',
    image: projectOneImage,
    alt: 'Không gian tiệc cưới trang trọng với hệ thống âm thanh ánh sáng chuyên nghiệp',
  },
  {
    id: 2,
    title: 'Khai Trương Showroom & Nhà Bạt Không Gian',
    category: 'LỄ KHAI TRƯƠNG',
    location: 'Thuận An - Bình Dương',
    scale: 'Nhà bạt 300m²',
    image: projectTwoImage,
    alt: 'Lắp đặt nhà bạt không gian và sân khấu khai trương chuyên nghiệp',
  },
  {
    id: 3,
    title: 'Tiệc Tất Niên & Tri Ân Doanh Nghiệp',
    category: 'GALA DINNER',
    location: 'TP. Hồ Chí Minh',
    scale: 'Quy mô 400 khách',
    image: projectThreeImage,
    alt: 'Sân khấu tiệc tất niên và gala dinner ấm cúng, ấn tượng',
  },
  {
    id: 4,
    title: 'Âm Thanh Ánh Sáng & Sân Khấu Hội Nghị',
    category: 'HỘI NGHỊ - HỘI THẢO',
    location: 'Bình Dương',
    scale: 'Hệ thống LED P3.91',
    image: projectFourImage,
    alt: 'Hệ thống âm thanh ánh sáng phục vụ hội nghị và sự kiện ngoài trời',
  },
]

export const statsCounters = [
  {
    number: '8+',
    label: 'NĂM KINH NGHIỆM',
    description: 'Hành trình kiến tạo hơn 500 dấu ấn sự kiện',
  },
  {
    number: '500+',
    label: 'SỰ KIỆN ĐÃ TỔ CHỨC',
    description: 'Từ sự kiện doanh nghiệp đến tiệc cưới hoàng gia',
  },
  {
    number: '300+',
    label: 'KHÁCH HÀNG HÀI LÒNG',
    description: 'Các tập đoàn, doanh nghiệp và cá nhân tin tưởng',
  },
  {
    number: '50+',
    label: 'ĐỐI TÁC TIN CẬY',
    description: 'Hệ sinh thái nhà cung ứng trang thiết bị hàng đầu',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'TIẾP NHẬN YÊU CẦU',
    description: 'Lắng nghe mục tiêu, quy mô, ngân sách và thông điệp mong muốn của khách hàng.',
  },
  {
    step: '02',
    title: 'LÊN Ý TƯỞNG KỊCH BẢN',
    description: 'Sáng tạo chủ đề độc đáo, thiết kế 2D/3D sân khấu và kịch bản chi tiết.',
  },
  {
    step: '03',
    title: 'BÁO GIÁ & KÝ HỢP ĐỒNG',
    description: 'Bóc tách chi phí minh bạch, tối ưu hoá ngân sách và cam kết chất lượng.',
  },
  {
    step: '04',
    title: 'TRIỂN KHAI THỰC HIỆN',
    description: 'Lắp đặt thiết bị âm thanh ánh sáng, chạy thử kỹ thuật và điều phối trực tiếp.',
  },
  {
    step: '05',
    title: 'NGHIỆM THU & ĐÁNH GIÁ',
    description: 'Đảm bảo sự kiện thành công trọn vẹn, nghiệm thu chu đáo và hỗ trợ sau sự kiện.',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Tiến Dũng',
    role: 'Giám đốc Marketing - Viettel Post',
    quote:
      'Chương trình Year End Party của công ty chúng tôi diễn ra vô cùng cảm xúc. Đội ngũ Thành Nam làm việc cực kỳ chuyên nghiệp và tận tâm từ khâu chuẩn bị đến phút cuối cùng.',
  },
  {
    id: 2,
    name: 'Trần Minh Hằng',
    role: 'Trưởng ban Đối ngoại - Tân Á Đại Thành',
    quote:
      'Lễ kỷ niệm 15 năm thành lập được setup sân khấu và ánh sáng rất chỉn chu. Khách mời và ban lãnh đạo đều hài lòng với không gian và tiến độ bàn giao trước giờ chạy thử.',
  },
  {
    id: 3,
    name: 'Vũ Quốc Bảo',
    role: 'CEO - Bất động sản Sun Homes',
    quote:
      'Hội thảo giới thiệu dự án diễn ra trơn tru, âm thanh rõ nét không bị rú rít. Rất ấn tượng với kỹ thuật viên túc trực hỗ trợ nhiệt tình suốt buổi lễ.',
  },
  {
    id: 4,
    name: 'Lê Hoàng Long',
    role: 'Trưởng phòng Hành chính - Nhựa Bình Minh',
    quote:
      'Thuê hệ thống âm thanh và nhà bạt không gian của Thành Nam cho ngày hội 500 nhân sự. Khung bạt kiên cố, che nắng thoáng mát, âm thanh phủ đều khắp sân bãi.',
  },
  {
    id: 5,
    name: 'Phạm Thị Thu Trang',
    role: 'Quản lý Vận hành - Chuỗi Golden Spoon',
    quote:
      'Khai trương chi nhánh mới cần setup gấp trong đêm, bên Thành Nam hỗ trợ khảo sát và thi công bàn giao đúng 6h sáng. Giá cả hợp lý và không phát sinh chi phí linh tinh.',
  },
  {
    id: 6,
    name: 'Đặng Văn Hùng',
    role: 'Giám đốc Dự án - Xây dựng An Cường',
    quote:
      'Lễ cất nóc và khởi công công trình diễn ra ngoài trời thời tiết nắng gắt, nhưng nhờ hệ thống màn hình LED P3.91 độ sáng cao nên trình chiếu slide báo cáo rất rõ nét.',
  },
  {
    id: 7,
    name: 'Bùi Thị Mai Lan',
    role: 'Ban Tổ chức - Hội chợ Nông nghiệp TP.HCM',
    quote:
      'Đã hợp tác cùng Thành Nam qua 3 kỳ sự kiện liên tiếp. Ưng nhất là dàn loa Line Array MAXO âm trầm ấm, micro bắt sóng xa và không bị chập chờn khi MC di chuyển.',
  },
  {
    id: 8,
    name: 'Hoàng Trọng Nghĩa',
    role: 'Phó Giám đốc - Logistics VinaTrans',
    quote:
      'Tiệc tri ân khách hàng cuối năm cần hiệu ứng ánh sáng bắt mắt theo nhận diện thương hiệu. Ekip kỹ thuật phối màu đèn Par LED và Beam chuyển cảnh rất mượt mà.',
  },
  {
    id: 9,
    name: 'Đỗ Thanh Tùng',
    role: 'Chủ tịch HĐQT - May Mặc Tùng Phát (KCN VSIP)',
    quote:
      'Hội nghị người lao động 800 công nhân được trang bị dàn âm thanh công suất lớn nghe rõ từng vị trí. Báo giá minh bạch, xuất hóa đơn VAT đầy đủ và nhanh gọn.',
  },
  {
    id: 10,
    name: 'Nguyễn Thùy Linh',
    role: 'Trưởng ban Sự kiện - Trường QT Wellspring',
    quote:
      'Lễ tốt nghiệp yêu cầu khắt khe về âm thanh phát biểu và ánh sáng quay phim 4K. Kỹ thuật viên Thành Nam cân chỉnh ánh sáng mặt rất sáng và tự nhiên.',
  },
  {
    id: 11,
    name: 'Võ Thành Đạt',
    role: 'Quản lý Bán lẻ - Điện máy Xanh Bình Dương',
    quote:
      'Các đợt chạy Roadshow và khai trương điểm bán mới bên mình đều tin tưởng gửi gắm Thành Nam. Đội ngũ hỗ trợ nhanh, gọi điện tư vấn nhiệt tình bất kể ngày nghỉ.',
  },
  {
    id: 12,
    name: 'Trịnh Đình Quang',
    role: 'Giám đốc Điều hành - Dược phẩm MediPhar',
    quote:
      'Chương trình Gala Dinner kết hợp biểu diễn văn nghệ nội bộ rất thành công. Dàn mixer kỹ thuật số chỉnh giọng ca sĩ và ban nhạc rất trong trẻo, không bị vỡ tiếng.',
  },
  {
    id: 13,
    name: 'Nguyễn Ngọc Anh',
    role: 'Đại diện Khách hàng - Tiệc cưới Mái Vòm',
    quote:
      'Không gian tiệc cưới ngoài trời 600 khách lung linh hơn mong đợi nhờ trần sao và dàn đèn moving head của Thành Nam. Cảm ơn ekip đã đồng hành cùng ngày trọng đại.',
  },
  {
    id: 14,
    name: 'Trần Văn Kiên',
    role: 'Chủ Garage - AutoCare Thuận An',
    quote:
      'Lễ khai trương showroom ô tô cần backdrop và bục sân khấu chịu lực tốt để trưng bày xe. Thành Nam tư vấn kết cấu khung truss rất vững chãi và an toàn tuyệt đối.',
  },
  {
    id: 15,
    name: 'Lê Thanh Vân',
    role: 'Trưởng phòng Nhân sự - May Đông Á',
    quote:
      'Tổ chức hội thao và tiệc liên hoan cuối năm cho 400 cán bộ nhân viên, âm thanh ngoài trời nghe rất vang và rõ ràng. Ekip có mặt từ sớm hỗ trợ chạy thử chu đáo.',
  },
]


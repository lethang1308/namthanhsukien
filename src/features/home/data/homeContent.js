import heroBannerImage from '../../../assets/4a261f7f-d4d6-402e-bbc9-428aed0dea2b.png'
import aboutStageImage from '../../../assets/fc56a9e7-8deb-45c0-b700-b6989b903136.png'
import projectOneImage from '../../../assets/2dc36332-eaaf-47a7-8818-37ffb237d2fb.png'
import projectTwoImage from '../../../assets/66a5e6f8-5e55-456b-bd3e-c47e0f9c99d7.png'
import projectThreeImage from '../../../assets/2f18b31f-b52b-49b8-ad4c-00aabfaf954d.png'
import projectFourImage from '../../../assets/7ad10655-1966-4a7f-88b4-d8d8b48bd674.png'

export const contact = {
  brandName: 'Nam Thành Sự Kiện',
  slogan: 'Tạo nên khoảnh khắc đáng nhớ',
  address: 'Số 18, Đường Lê Trọng Tấn, Hà Đông, Hà Nội',
  hotline: '0988 123 456',
  phone: '0988 123 456',
  email: 'sukiennamthanh@gmail.com',
  hours: '08:00 - 21:00',
  website: 'https://namthanhsukien.vn',
}

export const navItems = [
  { label: 'TRANG CHỦ', href: '#home' },
  { label: 'GIỚI THIỆU', href: '#about' },
  { label: 'DỊCH VỤ', href: '#services' },
  { label: 'DỰ ÁN', href: '#projects' },
  { label: 'TIN TỨC', href: '#news' },
  { label: 'LIÊN HỆ', href: '#contact' },
]

export const hero = {
  bannerImage: heroBannerImage,
  brandSmall: 'Nam Thành',
  brandCategory: 'SỰ KIỆN',
  title: 'TỔ CHỨC SỰ KIỆN',
  titleHighlight: 'CHUYÊN NGHIỆP',
  script: 'Tạo nên khoảnh khắc đáng nhớ',
  description:
    'Nam Thành Sự Kiện mang đến giải pháp tổ chức sự kiện trọn gói, chuyên nghiệp và khác biệt cho mọi khách hàng.',
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
    'Từ khâu lên ý tưởng concept, thiết kế sân khấu 3D, dàn dựng âm thanh ánh sáng hiện đại đến điều phối nhân sự trực tiếp, Nam Thành Sự Kiện luôn là người bạn đồng hành tin cậy kiến tạo những dấu ấn vượt thời gian.',
  image: aboutStageImage,
  alt: 'Sân khấu sự kiện Gala Dinner rực rỡ và chuyên nghiệp do Nam Thành Sự Kiện thực hiện',
}

export const featuredProjects = [
  {
    id: 1,
    title: 'Gala Dinner Ánh Sáng Hoàng Gia',
    category: 'TIỆC TẤT NIÊN',
    location: 'Hà Nội',
    image: projectOneImage,
    alt: 'Không gian tiệc Gala Dinner lộng lẫy với dàn đèn chùm và bàn tiệc tròn sang trọng',
  },
  {
    id: 2,
    title: 'Lễ Khánh Thành & Khai Trương Nhà Máy',
    category: 'LỄ KHAI TRƯƠNG',
    location: 'Bắc Ninh',
    image: projectTwoImage,
    alt: 'Rạp sự kiện lều bạt đỏ trắng quy mô lớn cho lễ khởi công khánh thành',
  },
  {
    id: 3,
    title: 'Đại Tiệc Cưới Không Gian Mái Vòm Hoàng Gia',
    category: 'SỰ KIỆN CƯỚI HỎI',
    location: 'Hải Phòng',
    image: projectThreeImage,
    alt: 'Đường dẫn lối đi tiệc cưới ngập tràn ánh sáng vàng ấm áp và hoa tươi',
  },
  {
    id: 4,
    title: 'Hội Nghị Tri Ân Khách Hàng Quốc Tế',
    category: 'HỘI NGHỊ - HỘI THẢO',
    location: 'Quảng Ninh',
    image: projectFourImage,
    alt: 'Sân khấu hội nghị hiện đại với hệ thống âm thanh ánh sáng đẳng cấp',
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
    name: 'Nguyễn Tiến Dũng',
    role: 'Giám đốc Marketing - Viettel Post',
    quote:
      'Chương trình Year End Party của công ty chúng tôi diễn ra vô cùng cảm xúc. Đội ngũ Nam Thành làm việc cực kỳ chuyên nghiệp và tận tâm từ khâu chuẩn bị đến phút cuối cùng.',
  },
  {
    name: 'Trần Minh Hằng',
    role: 'Trưởng ban Đối ngoại - Tân Á Đại Thành',
    quote:
      'Lễ kỷ niệm 15 năm thành lập được setup sân khấu và ánh sáng quá đẳng cấp. Khách mời và đối tác đều trầm trồ khen ngợi không gian và kịch bản chương trình.',
  },
  {
    name: 'Vũ Quốc Bảo',
    role: 'CEO - Sun Homes Real Estate',
    quote:
      'Hội thảo mở bán dự án diễn ra trơn tru không một lỗi kỹ thuật. Rất ấn tượng với khả năng xử lý tình huống linh hoạt của ekip Nam Thành Sự Kiện.',
  },
]


import audioHero from '../../../assets/0959a3ca-785c-438e-8d96-be9ae26ad715.jpg'
import lightHero from '../../../assets/0736c690-186d-4c7f-8d4d-66e7ac0d77a9.jpg'
import ledHero from '../../../assets/1bed1d2d-e217-4c49-bdee-1ff0c58964f6.jpg'

import imgAudio1 from '../../../assets/d632589a-f3f7-4dfe-a014-a22714e68b9c.jpg'
import imgAudio2 from '../../../assets/d0e4083c-a202-456e-b712-7b2e84c19072.jpg'
import imgAudio3 from '../../../assets/629c7528-096a-42f4-86b7-50811384d5f0.jpg'

import imgLight1 from '../../../assets/22702251-2ab9-4b07-b91e-02192f2c06fa.jpg'
import imgLight2 from '../../../assets/83c5e62c-4de8-4b50-9279-46c700bc85b8.jpg'
import imgLight3 from '../../../assets/9ad4e38e-c076-4ec6-ac4c-dc48a1eadb4e.jpg'

import imgLed1 from '../../../assets/29378fcd-c00a-44a4-ac19-04dfb8eddc07.jpg'
import imgLed2 from '../../../assets/1631aa5b-7a6f-4e9a-b40e-59e3867b7c51.jpg'
import imgLed3 from '../../../assets/e5d08bbb-53dd-4b1a-bd76-a924f9cb979b.jpg'

import {
  Clock,
  Confetti,
  Crown,
  DeviceMobile,
  Eye,
  Gift,
  HardDrives,
  Headphones,
  Heart,
  HighDefinition,
  Lightbulb,
  Lightning,
  MicrophoneStage,
  Monitor,
  PresentationChart,
  ShieldCheck,
  Sparkle,
  SpeakerHigh,
  SquaresFour,
  Sun,
  Target,
  UsersThree,
  Wrench,
} from '@phosphor-icons/react'

export const serviceNavList = [
  {
    id: 'am-thanh',
    slug: 'cho-thue-am-thanh',
    path: '/dich-vu/cho-thue-am-thanh',
    label: 'Cho thuê âm thanh',
    shortLabel: 'Âm thanh sự kiện',
    icon: SpeakerHigh,
    desc: 'Hệ thống Line Array, Mixer Digital & Micro không dây',
  },
  {
    id: 'anh-sang',
    slug: 'cho-thue-anh-sang',
    path: '/dich-vu/cho-thue-anh-sang',
    label: 'Cho thuê ánh sáng',
    shortLabel: 'Ánh sáng sân khấu',
    icon: Sun,
    desc: 'Đèn Beam, Moving Head, Par LED, Follow Spot & Khung Truss',
  },
  {
    id: 'man-hinh-led',
    slug: 'cho-thue-man-hinh-led',
    path: '/dich-vu/cho-thue-man-hinh-led',
    label: 'Cho thuê màn hình Led',
    shortLabel: 'Màn hình LED',
    icon: Monitor,
    desc: 'Màn hình LED P2.5 - P3.91 sắc nét trong nhà & ngoài trời',
  },
]

export const audioServiceData = {
  id: 'am-thanh',
  slug: 'cho-thue-am-thanh',
  badge: 'DỊCH VỤ CHUYÊN NGHIỆP',
  title: 'CHO THUÊ ÂM THANH SỰ KIỆN',
  slogan: 'Âm thanh rõ nét – mạnh mẽ – ổn định',
  heroImage: audioHero,
  introHeading: 'Giải Pháp Âm Thanh Trọn Gói Cho Mọi Không Gian Sự Kiện',
  introText1:
    'Thành Nam Sự Kiện cung cấp hệ thống âm thanh chuyên nghiệp phù hợp cho nhiều loại hình sự kiện và quy mô không gian khác nhau.',
  introText2:
    'Từ hội nghị nhỏ, khai trương, tiệc cưới đến gala dinner hay sân khấu ngoài trời, Thành Nam sẽ khảo sát và tư vấn cấu hình âm thanh phù hợp với số lượng khách, diện tích và đặc điểm chương trình.',
  introText3:
    'Hệ thống được kỹ thuật viên lắp đặt, căn chỉnh và trực tiếp vận hành xuyên suốt sự kiện nhằm đảm bảo âm thanh ổn định và hạn chế tối đa sự cố.',
  
  brands: ['MAXO Audio', 'Yamaha', 'Midas', 'Shure', 'Sennheiser', 'dBTechnologies', 'RCF', 'Soundcraft'],

  equipmentList: [
    { name: 'HỆ THỐNG LOA LINE ARRAY', desc: 'Độ phóng âm xa, âm lượng đồng đều, không bị chói ở cự ly gần', icon: SpeakerHigh },
    { name: 'LOA SUB HẦM CÔNG SUẤT CAO', desc: 'Dải trầm uy lực, căng tròn, tạo độ sâu và cảm xúc âm nhạc', icon: HardDrives },
    { name: 'MIXER DIGITAL CHỐNG HÚ', desc: 'Bàn trộn kỹ thuật số cân chỉnh EQ chuẩn xác từng giọng ca', icon: Headphones },
    { name: 'MICRO KHÔNG DÂY CAO CẤP', desc: 'Sóng UHF khỏe, bắt tiếng ấm, chống trùng sóng và ngắt tiếng', icon: MicrophoneStage },
    { name: 'LOA MONITOR SÂN KHẤU', desc: 'Âm thanh trung thực giúp MC, ca sĩ, ban nhạc kiểm soát tốt nhất', icon: SpeakerHigh },
    { name: 'BỘ XỬ LÝ TÍN HIỆU DSP', desc: 'Quản lý phân tần crossover, limiter bảo vệ hệ thống tuyệt đối', icon: Lightning },
  ],

  suitableFor: [
    { title: 'Hội nghị – Hội thảo', desc: 'Âm thanh rõ lời, không hú rít, tạo sự trang trọng', icon: PresentationChart },
    { title: 'Lễ Khai trương – Khánh thành', desc: 'Âm thanh sôi động, thông báo rõ ràng ngoài trời', icon: Gift },
    { title: 'Gala Dinner & Tri Ân', desc: 'Âm nhạc cảm xúc, bùng nổ trong phần tiệc', icon: Confetti },
    { title: 'Year End Party (Tất niên)', desc: 'Đáp ứng biểu diễn văn nghệ và ban nhạc sống', icon: Sparkle },
    { title: 'Sự kiện Tiệc Cưới', desc: 'Giai điệu lãng mạn, tôn vinh khoảnh khắc thiêng liêng', icon: Heart },
    { title: 'Sự kiện Doanh Nghiệp', desc: 'Chuẩn quy cách, vận hành an toàn đúng tiến độ', icon: Crown },
    { title: 'Biểu diễn Nghệ thuật', desc: 'Dải tần rộng, âm thanh trung thực cho ca sĩ', icon: MicrophoneStage },
    { title: 'Sự kiện Ngoài trời', desc: 'Công suất lớn, tháp loa delay phủ sóng rộng', icon: Sun },
  ],

  advantages: [
    {
      title: 'Âm thanh chất lượng',
      desc: 'Âm thanh rõ ràng, cân bằng và phù hợp hoàn hảo với diện tích không gian.',
      icon: SpeakerHigh,
    },
    {
      title: 'Thiết bị hiện đại',
      desc: 'Hệ thống thiết bị chính hãng, được kiểm tra kỹ thuật và bảo trì định kỳ.',
      icon: ShieldCheck,
    },
    {
      title: 'Kỹ thuật chuyên nghiệp',
      desc: 'Đội ngũ kỹ thuật viên tay nghề cao trực tiếp khảo sát, setup và vận hành.',
      icon: Wrench,
    },
    {
      title: 'Hỗ trợ xuyên suốt',
      desc: 'Đồng hành từ lúc lên ý tưởng, chuẩn bị cho đến khi chương trình kết thúc.',
      icon: Clock,
    },
  ],

  gallery: [audioHero, imgAudio1, imgAudio2, imgAudio3],
}

export const lightServiceData = {
  id: 'anh-sang',
  slug: 'cho-thue-anh-sang',
  badge: 'DỊCH VỤ CHUYÊN NGHIỆP',
  title: 'CHO THUÊ ÁNH SÁNG SỰ KIỆN',
  slogan: 'Tạo nên không gian – nâng tầm cảm xúc',
  heroImage: lightHero,
  introHeading: 'Thiết Kế Ánh Sáng Nghệ Thuật Đẳng Cấp & Ấn Tượng',
  introText1:
    'Một hệ thống ánh sáng được thiết kế phù hợp sẽ giúp sân khấu nổi bật, tạo điểm nhấn cho chương trình và mang lại trải nghiệm ấn tượng cho khách tham dự.',
  introText2:
    'Tùy vào concept và quy mô sự kiện, đội ngũ Thành Nam Sự Kiện sẽ thiết kế hệ thống ánh sáng phù hợp từ đơn giản, tinh tế đến những sân khấu cần hiệu ứng mạnh và chuyên nghiệp.',
  introText3:
    'Chúng tôi cung cấp đầy đủ các loại đèn sân khấu công nghệ mới nhất kết hợp khung Truss nhôm chịu lực an toàn chuẩn quốc tế.',

  brands: ['GrandMA', 'Tiger Touch', 'Martin', 'Clay Paky', 'Beam 230/380', 'Par LED 54', 'DMX Control'],

  equipmentList: [
    { name: 'ĐÈN BEAM CHUYỂN ĐỘNG', desc: 'Luồng sáng mạnh mẽ quét không gian, tạo hiệu ứng mở màn hoành tráng', icon: Sun },
    { name: 'ĐÈN MOVING HEAD SPOT & WASH', desc: 'Đổi màu mượt mà, rọi họa tiết gobo 3D lên sân khấu và khán phòng', icon: Sparkle },
    { name: 'ĐÈN PAR LED NHUỘM MÀU', desc: 'Tạo tone màu chủ đạo theo nhận diện thương hiệu của doanh nghiệp', icon: Lightbulb },
    { name: 'ĐÈN PAR COB ÁNH SÁNG MẶT', desc: 'Chiếu sáng khuôn mặt MC/diễn giả tự nhiên, tươi tắn khi quay phim 4K', icon: Eye },
    { name: 'ĐÈN BLINDER CHIẾU KHÁN GIẢ', desc: 'Tạo khoảnh khắc bùng nổ, tương tác sôi động giữa ca sĩ và khách mời', icon: Lightning },
    { name: 'ĐÈN FOLLOW SPOT TIÊU ĐIỂM', desc: 'Rọi theo từng bước chân của nhân vật chính từ cửa bước lên sân khấu', icon: Target },
    { name: 'ĐÈN DAYLIGHT NGOÀI TRỜI', desc: 'Cung cấp ánh sáng trắng cường độ cao cho các sự kiện ban ngày', icon: Sun },
    { name: 'KHUNG TRUSS NHÔM ĐỊNH HÌNH', desc: 'Khung giàn treo đèn chắc chắn, thẩm mỹ, an toàn tuyệt đối', icon: HardDrives },
  ],

  suitableFor: [
    { title: 'Sân khấu Tiệc cưới', desc: 'Ánh sáng lãng mạn, lung linh tôn vinh cô dâu chú rể', icon: Heart },
    { title: 'Gala Dinner & Tri Ân', desc: 'Hiệu ứng đổi màu theo từng tiết mục biểu diễn', icon: Confetti },
    { title: 'Lễ Khai Trương', desc: 'Tươi sáng, trang trọng, thu hút sự chú ý của khách hàng', icon: Gift },
    { title: 'Lễ Hội Âm Nhạc', desc: 'Beam laser quét không gian bùng nổ nhịp điệu', icon: Sparkle },
    { title: 'Hội Thảo & Hội Nghị', desc: 'Ánh sáng rõ ràng, chống mỏi mắt cho người tham dự', icon: PresentationChart },
    { title: 'Sự Kiện Ngoài Trời', desc: 'Khung Truss chịu tải cao, đèn chống nước an toàn', icon: Sun },
  ],

  advantages: [
    {
      title: 'Hiệu ứng thị giác đỉnh cao',
      desc: 'Lập trình visual ánh sáng khớp nối chuẩn xác theo từng tiết mục âm nhạc.',
      icon: Sparkle,
    },
    {
      title: 'Đèn công nghệ mới nhất',
      desc: 'Hệ thống đèn LED tiết kiệm điện, độ sáng cao, không tỏa nhiệt nóng.',
      icon: Lightbulb,
    },
    {
      title: 'Khung giàn an toàn tuyệt đối',
      desc: 'Sử dụng Truss nhôm cao cấp kết hợp pa lăng xích chịu lực chuẩn tải trọng.',
      icon: ShieldCheck,
    },
    {
      title: 'Kỹ thuật viên ánh sáng tài năng',
      desc: 'Điều khiển bàn GrandMA trực tiếp xử lý kịch bản ánh sáng mượt mà.',
      icon: Wrench,
    },
  ],

  gallery: [lightHero, imgLight1, imgLight2, imgLight3],
}

export const ledServiceData = {
  id: 'man-hinh-led',
  slug: 'cho-thue-man-hinh-led',
  badge: 'DỊCH VỤ CHUYÊN NGHIỆP',
  title: 'CHO THUÊ MÀN HÌNH LED',
  slogan: 'Hình ảnh sắc nét – truyền tải nội dung nổi bật',
  heroImage: ledHero,
  introHeading: 'Màn Hình LED Sân Khấu P2.5 - P3.91 Sắc Nét & Hiện Đại',
  introText1:
    'Thành Nam Sự Kiện cung cấp màn hình LED cho hội nghị, sân khấu, khai trương, triển lãm, tiệc cưới và các chương trình ngoài trời.',
  introText2:
    'Hệ thống có thể tùy chỉnh kích thước theo sân khấu và không gian thực tế, đáp ứng nhu cầu trình chiếu video, hình ảnh, slide thuyết trình, livestream và visual động của chương trình.',
  introText3:
    'Trang bị bộ xử lý hình ảnh Processor 4K cao cấp giúp chuyển đổi nguồn tín hiệu mượt mà, không giật lag, màu sắc trung thực tuyệt đối.',

  brands: ['Novastar 4K', 'Module P2.5 Indoor', 'Module P3.91 Outdoor IP65', 'Kailight', 'VDALL', 'Magnimage'],

  equipmentList: [
    { name: 'MÀN HÌNH LED P2.5 / P3.0 INDOOR', desc: 'Độ phân giải siêu mịn, hiển thị rõ nét văn bản và video cự ly gần', icon: HighDefinition },
    { name: 'MÀN HÌNH LED P3.91 OUTDOOR', desc: 'Chống nước IP65, độ sáng trên 4500 nits xem rõ nét dưới ánh nắng', icon: Sun },
    { name: 'BỘ XỬ LÝ HÌNH ẢNH VIDEO PROCESSOR 4K', desc: 'Hỗ trợ chia khung hình, chuyển cảnh mượt mà từ nhiều nguồn camera', icon: Monitor },
    { name: 'CABINET NHÔM ĐÚC SIÊU NHẸ', desc: 'Lắp ghép siêu phẳng, không lộ đường viền nối giữa các tấm LED', icon: HardDrives },
    { name: 'MÀN HÌNH PHỤ CÁNH GÀ (LED WINGS)', desc: 'Mở rộng không gian hiển thị, tăng chiều sâu và độ hoành tráng', icon: SquaresFour },
    { name: 'HỆ THỐNG LIVESTREAM ĐA GÓC MÁY', desc: 'Truyền tín hiệu trực tiếp từ máy quay lên màn hình LED không có độ trễ', icon: DeviceMobile },
  ],

  suitableFor: [
    { title: 'Hội nghị – Hội thảo', desc: 'Trình chiếu slide, biểu đồ, video báo cáo rõ nét từng chi tiết', icon: PresentationChart },
    { title: 'Lễ Khai Trương', desc: 'Hiển thị clip giới thiệu thương hiệu và thông điệp khai lộc', icon: Gift },
    { title: 'Gala Dinner & Tiệc Cưới', desc: 'Trình chiếu visual chuyển động và album ảnh kỷ niệm', icon: Heart },
    { title: 'Sân Khấu Ca Nhạc', desc: 'Background visual động theo từng nhịp điệu bài hát', icon: Sparkle },
    { title: 'Hội Chợ & Triển Lãm', desc: 'Quảng bá sản phẩm thu hút sự chú ý của khách tham quan', icon: Crown },
    { title: 'Sự Kiện Ngoài Trời', desc: 'Màn hình lớn nhìn rõ từ khoảng cách hàng trăm mét', icon: UsersThree },
  ],

  advantages: [
    {
      title: 'Hình ảnh sắc nét',
      desc: 'Màu sắc sống động, độ phân giải cao, tương thích hoàn hảo với mọi tỷ lệ video.',
      icon: HighDefinition,
    },
    {
      title: 'Kích thước linh hoạt',
      desc: 'Tùy biến lắp ghép kích thước theo đúng diện tích sân khấu và số lượng khách.',
      icon: SquaresFour,
    },
    {
      title: 'Thi công nhanh chóng',
      desc: 'Lắp đặt bàn giao hoàn thiện trước giờ chạy thử chương trình tối thiểu 2-4 tiếng.',
      icon: Clock,
    },
    {
      title: 'Kỹ thuật trực vận hành',
      desc: 'Kỹ thuật viên túc trực xuyên suốt chương trình điều khiển visual không lỗi.',
      icon: Wrench,
    },
  ],

  gallery: [ledHero, imgLed1, imgLed2, imgLed3],
}

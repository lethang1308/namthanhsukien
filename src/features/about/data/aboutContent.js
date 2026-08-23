import aboutStageHero from '../../../assets/0959a3ca-785c-438e-8d96-be9ae26ad715.jpg'
import aboutVisionImage from '../../../assets/fc56a9e7-8deb-45c0-b700-b6989b903136.png'
import aboutMissionImage from '../../../assets/2dc36332-eaaf-47a7-8818-37ffb237d2fb.png'
import {
  Clock,
  Crown,
  Handshake,
  Heart,
  Lightbulb,
  ShieldCheck,
} from '@phosphor-icons/react'

export const aboutData = {
  banner: {
    title: 'GIỚI THIỆU',
    eyebrow: 'THÀNH NAM SỰ KIỆN',
    slogan: 'Kiến tạo những sự kiện chuyên nghiệp và đáng nhớ.',
    breadcrumb: 'Trang chủ / Giới thiệu',
  },
  story: {
    tag: 'VỀ THÀNH NAM SỰ KIỆN',
    mainTitle: 'ĐỒNG HÀNH CÙNG MỌI SỰ KIỆN THÀNH CÔNG',
    subTitle: 'Chúng tôi biến ý tưởng thành những sự kiện đẳng cấp và khác biệt',
    paragraphs: [
      'Thành Nam Sự Kiện là đơn vị cung cấp các giải pháp tổ chức sự kiện và cho thuê thiết bị sự kiện chuyên nghiệp hàng đầu.',
      'Chúng tôi cung cấp hệ thống âm thanh, ánh sáng, màn hình LED, sân khấu và các thiết bị phụ trợ đáp ứng đa dạng quy mô chương trình từ hội nghị, khai trương, tiệc cưới, gala dinner đến các sự kiện ngoài trời.',
      'Với đội ngũ kỹ thuật giàu kinh nghiệm cùng hệ thống thiết bị được đầu tư đồng bộ, Thành Nam luôn hướng tới chất lượng, sự chỉn chu và hiệu quả trong từng chương trình.',
      'Hệ thống thiết bị đồng bộ, kỹ thuật viên được đào tạo chuyên sâu và liên tục nâng cấp thiết bị công nghệ tiên tiến.',
    ],
    image: aboutStageHero || aboutMissionImage,
    highlights: [
      {
        title: 'TẬN TÂM',
        desc: 'Luôn lắng nghe và đặt sự hài lòng của khách hàng lên hàng đầu.',
        icon: Heart,
      },
      {
        title: 'SÁNG TẠO',
        desc: 'Ý tưởng độc đáo, kịch bản ấn tượng, giải pháp tối ưu.',
        icon: Lightbulb,
      },
      {
        title: 'CHUYÊN NGHIỆP',
        desc: 'Đội ngũ giàu kinh nghiệm, quy trình chuẩn hóa, vận hành an toàn.',
        icon: Crown,
      },
    ],
  },
  visionMission: {
    vision: {
      tag: 'TẦM NHÌN',
      title: 'Trở thành đối tác sự kiện đáng tin cậy',
      desc: 'Không ngừng cập nhật công nghệ, thiết bị và xu hướng tổ chức sự kiện mới để mang đến những trải nghiệm chuyên nghiệp, hiện đại và khác biệt vượt trội.',
      image: aboutVisionImage,
    },
    mission: {
      tag: 'SỨ MỆNH',
      title: 'Biến mỗi ý tưởng thành sự kiện hoàn chỉnh',
      desc: 'Biến mỗi ý tưởng thành một sự kiện hoàn chỉnh, từ khâu tư vấn, thiết kế, chuẩn bị thiết bị cho đến thi công và vận hành chương trình trọn vẹn.',
      image: aboutMissionImage,
    },
  },
  coreValues: [
    {
      id: 1,
      title: 'CHUYÊN NGHIỆP',
      desc: 'Quy trình bài bản, tác phong chuẩn mực, điều phối linh hoạt và xử lý sự cố chuẩn xác trong mọi tình huống.',
      icon: Crown,
    },
    {
      id: 2,
      title: 'SÁNG TẠO',
      desc: 'Không ngừng đổi mới trong ý tưởng kịch bản, thiết kế 2D/3D visual và ứng dụng công nghệ hiệu ứng sân khấu mới.',
      icon: Lightbulb,
    },
    {
      id: 3,
      title: 'TẬN TÂM',
      desc: 'Phục vụ khách hàng bằng cả tâm huyết, tỉ mỉ chỉn chu từng chi tiết nhỏ nhất để tạo nên sự kiện hoàn hảo.',
      icon: Heart,
    },
    {
      id: 4,
      title: 'CHẤT LƯỢNG',
      desc: 'Hệ thống thiết bị âm thanh, ánh sáng, màn hình LED chính hãng cao cấp, vận hành ổn định không lỗi kỹ thuật.',
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: 'ĐÚNG TIẾN ĐỘ',
      desc: 'Setup thi công hoàn tất trước giờ G, cam kết đúng thời gian bàn giao và vận hành chương trình mượt mà.',
      icon: Clock,
    },
    {
      id: 6,
      title: 'ĐỒNG HÀNH CÙNG KHÁCH HÀNG',
      desc: 'Luôn lắng nghe, thấu hiểu và sát cánh cùng quý đối tác từ khâu phác thảo ý tưởng đến khi kết thúc sự kiện.',
      icon: Handshake,
    },
  ],
}

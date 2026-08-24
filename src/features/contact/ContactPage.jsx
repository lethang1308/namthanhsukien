import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CaretDown,
  CaretRight,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  Globe,
  HouseLine,
  MapPin,
  PaperPlaneRight,
  Phone,
  ShieldCheck,
  Sparkle,
} from '@phosphor-icons/react'
import { FadeUpSection } from '../../components/animations/FadeUpSection'
import { ScrollReveal } from '../../components/animations/ScrollReveal'
import { StaggerContainer } from '../../components/animations/StaggerContainer'
import { FloatingContactWidget } from '../../components/FloatingContactWidget'
import { MobileHeader } from '../../components/mobile/MobileHeader'
import { CustomerFeedback } from '../home/components/CustomerFeedback'
import { Footer } from '../home/components/Footer'
import { Header } from '../home/components/Header'
import { contact } from '../home/data/homeContent'

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Trọn gói sự kiện',
    scale: '100 - 300 khách',
    date: '',
    location: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const hotlineDigits = contact.hotline.replace(/\s/g, '')

  const faqs = [
    {
      q: 'Thời gian khảo sát và lắp đặt thiết bị trước sự kiện bao lâu?',
      a: 'Sau khi tiếp nhận yêu cầu, đội ngũ kỹ thuật Thành Nam sẽ liên hệ khảo sát địa điểm trong vòng 12 - 24 giờ. Thời gian thi công lắp đặt và căn chỉnh âm thanh, ánh sáng, màn hình LED luôn hoàn tất trước giờ chạy thử chương trình tối thiểu 2 - 4 tiếng để đảm bảo an toàn tuyệt đối.',
    },
    {
      q: 'Thành Nam Sự Kiện có kỹ thuật viên túc trực xuyên suốt chương trình không?',
      a: 'Có. 100% các gói dịch vụ của Thành Nam đều có kỹ sư âm thanh, kỹ thuật viên ánh sáng và visual màn hình LED chuyên nghiệp túc trực vận hành trực tiếp tại hiện trường từ đầu đến cuối chương trình.',
    },
    {
      q: 'Quy trình đặt dịch vụ và thanh toán như thế nào?',
      a: 'Quy trình gồm 4 bước: (1) Tiếp nhận yêu cầu & khảo sát → (2) Lên phương án cấu hình & báo giá chi tiết → (3) Ký hợp đồng & đặt cọc 30-50% → (4) Triển khai thực hiện, nghiệm thu và thanh toán phần còn lại sau khi sự kiện kết thúc thành công.',
    },
    {
      q: 'Khu vực phục vụ của Thành Nam Sự Kiện ở những đâu?',
      a: 'Chúng tôi phục vụ tổ chức sự kiện và cho thuê thiết bị tại toàn bộ TP. Hồ Chí Minh, Bình Dương, Đồng Nai, Long An, Tây Ninh, Bà Rịa - Vũng Tàu và các tỉnh thành lân cận khu vực phía Nam.',
    },
  ]

  return (
    <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#18181B] selection:bg-[#E5A93C]/30 selection:text-[#780D0D]">
      {/* Desktop Header & Banner */}
      <div className="hidden md:block">
        <div className="relative isolate overflow-hidden bg-[#2D0404] text-white">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.22)_0%,rgba(92,11,11,0.55)_50%,#200303_100%)]"
              aria-hidden="true"
            />
          </div>

          <Header />

          {/* Banner Centered Content */}
          <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:py-16 lg:px-12 text-center flex flex-col items-center justify-center">
            {/* Breadcrumb */}
            <div className="mb-3.5">
              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-medium text-white/85 backdrop-blur-xs"
              >
                <Link to="/" className="hover:text-[#FDE68A] flex items-center gap-1 transition-colors">
                  <HouseLine size={14} weight="bold" />
                  Trang chủ
                </Link>
                <CaretRight size={13} weight="bold" className="text-[#E5A93C]" />
                <span className="font-semibold text-[#E5A93C]">Liên hệ & Báo giá</span>
              </nav>
            </div>

            {/* H1 Title */}
            <h1 className="font-['Montserrat',sans-serif] text-[34px] sm:text-[42px] md:text-[48px] font-black uppercase tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              LIÊN HỆ & TƯ VẤN BÁO GIÁ
            </h1>

            {/* Eyebrow & Slogan */}
            <div className="mt-2">
              <span className="font-['Playfair_Display',serif] text-[20px] sm:text-[24px] font-bold text-[#F0C554] tracking-wide block">
                Thành Nam Sự Kiện
              </span>
              <p
                className="font-script text-[30px] sm:text-[36px] md:text-[40px] text-[#F1C95B] leading-tight select-none mt-1"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Đồng hành cùng mọi sự kiện thành công
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header & Banner */}
      <div className="md:hidden">
        <MobileHeader zIndexClass="z-40" />
        <section className="relative isolate overflow-hidden bg-[#2D0404] px-4 py-8 text-white text-center">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(229,169,60,0.25)_0%,rgba(92,11,11,0.6)_60%,#200303_100%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85">
                <Link to="/" className="hover:text-[#FDE68A]">
                  Trang chủ
                </Link>
                <CaretRight size={11} weight="bold" className="text-[#E5A93C]" />
                <span className="font-bold text-[#E5A93C]">Liên hệ</span>
              </div>
            </div>

            <h1 className="font-['Montserrat',sans-serif] text-[24px] font-black uppercase text-white leading-tight">
              LIÊN HỆ & BÁO GIÁ
            </h1>

            <span className="font-['Playfair_Display',serif] text-[16px] font-bold text-[#F0C554] block mt-1">
              Thành Nam Sự Kiện
            </span>

            <p
              className="font-script text-[26px] leading-tight text-[#F1C95B] my-1"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Đồng hành cùng mọi sự kiện thành công
            </p>
          </div>
        </section>
      </div>

      {/* 1. 4 Main Contact Channels Grid */}
      <FadeUpSection
        id="contact-channels"
        className="bg-white py-14 sm:py-20 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-12" delay={80} duration={750}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
              <Sparkle size={14} weight="fill" className="text-[#D97706]" />
              KẾT NỐI NHANH CHÓNG
            </span>

            <h2 className="mt-3 font-[var(--font-display)] text-[26px] sm:text-[32px] md:text-[38px] font-black uppercase tracking-wide text-[#18181B]">
              CÁC KÊNH LIÊN HỆ TRỰC TIẾP
            </h2>

            <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />

            <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#52525B] max-w-2xl mx-auto leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe, tư vấn tận tâm và giải đáp mọi yêu cầu về thiết bị và kịch bản sự kiện 24/7.
            </p>
          </ScrollReveal>

          {/* 4 Cards */}
          <StaggerContainer
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
            delay={100}
            staggerDelay={70}
          >
            {/* Card 1: Hotline */}
            <a
              href={`tel:${hotlineDigits}`}
              className="group h-full rounded-[18px] border border-[#E8E1D3] bg-[#FFFDF9] p-5 sm:p-5.5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DC2626]/50 hover:shadow-[0_12px_30px_rgba(220,38,38,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="mx-auto mb-3.5 flex h-13 w-13 items-center justify-center rounded-full bg-[#DC2626]/10 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                  <Phone size={26} weight="fill" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626]">
                  HOTLINE 24/7
                </span>
                <h3 className="mt-1 font-['Montserrat',sans-serif] text-[17px] sm:text-[18px] xl:text-[19px] font-black text-[#18181B] group-hover:text-[#DC2626] transition-colors">
                  {contact.hotline}
                </h3>
                <p className="mt-2 text-[12.5px] text-[#52525B] leading-relaxed line-clamp-2">
                  Gọi điện trực tiếp để nhận tư vấn cấu hình và báo giá nhanh nhất.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1 text-[12px] font-bold text-[#DC2626]">
                <span>GỌI NGAY</span>
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Zalo */}
            <a
              href={contact.zalo || `https://zalo.me/${hotlineDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full rounded-[18px] border border-[#E8E1D3] bg-[#FFFDF9] p-5 sm:p-5.5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0068FF]/50 hover:shadow-[0_12px_30px_rgba(0,104,255,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="mx-auto mb-3.5 flex h-13 w-13 items-center justify-center rounded-full bg-[#0068FF]/10 text-[#0068FF] group-hover:bg-[#0068FF] group-hover:text-white transition-colors">
                  <svg className="h-6.5 w-6.5" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M14.5 14h19c4.1 0 7.5 3.4 7.5 7.5v5c0 4.1-3.4 7.5-7.5 7.5H23l-7.5 5.5V34h-1c-4.1 0-7.5-3.4-7.5-7.5v-5c0-4.1 3.4-7.5 7.5-7.5z" />
                  </svg>
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0068FF]">
                  ZALO CHAT
                </span>
                <h3 className="mt-1 font-['Montserrat',sans-serif] text-[17px] sm:text-[18px] xl:text-[19px] font-black text-[#18181B] group-hover:text-[#0068FF] transition-colors">
                  {contact.phone}
                </h3>
                <p className="mt-2 text-[12.5px] text-[#52525B] leading-relaxed line-clamp-2">
                  Nhận file báo giá chi tiết & hình ảnh mẫu sân khấu 3D qua Zalo.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1 text-[12px] font-bold text-[#0068FF]">
                <span>CHAT ZALO</span>
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: Facebook */}
            <a
              href={contact.facebook || 'https://www.facebook.com/Thanhnamsukien'}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full rounded-[18px] border border-[#E8E1D3] bg-[#FFFDF9] p-5 sm:p-5.5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1877F2]/50 hover:shadow-[0_12px_30px_rgba(24,119,242,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="mx-auto mb-3.5 flex h-13 w-13 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                  <FacebookLogo size={26} weight="fill" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1877F2]">
                  FACEBOOK FANPAGE
                </span>
                <h3 className="mt-1 font-['Montserrat',sans-serif] text-[17px] sm:text-[18px] xl:text-[19px] font-black text-[#18181B] group-hover:text-[#1877F2] transition-colors truncate">
                  Thành Nam Sự Kiện
                </h3>
                <p className="mt-2 text-[12.5px] text-[#52525B] leading-relaxed line-clamp-2">
                  Theo dõi các dự án thực tế mới nhất và nhắn tin trực tiếp qua Fanpage.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1 text-[12px] font-bold text-[#1877F2]">
                <span>XEM FANPAGE</span>
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 4: Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group h-full rounded-[18px] border border-[#E8E1D3] bg-[#FFFDF9] p-5 sm:p-5.5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D97706]/50 hover:shadow-[0_12px_30px_rgba(217,119,6,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="mx-auto mb-3.5 flex h-13 w-13 items-center justify-center rounded-full bg-[#D97706]/10 text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                  <EnvelopeSimple size={26} weight="bold" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B45309]">
                  EMAIL HỒ SƠ & BÁO GIÁ
                </span>
                <h3
                  title={contact.email}
                  className="mt-1 font-['Montserrat',sans-serif] text-[13px] sm:text-[13.5px] xl:text-[14px] font-bold text-[#18181B] group-hover:text-[#B45309] transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {contact.email}
                </h3>
                <p className="mt-2 text-[12.5px] text-[#52525B] leading-relaxed line-clamp-2">
                  Tiếp nhận hồ sơ mời thầu và yêu cầu báo giá chính thức cho doanh nghiệp.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1 text-[12px] font-bold text-[#B45309]">
                <span>GỬI EMAIL</span>
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </StaggerContainer>
        </div>
      </FadeUpSection>

      {/* 2. Interactive Form & Location Details */}
      <FadeUpSection
        id="contact-form-section"
        className="bg-gradient-to-b from-[#FBF9F6] via-[#FFFDF9] to-[#FBF9F6] py-16 md:py-24 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: Office Information & Commitments */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="left" duration={750}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-3.5 py-1 text-[11.5px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
                  <MapPin size={14} weight="fill" className="text-[#D97706]" />
                  THÔNG TIN TRỤ SỞ
                </span>

                <h2 className="mt-3 font-['Montserrat',sans-serif] text-[24px] sm:text-[28px] font-black uppercase text-[#18181B] leading-tight">
                  THÀNH NAM SỰ KIỆN
                </h2>

                <p className="mt-2 text-[14px] text-[#52525B] leading-relaxed">
                  Đơn vị cung cấp giải pháp tổ chức sự kiện trọn gói, hệ thống âm thanh ánh sáng, màn hình LED và nhà bạt không gian uy tín hàng đầu.
                </p>

                {/* Details List */}
                <div className="mt-6 space-y-4 rounded-[16px] border border-[#E8E1D3] bg-white p-6 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                      <MapPin size={20} weight="fill" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
                        Địa chỉ trụ sở chính
                      </span>
                      <p className="text-[13.5px] font-bold text-[#18181B] mt-0.5 leading-snug">
                        {contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-gray-100">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                      <Clock size={20} weight="fill" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
                        Thời gian làm việc
                      </span>
                      <p className="text-[13.5px] font-bold text-[#18181B] mt-0.5">
                        {contact.hours} (Thứ Hai – Chủ Nhật)
                      </p>
                      <span className="text-[11.5px] text-[#B45309] font-semibold block mt-0.5">
                        * Kỹ thuật viên trực hỗ trợ 24/7 trong thời gian diễn ra sự kiện
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-3 border-t border-gray-100">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                      <Globe size={20} weight="bold" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
                        Khu vực phục vụ trọng điểm
                      </span>
                      <p className="text-[13px] text-[#3F3F46] mt-0.5 leading-relaxed">
                        TP. Hồ Chí Minh, Bình Dương, Đồng Nai, Long An, Tây Ninh và các tỉnh thành phía Nam.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commitments Box */}
                <div className="mt-6 rounded-[16px] bg-gradient-to-br from-[#2D0404] to-[#180202] border border-[#E5A93C]/40 p-6 text-white shadow-md">
                  <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#FDE68A] block mb-3 flex items-center gap-1.5">
                    <ShieldCheck size={16} weight="fill" className="text-[#E5A93C]" />
                    CAM KẾT DỊCH VỤ TỪ THÀNH NAM
                  </span>
                  <div className="space-y-2 text-[12.5px] text-gray-200">
                    <p className="flex items-center gap-2">
                      <CheckCircle size={15} weight="fill" className="text-[#E5A93C] shrink-0" />
                      Khảo sát mặt bằng & tư vấn cấu hình chuẩn xác miễn phí.
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle size={15} weight="fill" className="text-[#E5A93C] shrink-0" />
                      Báo giá minh bạch, bóc tách chi tiết, không phát sinh chi phí.
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle size={15} weight="fill" className="text-[#E5A93C] shrink-0" />
                      Thiết bị đồng bộ, kiểm tra kỹ thuật và bàn giao trước giờ G.
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle size={15} weight="fill" className="text-[#E5A93C] shrink-0" />
                      Đội ngũ kỹ thuật viên tay nghề cao trực vận hành 100%.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" duration={750}>
                <div className="rounded-[20px] border border-[#E8E1D3] bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7D0D0D]/10 text-[#7D0D0D]">
                        <CheckCircle size={44} weight="fill" className="text-[#D97706]" />
                      </div>
                      <h3 className="font-['Montserrat',sans-serif] text-[22px] font-black uppercase text-[#18181B]">
                        GỬI YÊU CẦU THÀNH CÔNG!
                      </h3>
                      <p className="mt-2 text-[14.5px] text-[#52525B] max-w-md mx-auto leading-relaxed">
                        Cảm ơn bạn đã quan tâm đến dịch vụ của <strong>Thành Nam Sự Kiện</strong>. Đội ngũ chuyên viên tư vấn sẽ liên hệ lại với bạn qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15 phút.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            eventType: 'Trọn gói sự kiện',
                            scale: '100 - 300 khách',
                            date: '',
                            location: '',
                            notes: '',
                          })
                        }}
                        className="mt-6 inline-flex items-center justify-center rounded-[8px] bg-[#7D0D0D] px-6 py-2.5 text-[13px] font-bold uppercase text-white shadow-md hover:bg-[#911313] transition-colors"
                      >
                        Gửi yêu cầu khác
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-6">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-3.5 py-1 text-[11.5px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
                          <PaperPlaneRight size={14} weight="fill" className="text-[#D97706]" />
                          FORM ĐĂNG KÝ BÁO GIÁ
                        </span>
                        <h3 className="mt-2 font-['Montserrat',sans-serif] text-[22px] sm:text-[25px] font-black uppercase text-[#18181B]">
                          GỬI YÊU CẦU TƯ VẤN SỰ KIỆN
                        </h3>
                        <p className="mt-1 text-[13.5px] text-[#52525B]">
                          Điền thông tin sự kiện của bạn vào biểu mẫu bên dưới, chúng tôi sẽ lập bảng dự toán chi tiết và gửi lại ngay.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-[12.5px] font-bold text-[#18181B] mb-1">
                              Họ và tên của bạn <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Nguyễn Văn A"
                                className="w-full rounded-[8px] border border-[#E8E1D3] bg-[#FFFDF9] px-3.5 py-2.5 text-[13.5px] text-[#18181B] placeholder-gray-400 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[12.5px] font-bold text-[#18181B] mb-1">
                              Số điện thoại / Zalo <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="0938 xxx xxx"
                              className="w-full rounded-[8px] border border-[#E8E1D3] bg-[#FFFDF9] px-3.5 py-2.5 text-[13.5px] text-[#18181B] placeholder-gray-400 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-[12.5px] font-bold text-[#18181B] mb-1">
                              Dịch vụ bạn quan tâm
                            </label>
                            <select
                              name="eventType"
                              value={formData.eventType}
                              onChange={handleChange}
                              className="w-full rounded-[8px] border border-[#E8E1D3] bg-[#FFFDF9] px-3.5 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                            >
                              <option value="Trọn gói sự kiện">Tổ chức sự kiện trọn gói</option>
                              <option value="Cho thuê âm thanh">Cho thuê âm thanh sự kiện</option>
                              <option value="Cho thuê ánh sáng">Cho thuê ánh sáng sân khấu</option>
                              <option value="Cho thuê màn hình LED">Cho thuê màn hình LED</option>
                              <option value="Lễ Khai trương - Khánh thành">Lễ Khai trương – Khánh thành</option>
                              <option value="Tiệc Tất niên - Gala Dinner">Tiệc Tất niên – Gala Dinner</option>
                              <option value="Hội nghị - Hội thảo">Hội nghị – Hội thảo</option>
                              <option value="Sự kiện Tiệc Cưới">Sự kiện Tiệc Cưới</option>
                              <option value="Khác">Hạng mục khác</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[12.5px] font-bold text-[#18181B] mb-1">
                              Quy mô khách dự kiến
                            </label>
                            <select
                              name="scale"
                              value={formData.scale}
                              onChange={handleChange}
                              className="w-full rounded-[8px] border border-[#E8E1D3] bg-[#FFFDF9] px-3.5 py-2.5 text-[13.5px] text-[#18181B] focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                            >
                              <option value="Dưới 100 khách">Dưới 100 khách (Sự kiện nhỏ)</option>
                              <option value="100 - 300 khách">100 – 300 khách (Vừa)</option>
                              <option value="300 - 500 khách">300 – 500 khách (Lớn)</option>
                              <option value="500 - 1000 khách">500 – 1000 khách (Quy mô lớn)</option>
                              <option value="Trên 1000 khách">Trên 1000 khách (Đại tiệc / Lễ hội)</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-[12.5px] font-bold text-[#18181B] mb-1">
                              Ngày tổ chức dự kiến
                            </label>
                            <input
                              type="text"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              placeholder="VD: 15/12/2026"
                              className="w-full rounded-[8px] border border-[#E8E1D3] bg-[#FFFDF9] px-3.5 py-2.5 text-[13.5px] text-[#18181B] placeholder-gray-400 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                            />
                          </div>

                          <div>
                            <label className="block text-[12.5px] font-bold text-[#18181B] mb-1">
                              Địa điểm tổ chức (Quận/Tỉnh)
                            </label>
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              placeholder="VD: Thuận An, Bình Dương hoặc Quận 1, HCM"
                              className="w-full rounded-[8px] border border-[#E8E1D3] bg-[#FFFDF9] px-3.5 py-2.5 text-[13.5px] text-[#18181B] placeholder-gray-400 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[12.5px] font-bold text-[#18181B] mb-1">
                            Ghi chú yêu cầu chi tiết (nếu có)
                          </label>
                          <textarea
                            name="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Mô tả sơ bộ về không gian trong nhà hay ngoài trời, kích thước sân khấu hoặc các thiết bị cần thuê..."
                            className="w-full rounded-[8px] border border-[#E8E1D3] bg-[#FFFDF9] px-3.5 py-2.5 text-[13.5px] text-[#18181B] placeholder-gray-400 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-[8px] bg-[#7D0D0D] hover:bg-[#911313] py-3.5 text-[13.5px] font-extrabold uppercase tracking-wider text-[#FDE68A] shadow-[0_4px_16px_rgba(125,13,13,0.35)] transition-all duration-200 hover:scale-[1.01] active:translate-y-px flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <PaperPlaneRight size={18} weight="fill" />
                          GỬI YÊU CẦU BÁO GIÁ NGAY
                        </button>

                        <p className="text-center text-[11.5px] text-gray-500">
                          🔒 Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi sẽ không chia sẻ cho bất kỳ bên thứ ba nào.
                        </p>
                      </form>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* 3. FAQ Section */}
      <FadeUpSection
        id="contact-faq"
        className="bg-white py-16 md:py-24 border-b border-[#E8E1D3]"
        duration={800}
      >
        <div className="mx-auto max-w-[900px] px-6 sm:px-8">
          <ScrollReveal className="text-center mb-12" delay={80} duration={750}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7D0D0D]/10 px-4 py-1 text-[12px] font-extrabold uppercase tracking-widest text-[#9E1C1C]">
              <ShieldCheck size={14} weight="fill" className="text-[#D97706]" />
              GIẢI ĐÁP THẮC MẮC
            </span>

            <h2 className="mt-3 font-[var(--font-display)] text-[24px] sm:text-[30px] md:text-[34px] font-black uppercase text-[#18181B]">
              CÂU HỎI THƯỜNG GẶP
            </h2>

            <div className="mx-auto my-3.5 h-[3px] w-20 bg-gradient-to-r from-[#D97706] to-[#E5A93C] rounded-full" />
          </ScrollReveal>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[14px] border border-[#E8E1D3] bg-[#FFFDF9] shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-['Montserrat',sans-serif] text-[14.5px] sm:text-[15.5px] font-bold text-[#18181B] hover:text-[#7D0D0D] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <CaretDown
                      size={18}
                      weight="bold"
                      className={`shrink-0 transition-transform duration-200 text-[#D97706] ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-[13.5px] text-[#52525B] leading-relaxed border-t border-gray-100 pt-3 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </FadeUpSection>

      {/* Customer Feedback */}
      <CustomerFeedback />

      {/* Footer */}
      <Footer />

      {/* Floating Contact Widget */}
      <FloatingContactWidget />
    </div>
  )
}

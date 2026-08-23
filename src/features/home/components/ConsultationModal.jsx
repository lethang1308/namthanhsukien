import { useState } from 'react'
import { CheckCircle, Phone, Sparkle, X } from '@phosphor-icons/react'
import { contact, serviceCards } from '../data/homeContent'

export function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'LỄ KHAI TRƯƠNG',
    date: '',
    guests: '',
    note: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[20px] bg-[#1A0606] border-2 border-[#E5A93C]/40 p-6 md:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#780D0D] transition-colors"
          aria-label="Đóng form"
        >
          <X size={18} weight="bold" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle size={64} weight="fill" className="mx-auto text-[#E5A93C]" />
            <h3 className="mt-4 font-[var(--font-display)] text-[22px] font-bold text-white">
              Đăng Ký Thành Công!
            </h3>
            <p className="mt-2 text-[14px] text-gray-300 max-w-sm mx-auto">
              Chuyên viên tư vấn của Nam Thành Sự Kiện sẽ liên hệ lại với bạn trong vòng 15 phút.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1 text-[12px] font-extrabold uppercase tracking-widest text-[#E5A93C]">
                <Sparkle size={14} weight="fill" />
                ĐĂNG KÝ TƯ VẤN & BÁO GIÁ
              </span>
              <h3 className="mt-1 font-[var(--font-display)] text-[22px] sm:text-[25px] font-black uppercase text-white">
                Nam Thành Sự Kiện
              </h3>
              <p className="mt-1 text-[13px] text-gray-300">
                Nhận giải pháp trọn gói và bảng dự toán chi phí chi tiết miễn phí
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[12.5px] font-semibold text-gray-200 mb-1">
                  Họ và tên của bạn <span className="text-[#E5A93C]">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn Nam"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-[8px] bg-white/10 border border-white/20 px-3.5 py-2.5 text-[14px] text-white placeholder:text-gray-400 focus:border-[#E5A93C] focus:outline-none focus:ring-1 focus:ring-[#E5A93C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12.5px] font-semibold text-gray-200 mb-1">
                    Số điện thoại <span className="text-[#E5A93C]">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="Ví dụ: 0988123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-[8px] bg-white/10 border border-white/20 px-3.5 py-2.5 text-[14px] text-white placeholder:text-gray-400 focus:border-[#E5A93C] focus:outline-none focus:ring-1 focus:ring-[#E5A93C]"
                  />
                </div>
                <div>
                  <label className="block text-[12.5px] font-semibold text-gray-200 mb-1">
                    Loại sự kiện
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-[8px] bg-[#2A0808] border border-white/20 px-3 py-2.5 text-[13.5px] text-white focus:border-[#E5A93C] focus:outline-none"
                  >
                    {serviceCards.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12.5px] font-semibold text-gray-200 mb-1">
                    Ngày dự kiến
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-[8px] bg-white/10 border border-white/20 px-3 py-2 text-[13.5px] text-white focus:border-[#E5A93C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12.5px] font-semibold text-gray-200 mb-1">
                    Số lượng khách dự kiến
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 100 - 300 khách"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full rounded-[8px] bg-white/10 border border-white/20 px-3.5 py-2 text-[13.5px] text-white placeholder:text-gray-400 focus:border-[#E5A93C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-gray-200 mb-1">
                  Yêu cầu thêm / Địa điểm
                </label>
                <textarea
                  rows={2}
                  placeholder="Ghi chú về địa điểm, quy mô hoặc ngân sách mong muốn..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full rounded-[8px] bg-white/10 border border-white/20 px-3.5 py-2 text-[13.5px] text-white placeholder:text-gray-400 focus:border-[#E5A93C] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-[8px] bg-gradient-to-r from-[#D97706] via-[#E5A93C] to-[#D97706] bg-[length:200%_auto] py-3.5 text-[14px] font-extrabold uppercase tracking-wider text-[#140303] shadow-[0_6px_20px_rgba(217,119,6,0.4)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_8px_25px_rgba(229,169,60,0.6)]"
              >
                GỬI YÊU CẦU TƯ VẤN NGAY
              </button>

              <div className="text-center pt-2">
                <a
                  href={`tel:${contact.hotline.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E5A93C] hover:underline"
                >
                  <Phone size={15} weight="bold" />
                  Hoặc gọi hotline trực tiếp: {contact.hotline}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

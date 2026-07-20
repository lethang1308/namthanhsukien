import { Clock, FishSimple, MapPin, Phone } from '@phosphor-icons/react'

export function MobileHeader({ zIndexClass = 'z-40' }) {
  return (
    <header
      className={`sticky top-0 ${zIndexClass} border-b border-[#B88935]/40 bg-[linear-gradient(135deg,#07583B,#063E2B)] px-3 py-2 text-white shadow-[0_14px_30px_rgba(6,62,43,0.18)]`}
    >
      <div className="mx-auto flex h-10 max-w-[760px] items-center gap-2.5">
        <a href="#home" className="flex min-w-0 shrink-0 items-center gap-2" aria-label="Chả Cá Tràng An">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#D3B87E]/70 bg-[radial-gradient(circle_at_45%_35%,rgba(211,184,126,0.2),rgba(6,62,43,0.2)_48%,rgba(4,35,25,0.42))] text-[#D3B87E] shadow-[0_8px_18px_rgba(5,38,25,0.2)]">
            <FishSimple size={20} weight="fill" />
          </span>
          <span className="font-[var(--font-display)] text-[12px] font-bold leading-[1.05] tracking-[0.04em] text-[#F8E7B9] max-[374px]:text-[11px]">
            <span className="whitespace-nowrap">CHẢ CÁ</span>
            <br />
            <span className="whitespace-nowrap">TRÀNG AN</span>
          </span>
        </a>

        <div
          className="flex min-w-0 flex-1 items-center justify-end gap-1.5 text-[#fffaf1] min-[390px]:gap-2"
          aria-label="Thông tin nhà hàng"
        >
          <div className="flex min-w-0 items-center gap-1.5 border-r border-[#B88935]/30 pr-1.5 min-[390px]:pr-2">
            <MapPin size={13} weight="regular" className="shrink-0 text-[#D3B87E]" />
            <span className="min-w-0 truncate text-[8.5px] font-medium leading-none text-[#fffaf1]/88 min-[390px]:text-[9px] min-[430px]:text-[10px]">
              <span className="max-[429px]:hidden">Số 7, Liền kề 4, KĐT Tân Tây Đô, Hà Nội</span>
              <span className="min-[430px]:hidden">Số 7, LK4, Tân Tây Đô</span>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <Clock size={13} weight="regular" className="shrink-0 text-[#D3B87E]" />
            <span className="whitespace-nowrap text-[8.5px] font-medium leading-none text-[#fffaf1]/88 min-[390px]:text-[9px] min-[430px]:text-[10px]">
              10:00 - 22:00
              <span className="hidden min-[430px]:inline"> (Tất cả các ngày)</span>
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <a
            href="tel:0961374566"
            className="grid h-8 w-8 place-items-center rounded-full border border-[#D3B87E]/60 text-[#D3B87E] shadow-[inset_0_1px_0_rgba(255,250,241,0.08)] active:translate-y-px"
            aria-label="Gọi điện 0961 374 566"
          >
            <Phone size={16} weight="regular" />
          </a>
        </div>
      </div>
    </header>
  )
}

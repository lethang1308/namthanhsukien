import { FishSimple, List } from '@phosphor-icons/react'

export function MobileHeader({ zIndexClass = 'z-40' }) {
  return (
    <header
      className={`sticky top-0 ${zIndexClass} border-b border-[rgba(211,184,126,0.34)] bg-[linear-gradient(135deg,#07583B,#063E2B)] px-5 py-3.5 text-white shadow-[0_14px_30px_rgba(6,62,43,0.18)]`}
    >
      <div className="mx-auto flex max-w-[480px] items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Chả Cá Tràng An">
          <span className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--color-gold)] bg-[var(--color-green)] text-[var(--color-gold)] shadow-[0_8px_18px_rgba(5,38,25,0.18)]">
            <FishSimple size={27} weight="fill" />
          </span>
          <span className="font-[var(--font-display)] text-[17px] font-bold leading-[1.08] tracking-[0.04em] text-[#F8E7B9]">
            CHẢ CÁ
            <br />
            TRÀNG AN
          </span>
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-[#fffaf1] active:translate-y-px"
          aria-label="Mở menu"
        >
          <List size={34} weight="regular" />
        </button>
      </div>
    </header>
  )
}

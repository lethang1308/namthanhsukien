import { FishSimple } from '@phosphor-icons/react'

export function BrandMark({ compact = false, markClassName = '' }) {
  const markSizeClassName = markClassName || (compact ? 'h-14 w-14' : 'h-[68px] w-[68px]')

  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid shrink-0 place-items-center border border-[var(--color-gold)] bg-[var(--color-green)] text-[var(--color-gold)] shadow-[0_10px_24px_rgba(10,58,36,0.14)] ${
          markSizeClassName
        }`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center leading-none">
          <FishSimple size={compact ? 22 : 26} weight="fill" />
          <span className="mt-1 font-[var(--font-display)] text-[9px] font-bold leading-[1.05]">
            CHẢ CÁ
          </span>
          <span className="font-[var(--font-display)] text-[9px] font-bold leading-[1.05]">
            TRÀNG AN
          </span>
        </div>
      </div>
      {!compact && (
        <div className="hidden leading-tight sm:block">
          <p className="font-[var(--font-display)] text-xl font-bold tracking-[0.05em] text-[var(--color-green)]">
            CHẢ CÁ
          </p>
          <p className="font-[var(--font-display)] text-xl font-bold tracking-[0.05em] text-[var(--color-green)]">
            TRÀNG AN
          </p>
        </div>
      )}
    </div>
  )
}

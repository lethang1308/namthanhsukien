import { Phone } from '@phosphor-icons/react'
import { BrandMark } from '../BrandMark'
import { contact } from '../../features/home/data/homeContent'

export function MobileHeader({ zIndexClass = 'z-40' }) {
  return (
    <header
      className={`sticky top-0 ${zIndexClass} border-b border-[#E5A93C]/40 bg-gradient-to-r from-[#2A0505] via-[#1A0303] to-[#2A0505] px-3 py-2 text-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] backdrop-blur-md`}
    >
      <div className="mx-auto flex h-11 max-w-[760px] items-center justify-between gap-2">
        <a href="#home" className="flex min-w-0 shrink-0 items-center gap-2" aria-label="Nam Thành Sự Kiện">
          <BrandMark compact markClassName="h-9 w-9" lightText={true} />
        </a>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${contact.hotline.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D97706] to-[#E5A93C] px-3 py-1.5 text-[12px] font-extrabold uppercase text-[#140202] shadow-md active:translate-y-px"
            aria-label={`Hotline ${contact.hotline}`}
          >
            <Phone size={14} weight="fill" />
            <span>{contact.hotline}</span>
          </a>
        </div>
      </div>
    </header>
  )
}

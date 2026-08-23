import { Phone } from '@phosphor-icons/react'
import { contact } from '../features/home/data/homeContent'

export function FloatingContactWidget() {
  const hotlineDigits = contact.hotline.replace(/\s/g, '')
  const zaloUrl = contact.zalo || `https://zalo.me/${hotlineDigits}`

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3.5 select-none pointer-events-auto">
      {/* Zalo Floating Button */}
      <a
        href={zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo Nam Thành Sự Kiện"
        className="group relative flex items-center justify-center"
      >
        {/* Pulsing Ripple Rings */}
        <span
          className="absolute h-[62px] w-[62px] rounded-full bg-[#0068FF]/35 animate-wave-pulse pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute h-[74px] w-[74px] rounded-full bg-[#0068FF]/20 animate-wave-pulse pointer-events-none"
          style={{ animationDelay: '0.6s' }}
          aria-hidden="true"
        />

        {/* Inner Button Circle with Shake Animation */}
        <div className="relative flex h-[50px] w-[50px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-[#0068FF] text-white shadow-[0_6px_20px_rgba(0,104,255,0.55)] transition-transform duration-300 group-hover:scale-110">
          <div className="animate-vibrate flex items-center justify-center">
            <svg
              className="h-7 w-7 sm:h-8 sm:w-8"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M14.5 14h19c4.1 0 7.5 3.4 7.5 7.5v5c0 4.1-3.4 7.5-7.5 7.5H23l-7.5 5.5V34h-1c-4.1 0-7.5-3.4-7.5-7.5v-5c0-4.1 3.4-7.5 7.5-7.5z"
              />
              <path
                fill="#0068FF"
                d="M14.5 28.5c.2-.4 3.8-5.3 3.8-5.3h-3.6v-2.1h6.2v1.5c-.2.3-3.8 5.3-3.8 5.3h4.2v2.1h-6.8v-1.5zm8.1-1.4c0-2 1.1-3.6 2.9-3.6 1.8 0 2.9 1.6 2.9 3.6 0 2-1.1 3.6-2.9 3.6-1.8 0-2.9-1.6-2.9-3.6zm4.1 0c0-1.1-.5-2-1.2-2s-1.2.9-1.2 2 .5 2 1.2 2 1.2-.9 1.2-2zm3.3 3.2v-7.3h1.9v7.3H30zm4.5-1.4c0-2 1.1-3.6 2.9-3.6 1.8 0 2.9 1.6 2.9 3.6 0 2-1.1 3.6-2.9 3.6-1.8 0-2.9-1.6-2.9-3.6zm4.1 0c0-1.1-.5-2-1.2-2s-1.2.9-1.2 2 .5 2 1.2 2 1.2-.9 1.2-2z"
              />
            </svg>
          </div>
        </div>

        {/* Hover Tooltip Label */}
        <span className="pointer-events-none absolute right-[64px] hidden whitespace-nowrap rounded-[6px] bg-[#0068FF] px-3 py-1.5 text-[12px] font-bold text-white shadow-lg sm:group-hover:block transition-all animate-fade-in">
          Chat Zalo: {contact.hotline}
        </span>
      </a>

      {/* Phone Floating Button */}
      <a
        href={`tel:${hotlineDigits}`}
        aria-label="Gọi điện Nam Thành Sự Kiện"
        className="group relative flex items-center justify-center"
      >
        {/* Pulsing Ripple Rings */}
        <span
          className="absolute h-[62px] w-[62px] rounded-full bg-[#DC2626]/35 animate-wave-pulse pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute h-[74px] w-[74px] rounded-full bg-[#DC2626]/20 animate-wave-pulse pointer-events-none"
          style={{ animationDelay: '0.6s' }}
          aria-hidden="true"
        />

        {/* Inner Button Circle with Shake Animation */}
        <div className="relative flex h-[50px] w-[50px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-gradient-to-tr from-[#DC2626] to-[#EF4444] text-white shadow-[0_6px_20px_rgba(220,38,38,0.55)] transition-transform duration-300 group-hover:scale-110">
          <div className="animate-vibrate flex items-center justify-center">
            <Phone size={26} weight="fill" />
          </div>
        </div>

        {/* Hover Tooltip Label */}
        <span className="pointer-events-none absolute right-[64px] hidden whitespace-nowrap rounded-[6px] bg-[#DC2626] px-3 py-1.5 text-[12px] font-bold text-white shadow-lg sm:group-hover:block transition-all animate-fade-in">
          Hotline: {contact.hotline}
        </span>
      </a>
    </div>
  )
}

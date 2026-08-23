export function BrandMark({ compact = false, markClassName = '', lightText = true }) {
  return (
    <div className="flex items-center gap-3.5 select-none group">
      {/* Hexagon Monogram Logo */}
      <div
        className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
          markClassName || (compact ? 'h-[46px] w-[46px]' : 'h-[56px] w-[56px]')
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full drop-shadow-[0_2px_10px_rgba(229,169,60,0.45)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#E5A93C" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="darkHexBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A0505" />
              <stop offset="100%" stopColor="#140202" />
            </linearGradient>
          </defs>

          {/* Outer Hexagon */}
          <polygon
            points="50,3 93,26.5 93,73.5 50,97 7,73.5 7,26.5"
            fill="url(#darkHexBg)"
            stroke="url(#goldHexGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Hexagon Outline */}
          <polygon
            points="50,9 87,30 87,70 50,91 13,70 13,30"
            fill="none"
            stroke="url(#goldHexGrad)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.85"
          />

          {/* Monogram NT */}
          <text
            x="50"
            y="61"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="34"
            fontWeight="800"
            fill="url(#goldHexGrad)"
            letterSpacing="-0.5"
          >
            NT
          </text>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="leading-none flex flex-col justify-center">
        <span
          className="font-['Playfair_Display',Georgia,serif] text-[24px] md:text-[26px] font-bold tracking-tight text-[#E5A93C] drop-shadow-sm leading-tight"
        >
          Nam Thành
        </span>
        <span
          className={`text-[12.5px] md:text-[13px] font-black tracking-[0.22em] mt-0.5 uppercase ${
            lightText ? 'text-[#E5A93C]' : 'text-[#7D0D0D]'
          }`}
        >
          SỰ KIỆN
        </span>
      </div>
    </div>
  )
}

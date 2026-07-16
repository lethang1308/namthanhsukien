export function SectionTitle({ script, title, icon, action }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-4">
      <div>
        {script && (
          <p className="font-script mb-1 text-2xl leading-[1.25] text-[var(--color-green)]">
            {script}
          </p>
        )}
        <h2 className="flex items-center gap-2 font-[var(--font-display)] text-[21px] font-bold leading-tight text-[var(--color-green)] md:text-[25px]">
          {title}
          {icon}
        </h2>
      </div>
      {action}
    </div>
  )
}

export function SectionTitle({ script, title, action }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {script && (
          <p className="font-script mb-1 text-2xl leading-[1.25] text-[var(--color-green)]">
            {script}
          </p>
        )}
        <h2 className="font-[var(--font-display)] text-2xl font-bold leading-tight text-[var(--color-green)] md:text-3xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  )
}

import type { ReactNode } from 'react'

export default function ContentSection({
  title,
  children,
  id,
}: {
  title?: string
  children: ReactNode
  id?: string
}) {
  return (
    <section id={id} className="py-6 border-b border-gov-line last:border-b-0">
      {title && (
        <h2 className="font-serif-gov text-xl sm:text-2xl font-bold text-navy-900 mb-3">{title}</h2>
      )}
      <div className="space-y-3 text-[15px] leading-relaxed text-gray-800">{children}</div>
    </section>
  )
}

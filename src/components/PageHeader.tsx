import type { ReactNode } from 'react'
import { useEffect } from 'react'
import Breadcrumbs, { type Crumb } from './Breadcrumbs'

export default function PageHeader({
  title,
  intro,
  trail,
  pageTitle,
}: {
  title: string
  intro?: ReactNode
  trail: Crumb[]
  pageTitle: string
}) {
  useEffect(() => {
    document.title = `${pageTitle} | East Carolina Board of Pharmacy`
  }, [pageTitle])

  return (
    <>
      <Breadcrumbs trail={trail} />
      <div className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="font-serif-gov text-3xl sm:text-4xl font-bold">{title}</h1>
          {intro && <p className="mt-3 max-w-3xl text-gray-200 text-[15px] leading-relaxed">{intro}</p>}
        </div>
      </div>
    </>
  )
}

import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  label: string
  path?: string
}

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items: Crumb[] = [{ label: 'Home', path: '/' }, ...trail]

  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-gov-line">
      <ol className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center gap-1 text-xs text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && <ChevronRight size={12} className="text-gray-400" />}
              {item.path && !isLast ? (
                <Link to={item.path} className="gov-link">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={isLast ? 'text-navy-900 font-semibold' : ''}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

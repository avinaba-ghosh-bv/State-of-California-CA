import { useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import { searchIndex } from '../data/navigation'

export default function SearchResults() {
  const [params] = useSearchParams()
  const q = params.get('q')?.trim() ?? ''

  useEffect(() => {
    document.title = 'Search Results | East Carolina Board of Pharmacy'
  }, [])

  const results = useMemo(() => {
    if (!q) return searchIndex
    const lower = q.toLowerCase()
    return searchIndex.filter(
      (page) =>
        page.title.toLowerCase().includes(lower) ||
        page.keywords.some((k) => k.includes(lower)) ||
        lower.split(/\s+/).some((term) => page.keywords.some((k) => k.includes(term))),
    )
  }, [q])

  return (
    <div>
      <PageHeader
        pageTitle="Search Results"
        title="Search Results"
        trail={[{ label: 'Search' }]}
        intro={q ? `Showing results for "${q}"` : 'Browse all pages on the East Carolina Board of Pharmacy website.'}
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          {results.length === 0 ? (
            <p>No results found. Try a different search term.</p>
          ) : (
            <ul className="space-y-3">
              {results.map((page) => (
                <li key={page.path} className="border-b border-gov-line pb-3">
                  <Link to={page.path} className="gov-link font-semibold">
                    {page.title}
                  </Link>
                  <p className="text-xs text-gray-500">{page.section}</p>
                </li>
              ))}
            </ul>
          )}
        </ContentSection>
      </div>
    </div>
  )
}

import { useState, type FormEvent } from 'react'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function LicenseSearch() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSearched(true)
  }

  return (
    <div>
      <PageHeader
        pageTitle="Search for a License"
        title="Search for a License"
        trail={[{ label: 'Consumers', path: '/consumers' }, { label: 'Search for a License' }]}
        intro="Search for an active pharmacist, pharmacy technician, or intern pharmacist license."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-xl">
            <label htmlFor="license-query" className="sr-only">
              Licensee name or license number
            </label>
            <input
              id="license-query"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Licensee name or license number"
              className="flex-1 border border-gov-line px-3 py-2 text-sm"
            />
            <button type="submit" className="bg-navy-900 text-white px-5 py-2 text-sm font-semibold hover:bg-navy-800">
              Search
            </button>
          </form>
          {searched && (
            <p className="mt-4 text-sm text-gray-700">
              This is a demonstration search. In a live system, results for "{query}" would be
              retrieved from the Board's license database.
            </p>
          )}
        </ContentSection>
      </div>
    </div>
  )
}

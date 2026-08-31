import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search as SearchIcon } from 'lucide-react'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="flex items-stretch">
      <label htmlFor="site-search" className="sr-only">
        Search the Board of Pharmacy
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search the Board of Pharmacy"
        className="w-40 sm:w-56 border border-gov-line px-2 py-1.5 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
      />
      <button
        type="submit"
        className="bg-gold-600 hover:bg-gold-500 text-white px-3 flex items-center justify-center"
        aria-label="Submit search"
      >
        <SearchIcon size={16} />
      </button>
    </form>
  )
}

import { Link } from 'react-router-dom'
import AccessibilityBar from './AccessibilityBar'
import AgencySelector from './AgencySelector'
import SearchBox from './SearchBox'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header>
      <AccessibilityBar />

      <div className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center justify-between text-xs">
          <span className="tracking-widest uppercase text-gray-300">State of East Carolina</span>
          <AgencySelector />
        </div>
      </div>

      <div className="bg-white border-b-4 border-gold-500">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="Seal of the State of East Carolina"
              className="w-14 h-14 shrink-0"
            />
            <div>
              <div className="text-xs uppercase tracking-wide text-gray-500">State of East Carolina</div>
              <div className="font-serif-gov text-xl sm:text-2xl font-bold text-navy-900 leading-tight">
                East Carolina Board of Pharmacy
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <SearchBox />
            <Link
              to="/contact"
              className="hidden sm:inline text-sm text-navy-700 gov-link whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  )
}

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { agencies } from '../data/agencies'

export default function AgencySelector() {
  const [open, setOpen] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-xs sm:text-sm text-gray-200 hover:text-gold-400"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        East Carolina Board of Pharmacy
        <ChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-72 bg-white text-navy-950 border border-gov-line shadow-lg z-50">
          <div className="px-3 py-2 text-xs uppercase tracking-wide text-gray-500 border-b border-gov-line">
            Select a Licensing Program
          </div>
          <ul role="listbox">
            {agencies.map((agency) => (
              <li key={agency.name}>
                <button
                  type="button"
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gold-100 flex items-center justify-between"
                  onClick={() => {
                    if (agency.active) {
                      setOpen(false)
                    } else {
                      setNotice(agency.name)
                      setOpen(false)
                    }
                  }}
                >
                  <span>{agency.name}</span>
                  {agency.active && <span className="text-[10px] uppercase text-gold-600 font-semibold">Current</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {notice && (
        <div
          role="status"
          className="absolute left-0 mt-2 w-80 bg-navy-900 text-white text-sm p-3 border border-gold-500 shadow-lg z-50"
        >
          <p>
            <strong>{notice}</strong> is available through the Gov Studio platform.
          </p>
          <button
            type="button"
            onClick={() => setNotice(null)}
            className="mt-2 text-xs underline text-gold-400"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  )
}

import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Landmark, Pill, Stethoscope, Smile, PenTool, Flame, Check } from 'lucide-react'
import { agencies } from '../data/agencies'

const icons: Record<string, typeof Pill> = {
  'East Carolina Board of Pharmacy': Pill,
  'East Carolina Board of Nursing': Stethoscope,
  'East Carolina Board of Dental Examiners': Smile,
  'East Carolina Tattoo Artist Licensing': PenTool,
  'East Carolina Explosives Licensing': Flame,
}

export default function AgencySelector() {
  const [open, setOpen] = useState(false)
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
        className={`flex items-center gap-1.5 text-xs sm:text-sm text-gray-200 border border-navy-700 rounded-full pl-2.5 pr-2 py-1 transition-colors ${
          open ? 'bg-navy-800 border-gold-500 text-gold-400' : 'hover:bg-navy-800 hover:border-navy-500'
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Landmark size={14} className="shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">East Carolina Board of Pharmacy</span>
        <span className="sm:hidden">Agencies</span>
        <ChevronDown size={14} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 sm:left-0 mt-2 w-80 bg-white text-navy-950 rounded-lg border border-gov-line shadow-xl overflow-hidden z-50">
          <div className="px-3.5 py-2.5 bg-gov-bg border-b border-gov-line">
            <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
              East Carolina Licensing Programs
            </p>
          </div>
          <ul role="listbox" className="py-1">
            {agencies.map((agency) => {
              const Icon = icons[agency.name] ?? Landmark
              return (
                <li key={agency.name}>
                  <Link
                    to={agency.path ?? '/'}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 text-sm transition-colors ${
                      agency.active ? 'bg-gold-100' : 'hover:bg-gov-bg'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        agency.active ? 'bg-navy-900 text-gold-400' : 'bg-gov-bg text-navy-700'
                      }`}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span className="flex-1 leading-tight">{agency.name}</span>
                    {agency.active && <Check size={16} className="text-gold-600 shrink-0" aria-label="Current site" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

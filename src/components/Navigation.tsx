import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { primaryNav } from '../data/navigation'

export default function Navigation() {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    setOpenSection(null)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSection(null)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <nav ref={navRef} className="bg-navy-800 text-white relative" aria-label="Primary">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-1 sm:hidden">
          <span className="text-sm font-semibold">Menu</span>
          <button type="button" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <ul className={`${mobileOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row`}>
          {primaryNav.map((section) => (
            <li key={section.label} className="relative border-t sm:border-t-0 border-navy-700">
              <button
                type="button"
                onClick={() => setOpenSection((cur) => (cur === section.label ? null : section.label))}
                className="w-full sm:w-auto flex items-center justify-between gap-1 px-4 py-2.5 text-sm font-semibold hover:bg-navy-700 hover:text-gold-400"
                aria-expanded={openSection === section.label}
              >
                {section.label}
                <ChevronDown size={14} />
              </button>
              <ul
                className={`${openSection === section.label ? 'block' : 'hidden'} sm:absolute sm:top-full sm:left-0 sm:w-64 bg-white text-navy-950 border border-gov-line shadow-lg z-40`}
              >
                {section.links.map((link) => (
                  <li key={link.path} className="border-b border-gov-line last:border-b-0">
                    <Link
                      to={link.path}
                      className="block px-4 py-2 text-sm hover:bg-gold-100 hover:text-navy-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

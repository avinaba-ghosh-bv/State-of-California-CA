import { Link } from 'react-router-dom'
import { footerLinks } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-white font-serif-gov font-bold text-lg">State of East Carolina</p>
          <p className="text-white font-serif-gov">East Carolina Board of Pharmacy</p>
          <p className="text-sm mt-3">
            1200 Capitol Avenue
            <br />
            East Carolina City, EC 27501
          </p>
        </div>
        <div>
          <h2 className="text-white text-sm uppercase tracking-wide mb-3">Site Links</h2>
          <ul className="space-y-1.5 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="underline underline-offset-2 hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-sm uppercase tracking-wide mb-3">Contact</h2>
          <p className="text-sm">Phone: (800) 555-0199</p>
          <p className="text-sm">Email: licensing@ecboardpharmacy.gov</p>
          <p className="text-sm mt-2">Monday–Friday, 8:00 AM – 5:00 PM</p>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>&copy; 2026 State of East Carolina. Demo environment.</p>
          <p className="text-gold-400">Professional Licensing Demonstration — Fictional Agency</p>
        </div>
      </div>
    </footer>
  )
}

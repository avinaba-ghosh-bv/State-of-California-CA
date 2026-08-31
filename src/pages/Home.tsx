import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileCheck, RefreshCcw, Search, BookOpen } from 'lucide-react'

const cards = [
  {
    icon: FileCheck,
    title: 'Apply for a License',
    description: 'Learn about requirements and apply for a pharmacist license.',
    path: '/applicants/apply-personal-license',
  },
  {
    icon: RefreshCcw,
    title: 'Renew Your License',
    description: 'Renew an existing East Carolina pharmacy license.',
    path: '/licensees/renew',
  },
  {
    icon: Search,
    title: 'Verify a License',
    description: 'Search for an active pharmacist or pharmacy professional.',
    path: '/licensees/license-verification',
  },
  {
    icon: BookOpen,
    title: 'Board Resources',
    description: 'Access laws, regulations, forms, and licensing information.',
    path: '/about/laws-regulations',
  },
]

const announcements = [
  {
    title: '2026 Pharmacist License Application Updates',
    body: 'The East Carolina Board of Pharmacy has updated its pharmacist licensure application requirements. Applicants should review the current education, examination, background check, and documentation requirements before submitting an application.',
    date: 'August 2026',
  },
  {
    title: 'Continuing Education Reporting Deadline',
    body: 'Licensees renewing in the current cycle must report all continuing education hours prior to submitting a renewal application.',
    date: 'July 2026',
  },
  {
    title: 'Board Meeting Schedule Posted',
    body: 'The Board has posted its meeting schedule for the remainder of the year. See the Meetings page for dates and agendas.',
    date: 'June 2026',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'East Carolina Board of Pharmacy'
  }, [])

  return (
    <div>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-serif-gov text-3xl sm:text-5xl font-bold max-w-3xl">
            East Carolina Board of Pharmacy
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200 text-base sm:text-lg leading-relaxed">
            Protecting the health and safety of the public through the regulation of pharmacy
            practice and the licensing of pharmacists and pharmacy professionals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="border border-gov-line bg-white p-5 hover:border-gold-500 hover:shadow-md transition-shadow block"
            >
              <card.icon className="text-navy-700" size={28} aria-hidden="true" />
              <h2 className="mt-3 font-serif-gov text-lg font-bold text-navy-900">{card.title}</h2>
              <p className="mt-1 text-sm text-gray-700">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gov-bg border-y border-gov-line">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-serif-gov text-2xl font-bold text-navy-900 mb-6">News &amp; Announcements</h2>
          <div className="space-y-5">
            {announcements.map((item) => (
              <article key={item.title} className="bg-white border border-gov-line p-5">
                <p className="text-xs uppercase tracking-wide text-gray-500">{item.date}</p>
                <h3 className="font-serif-gov text-lg font-bold text-navy-900 mt-1">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-serif-gov text-2xl font-bold text-navy-900 mb-4">Quick Links</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <li><Link className="gov-link" to="/applicants/pharmacist-license">Pharmacist License Requirements</Link></li>
          <li><Link className="gov-link" to="/applicants/forms">Forms and Documents</Link></li>
          <li><Link className="gov-link" to="/applicants/fees">Application and Renewal Fees</Link></li>
          <li><Link className="gov-link" to="/consumers/file-complaint">File a Consumer Complaint</Link></li>
          <li><Link className="gov-link" to="/about/board">Board Members</Link></li>
          <li><Link className="gov-link" to="/enforcement/disciplinary-actions">Disciplinary Actions</Link></li>
        </ul>
      </section>
    </div>
  )
}

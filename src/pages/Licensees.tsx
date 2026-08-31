import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

const links = [
  { title: 'Renew a License', path: '/licensees/renew', description: 'Renewal cycle, continuing education, and renewal fee information.' },
  { title: 'Continuing Education', path: '/licensees/continuing-education', description: 'Continuing education hour requirements and reporting.' },
  { title: 'License Verification', path: '/licensees/license-verification', description: 'Request or provide verification of an East Carolina pharmacy license.' },
]

export default function Licensees() {
  return (
    <div>
      <PageHeader
        pageTitle="License Information"
        title="License Information"
        trail={[{ label: 'Licensees' }]}
        intro="Information for individuals who currently hold an East Carolina pharmacy license."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="border border-gov-line p-4 hover:border-gold-500 hover:shadow-sm block">
                <h2 className="font-semibold text-navy-900">{link.title}</h2>
                <p className="text-sm text-gray-700 mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </ContentSection>
      </div>
    </div>
  )
}

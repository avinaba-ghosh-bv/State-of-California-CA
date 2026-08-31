import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

const links = [
  { title: 'Apply for a Personal License', path: '/applicants/apply-personal-license', description: 'Start an application for a pharmacist, pharmacy technician, or intern pharmacist license.' },
  { title: 'Pharmacist License', path: '/applicants/pharmacist-license', description: 'Eligibility, education, examination, experience, and documentation requirements.' },
  { title: 'Pharmacy Technician', path: '/applicants/pharmacy-technician', description: 'Registration requirements for pharmacy technicians.' },
  { title: 'Intern Pharmacist', path: '/applicants/intern-pharmacist', description: 'Registration requirements for intern pharmacists.' },
  { title: 'Application Requirements', path: '/applicants/application-requirements', description: 'Required documents and supporting materials for all applicant types.' },
  { title: 'Forms and Documents', path: '/applicants/forms', description: 'Downloadable application forms and supporting documents.' },
  { title: 'Fees', path: '/applicants/fees', description: 'Application, issuance, and renewal fee schedule.' },
  { title: 'Frequently Asked Questions', path: '/applicants/faq', description: 'Common questions about the licensing process.' },
]

export default function Applicants() {
  return (
    <div>
      <PageHeader
        pageTitle="Applicant Information"
        title="Applicant Information"
        trail={[{ label: 'Applicants' }]}
        intro="Information for individuals applying for a pharmacist, pharmacy technician, or intern pharmacist license in East Carolina."
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

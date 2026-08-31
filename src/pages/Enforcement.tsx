import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function Enforcement() {
  return (
    <div>
      <PageHeader
        pageTitle="Enforcement Information"
        title="Enforcement"
        trail={[{ label: 'Enforcement' }]}
        intro="The East Carolina Board of Pharmacy investigates complaints and takes disciplinary action against licensees who violate applicable laws and regulations."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Enforcement Process">
          <p>
            Complaints received by the Board are reviewed by the Enforcement Division. Investigations
            may result in a range of outcomes, including citation, fine, probation, suspension, or
            revocation of a license.
          </p>
          <Link className="gov-link" to="/enforcement/disciplinary-actions">
            View Disciplinary Actions
          </Link>
        </ContentSection>
      </div>
    </div>
  )
}

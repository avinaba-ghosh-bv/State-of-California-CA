import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function Consumers() {
  return (
    <div>
      <PageHeader
        pageTitle="Consumer Information"
        title="Consumer Information"
        trail={[{ label: 'Consumers' }]}
        intro="Resources for members of the public seeking information about pharmacists and pharmacies licensed in East Carolina."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="For Consumers">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              <Link className="gov-link" to="/consumers/license-search">Search for a License</Link> — verify that a pharmacist or pharmacy professional holds an active East Carolina license.
            </li>
            <li>
              <Link className="gov-link" to="/consumers/file-complaint">File a Complaint</Link> — report a concern about a licensed pharmacist, pharmacy technician, or pharmacy.
            </li>
            <li>
              <Link className="gov-link" to="/enforcement/disciplinary-actions">Disciplinary Actions</Link> — review public disciplinary actions taken by the Board.
            </li>
          </ul>
        </ContentSection>
      </div>
    </div>
  )
}

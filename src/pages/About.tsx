import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function About() {
  return (
    <div>
      <PageHeader
        pageTitle="Board Information"
        title="About the Board"
        trail={[{ label: 'About Us' }]}
        intro="The East Carolina Board of Pharmacy regulates the practice of pharmacy and licenses pharmacists and pharmacy professionals throughout the state."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Mission">
          <p>
            The mission of the East Carolina Board of Pharmacy is to protect the health and safety of
            the public by ensuring that pharmacists and pharmacy professionals meet established
            standards of education, competence, and conduct.
          </p>
        </ContentSection>
        <ContentSection title="Learn More" id="accessibility">
          <ul className="list-disc pl-6 space-y-1.5">
            <li><Link className="gov-link" to="/about/board">Board Members</Link></li>
            <li><Link className="gov-link" to="/about/meetings">Meetings</Link></li>
            <li><Link className="gov-link" to="/about/laws-regulations">Laws &amp; Regulations</Link></li>
          </ul>
        </ContentSection>
      </div>
    </div>
  )
}

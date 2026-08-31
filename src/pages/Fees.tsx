import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import FeeTable from '../components/FeeTable'
import { fees } from '../data/licensing'

export default function Fees() {
  return (
    <div>
      <PageHeader
        pageTitle="Fee Schedule"
        title="Fee Schedule"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Fees' }]}
        intro="Application, issuance, and renewal fees charged by the East Carolina Board of Pharmacy."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Current Fees">
          <FeeTable fees={fees} />
          <p>
            Fees are subject to change by the East Carolina Board of Pharmacy. Applicants should
            confirm the applicable fee before submitting an application. Fees are non-refundable once
            an application has been submitted for review.
          </p>
        </ContentSection>
      </div>
    </div>
  )
}

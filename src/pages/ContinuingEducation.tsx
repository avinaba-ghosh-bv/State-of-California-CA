import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function ContinuingEducation() {
  return (
    <div>
      <PageHeader
        pageTitle="Continuing Education"
        title="Continuing Education"
        trail={[{ label: 'Licensees', path: '/licensees' }, { label: 'Continuing Education' }]}
        intro="Continuing education hour requirements for East Carolina pharmacist license renewal."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Continuing Education Requirement">
          <p className="font-bold text-navy-900">30 continuing education hours per renewal period</p>
          <p>
            Continuing education must be completed through a Board-recognized provider. Licensees are
            responsible for maintaining records of completed continuing education for a period of
            four years following each renewal.
          </p>
        </ContentSection>
        <ContentSection title="Reporting">
          <p>
            Licensees report completed continuing education hours using the Continuing Education
            Reporting Form at the time of renewal. The Board may audit continuing education records at
            any time.
          </p>
        </ContentSection>
      </div>
    </div>
  )
}

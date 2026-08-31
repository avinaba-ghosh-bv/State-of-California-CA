import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function LawsRegulations() {
  return (
    <div>
      <PageHeader
        pageTitle="Laws & Regulations"
        title="Laws & Regulations"
        trail={[{ label: 'About Us', path: '/about' }, { label: 'Laws & Regulations' }]}
        intro="Regulatory requirements governing pharmacist licensure in East Carolina."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Pharmacist Licensure Rule">
          <p>
            Applicants for pharmacist licensure must satisfy minimum age, education, examination,
            practical experience, background screening, and documentation requirements established by
            the Board.
          </p>
        </ContentSection>

        <ContentSection title="Minimum Age">
          <p>An applicant for a Pharmacist License must be at least 18 years of age.</p>
        </ContentSection>

        <ContentSection title="Education">
          <p>
            An applicant must be a graduate of a pharmacy education program accredited by an
            organization recognized by the Board.
          </p>
        </ContentSection>

        <ContentSection title="Examination">
          <p>
            An applicant must achieve a passing score on the North American Pharmacist Licensure
            Examination and the East Carolina Pharmacy Jurisprudence Examination.
          </p>
        </ContentSection>

        <ContentSection title="Experience">
          <p>An applicant must document 1,500 hours of supervised pharmacy practice experience.</p>
        </ContentSection>

        <ContentSection title="Background Check">
          <p>
            An applicant must complete a criminal background check, including fingerprint submission
            and disclosure of applicable criminal history.
          </p>
        </ContentSection>

        <ContentSection title="Application">
          <p>
            An applicant must submit a complete application, including all required supporting
            documentation, to the Board for review.
          </p>
        </ContentSection>

        <ContentSection title="Fees">
          <p>
            An applicant must pay the applicable application and license issuance fees established by
            the Board.
          </p>
        </ContentSection>

        <ContentSection title="Renewal">
          <p>
            A Pharmacist License must be renewed every two years, and requires completion of 30
            continuing education hours per renewal period.
          </p>
        </ContentSection>
      </div>
    </div>
  )
}

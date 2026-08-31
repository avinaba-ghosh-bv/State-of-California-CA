import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function InternPharmacist() {
  return (
    <div>
      <PageHeader
        pageTitle="Intern Pharmacist"
        title="Intern Pharmacist Registration"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Intern Pharmacist' }]}
        intro="Requirements for pharmacy students and pharmacy school graduates seeking to register as an intern pharmacist."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Eligibility Requirements">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Applicant must be currently enrolled in, or a graduate of, an accredited pharmacy education program.</li>
            <li>Applicant must submit a completed intern pharmacist registration application.</li>
            <li>Applicant must complete a criminal background check.</li>
          </ul>
        </ContentSection>
        <ContentSection title="Required Documents">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Government-issued identification</li>
            <li>Verification of pharmacy school enrollment or graduation</li>
            <li>Criminal background check</li>
          </ul>
        </ContentSection>
        <ContentSection title="Fee">
          <p className="font-bold text-navy-900">Intern Pharmacist Registration Fee: $50</p>
        </ContentSection>
      </div>
    </div>
  )
}

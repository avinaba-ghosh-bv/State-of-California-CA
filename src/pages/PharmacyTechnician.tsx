import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function PharmacyTechnician() {
  return (
    <div>
      <PageHeader
        pageTitle="Pharmacy Technician"
        title="Pharmacy Technician Registration"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Pharmacy Technician' }]}
        intro="Requirements for individuals seeking to register as a pharmacy technician in East Carolina."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Eligibility Requirements">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Applicant must be at least 18 years of age.</li>
            <li>Applicant must hold a high school diploma or equivalent.</li>
            <li>Applicant must complete a Board-recognized pharmacy technician training program, or equivalent supervised employment training.</li>
            <li>Applicant must complete a criminal background check.</li>
            <li>Applicant must submit all required documentation.</li>
          </ul>
        </ContentSection>
        <ContentSection title="Required Documents">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Government-issued identification</li>
            <li>Proof of high school diploma or equivalent</li>
            <li>Training program completion certificate or employer verification</li>
            <li>Criminal background check</li>
          </ul>
        </ContentSection>
        <ContentSection title="Fee">
          <p className="font-bold text-navy-900">Pharmacy Technician Registration Fee: $85</p>
        </ContentSection>
      </div>
    </div>
  )
}

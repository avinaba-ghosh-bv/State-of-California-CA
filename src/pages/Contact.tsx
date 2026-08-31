import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function Contact() {
  return (
    <div>
      <PageHeader
        pageTitle="Contact Us"
        title="Contact Us"
        trail={[{ label: 'Contact Us' }]}
        intro="Contact the East Carolina Board of Pharmacy."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Board Office">
          <p>
            East Carolina Board of Pharmacy
            <br />
            1200 Capitol Avenue
            <br />
            East Carolina City, EC 27501
          </p>
        </ContentSection>
        <ContentSection title="Phone and Email">
          <p>Phone: (800) 555-0199</p>
          <p>Email: licensing@ecboardpharmacy.gov</p>
        </ContentSection>
        <ContentSection title="Office Hours">
          <p>Monday–Friday, 8:00 AM – 5:00 PM</p>
        </ContentSection>
        <p className="text-xs text-gray-500 pb-6">
          This is fictional contact information created for a professional licensing demonstration.
        </p>
      </div>
    </div>
  )
}

import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import { faqs } from '../data/licensing'

export default function FAQ() {
  return (
    <div>
      <PageHeader
        pageTitle="Frequently Asked Questions"
        title="Frequently Asked Questions"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Frequently Asked Questions' }]}
        intro="Common questions about the East Carolina pharmacist licensing process."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h2 className="font-semibold text-navy-900">{faq.question}</h2>
                <p className="text-sm text-gray-700 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      </div>
    </div>
  )
}

import { useState, type FormEvent } from 'react'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function FileComplaint() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader
        pageTitle="File a Complaint"
        title="File a Complaint"
        trail={[{ label: 'Consumers', path: '/consumers' }, { label: 'File a Complaint' }]}
        intro="Report a concern about a pharmacist, pharmacy technician, intern pharmacist, or licensed pharmacy in East Carolina."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          {submitted ? (
            <p className="text-navy-900 font-semibold">
              This is a demonstration form. In a live system, this complaint would be routed to the
              Board's Enforcement Division for review.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <label htmlFor="cmp-name" className="block text-sm font-semibold text-navy-900 mb-1">
                  Your Name
                </label>
                <input id="cmp-name" type="text" required className="w-full border border-gov-line px-3 py-2 text-sm" />
              </div>
              <div>
                <label htmlFor="cmp-email" className="block text-sm font-semibold text-navy-900 mb-1">
                  Your Email
                </label>
                <input id="cmp-email" type="email" required className="w-full border border-gov-line px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cmp-subject" className="block text-sm font-semibold text-navy-900 mb-1">
                  Licensee or Pharmacy Name
                </label>
                <input id="cmp-subject" type="text" required className="w-full border border-gov-line px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cmp-details" className="block text-sm font-semibold text-navy-900 mb-1">
                  Details of Complaint
                </label>
                <textarea id="cmp-details" required rows={5} className="w-full border border-gov-line px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="bg-navy-900 text-white px-5 py-2 text-sm font-semibold hover:bg-navy-800">
                  Submit Complaint
                </button>
              </div>
            </form>
          )}
        </ContentSection>
      </div>
    </div>
  )
}

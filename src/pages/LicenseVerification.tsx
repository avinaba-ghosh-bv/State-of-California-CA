import { useState, type FormEvent } from 'react'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function LicenseVerification() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader
        pageTitle="License Verification"
        title="License Verification"
        trail={[{ label: 'Licensees', path: '/licensees' }, { label: 'License Verification' }]}
        intro="Request verification of an East Carolina pharmacy license for use in another jurisdiction, or search for an active license."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Request Verification">
          <p>
            Licensees relocating to another jurisdiction may request that the Board verify their
            license directly to the receiving state board.
          </p>
          {submitted ? (
            <p className="text-navy-900 font-semibold">
              This is a demonstration form. In a live system, this request would be routed to Board
              staff for processing.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <label htmlFor="lic-name" className="block text-sm font-semibold text-navy-900 mb-1">
                  Full Name
                </label>
                <input id="lic-name" type="text" required className="w-full border border-gov-line px-3 py-2 text-sm" />
              </div>
              <div>
                <label htmlFor="lic-number" className="block text-sm font-semibold text-navy-900 mb-1">
                  License Number
                </label>
                <input id="lic-number" type="text" required className="w-full border border-gov-line px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="lic-state" className="block text-sm font-semibold text-navy-900 mb-1">
                  Receiving State
                </label>
                <input id="lic-state" type="text" required className="w-full border border-gov-line px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="bg-navy-900 text-white px-5 py-2 text-sm font-semibold hover:bg-navy-800">
                  Submit Verification Request
                </button>
              </div>
            </form>
          )}
        </ContentSection>
      </div>
    </div>
  )
}

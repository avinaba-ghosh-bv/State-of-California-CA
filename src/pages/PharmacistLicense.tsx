import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import FeeTable from '../components/FeeTable'
import { Link } from 'react-router-dom'
import {
  requiredDocuments,
  examinations,
  applicationProcess,
  conditionalRules,
  fees,
} from '../data/licensing'

export default function PharmacistLicense() {
  return (
    <div>
      <PageHeader
        pageTitle="Pharmacist License Requirements"
        title="Pharmacist License Requirements"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Pharmacist License' }]}
        intro="An applicant for a Pharmacist License must satisfy all applicable requirements before a license may be issued."
      />

      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Basic Eligibility">
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Applicant must be at least 18 years of age.</li>
            <li>Applicant must have completed an accredited pharmacy education program.</li>
            <li>Applicant must meet the Board's education requirements.</li>
            <li>Applicant must satisfy examination requirements.</li>
            <li>Applicant must complete required practical pharmacy experience.</li>
            <li>Applicant must complete a criminal background check.</li>
            <li>Applicant must submit all required documentation.</li>
            <li>Applicant must disclose applicable criminal convictions or disciplinary history.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Education Requirements" id="education">
          <p>
            Applicants must graduate from a pharmacy program accredited by an organization recognized
            by the East Carolina Board of Pharmacy.
          </p>
          <h3 className="font-semibold text-navy-900">Required Education Documentation</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Official pharmacy school transcript</li>
            <li>Degree verification</li>
            <li>Foreign education documentation, if applicable</li>
            <li>Education equivalency documentation, if applicable</li>
          </ul>
        </ContentSection>

        <ContentSection title="Examination Requirements" id="examination">
          <p>Applicants must satisfy the Board's required examinations.</p>
          <h3 className="font-semibold text-navy-900">Required Examinations</h3>
          <div className="overflow-x-auto">
            <table className="gov-table text-sm">
              <thead>
                <tr>
                  <th>Examination</th>
                  <th>Requirement</th>
                </tr>
              </thead>
              <tbody>
                {examinations.map((exam) => (
                  <tr key={exam.name}>
                    <td>{exam.name}</td>
                    <td>{exam.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Applicants must achieve a passing score on each required examination before a Pharmacist
            License may be issued. Examination scores are reported directly to the Board.
          </p>
        </ContentSection>

        <ContentSection title="Pharmacy Practice Experience" id="experience">
          <p>
            Applicants must document the required amount of supervised pharmacy practice experience
            before licensure.
          </p>
          <p className="font-bold text-navy-900 text-lg">Required Experience: 1,500 hours</p>
          <p>
            Acceptable documentation includes a completed Pharmacy Practice Experience Form signed by
            a supervising pharmacist, verifying the facility name, dates of experience, and total
            hours completed.
          </p>
        </ContentSection>

        <ContentSection title="Criminal Background Check" id="background-check">
          <p>
            All pharmacist applicants must complete the East Carolina Board of Pharmacy criminal
            background check process.
          </p>
          <h3 className="font-semibold text-navy-900">Required</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Fingerprint submission</li>
            <li>Background check authorization</li>
            <li>Disclosure of applicable criminal history</li>
          </ul>
        </ContentSection>

        <ContentSection title="Required Application Documents" id="documents">
          <p>
            The following documents are required for a complete pharmacist license application. This
            table is intended to serve as a definitive reference for required documentation.
          </p>
          <div className="overflow-x-auto">
            <table className="gov-table text-sm">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Required</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocuments.map((doc) => (
                  <tr key={doc.document}>
                    <td className="font-semibold text-navy-900">{doc.document}</td>
                    <td>{doc.required}</td>
                    <td>{doc.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentSection>

        <ContentSection title="What You'll Be Asked to Provide" id="application-fields">
          <p>
            The Pharmacist License Application requests the following information. Applicants
            should have this information ready before beginning the application.
          </p>

          <h3 className="font-semibold text-navy-900">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>First Name</li>
            <li>Last Name</li>
            <li>Date of Birth</li>
            <li>Last Four Digits of Tax ID / SSN</li>
            <li>Street Address</li>
            <li>City</li>
            <li>State</li>
            <li>ZIP Code</li>
            <li>Phone Number</li>
            <li>Email Address</li>
          </ul>

          <h3 className="font-semibold text-navy-900">Education</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Pharmacy School</li>
            <li>Graduation Date</li>
          </ul>

          <h3 className="font-semibold text-navy-900">Examination</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>NAPLEX status</li>
            <li>NAPLEX examination date</li>
            <li>NAPLEX score/status</li>
            <li>East Carolina Pharmacy Jurisprudence Examination status</li>
            <li>Jurisprudence examination date</li>
          </ul>

          <h3 className="font-semibold text-navy-900">Professional History</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Previous pharmacy license — If applicable</li>
            <li>License state/jurisdiction — If applicable</li>
            <li>License number — If applicable</li>
          </ul>

          <h3 className="font-semibold text-navy-900">Background</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Criminal history disclosure — If applicable</li>
          </ul>

          <h3 className="font-semibold text-navy-900">Application</h3>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Applicant signature</li>
            <li>Signature date</li>
          </ul>
        </ContentSection>

        <ContentSection title="Application Process" id="process">
          <ol className="space-y-3">
            {applicationProcess.map((step) => (
              <li key={step.step} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-navy-900 text-white text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">Step {step.step} — {step.title}</p>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </ContentSection>

        <ContentSection title="Fees" id="fees">
          <p className="font-bold text-navy-900">Initial Pharmacist Application Fee: $250</p>
          <p className="font-bold text-navy-900">Initial License Issuance Fee: $100</p>
          <p className="font-bold text-navy-900">Renewal Fee: $175</p>
          <p className="font-bold text-navy-900">Late Renewal Fee: $75</p>
          <p>
            Fees are subject to change by the East Carolina Board of Pharmacy. Applicants should
            confirm the applicable fee before submitting an application. See the{' '}
            <Link className="gov-link" to="/applicants/fees">
              complete Fee Schedule
            </Link>{' '}
            for all license types.
          </p>
          <FeeTable fees={fees} />
        </ContentSection>

        <ContentSection title="Applicant Conditions" id="conditions">
          <p>
            The following conditional requirements apply to specific applicant circumstances in
            addition to the standard requirements listed above.
          </p>
          <div className="space-y-4">
            {conditionalRules.map((rule) => (
              <div key={rule.condition} className="border border-gov-line p-4">
                <h3 className="font-semibold text-navy-900">{rule.condition}</h3>
                <p className="text-sm text-gray-700 mt-1">The applicant must provide:</p>
                <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                  {rule.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ContentSection>
      </div>
    </div>
  )
}

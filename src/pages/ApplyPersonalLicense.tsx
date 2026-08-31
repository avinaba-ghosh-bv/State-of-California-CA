import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import NoticeBox from '../components/NoticeBox'

export default function ApplyPersonalLicense() {
  return (
    <div>
      <PageHeader
        pageTitle="Apply for a Personal License"
        title="Apply for a Personal License"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Apply for a Personal License' }]}
        intro="The East Carolina Board of Pharmacy licenses pharmacists and other pharmacy professionals who meet the requirements established by state law and Board rules."
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="py-6">
          <NoticeBox title="Important Application Information">
            <p>
              Applicants should review all licensing requirements before submitting an application.
              Incomplete applications may result in processing delays.
            </p>
          </NoticeBox>
        </div>

        <ContentSection title="Pharmacist License">
          <h3 className="font-semibold text-navy-900">Pharmacist Examination and Licensure</h3>
          <p>
            Individuals seeking to practice pharmacy as a pharmacist in East Carolina must satisfy the
            education, examination, experience, background check, and documentation requirements
            established by the East Carolina Board of Pharmacy.
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              <Link className="gov-link" to="/applicants/pharmacist-license">
                Pharmacist Examination and Licensure Information
              </Link>
            </li>
            <li>
              <Link className="gov-link" to="/applicants/forms">
                Pharmacist License Application
              </Link>
            </li>
            <li>
              <Link className="gov-link" to="/applicants/pharmacist-license#examination">
                Examination Information
              </Link>
            </li>
            <li>
              <Link className="gov-link" to="/applicants/application-requirements">
                Application Checklist
              </Link>
            </li>
            <li>
              <Link className="gov-link" to="/applicants/pharmacist-license#background-check">
                Request Fingerprint Instructions
              </Link>
            </li>
            <li>
              <Link className="gov-link" to="/applicants/fees">
                Fee Schedule
              </Link>
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="Pharmacy Technician">
          <p>
            Individuals seeking to register as a pharmacy technician must satisfy the education and
            registration requirements established by the Board.
          </p>
          <Link className="gov-link" to="/applicants/pharmacy-technician">
            Pharmacy Technician Registration Information
          </Link>
        </ContentSection>

        <ContentSection title="Intern Pharmacist">
          <p>
            Pharmacy students and pharmacy school graduates seeking to register as an intern
            pharmacist must satisfy the requirements established by the Board.
          </p>
          <Link className="gov-link" to="/applicants/intern-pharmacist">
            Intern Pharmacist Registration Information
          </Link>
        </ContentSection>
      </div>
    </div>
  )
}

import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

export default function Renew() {
  return (
    <div>
      <PageHeader
        pageTitle="Pharmacist License Renewal"
        title="Pharmacist License Renewal"
        trail={[{ label: 'Licensees', path: '/licensees' }, { label: 'Renew a License' }]}
        intro="Pharmacist licenses issued by the East Carolina Board of Pharmacy must be renewed every two years."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Renewal Cycle">
          <p className="font-bold text-navy-900">Renewal Period: Every 2 years</p>
          <p>
            Pharmacists must complete the required continuing education hours during each renewal
            period and submit a renewal application prior to the license expiration date.
          </p>
        </ContentSection>

        <ContentSection title="Renewal Requirements">
          <div className="overflow-x-auto">
            <table className="gov-table text-sm">
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-navy-900">Renewal Application</td>
                  <td>Must be submitted before the license expiration date</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy-900">Continuing Education</td>
                  <td>30 continuing education hours per renewal period</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy-900">Renewal Fee</td>
                  <td>$175</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy-900">Late Renewal Fee</td>
                  <td>$75, in addition to the standard renewal fee</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy-900">Address and Contact Information</td>
                  <td>Must be current with the Board at the time of renewal</td>
                </tr>
                <tr>
                  <td className="font-semibold text-navy-900">Disciplinary Disclosure</td>
                  <td>Applicant must disclose any disciplinary action taken by another jurisdiction since the last renewal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentSection>

        <ContentSection title="Late Renewal">
          <p>
            A license that is not renewed by the expiration date may be renewed within the late
            renewal period upon payment of the renewal fee and late renewal fee. A license that
            remains unrenewed beyond the late renewal period is subject to expiration.
          </p>
        </ContentSection>
      </div>
    </div>
  )
}

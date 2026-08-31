import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

const actions = [
  { name: 'Fictional Case No. 2026-0142', action: 'License Suspension', date: 'March 2026', summary: 'Suspension for failure to complete required continuing education.' },
  { name: 'Fictional Case No. 2025-0987', action: 'Probation', date: 'November 2025', summary: 'Probation issued for recordkeeping violations.' },
  { name: 'Fictional Case No. 2025-0611', action: 'Citation and Fine', date: 'June 2025', summary: 'Citation issued for failure to timely report an address change.' },
]

export default function DisciplinaryActions() {
  return (
    <div>
      <PageHeader
        pageTitle="Disciplinary Actions"
        title="Disciplinary Actions"
        trail={[{ label: 'Enforcement', path: '/enforcement' }, { label: 'Disciplinary Actions' }]}
        intro="Public disciplinary actions taken by the East Carolina Board of Pharmacy. All records shown are fictional demonstration data."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Recent Actions">
          <div className="overflow-x-auto">
            <table className="gov-table text-sm">
              <thead>
                <tr>
                  <th>Case</th>
                  <th>Action</th>
                  <th>Date</th>
                  <th>Summary</th>
                </tr>
              </thead>
              <tbody>
                {actions.map((a) => (
                  <tr key={a.name}>
                    <td className="font-semibold text-navy-900">{a.name}</td>
                    <td>{a.action}</td>
                    <td>{a.date}</td>
                    <td>{a.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentSection>
      </div>
    </div>
  )
}

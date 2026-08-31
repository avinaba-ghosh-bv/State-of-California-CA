import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import { requiredDocuments, conditionalRules } from '../data/licensing'

export default function ApplicationRequirements() {
  return (
    <div>
      <PageHeader
        pageTitle="Application Requirements"
        title="Application Requirements"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Application Requirements' }]}
        intro="Required documents and supporting materials for a complete East Carolina pharmacy licensing application."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Required Application Documents">
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

        <ContentSection title="Conditional Requirements">
          <p>The following requirements apply depending on the applicant's individual circumstances.</p>
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

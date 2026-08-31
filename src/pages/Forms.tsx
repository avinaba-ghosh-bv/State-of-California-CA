import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import DocumentCard from '../components/DocumentCard'
import { formDocuments } from '../data/licensing'

export default function Forms() {
  return (
    <div>
      <PageHeader
        pageTitle="Forms and Documents"
        title="Forms and Documents"
        trail={[{ label: 'Applicants', path: '/applicants' }, { label: 'Forms and Documents' }]}
        intro="Application forms and supporting documents required for East Carolina pharmacy licensing."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {formDocuments.map((doc) => (
              <DocumentCard key={doc.title} title={doc.title} description={doc.description} file={doc.file} />
            ))}
          </div>
        </ContentSection>
      </div>
    </div>
  )
}

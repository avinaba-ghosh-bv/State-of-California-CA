import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'
import { boardMembers } from '../data/licensing'

export default function Board() {
  return (
    <div>
      <PageHeader
        pageTitle="Board Members"
        title="Board Members"
        trail={[{ label: 'About Us', path: '/about' }, { label: 'Board Members' }]}
        intro="Members of the East Carolina Board of Pharmacy. All names listed are fictional and used for demonstration purposes only."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {boardMembers.map((member) => (
              <div key={member.name} className="border border-gov-line p-4">
                <h2 className="font-semibold text-navy-900">{member.name}</h2>
                <p className="text-sm text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      </div>
    </div>
  )
}

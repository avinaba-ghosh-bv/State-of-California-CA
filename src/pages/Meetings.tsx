import PageHeader from '../components/PageHeader'
import ContentSection from '../components/ContentSection'

const meetings = [
  { date: 'September 17, 2026', location: 'East Carolina City Board Office', agenda: 'Quarterly licensing review; continuing education provider approvals.' },
  { date: 'November 12, 2026', location: 'East Carolina City Board Office', agenda: 'Regulation review; enforcement case updates.' },
  { date: 'January 21, 2027', location: 'East Carolina City Board Office', agenda: 'Annual fee schedule review.' },
]

export default function Meetings() {
  return (
    <div>
      <PageHeader
        pageTitle="Meetings"
        title="Board Meetings"
        trail={[{ label: 'About Us', path: '/about' }, { label: 'Meetings' }]}
        intro="Scheduled meetings of the East Carolina Board of Pharmacy. Meetings are open to the public."
      />
      <div className="mx-auto max-w-6xl px-4">
        <ContentSection title="Upcoming Meetings">
          <div className="overflow-x-auto">
            <table className="gov-table text-sm">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Agenda</th>
                </tr>
              </thead>
              <tbody>
                {meetings.map((m) => (
                  <tr key={m.date}>
                    <td className="font-semibold text-navy-900">{m.date}</td>
                    <td>{m.location}</td>
                    <td>{m.agenda}</td>
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

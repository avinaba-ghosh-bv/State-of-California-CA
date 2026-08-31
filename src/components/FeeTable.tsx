import type { Fee } from '../data/licensing'

export default function FeeTable({ fees }: { fees: Fee[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="gov-table text-sm">
        <thead>
          <tr>
            <th>Fee</th>
            <th>Amount</th>
            <th>Applies To</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee) => (
            <tr key={fee.label}>
              <td className="font-semibold text-navy-900">{fee.label}</td>
              <td>{fee.amount}</td>
              <td>{fee.appliesTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

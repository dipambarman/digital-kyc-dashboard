// src/components/MetricsTable.tsx
import { kycFunnelData } from '@/data/kyc-data';

export default function MetricsTable() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Stage-wise Metrics</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Stage</th>
            <th className="text-right py-3">Users</th>
            <th className="text-right py-3">Failure %</th>
            <th className="text-right py-3">Median Time (s)</th>
          </tr>
        </thead>
        <tbody>
          {kycFunnelData.map((stage, index) => (
            <tr key={index} className={index === 1 || index === 2 ? "bg-red-50" : ""}>
              <td className="py-3 font-medium">{stage.name}</td>
              <td className="text-right py-3">{stage.users}</td>
              <td className={`text-right py-3 font-semibold ${stage.failureRate > 0.2 ? 'text-red-600' : 'text-green-600'}`}>
                {Math.round(stage.failureRate * 100)}%
              </td>
              <td className={`text-right py-3 ${stage.medianTime > 25 ? 'text-orange-600' : 'text-green-600'}`}>
                {stage.medianTime}s
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

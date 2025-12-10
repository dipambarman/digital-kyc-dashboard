// src/components/ErrorInsights.tsx
import { kycFunnelData } from "@/data/kyc-data";

export default function ErrorInsights() {
  // Only show stages that have errors defined
  const stagesWithErrors = kycFunnelData.filter(
    (stage) => stage.topErrors && stage.topErrors.length > 0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Error Insights by Stage
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Highlighting common error messages and what they tell us about user
        friction at each step of the KYC journey.
      </p>
      <div className="space-y-4">
        {stagesWithErrors.map((stage, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-800">{stage.name}</h4>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {Math.round(stage.failureRate * 100)}% failure
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {stage.topErrors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
 
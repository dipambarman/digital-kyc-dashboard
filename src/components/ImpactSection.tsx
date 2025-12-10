// src/components/ImpactSection.tsx
import { impactMetrics } from "@/data/kyc-data";

export default function ImpactSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
  Expected Impact for HDFC Bank
</h2>

// And in the business impact card:
    <p className="text-sm text-emerald-50">
  Based on reducing drop-offs in HDFC Bank's Document Scan and Upload stages 
  by improving UX, validation, and error handling.
      </p>
 
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left card: Business impact */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Business Impact</h3>
          <div className="space-y-3 text-lg">
            <p>
              <span className="font-semibold">+28.6% conversion lift</span>{" "}
              (70% → 90%).
            </p>
            <p>
              <span className="font-semibold">+24K customers/year</span> assuming
              10K new customers per month.
            </p>
            <p>
              <span className="font-semibold">₹120M+ annual revenue</span> if
              average LTV is ₹5,000 per customer.
            </p>
            <p className="mt-6 pt-4 border-t border-emerald-300 text-sm text-emerald-50">
              Based on reducing drop-offs at Document Scan and Upload stages by
              improving UX, validation, and error handling.
            </p>
          </div>
        </div>

        {/* Right card: Metric targets */}
        <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Key Metrics Improvement
          </h3>
          <div className="space-y-3">
            {impactMetrics.map((metric, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="text-sm md:text-base text-gray-700">
                  {metric.metric}
                </div>
                <div className="text-right">
                  <div className="line-through text-gray-400 text-xs">
                    {metric.current}
                  </div>
                  <div className="font-bold text-green-600 text-sm md:text-lg">
                    {metric.target}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-500">
            Targets are aligned to the bank’s goals: fewer abandonments, faster
            TAT, clearer next-step visibility, and fewer re-submissions.
          </p>
        </div>
      </div>
    </section>
  );
}

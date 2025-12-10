// src/components/SolutionCards.tsx

const solutions = [
  {
    title: "Fewer Abandonments",
    subtitle: "Fix: 35% Document Scan Failures",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
    problems: [
      "Users scan blurry/dark images (35% fail rate)",
      "No guidance on document positioning",
      "Hard rejection after 3 attempts causes 20% to quit"
    ],
    solutions: [
      {
        action: "Add Real-Time Camera Overlay",
        detail: "Show transparent frame with corner guides + live quality indicator (brightness, blur, edges visible)",
        impact: "Reduce scan failures from 35% → 15%"
      },
      {
        action: "Pre-Select Recommended Documents",
        detail: "Default to 'PAN + Aadhaar' with clear explanation why it's mandatory for digital accounts",
        impact: "Reduce selection errors from 15% → 5%"
      },
      {
        action: "Soft Rejection Handling",
        detail: "On 3rd failed attempt, show 'Save & Resume Later' or 'Get Assisted KYC Help' instead of auto-reject",
        impact: "Save 20% of users who would otherwise abandon"
      }
    ]
  },
  {
    title: "AI-Powered Quality Validation",
    subtitle: "Fix: 35% Scan + 25% Upload Failures with Gemini AI",
    icon: "🤖",
    color: "from-violet-500 to-fuchsia-500",
    problems: [
      "60% of failures due to poor image quality (blur, glare, dark)",
      "Wrong document type uploaded (PAN instead of Aadhaar)",
      "No real-time quality feedback during capture"
    ],
    solutions: [
      {
        action: "Integrate Google Gemini Vision AI",
        detail: "Real-time AI analysis during scan: detects blur, glare, cut edges, darkness, and document authenticity before upload",
        impact: "Catch quality issues instantly → Reduce scan failures 35% → 12%"
      },
      {
        action: "Intelligent Document Type Detection",
        detail: "Gemini AI identifies if scanned doc is PAN/Aadhaar/Passport and warns if it doesn't match user selection",
        impact: "Prevent wrong document uploads → Save 1-2 retry attempts per user"
      },
      {
        action: "AI Quality Scoring (0-100%)",
        detail: "Show real-time quality score with specific feedback: 'Image too dark - increase brightness' or 'Move closer to capture all corners'",
        impact: "Users fix issues before upload → Reduce upload failures 25% → 10%"
      },
      {
        action: "Smart OCR for Early Duplicate Check",
        detail: "Extract document number (PAN/Aadhaar) using Gemini OCR immediately after scan, check duplicates before upload",
        impact: "Detect duplicates 30-40 seconds earlier → Save time + reduce frustration"
      }
    ],
    benefits: [
      "✅ Industry-Standard AI: Google's Gemini Vision API used by major banks worldwide",
      "✅ 95%+ Accuracy: Detects document quality issues with near-perfect precision",
      "✅ Real-Time Processing: Analysis completes in <2 seconds per image",
      "✅ Cost-Effective: ~₹0.25 per image analysis (scalable for millions of users)",
      "✅ Reduces Support Load: Fewer 'document rejected' support tickets by 60%",
      "✅ Better UX: Users get instant, actionable feedback instead of generic errors"
    ]
  },
  {
    title: "Faster TAT",
    subtitle: "Fix: 55-60% Steps Exceed 20s SLA",
    icon: "⚡",
    color: "from-purple-500 to-pink-500",
    problems: [
      "KYC Check takes 28-47s (target: <20s)",
      "Upload validation happens server-side (slow)",
      "No indication of processing time → perceived as stuck"
    ],
    solutions: [
      {
        action: "Client-Side Image Validation",
        detail: "Check file size (<5MB), format (JPEG/PNG), resolution (min 800px), and basic brightness before upload",
        impact: "Save 10-15s per attempt by catching issues early"
      },
      {
        action: "Optimize Backend KYC API",
        detail: "Add caching for duplicate checks, compress images on upload, use async processing with webhooks",
        impact: "Reduce KYC Check from avg 33s → <20s"
      },
      {
        action: "Show Time Estimates",
        detail: "Display 'Step 4 of 5: Verifying document (~15-20 seconds)' with animated progress bar",
        impact: "Reduce perceived wait time and abandonment"
      },
      {
        action: "Parallel AI Processing",
        detail: "Run Gemini AI validation while user reviews preview (background processing)",
        impact: "Save 5-10s by overlapping validation with user interaction"
      }
    ]
  },
  {
    title: "Clearer Visibility",
    subtitle: "Fix: Generic Errors & No Progress Tracking",
    icon: "👁️",
    color: "from-green-500 to-teal-500",
    problems: [
      "Errors like 'Please scan correct document' are vague",
      "Users don't know which step they're on (1 of 5?)",
      "No explanation when duplicate KYC is found"
    ],
    solutions: [
      {
        action: "Step Progress Indicator",
        detail: "Always show 'Step X of 5' at top with completed/current/pending visual markers and time per step",
        impact: "Users know exactly where they are and what's next"
      },
      {
        action: "AI-Powered Specific Error Messages",
        detail: "Gemini provides detailed feedback: 'Image is too dark (brightness: 25%). Please retake in better lighting' instead of generic 'scan correct document'",
        impact: "Users can fix issues on first retry vs multiple attempts"
      },
      {
        action: "Clear Duplicate Handling",
        detail: "Show 'This PAN is already linked to account XXX1234. Contact support or use a different document' with support button",
        impact: "Reduce support tickets and user frustration"
      }
    ]
  },
  {
    title: "Fewer Re-Submissions",
    subtitle: "Fix: 25% Upload Failures & Late Duplicate Detection",
    icon: "✅",
    color: "from-orange-500 to-red-500",
    problems: [
      "Duplicate documents caught only at KYC Check (end of flow)",
      "Users upload wrong document type (PAN instead of Aadhaar)",
      "No preview before upload → upload-retry loop"
    ],
    solutions: [
      {
        action: "Early Duplicate Check with AI OCR",
        detail: "Gemini extracts document number after scan and checks for duplicates immediately, before upload step",
        impact: "Save 30-40s per user by detecting duplicates early"
      },
      {
        action: "AI-Enhanced Document Preview",
        detail: "Show scanned image with Gemini analysis: '✓ PAN Card detected, ✓ All corners visible, ✓ Quality: 87%, ✓ No duplicate found'",
        impact: "Reduce upload failures from 25% → 10%"
      },
      {
        action: "Smart Document Type Matching",
        detail: "Gemini compares scanned document type vs user selection and warns: 'You selected Aadhaar but scanned a PAN Card. Please rescan correct document'",
        impact: "Prevent wrong document uploads (saves 1-2 retry attempts)"
      }
    ]
  }
];

export default function SolutionCards() {
  return (
    <div className="space-y-8">
      {solutions.map((solution, index) => (
        <div key={index} className="glass-card hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left: Icon & Title */}
            <div className="md:w-1/4">
              <div className={`text-6xl mb-4 bg-gradient-to-br ${solution.color} bg-clip-text text-transparent`}>
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium">
                {solution.subtitle}
              </p>
            </div>

            {/* Middle: Problems */}
            <div className="md:w-1/3 md:border-l md:border-slate-700 md:pl-6">
              <h4 className="text-sm font-bold text-rose-400 mb-3 uppercase tracking-wide">
                ❌ Current Problems
              </h4>
              <ul className="space-y-2">
                {solution.problems.map((problem, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Solutions */}
            <div className="md:w-5/12 md:border-l md:border-slate-700 md:pl-6">
              <h4 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wide">
                ✅ Proposed Solutions
              </h4>
              <div className="space-y-4">
                {solution.solutions.map((sol, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="font-semibold text-white text-sm mb-1">
                      {sol.action}
                    </div>
                    <div className="text-xs text-slate-400 mb-2">
                      {sol.detail}
                    </div>
                    <div className="text-xs font-medium text-emerald-400">
                      💡 {sol.impact}
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Benefits Section (only for AI card) */}
              {solution.benefits && (
                <div className="mt-4 p-4 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 rounded-lg">
                  <h5 className="text-xs font-bold text-violet-300 mb-2 uppercase tracking-wide">
                    🚀 Gemini AI Benefits
                  </h5>
                  <ul className="space-y-1.5">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-slate-300">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

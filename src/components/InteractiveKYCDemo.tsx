// src/components/InteractiveKYCDemo.tsx
"use client";
import { useState } from "react";

type Step = "select" | "scan" | "upload" | "check" | "approved";

export default function InteractiveKYCDemo() {
  const [currentStep, setCurrentStep] = useState<Step>("select");
  const [selectedDoc, setSelectedDoc] = useState<string>("");
  const [imageQuality, setImageQuality] = useState<number>(0);
  const [scanAttempt, setScanAttempt] = useState<number>(1);
  const [showGuidance, setShowGuidance] = useState(false);

  const steps: Step[] = ["select", "scan", "upload", "check", "approved"];
  const stepNames = {
    select: "Select Document",
    scan: "Scan Document",
    upload: "Upload Document",
    check: "KYC Check",
    approved: "KYC Approved"
  };

  const handleDocSelect = (doc: string) => {
    setSelectedDoc(doc);
    setTimeout(() => setCurrentStep("scan"), 500);
  };

  const handleScan = () => {
    const quality = Math.floor(Math.random() * 100);
    setImageQuality(quality);
    
    if (quality < 60) {
      setScanAttempt(scanAttempt + 1);
      setShowGuidance(true);
    } else {
      setShowGuidance(false);
      setTimeout(() => setCurrentStep("upload"), 1000);
    }
  };

  const handleUpload = () => {
    setTimeout(() => setCurrentStep("check"), 800);
  };

  const handleCheck = () => {
    setTimeout(() => setCurrentStep("approved"), 1200);
  };

  const resetDemo = () => {
    setCurrentStep("select");
    setSelectedDoc("");
    setImageQuality(0);
    setScanAttempt(1);
    setShowGuidance(false);
  };

  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <div className="glass-card p-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h3 className="gradient-text text-3xl font-bold mb-2">
          ✨ Improved HDFC Bank KYC Flow
        </h3>
        <p className="text-slate-400">
          Interactive demonstration of the proposed solution for HDFC Bank with real-time guidance
        </p>
      </div>

      {/* Progress Tracker */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          {steps.map((step, idx) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    idx <= currentStepIndex
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="text-xs mt-2 text-slate-400 text-center">
                  {stepNames[step]}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 transition-all ${
                    idx < currentStepIndex ? "bg-blue-500" : "bg-slate-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center text-sm font-medium text-blue-400">
          Step {currentStepIndex + 1} of {steps.length}
        </div>
      </div>

      {/* Demo Content */}
      <div className="bg-slate-900/50 rounded-xl p-8 min-h-[400px]">
        {/* STEP 1: Document Selection */}
        {currentStep === "select" && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-white mb-2">
                📄 Select Your Document Type
              </h4>
              <p className="text-slate-400 text-sm">
                ✅ Recommended for HDFC Digital Account: PAN Card + Aadhaar Card (Mandatory)
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleDocSelect("PAN + Aadhaar")}
                className="p-6 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-2 border-emerald-500 rounded-xl hover:scale-105 transition-all"
              >
                <div className="text-2xl mb-2">✅</div>
                <div className="font-bold text-white">PAN + Aadhaar</div>
                <div className="text-xs text-emerald-300 mt-1">Recommended</div>
              </button>
              <button
                onClick={() => handleDocSelect("Passport")}
                className="p-6 bg-slate-800/50 border border-slate-600 rounded-xl hover:scale-105 transition-all"
              >
                <div className="text-2xl mb-2">🛂</div>
                <div className="font-bold text-white">Passport</div>
                <div className="text-xs text-slate-400 mt-1">Alternative</div>
              </button>
            </div>
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-sm text-blue-300">
                💡 <strong>New Feature:</strong> Pre-selected recommended option based on account type
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Document Scan */}
        {currentStep === "scan" && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-white mb-2">
                📸 Scan Your {selectedDoc}
              </h4>
              <p className="text-slate-400 text-sm">Attempt {scanAttempt} of 3</p>
            </div>

            <div className="relative bg-slate-800 rounded-xl p-8 border-2 border-dashed border-blue-500">
              <div className="text-center">
                <div className="text-6xl mb-4">📷</div>
                <p className="text-white font-medium mb-4">
                  Position your document inside the frame
                </p>
                
                {/* Real-time Guidance */}
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex items-center justify-center gap-2 text-emerald-400">
                    <span>✓</span> All 4 corners visible
                  </div>
                  <div className="flex items-center justify-center gap-2 text-emerald-400">
                    <span>✓</span> Good lighting
                  </div>
                  <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <span>⚠</span> Avoid glare on hologram
                  </div>
                </div>

                <button
                  onClick={handleScan}
                  className="futuristic-btn"
                >
                  Capture Document
                </button>
              </div>
            </div>

            {imageQuality > 0 && (
              <div className="mt-6">
                {imageQuality >= 60 ? (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500 rounded-lg">
                    <div className="text-emerald-300 font-medium mb-2">
                      ✅ Great Quality! ({imageQuality}%)
                    </div>
                    <div className="text-sm text-slate-300">
                      All edges clear, text readable. Proceeding to upload...
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-rose-500/10 border border-rose-500 rounded-lg">
                    <div className="text-rose-300 font-medium mb-2">
                      ⚠ Poor Quality ({imageQuality}%)
                    </div>
                    <div className="text-sm text-slate-300 mb-3">
                      Image is too dark or edges are cut. Please try again in better light.
                    </div>
                    <button
                      onClick={handleScan}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition-all"
                    >
                      Retake Photo
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-sm text-blue-300">
                💡 <strong>New Feature:</strong> Real-time image quality check with instant feedback
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Upload Document */}
        {currentStep === "upload" && (
          <div className="space-y-6 text-center">
            <h4 className="text-xl font-bold text-white mb-2">
              📤 Upload Document Preview
            </h4>
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-600">
              <div className="text-6xl mb-4">📄</div>
              <p className="text-white font-medium mb-2">Document Preview</p>
              <p className="text-slate-400 text-sm mb-6">
                Quality Score: <span className="text-emerald-400 font-bold">{imageQuality}%</span>
              </p>
              
              <div className="space-y-2 text-sm mb-6">
                <div className="flex items-center justify-center gap-2 text-emerald-400">
                  <span>✓</span> Document type matches selection
                </div>
                <div className="flex items-center justify-center gap-2 text-emerald-400">
                  <span>✓</span> No duplicate detected (checked early)
                </div>
                <div className="flex items-center justify-center gap-2 text-emerald-400">
                  <span>✓</span> All corners visible
                </div>
              </div>

              <button
                onClick={handleUpload}
                className="futuristic-btn"
              >
                Confirm & Upload
              </button>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-sm text-blue-300">
                💡 <strong>New Feature:</strong> Preview with quality checklist before upload + Early duplicate check
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: KYC Check */}
        {currentStep === "check" && (
          <div className="space-y-6 text-center">
            <h4 className="text-xl font-bold text-white mb-2">
              🔍 Verifying Your Document
            </h4>
            <div className="bg-slate-800 rounded-xl p-8">
              <div className="loading-spinner mx-auto mb-6"></div>
              <p className="text-white font-medium mb-2">Processing...</p>
              <p className="text-slate-400 text-sm mb-4">
                Expected time: ~15 seconds (Step 4 of 5)
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-pulse" style={{width: "75%"}}></div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-sm text-blue-300">
                💡 <strong>New Feature:</strong> Real-time progress indicator with time estimate
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: KYC Approved */}
        {currentStep === "approved" && (
          <div className="space-y-6 text-center">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h4 className="text-2xl font-bold text-emerald-400 mb-2">
              KYC Approved Successfully!
            </h4>
            <p className="text-slate-300 mb-6">
              Your digital account is now active. Total time taken: ~45 seconds
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">1</div>
                <div className="text-sm text-slate-300">Attempt</div>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">45s</div>
                <div className="text-sm text-slate-300">Total Time</div>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">0</div>
                <div className="text-sm text-slate-300">Errors</div>
              </div>
            </div>

            <button
              onClick={resetDemo}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all"
            >
              Try Demo Again
            </button>
          </div>
        )}
      </div>

      {/* Before/After Comparison */}
      <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
          <div className="font-bold text-rose-300 mb-2">❌ Old Flow Issues:</div>
          <ul className="space-y-1 text-slate-400">
            <li>• No document guidance → 35% scan fails</li>
            <li>• Late error detection → wasted time</li>
            <li>• No progress visibility → user confusion</li>
            <li>• Hard rejection on 4th attempt</li>
          </ul>
        </div>
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
          <div className="font-bold text-emerald-300 mb-2">✅ New Flow Benefits:</div>
          <ul className="space-y-1 text-slate-400">
            <li>• Real-time scan guidance → 80%+ first-time success</li>
            <li>• Early duplicate check → save 30s per user</li>
            <li>• Clear progress tracker → fewer abandonments</li>
            <li>• Soft handling with save & resume option</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

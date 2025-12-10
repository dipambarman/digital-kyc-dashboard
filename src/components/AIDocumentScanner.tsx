// src/components/AIDocumentScanner.tsx
"use client";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function AIDocumentScanner() {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const analyzeDocument = async (imageData: string) => {
    setAnalyzing(true);
    
    try {
      // Initialize Gemini
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Analyze this HDFC Bank KYC document image and provide:
1. Document Type (PAN Card, Aadhaar, Passport, Voter ID, or Other)
2. Quality Score (0-100): Check for blur, glare, cut edges, darkness
3. All 4 corners visible? (Yes/No)
4. Text readable? (Yes/No)
5. Any visible issues?
6. Is this a valid Indian identity document? (Yes/No)
7. Recommendation: Accept or Reject with reason

Format response as JSON with these exact keys: documentType, qualityScore, cornersVisible, textReadable, issues, isValid, recommendation, reason`;

      const imageParts = [
        {
          inlineData: {
            data: imageData.split(',')[1],
            mimeType: "image/jpeg",
          },
        },
      ];

      const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();
      
      // Parse JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        setResult(parsed);
      } else {
        setResult({ error: "Could not parse AI response", raw: text });
      }
    } catch (error) {
      console.error("AI Analysis Error:", error);
      setResult({ error: "Analysis failed. Check API key and try again." });
    } finally {
      setAnalyzing(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target?.result as string;
      setImage(imageData);
      analyzeDocument(imageData);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="glass-card p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="gradient-text text-3xl font-bold mb-2">
          🤖 AI-Powered Document Scanner
        </h3>
        <p className="text-slate-400">
          Upload a KYC document to see real-time AI quality validation using Google Gemini
        </p>
      </div>

      {/* Upload Area */}
      {!image && (
        <div className="border-2 border-dashed border-slate-600 rounded-xl p-12 text-center hover:border-blue-500 transition-all cursor-pointer">
          <label htmlFor="document-upload" className="cursor-pointer">
            <div className="text-6xl mb-4">📸</div>
            <div className="text-white font-medium mb-2">
              Click to Upload Document
            </div>
            <div className="text-sm text-slate-400">
              Supports: PAN Card, Aadhaar, Passport, Voter ID
            </div>
            <input
              id="document-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* Analyzing State */}
      {analyzing && (
        <div className="text-center py-12">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-white font-medium">Analyzing with Gemini AI...</p>
          <p className="text-sm text-slate-400 mt-2">
            Checking quality, document type, and authenticity
          </p>
        </div>
      )}

      {/* Results */}
      {result && !analyzing && image && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Preview */}
          <div>
            <h4 className="font-semibold text-white mb-3">Uploaded Document</h4>
            <img
              src={image}
              alt="Scanned document"
              className="rounded-lg border border-slate-700 w-full"
            />
            <button
              onClick={() => {
                setImage(null);
                setResult(null);
              }}
              className="mt-4 w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all"
            >
              Scan Another Document
            </button>
          </div>

          {/* AI Analysis Results */}
          <div>
            <h4 className="font-semibold text-white mb-3">AI Analysis Results</h4>
            
            {result.error ? (
              <div className="p-4 bg-rose-500/10 border border-rose-500 rounded-lg">
                <div className="text-rose-300 font-medium mb-2">❌ Error</div>
                <div className="text-sm text-slate-300">{result.error}</div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Quality Score */}
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">Quality Score</span>
                    <span className={`font-bold text-xl ${
                      result.qualityScore >= 70 ? 'text-emerald-400' :
                      result.qualityScore >= 50 ? 'text-yellow-400' :
                      'text-rose-400'
                    }`}>
                      {result.qualityScore}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        result.qualityScore >= 70 ? 'bg-emerald-500' :
                        result.qualityScore >= 50 ? 'bg-yellow-500' :
                        'bg-rose-500'
                      }`}
                      style={{ width: `${result.qualityScore}%` }}
                    />
                  </div>
                </div>

                {/* Document Details */}
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400 text-sm">Document Type</span>
                    <span className="text-white font-medium">{result.documentType}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400 text-sm">All Corners Visible</span>
                    <span className={result.cornersVisible === "Yes" ? "text-emerald-400" : "text-rose-400"}>
                      {result.cornersVisible}
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400 text-sm">Text Readable</span>
                    <span className={result.textReadable === "Yes" ? "text-emerald-400" : "text-rose-400"}>
                      {result.textReadable}
                    </span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-400 text-sm">Valid Document</span>
                    <span className={result.isValid === "Yes" ? "text-emerald-400" : "text-rose-400"}>
                      {result.isValid}
                    </span>
                  </div>
                </div>

                {/* Issues */}
                {result.issues && result.issues !== "None" && (
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="text-yellow-400 font-medium mb-2">⚠️ Issues Detected</div>
                    <div className="text-sm text-slate-300">{result.issues}</div>
                  </div>
                )}

                {/* Recommendation */}
                <div className={`p-4 rounded-lg border ${
                  result.recommendation === "Accept" 
                    ? "bg-emerald-500/10 border-emerald-500"
                    : "bg-rose-500/10 border-rose-500"
                }`}>
                  <div className={`font-bold mb-2 ${
                    result.recommendation === "Accept" ? "text-emerald-400" : "text-rose-400"
                  }`}>
                    {result.recommendation === "Accept" ? "✅ Accept Document" : "❌ Reject Document"}
                  </div>
                  <div className="text-sm text-slate-300">{result.reason}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
        <div className="text-sm text-blue-300">
          <strong>💡 How This Solves HDFC's Problems:</strong>
          <ul className="mt-2 space-y-1 text-slate-300">
            <li>• <strong>35% scan failures</strong> → AI detects blur/glare/cut edges instantly</li>
            <li>• <strong>25% upload failures</strong> → Quality check before upload, not after</li>
            <li>• <strong>Late duplicate detection</strong> → Can extract document number for early check</li>
            <li>• <strong>Wrong document type</strong> → AI confirms PAN vs Aadhaar vs Passport</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

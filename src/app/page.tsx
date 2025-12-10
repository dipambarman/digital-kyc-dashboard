// src/app/page.tsx
import FunnelChart from "@/components/FunnelChart";
import MetricsTable from "@/components/MetricsTable";
import SolutionCards from "@/components/SolutionCards";
import ErrorInsights from "@/components/ErrorInsights";
import ImpactSection from "@/components/ImpactSection";
import InteractiveKYCDemo from "@/components/InteractiveKYCDemo";
import { kycFunnelData } from "@/data/kyc-data";
import AIDocumentScanner from "@/components/AIDocumentScanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Digital KYC Dashboard
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Interactive solution demonstrating how to fix digital KYC drop-offs
            and improve conversion from 70% to 90% for youth and new-to-bank customers.
          </p>

          <div className="mt-8 inline-flex flex-col md:flex-row gap-3 items-center justify-center">
            <span className="rounded-full bg-emerald-500/10 text-emerald-300 px-4 py-1 text-sm font-medium">
              400 KYC records analyzed
            </span>
            <span className="rounded-full bg-rose-500/10 text-rose-300 px-4 py-1 text-sm font-medium">
              Scan 35% fails • Upload 25% fails
            </span>
            <span className="rounded-full bg-blue-500/10 text-blue-300 px-4 py-1 text-sm font-medium">
              Target: 85-90% conversion
            </span>
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              📊 Current State Analysis
            </h2>
            <p className="text-slate-400">
              Understanding where customers drop off and why
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                KYC Funnel Overview
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Number of customers reaching each stage based on 400-row dataset
              </p>
              <FunnelChart data={kycFunnelData} />
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                Stage-wise Metrics
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Failure percentage and median time per stage
              </p>
              <MetricsTable />
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">
              ⚠️ Error Insights
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Common error messages revealing user pain points
            </p>
            <ErrorInsights />
          </div>
        </div>
      </section>

      {/* Interactive Solution Demo */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              💡 Interactive Solution Demo
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Experience the improved KYC flow with real-time guidance, 
              quality checks, and clear progress tracking
            </p>
          </div>
          <InteractiveKYCDemo />
        </div>
      </section>
      <section className="py-16 bg-slate-950">
  <div className="max-w-6xl mx-auto px-4">
    <AIDocumentScanner />
  </div>
</section>

      {/* Solution Cards */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-3">
              🎯 4-Pronged Solution
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
              Targeted improvements for fewer abandonments, faster TAT, 
              clearer visibility, and fewer re-submissions
            </p>
          </div>
          <SolutionCards />
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-slate-950 border-t border-slate-800">
        <ImpactSection />
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content text-center">
          <h3 className="gradient-text">Digital KYC Dashboard</h3>
          
          <p className="footer-author">Dipam Barman</p>
          <p className="footer-meta">B.Tech Computer Science • 7th Semester</p>
          <p className="footer-meta">Gauhati University</p>
          
          <div className="footer-divider"></div>
          
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Interactive case study demonstrating data-driven UX improvements 
            for digital KYC onboarding. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="footer-divider"></div>
          
          <div className="footer-links">
            <a 
              href="https://github.com/dipambarman/digital-kyc-dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="futuristic-btn"
            >
              GitHub Repository
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">
              View Dataset
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Full Case Study
            </a>
          </div>
          
          <p className="text-sm mt-6 text-slate-600">
            December 2025 • Academic Project • Portfolio Piece
          </p>
        </div>
      </footer>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, FileText, BarChart3, Bot } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-slate-950 text-slate-100">
      <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-20">
        <div className="w-full max-w-4xl text-center mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Next-Generation Legal Intelligence
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              LegalLens
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AI-Powered Contract Analysis and Legal Assistant. Upload contracts, automatically identify risk & fairness, visualize clause metrics, and consult your legal assistant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 py-6 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200">
                <FileText className="mr-2 h-5 w-5" /> Open Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/new">
              <Button
                variant="outline"
                className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-200"
              >
                <ShieldCheck className="mr-2 h-5 w-5 text-blue-400" /> Analyze Contract
              </Button>
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-left">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <FileText className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Smart Clause Extraction</h3>
              <p className="text-sm text-slate-400">Automatically parses PDF & DOCX contracts into clear, structured clause summaries with pros and cons.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <BarChart3 className="w-8 h-8 text-indigo-400" />
              <h3 className="text-lg font-semibold text-white">Risk & Fairness Mapping</h3>
              <p className="text-sm text-slate-400">Plots clauses on an interactive 2D graph rating user fairness vs risk level for instant decision making.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <Bot className="w-8 h-8 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">AI Legal Assistant</h3>
              <p className="text-sm text-slate-400">Streamed real-time responses to ask questions and negotiate contract terms with AI context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 text-center py-6 border-t border-slate-800 text-sm text-slate-400">
        &copy; {new Date().getFullYear()} LegalLens. AI-Powered Contract Analysis & Legal Assistant.
      </footer>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center min-h-screen font-sans flex flex-col text-yellow-300">
      <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-3xl text-center mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-red-500 drop-shadow-lg">LegalLens</span>
          </h1>
          <p className="md:text-4xl text-md sm:text-lg mb-8 leading-relaxed">
            AI-Powered Contract Analysis & Legal Assistant. Uncover red flags. Evaluate clause risks. Rewrite terms with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button className="bg-yellow-400 hover:bg-red-700 transition-all duration-300 text-white text-base sm:text-lg px-6 py-4 shadow-md shadow-red-500/30">
                <Zap className="mr-2 h-5 w-5 text-black" /><span className="text-black font-semibold">Enter Dashboard</span>
              </Button>
            </Link>
            <Link href="/dashboard/new">
              <Button
                variant="outline"
                className="border-yellow-300 bg-transparent text-yellow-300 hover:bg-red-700 hover:border-red-700 transition-all duration-300 text-base sm:text-lg px-6 py-4"
              >
                <ShieldCheck className="mr-2 h-5 w-5" /> Analyze Contract
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-center py-4 border-t border-red-900 text-sm text-red-500">
        &copy; {new Date().getFullYear()} LegalLens. AI-Powered Contract Intelligence.
      </footer>
    </div>
  );
}

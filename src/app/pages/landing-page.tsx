import { motion } from "motion/react";
import { Shield, CheckCircle2, FileCheck, Globe } from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { GradientButton } from "../components/gradient-button";
import { useNavigate } from "react-router";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
      {/* Particle Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#6C63FF]/10 blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00D4FF]/10 blur-[120px] top-60 right-20" />
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#6C63FF]/10 blur-[120px] bottom-0 left-1/2" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 px-8 py-6 flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-[#6C63FF]" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
              Jansatya
            </span>
            <span className="text-[10px] text-[#A0A0B8] tracking-wider">DETECT. CERTIFY. PROTECT</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/auth")}
            className="text-[#A0A0B8] hover:text-white transition-colors"
          >
            Sign In
          </button>
          <GradientButton variant="filled" onClick={() => navigate("/auth")}>
            Get Started
          </GradientButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-8 pt-20 pb-32 text-center">
        <motion.h1
          className="text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Don't Just Detect Fakes.
          <br />
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
            Prove What's Real.
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-[#A0A0B8] mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          The most advanced AI-powered platform for media authentication and deepfake detection.
          Protect your content. Verify the truth.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <GradientButton variant="filled" onClick={() => navigate("/authenticate")}>
            Authenticate My Content
          </GradientButton>
          <GradientButton variant="outlined" onClick={() => navigate("/upload")}>
            Detect Fake Media
          </GradientButton>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-8 pb-32">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard hover className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Detect</h3>
            <p className="text-[#A0A0B8]">
              Upload any media file and our AI analyzes it across multiple dimensions to detect manipulation,
              deepfakes, and synthetic content with 98.7% accuracy.
            </p>
          </GlassCard>

          <GlassCard hover className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-6">
              <FileCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Authenticate</h3>
            <p className="text-[#A0A0B8]">
              Register your original content and receive a blockchain-verified certificate with cryptographic
              proof of authenticity and ownership.
            </p>
          </GlassCard>

          <GlassCard hover className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Verify</h3>
            <p className="text-[#A0A0B8]">
              Cross-reference content against our global database and social media to trace origins, detect
              duplicates, and verify authenticity.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-8 pb-32">
        <GlassCard className="!p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                2.3M+
              </div>
              <div className="text-[#A0A0B8]">Files Analyzed</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                98.7%
              </div>
              <div className="text-[#A0A0B8]">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                150K+
              </div>
              <div className="text-[#A0A0B8]">Certificates Issued</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                40+
              </div>
              <div className="text-[#A0A0B8]">Countries</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#2A2A3A] py-12">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#6C63FF]" />
            <span className="text-lg font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
              Jansatya
            </span>
          </div>
          <div className="text-[#A0A0B8] text-sm">© 2026 Jansatya. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
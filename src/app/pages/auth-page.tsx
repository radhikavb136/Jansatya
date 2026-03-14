import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Eye, EyeOff, Lock } from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { GradientButton } from "../components/gradient-button";
import { useNavigate } from "react-router";

export function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPrivacy, setSelectedPrivacy] = useState<"public" | "private" | "ultra">("public");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden flex">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00D4FF]/10 blur-[120px] bottom-0 right-0" />
      </div>

      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 items-center justify-center p-16">
        <div className="max-w-lg">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-12 h-12 text-[#6C63FF]" />
            <span className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
              Jansatya
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Your Command Center
            <br />
            for Truth
          </h1>
          <p className="text-xl text-[#A0A0B8] mb-12">
            Join thousands of creators, journalists, and organizations protecting authenticity in the digital age.
          </p>

          {/* Floating Certificate Mockup */}
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlassCard className="p-8 border-2 border-[#6C63FF]/50">
              <div className="text-sm text-[#A0A0B8] mb-2">CERTIFICATE ID</div>
              <div className="font-mono text-[#00D4FF] mb-4 text-sm">
                TM-2024-8F7A9B3C
              </div>
              <div className="text-sm text-[#A0A0B8] mb-2">SHA-256 HASH</div>
              <div className="font-mono text-[#00D4FF] text-xs leading-relaxed">
                3f4b8a2e9c1d5f...
              </div>
              <div className="mt-6 pt-6 border-t border-[#2A2A3A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#00E676] shadow-[0_0_10px_rgba(0,230,118,0.5)]" />
                  <span className="text-[#00E676] text-sm">Verified</span>
                </div>
                <Shield className="w-6 h-6 text-[#6C63FF]" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 relative z-10 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? "Welcome Back" : "Create Your Account"}
            </h2>
            <p className="text-[#A0A0B8]">
              {isLogin
                ? "Enter your credentials to access your dashboard"
                : "Join the fight against misinformation"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-[#16161F] border border-[#2A2A3A] rounded-xl focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_20px_rgba(108,99,255,0.2)] transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 bg-[#16161F] border border-[#2A2A3A] rounded-xl focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_20px_rgba(108,99,255,0.2)] transition-all pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A0B8] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm mb-3">Privacy Mode</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "public", label: "Public", desc: "Visible to all" },
                    { id: "private", label: "Private", desc: "Only you" },
                    { id: "ultra", label: "Ultra Private", desc: "Encrypted" },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setSelectedPrivacy(mode.id as any)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedPrivacy === mode.id
                          ? "bg-[#6C63FF]/10 border-[#6C63FF] shadow-[0_0_20px_rgba(108,99,255,0.3)]"
                          : "bg-[#16161F] border-[#2A2A3A] hover:border-[#6C63FF]/50"
                      }`}
                    >
                      <Lock className="w-5 h-5 mb-2 text-[#6C63FF]" />
                      <div className="text-sm font-medium mb-1">{mode.label}</div>
                      <div className="text-xs text-[#A0A0B8]">{mode.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <GradientButton variant="filled" className="w-full">
              {isLogin ? "Sign In" : "Create Account"}
            </GradientButton>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#A0A0B8] hover:text-white transition-colors text-sm"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
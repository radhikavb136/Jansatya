import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Clock, Scale, AlertCircle } from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { GradientButton } from "../components/gradient-button";
import { useNavigate } from "react-router";

export function HumanVerification() {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState<1 | 2 | 3 | null>(null);
  const [purpose, setPurpose] = useState("");

  const tiers = [
    {
      id: 1,
      name: "Tier 1: AI Verdict",
      subtitle: "Automated Analysis",
      color: "#00E676",
      price: "Free",
      time: "Instant",
      icon: CheckCircle2,
      features: [
        "Multi-model AI detection",
        "98.7% accuracy rate",
        "Instant results",
        "Detailed report",
      ],
      status: "complete",
    },
    {
      id: 2,
      name: "Tier 2: Expert Review",
      subtitle: "Human Specialist",
      color: "#FFB300",
      price: "$49",
      time: "2-4 hours",
      icon: Clock,
      features: [
        "Forensic expert analysis",
        "Frame-by-frame review",
        "Expert commentary",
        "Priority support",
      ],
      status: "available",
    },
    {
      id: 3,
      name: "Tier 3: Legal Report",
      subtitle: "Court Admissible",
      color: "#6C63FF",
      price: "$299",
      time: "24-48 hours",
      icon: Scale,
      features: [
        "Certified forensic report",
        "Court-admissible documentation",
        "Expert testimony available",
        "Chain of custody maintained",
      ],
      status: "available",
    },
  ];

  const purposes = [
    "Legal proceedings",
    "Media verification",
    "Insurance claim",
    "Corporate investigation",
    "Academic research",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTier) {
      // Simulate submission
      alert("Request submitted! You will receive confirmation shortly.");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[120px] top-20 right-20" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FFB300]/10 blur-[120px] bottom-20 left-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-[#A0A0B8] hover:text-white transition-colors mb-6 inline-flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold mb-2">Human Verification</h1>
          <p className="text-[#A0A0B8]">
            Request expert human review for critical verification needs
          </p>
        </div>

        {/* Tier Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tier.id * 0.1 }}
            >
              <button
                onClick={() => tier.status === "available" && setSelectedTier(tier.id as 1 | 2 | 3)}
                disabled={tier.status === "complete"}
                className={`w-full text-left transition-all ${
                  tier.status === "complete" ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <GlassCard
                  className={`h-full ${
                    selectedTier === tier.id
                      ? "!border-2 !shadow-[0_0_30px_rgba(108,99,255,0.5)]"
                      : tier.status === "complete"
                      ? "opacity-60"
                      : ""
                  }`}
                  hover={tier.status === "available"}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${tier.color}20`,
                      border: selectedTier === tier.id ? `2px solid ${tier.color}` : "none",
                    }}
                  >
                    <tier.icon className="w-8 h-8" style={{ color: tier.color }} />
                  </div>

                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-sm text-[#A0A0B8] mb-4">{tier.subtitle}</p>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold" style={{ color: tier.color }}>
                      {tier.price}
                    </span>
                    <span className="text-sm text-[#A0A0B8]">/ {tier.time}</span>
                  </div>

                  <ul className="space-y-2 mt-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#00E676] mt-0.5 flex-shrink-0" />
                        <span className="text-[#A0A0B8]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.status === "complete" && (
                    <div className="mt-6 pt-6 border-t border-[#2A2A3A] flex items-center gap-2 text-sm text-[#00E676]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Completed</span>
                    </div>
                  )}

                  {selectedTier === tier.id && (
                    <div className="mt-6 pt-6 border-t border-[#2A2A3A] text-center">
                      <div
                        className="text-sm font-medium"
                        style={{ color: tier.color }}
                      >
                        Selected
                      </div>
                    </div>
                  )}
                </GlassCard>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Submission Form */}
        {selectedTier && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <GlassCard>
              <h2 className="text-2xl font-bold mb-6">Submit Review Request</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Purpose of Verification</label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full px-4 py-3 bg-[#16161F] border border-[#2A2A3A] rounded-xl focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_20px_rgba(108,99,255,0.2)] transition-all"
                    required
                  >
                    <option value="">Select purpose...</option>
                    {purposes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Additional Context (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#16161F] border border-[#2A2A3A] rounded-xl focus:outline-none focus:border-[#6C63FF] focus:shadow-[0_0_20px_rgba(108,99,255,0.2)] transition-all resize-none"
                    placeholder="Provide any additional information that might help with the verification..."
                  />
                </div>

                <div className="p-4 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF] flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-[#A0A0B8]">
                    <p className="font-medium text-white mb-1">Important Notice</p>
                    <p>
                      Human verification requests are handled by certified forensic experts. Processing time
                      varies based on complexity. You will receive email updates throughout the process.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <GradientButton variant="filled" className="flex-1">
                    Submit Request
                  </GradientButton>
                  <button
                    type="button"
                    onClick={() => setSelectedTier(null)}
                    className="px-6 py-3 rounded-xl border border-[#2A2A3A] hover:border-[#6C63FF] transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        )}

        {/* Info Section */}
        {!selectedTier && (
          <GlassCard>
            <h3 className="text-xl font-bold mb-4">When to Request Human Verification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2 text-[#00E676]">Recommended For:</h4>
                <ul className="space-y-2 text-[#A0A0B8]">
                  <li>• Legal proceedings and court cases</li>
                  <li>• High-stakes media verification</li>
                  <li>• Insurance fraud investigations</li>
                  <li>• Critical business decisions</li>
                  <li>• When AI confidence is borderline</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-[#FFB300]">What to Expect:</h4>
                <ul className="space-y-2 text-[#A0A0B8]">
                  <li>• Detailed forensic analysis report</li>
                  <li>• Expert commentary and findings</li>
                  <li>• Technical methodology breakdown</li>
                  <li>• Higher accuracy than AI alone</li>
                  <li>• Professional support throughout</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  );
}

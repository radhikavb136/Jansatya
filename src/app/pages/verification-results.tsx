import { useState } from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  Share2,
  Download,
  MapPin,
  Calendar,
  User,
} from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { GradientButton } from "../components/gradient-button";
import { useNavigate, useParams } from "react-router";

export function VerificationResults() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showHeatmap, setShowHeatmap] = useState(false);

  // Mock data - in real app this would be based on the id param
  const isFake = id === "fake";
  const verdict = isFake ? "fake" : "authentic";

  const detectionBreakdown = [
    { category: "Face Analysis", confidence: isFake ? 92 : 15 },
    { category: "Voice Patterns", confidence: isFake ? 87 : 8 },
    { category: "Text Artifacts", confidence: isFake ? 78 : 12 },
    { category: "Compression", confidence: isFake ? 85 : 10 },
  ];

  const crossModalResults = [
    { check: "Audio-Visual Sync", result: isFake ? "Mismatch" : "Match", status: isFake ? "fail" : "pass" },
    { check: "Lighting Consistency", result: isFake ? "Inconsistent" : "Consistent", status: isFake ? "fail" : "pass" },
    { check: "Motion Blur", result: isFake ? "Unnatural" : "Natural", status: isFake ? "fail" : "pass" },
    { check: "Pixel Artifacts", result: isFake ? "Detected" : "None", status: isFake ? "fail" : "pass" },
  ];

  const socialSearchResults = [
    {
      platform: "Twitter",
      found: isFake ? "Modified version" : "Original",
      date: "Feb 15, 2026",
      url: "twitter.com/...",
    },
    {
      platform: "Facebook",
      found: isFake ? "Multiple edits" : "Shared 43 times",
      date: "Feb 18, 2026",
      url: "facebook.com/...",
    },
    {
      platform: "Reddit",
      found: isFake ? "Flagged as fake" : "No alterations",
      date: "Feb 20, 2026",
      url: "reddit.com/...",
    },
  ];

  return (
    <div className={`min-h-screen ${isFake ? "bg-[#0A0A0F]" : "bg-[#0A0A0F]"}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-[800px] h-[800px] rounded-full blur-[150px] ${
            isFake ? "bg-[#FF3D57]/20" : "bg-[#00E676]/20"
          } top-0 right-0`}
        />
        <div
          className={`absolute w-[600px] h-[600px] rounded-full blur-[150px] ${
            isFake ? "bg-[#FF3D57]/10" : "bg-[#00E676]/10"
          } bottom-0 left-0`}
        />
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-[#A0A0B8] hover:text-white transition-colors mb-6 inline-flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Verdict Banner */}
        <motion.div
          className={`max-w-7xl mx-auto mb-8 p-8 rounded-2xl border-2 ${
            isFake
              ? "bg-[#FF3D57]/10 border-[#FF3D57] shadow-[0_0_40px_rgba(255,61,87,0.3)]"
              : "bg-[#00E676]/10 border-[#00E676] shadow-[0_0_40px_rgba(0,230,118,0.3)]"
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {isFake ? (
                <AlertTriangle className="w-12 h-12 text-[#FF3D57]" />
              ) : (
                <CheckCircle2 className="w-12 h-12 text-[#00E676]" />
              )}
              <div>
                <h1 className="text-3xl font-bold mb-1">
                  {isFake ? "Fake Content Detected" : "Content is Authentic"}
                </h1>
                <p className="text-lg text-[#A0A0B8]">
                  {isFake
                    ? "This media shows signs of AI manipulation and deepfake technology"
                    : "No signs of manipulation detected. Content appears genuine."}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold mb-1" style={{ color: isFake ? "#FF3D57" : "#00E676" }}>
                {isFake ? "94%" : "6%"}
              </div>
              <div className="text-sm text-[#A0A0B8]">Confidence</div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Media & Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Media Preview */}
            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Media Preview</h2>
                <button
                  onClick={() => setShowHeatmap(!showHeatmap)}
                  className="px-4 py-2 rounded-lg bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF] hover:bg-[#6C63FF]/20 transition-all text-sm"
                >
                  <Eye className="w-4 h-4 inline mr-2" />
                  {showHeatmap ? "Hide" : "Show"} Heatmap
                </button>
              </div>
              <div className="relative aspect-video bg-[#0A0A0F] rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#A0A0B8]">
                  [Video Preview]
                </div>
                {showHeatmap && isFake && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF3D57]/40 via-[#FFB300]/20 to-transparent pointer-events-none" />
                )}
              </div>
              {showHeatmap && isFake && (
                <div className="mt-4 p-4 rounded-xl bg-[#FF3D57]/10 border border-[#FF3D57]">
                  <div className="text-sm text-[#A0A0B8]">
                    Red/orange areas indicate regions with detected manipulation
                  </div>
                </div>
              )}
            </GlassCard>

            {/* Detection Breakdown */}
            <GlassCard>
              <h2 className="text-xl font-bold mb-6">Detection Breakdown</h2>
              <div className="space-y-4">
                {detectionBreakdown.map((item) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{item.category}</span>
                      <span className="text-sm font-medium">{item.confidence}%</span>
                    </div>
                    <div className="h-2 bg-[#2A2A3A] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{
                          background:
                            item.confidence > 50
                              ? "linear-gradient(90deg, #FF3D57, #FFB300)"
                              : "linear-gradient(90deg, #00E676, #00D4FF)",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.confidence}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Cross-Modal Check */}
            <GlassCard>
              <h2 className="text-xl font-bold mb-6">Cross-Modal Analysis</h2>
              <div className="grid grid-cols-2 gap-4">
                {crossModalResults.map((item) => (
                  <div
                    key={item.check}
                    className={`p-4 rounded-xl border ${
                      item.status === "pass"
                        ? "bg-[#00E676]/10 border-[#00E676]"
                        : "bg-[#FF3D57]/10 border-[#FF3D57]"
                    }`}
                  >
                    <div className="text-sm text-[#A0A0B8] mb-1">{item.check}</div>
                    <div className="font-medium">{item.result}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Social Media Search */}
            <GlassCard>
              <h2 className="text-xl font-bold mb-6">Social Media Search Results</h2>
              <div className="space-y-4">
                {socialSearchResults.map((result, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0A0A0F]/50 border border-[#2A2A3A] hover:border-[#6C63FF]/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{result.platform}</span>
                      <span className="text-xs text-[#A0A0B8]">{result.date}</span>
                    </div>
                    <div className="text-sm text-[#A0A0B8] mb-2">{result.found}</div>
                    <a
                      href="#"
                      className="text-xs text-[#6C63FF] hover:text-[#00D4FF] transition-colors"
                    >
                      {result.url}
                    </a>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Info & Actions */}
          <div className="space-y-6">
            {/* Confidence Gauge */}
            <GlassCard>
              <h3 className="text-lg font-bold mb-6">Overall Confidence</h3>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#2A2A3A"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke={isFake ? "#FF3D57" : "#00E676"}
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(isFake ? 94 : 94) * 5.026} 502.6`}
                    className="transition-all duration-1000"
                    style={{
                      filter: `drop-shadow(0 0 10px ${isFake ? "#FF3D5780" : "#00E67680"})`,
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div
                    className="text-4xl font-bold"
                    style={{ color: isFake ? "#FF3D57" : "#00E676" }}
                  >
                    {isFake ? "94%" : "6%"}
                  </div>
                  <div className="text-sm text-[#A0A0B8]">Fake probability</div>
                </div>
              </div>
            </GlassCard>

            {/* Metadata */}
            <GlassCard>
              <h3 className="text-lg font-bold mb-4">File Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <User className="w-4 h-4 text-[#A0A0B8]" />
                  <span className="text-[#A0A0B8]">Uploader:</span>
                  <span>Anonymous</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-[#A0A0B8]" />
                  <span className="text-[#A0A0B8]">Analyzed:</span>
                  <span>Feb 23, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-[#A0A0B8]" />
                  <span className="text-[#A0A0B8]">Location:</span>
                  <span>Unknown</span>
                </div>
              </div>
            </GlassCard>

            {/* Actions */}
            <GlassCard>
              <h3 className="text-lg font-bold mb-4">Actions</h3>
              <div className="space-y-3">
                <GradientButton variant="filled" className="w-full">
                  <Download className="w-4 h-4 mr-2 inline" />
                  Download Report
                </GradientButton>
                <GradientButton variant="outlined" className="w-full">
                  <Share2 className="w-4 h-4 mr-2 inline" />
                  Share Results
                </GradientButton>
                <button
                  onClick={() => navigate("/human-verification")}
                  className="w-full px-4 py-3 rounded-xl border border-[#2A2A3A] hover:border-[#6C63FF] transition-all text-sm"
                >
                  Request Human Review
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

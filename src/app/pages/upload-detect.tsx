import { useState } from "react";
import { motion } from "motion/react";
import { Image, Video, Music, FileText, Upload, CheckCircle2, Loader2, Shield } from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { GradientButton } from "../components/gradient-button";
import { useNavigate } from "react-router";

export function UploadDetect() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<"image" | "video" | "audio" | "article">("image");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState(0);

  const contentTypes = [
    { id: "image", label: "Image", icon: Image },
    { id: "video", label: "Video", icon: Video },
    { id: "audio", label: "Audio", icon: Music },
    { id: "article", label: "Article", icon: FileText },
  ];

  const analysisSteps = [
    "File received",
    "AI detection running",
    "Cross-modal analysis",
    "Social media search",
    "Report ready",
  ];

  const handleFileUpload = () => {
    setIsUploading(true);
    setAnalysisStep(0);
    setUploadProgress(0);

    // Simulate upload and analysis
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/results/sample");
          }, 500);
          return 100;
        }
        return prev + 5;
      });

      setAnalysisStep((prev) => {
        const step = Math.floor((uploadProgress / 100) * analysisSteps.length);
        return Math.min(step, analysisSteps.length - 1);
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[120px] top-20 right-20" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00D4FF]/10 blur-[120px] bottom-20 left-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-[#A0A0B8] hover:text-white transition-colors mb-6 inline-flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold mb-2">Upload & Detect</h1>
          <p className="text-[#A0A0B8]">Upload media to detect manipulation, deepfakes, and synthetic content</p>
        </div>

        <GlassCard>
          {/* Content Type Selection */}
          <div className="mb-8">
            <label className="block text-sm mb-4">Select Content Type</label>
            <div className="grid grid-cols-4 gap-4">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id as any)}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedType === type.id
                      ? "bg-[#6C63FF]/10 border-[#6C63FF] shadow-[0_0_20px_rgba(108,99,255,0.3)]"
                      : "bg-[#0A0A0F]/50 border-[#2A2A3A] hover:border-[#6C63FF]/50"
                  }`}
                >
                  <type.icon className="w-8 h-8 mx-auto mb-3 text-[#6C63FF]" />
                  <div className="text-sm font-medium">{type.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Upload Zone */}
          {!isUploading ? (
            <motion.div
              className="border-2 border-dashed border-[#6C63FF] rounded-2xl p-16 text-center cursor-pointer hover:bg-[#6C63FF]/5 transition-all"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={handleFileUpload}
            >
              <Upload className="w-16 h-16 mx-auto mb-4 text-[#6C63FF]" />
              <h3 className="text-xl font-bold mb-2">Drop your file here or click to browse</h3>
              <p className="text-[#A0A0B8] mb-4">
                Support for JPG, PNG, MP4, MP3, PDF up to 500MB
              </p>
              <GradientButton variant="filled">Select File</GradientButton>
            </motion.div>
          ) : (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#A0A0B8]">Analyzing...</span>
                  <span className="text-sm font-medium">{uploadProgress}%</span>
                </div>
                <div className="h-2 bg-[#2A2A3A] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]"
                    initial={{ width: 0 }}
                    animate={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>

              {/* Analysis Steps */}
              <div className="space-y-4">
                {analysisSteps.map((step, idx) => {
                  const isComplete = idx < analysisStep;
                  const isCurrent = idx === analysisStep;

                  return (
                    <motion.div
                      key={step}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        isComplete
                          ? "bg-[#00E676]/10 border-[#00E676]"
                          : isCurrent
                          ? "bg-[#6C63FF]/10 border-[#6C63FF]"
                          : "bg-[#0A0A0F]/50 border-[#2A2A3A]"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {isComplete ? (
                        <CheckCircle2 className="w-6 h-6 text-[#00E676]" />
                      ) : isCurrent ? (
                        <Loader2 className="w-6 h-6 text-[#6C63FF] animate-spin" />
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-[#2A2A3A]" />
                      )}
                      <span className={isComplete || isCurrent ? "font-medium" : "text-[#A0A0B8]"}>
                        {step}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </GlassCard>

        {/* Info Cards */}
        {!isUploading && (
          <div className="grid grid-cols-3 gap-6 mt-8">
            <GlassCard className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-3 text-[#6C63FF]" />
              <h4 className="font-bold mb-2">AI-Powered</h4>
              <p className="text-sm text-[#A0A0B8]">
                Multi-model analysis for highest accuracy
              </p>
            </GlassCard>
            <GlassCard className="text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-[#00E676]" />
              <h4 className="font-bold mb-2">98.7% Accuracy</h4>
              <p className="text-sm text-[#A0A0B8]">
                Industry-leading detection rate
              </p>
            </GlassCard>
            <GlassCard className="text-center">
              <Upload className="w-8 h-8 mx-auto mb-3 text-[#00D4FF]" />
              <h4 className="font-bold mb-2">Fast Processing</h4>
              <p className="text-sm text-[#A0A0B8]">
                Results in under 30 seconds
              </p>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
}

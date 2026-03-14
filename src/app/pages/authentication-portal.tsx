import { useState } from "react";
import { motion } from "motion/react";
import { Upload, Shield, Calendar, Fingerprint, Hash, CheckCircle2 } from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { GradientButton } from "../components/gradient-button";
import { useNavigate } from "react-router";

export function AuthenticationPortal() {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [certificateData, setCertificateData] = useState({
    creatorName: "",
    hash: "",
    timestamp: "",
    device: "",
    certId: "",
  });

  const handleUpload = () => {
    setUploading(true);
    // Simulate file processing
    setTimeout(() => {
      setCertificateData({
        creatorName: "John Doe",
        hash: "3f4b8a2e9c1d5f7e8b4c6a9d2f1e7b8a5c3d9f4e2a1b7c8e5d3f9a6b2c4e1d8",
        timestamp: new Date().toISOString(),
        device: "Canon EOS R5 (Serial: ****7893)",
        certId: "TM-2026-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[120px] top-20 left-20" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00D4FF]/10 blur-[120px] bottom-20 right-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-[#A0A0B8] hover:text-white transition-colors mb-6 inline-flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold mb-2">Authentication Portal</h1>
          <p className="text-[#A0A0B8]">
            Register your original content and receive a blockchain-verified certificate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Upload Zone */}
          <div>
            <GlassCard>
              <h2 className="text-xl font-bold mb-6">Upload Original Content</h2>

              {!uploading ? (
                <motion.div
                  className="border-2 border-dashed border-[#00D4FF] rounded-2xl p-16 text-center cursor-pointer hover:bg-[#00D4FF]/5 transition-all"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  onClick={handleUpload}
                >
                  <Upload className="w-16 h-16 mx-auto mb-4 text-[#00D4FF]" />
                  <h3 className="text-xl font-bold mb-2">Upload Your Original File</h3>
                  <p className="text-[#A0A0B8] mb-4">
                    Images, videos, audio, or documents
                  </p>
                  <GradientButton variant="filled">Select File</GradientButton>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 mx-auto mb-4"
                    >
                      <Shield className="w-full h-full text-[#6C63FF]" />
                    </motion.div>
                    <p className="text-[#A0A0B8]">Processing and generating certificate...</p>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium mb-1">Cryptographic Hash</div>
                    <div className="text-[#A0A0B8]">
                      Unique SHA-256 fingerprint generated for your content
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium mb-1">Blockchain Verification</div>
                    <div className="text-[#A0A0B8]">
                      Timestamp and proof stored on immutable ledger
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium mb-1">Device Fingerprint</div>
                    <div className="text-[#A0A0B8]">
                      Metadata preserved for additional authenticity proof
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right - Certificate Preview */}
          <div>
            <GlassCard>
              <h2 className="text-xl font-bold mb-6">Live Certificate Preview</h2>

              <div className="bg-gradient-to-br from-[#16161F] to-[#0A0A0F] border-2 border-[#6C63FF]/30 rounded-2xl p-8 space-y-6">
                {/* Header */}
                <div className="text-center pb-6 border-b border-[#2A2A3A]">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Shield className="w-8 h-8 text-[#6C63FF]" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
                      Jansatya
                    </span>
                  </div>
                  <div className="text-sm text-[#A0A0B8]">Certificate of Authenticity</div>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-[#A0A0B8] mb-1">CREATOR NAME</div>
                    <div className="font-medium">
                      {certificateData.creatorName || "—"}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#A0A0B8] mb-1">SHA-256 HASH</div>
                    <div
                      className="font-mono text-xs text-[#00D4FF] break-all leading-relaxed"
                      style={{ textShadow: "0 0 10px rgba(0,212,255,0.5)" }}
                    >
                      {certificateData.hash || "Waiting for file..."}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-[#A0A0B8] mb-1">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        TIMESTAMP
                      </div>
                      <div className="text-sm">
                        {certificateData.timestamp
                          ? new Date(certificateData.timestamp).toLocaleString()
                          : "—"}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#A0A0B8] mb-1">CERTIFICATE ID</div>
                      <div className="text-sm font-mono text-[#00D4FF]">
                        {certificateData.certId || "—"}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#A0A0B8] mb-1">
                      <Fingerprint className="w-3 h-3 inline mr-1" />
                      DEVICE FINGERPRINT
                    </div>
                    <div className="text-sm">{certificateData.device || "—"}</div>
                  </div>
                </div>

                {/* Seal */}
                <div className="pt-6 border-t border-[#2A2A3A] flex items-center justify-center">
                  <motion.div
                    className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(108,99,255,0.5)",
                        "0 0 40px rgba(0,212,255,0.5)",
                        "0 0 20px rgba(108,99,255,0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Shield className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </div>

              {certificateData.certId && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <GradientButton
                    variant="filled"
                    className="w-full"
                    onClick={() => navigate(`/certificate/${certificateData.certId}`)}
                  >
                    View Full Certificate
                  </GradientButton>
                </motion.div>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
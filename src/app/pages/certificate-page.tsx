import { motion } from "motion/react";
import { Shield, Download, Share2, QrCode, ToggleLeft, Calendar, Hash, Fingerprint } from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { GradientButton } from "../components/gradient-button";
import { useNavigate, useParams } from "react-router";

export function CertificatePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const certificateData = {
    certId: id || "TM-2026-8F7A9B3C",
    creatorName: "John Doe",
    creatorEmail: "john@example.com",
    contentTitle: "Product_Launch_2024.mp4",
    hash: "3f4b8a2e9c1d5f7e8b4c6a9d2f1e7b8a5c3d9f4e2a1b7c8e5d3f9a6b2c4e1d8",
    timestamp: "2026-02-20T14:32:18Z",
    device: "Canon EOS R5 (Serial: ****7893)",
    blockchain: "Ethereum Mainnet",
    txHash: "0x7a3f9b2e1c5d8a4f6b9e3c2d1a8f5b7e4c9d2a6f1b8e5c3d9a7f2e4b1c6d8a3",
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00E676]/10 blur-[120px] top-20 left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-[#A0A0B8] hover:text-white transition-colors mb-6 inline-flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="!p-12 border-2 border-[#00E676]/30 shadow-[0_0_40px_rgba(0,230,118,0.2)]">
            {/* Watermark Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <Shield className="w-96 h-96" />
            </div>

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-12 pb-8 border-b-2 border-[#2A2A3A]">
                <motion.div
                  className="flex items-center justify-center gap-4 mb-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Shield className="w-12 h-12 text-[#6C63FF]" />
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
                    Jansatya
                  </span>
                </motion.div>
                <h1 className="text-2xl font-bold mb-2">Certificate of Authenticity</h1>
                <p className="text-[#A0A0B8]">
                  This document verifies the authenticity and ownership of digital content
                </p>
              </div>

              {/* Certificate Details */}
              <div className="space-y-8 mb-12">
                {/* Certificate ID */}
                <div className="text-center">
                  <div className="text-sm text-[#A0A0B8] mb-2">CERTIFICATE ID</div>
                  <div className="text-3xl font-bold font-mono text-[#00D4FF]">
                    {certificateData.certId}
                  </div>
                </div>

                {/* Content Info */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-[#A0A0B8] mb-2">CONTENT TITLE</div>
                    <div className="font-medium">{certificateData.contentTitle}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#A0A0B8] mb-2">CREATOR</div>
                    <div className="font-medium">{certificateData.creatorName}</div>
                  </div>
                </div>

                {/* Hash */}
                <div>
                  <div className="text-xs text-[#A0A0B8] mb-2 flex items-center gap-2">
                    <Hash className="w-4 h-4" />
                    SHA-256 HASH
                  </div>
                  <div
                    className="font-mono text-sm text-[#00D4FF] break-all leading-relaxed p-4 bg-[#0A0A0F]/50 rounded-xl border border-[#2A2A3A]"
                    style={{ textShadow: "0 0 10px rgba(0,212,255,0.5)" }}
                  >
                    {certificateData.hash}
                  </div>
                </div>

                {/* Timestamp & Device */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-[#A0A0B8] mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      TIMESTAMP (UTC)
                    </div>
                    <div className="text-sm">
                      {new Date(certificateData.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#A0A0B8] mb-2 flex items-center gap-2">
                      <Fingerprint className="w-4 h-4" />
                      DEVICE FINGERPRINT
                    </div>
                    <div className="text-sm">{certificateData.device}</div>
                  </div>
                </div>

                {/* Blockchain Info */}
                <div className="p-6 bg-[#0A0A0F]/50 rounded-xl border border-[#2A2A3A]">
                  <div className="text-xs text-[#A0A0B8] mb-4">BLOCKCHAIN VERIFICATION</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-[#A0A0B8] mb-1">Network</div>
                      <div className="font-medium">{certificateData.blockchain}</div>
                    </div>
                    <div>
                      <div className="text-[#A0A0B8] mb-1">Transaction Hash</div>
                      <div className="font-mono text-[#00D4FF] text-xs truncate">
                        {certificateData.txHash}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Holographic Seal */}
              <div className="flex items-center justify-between pt-8 border-t-2 border-[#2A2A3A]">
                <motion.div
                  className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(108,99,255,0.5)",
                      "0 0 40px rgba(0,212,255,0.5)",
                      "0 0 20px rgba(108,99,255,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-16 h-16 text-white" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </motion.div>

                {/* QR Code */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-xl p-2 mb-2">
                    <div className="w-full h-full bg-[#0A0A0F] rounded flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="text-xs text-[#A0A0B8]">Scan to verify</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <GradientButton variant="filled">
            <Download className="w-4 h-4 mr-2 inline" />
            Download PDF
          </GradientButton>
          <GradientButton variant="outlined">
            <Share2 className="w-4 h-4 mr-2 inline" />
            Share Link
          </GradientButton>
          <button className="px-6 py-3 rounded-xl border border-[#2A2A3A] hover:border-[#6C63FF] transition-all flex items-center justify-center gap-2">
            <ToggleLeft className="w-4 h-4" />
            <span>Auto-Alerts: Off</span>
          </button>
        </div>

        {/* Info Card */}
        <GlassCard className="mt-8">
          <h3 className="font-bold mb-4">About This Certificate</h3>
          <div className="text-sm text-[#A0A0B8] space-y-2">
            <p>
              This certificate provides cryptographic proof of content authenticity and ownership. The SHA-256
              hash uniquely identifies this content, and any modification will invalidate the certificate.
            </p>
            <p>
              The timestamp and blockchain transaction provide immutable proof of when this content was
              registered. Anyone can verify this certificate using the QR code or certificate ID.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
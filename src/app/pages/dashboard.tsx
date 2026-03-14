import { Shield, FileText, CheckCircle2, AlertTriangle, Bell, Plus } from "lucide-react";
import { GlassCard } from "../components/glass-card";
import { StatusBadge } from "../components/status-badge";
import { GradientButton } from "../components/gradient-button";
import { useNavigate } from "react-router";

export function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Registered Content", value: "127", icon: FileText, color: "#6C63FF" },
    { label: "Certificates Issued", value: "89", icon: CheckCircle2, color: "#00E676" },
    { label: "Detections Performed", value: "234", icon: Shield, color: "#00D4FF" },
    { label: "Active Alerts", value: "3", icon: AlertTriangle, color: "#FFB300" },
  ];

  const content = [
    {
      id: "1",
      name: "Product_Launch_2024.mp4",
      date: "Feb 20, 2026",
      status: "verified" as const,
      views: 1247,
    },
    {
      id: "2",
      name: "Executive_Interview.mp4",
      date: "Feb 18, 2026",
      status: "verified" as const,
      views: 892,
    },
    {
      id: "3",
      name: "Marketing_Assets_Final.zip",
      date: "Feb 15, 2026",
      status: "modified" as const,
      views: 543,
    },
    {
      id: "4",
      name: "Press_Release_Draft.pdf",
      date: "Feb 12, 2026",
      status: "verified" as const,
      views: 321,
    },
  ];

  const alerts = [
    {
      type: "high",
      message: "Potential unauthorized use detected",
      file: "Product_Launch_2024.mp4",
      time: "2 hours ago",
    },
    {
      type: "medium",
      message: "Certificate verification requested",
      file: "Executive_Interview.mp4",
      time: "5 hours ago",
    },
    {
      type: "low",
      message: "Content accessed from new location",
      file: "Marketing_Assets_Final.zip",
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Top Navbar */}
      <nav className="border-b border-[#2A2A3A] bg-[#16161F]/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-[#6C63FF]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
              Jansatya
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell className="w-5 h-5 text-[#A0A0B8] hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF3D57] rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-[#2A2A3A]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <div className="text-sm font-medium flex items-center gap-2">
                  John Doe
                  <CheckCircle2 className="w-4 h-4 text-[#00E676]" />
                </div>
                <div className="text-xs text-[#A0A0B8]">Pro Account</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-[#2A2A3A] min-h-[calc(100vh-73px)] bg-[#16161F]/30 p-6">
          <nav className="space-y-2">
            <button className="w-full px-4 py-3 rounded-xl bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF] font-medium text-left">
              Dashboard
            </button>
            <button
              onClick={() => navigate("/upload")}
              className="w-full px-4 py-3 rounded-xl hover:bg-[#2A2A3A]/50 text-[#A0A0B8] hover:text-white transition-all text-left"
            >
              Detect Media
            </button>
            <button
              onClick={() => navigate("/authenticate")}
              className="w-full px-4 py-3 rounded-xl hover:bg-[#2A2A3A]/50 text-[#A0A0B8] hover:text-white transition-all text-left"
            >
              Authenticate
            </button>
            <button
              onClick={() => navigate("/human-verification")}
              className="w-full px-4 py-3 rounded-xl hover:bg-[#2A2A3A]/50 text-[#A0A0B8] hover:text-white transition-all text-left"
            >
              Human Verification
            </button>
            <button className="w-full px-4 py-3 rounded-xl hover:bg-[#2A2A3A]/50 text-[#A0A0B8] hover:text-white transition-all text-left">
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Creator Dashboard</h1>
                <p className="text-[#A0A0B8]">Welcome back, John. Here's your content overview.</p>
              </div>
              <GradientButton
                variant="filled"
                onClick={() => navigate("/authenticate")}
              >
                <Plus className="w-5 h-5 mr-2 inline" />
                New Content
              </GradientButton>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <GlassCard key={stat.label} hover className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-[#A0A0B8]">{stat.label}</div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Content Grid */}
              <div className="lg:col-span-2">
                <GlassCard>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Your Content</h2>
                    <button className="text-sm text-[#6C63FF] hover:text-[#00D4FF] transition-colors">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {content.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-xl bg-[#0A0A0F]/50 border border-[#2A2A3A] hover:border-[#6C63FF]/50 transition-all cursor-pointer"
                        onClick={() => navigate(`/certificate/${item.id}`)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-[#6C63FF]" />
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-[#A0A0B8]">{item.date}</div>
                            </div>
                          </div>
                          <StatusBadge status={item.status} />
                        </div>
                        <div className="text-sm text-[#A0A0B8]">{item.views} verifications</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>

              {/* Alert Feed */}
              <div className="lg:col-span-1">
                <GlassCard>
                  <h2 className="text-xl font-bold mb-6">Live Alerts</h2>
                  <div className="space-y-4">
                    {alerts.map((alert, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border-l-4 ${
                          alert.type === "high"
                            ? "bg-[#FF3D57]/10 border-[#FF3D57]"
                            : alert.type === "medium"
                            ? "bg-[#FFB300]/10 border-[#FFB300]"
                            : "bg-[#00D4FF]/10 border-[#00D4FF]"
                        }`}
                      >
                        <div className="text-sm font-medium mb-1">{alert.message}</div>
                        <div className="text-xs text-[#A0A0B8] mb-2">{alert.file}</div>
                        <div className="text-xs text-[#A0A0B8]">{alert.time}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
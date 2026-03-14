interface StatusBadgeProps {
  status: "verified" | "modified" | "fake" | "pending";
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const styles = {
    verified: "bg-[#00E676]/10 text-[#00E676] border-[#00E676] shadow-[0_0_10px_rgba(0,230,118,0.3)]",
    modified: "bg-[#FFB300]/10 text-[#FFB300] border-[#FFB300] shadow-[0_0_10px_rgba(255,179,0,0.3)]",
    fake: "bg-[#FF3D57]/10 text-[#FF3D57] border-[#FF3D57] shadow-[0_0_10px_rgba(255,61,87,0.3)]",
    pending: "bg-[#A0A0B8]/10 text-[#A0A0B8] border-[#A0A0B8]",
  };

  const labels = {
    verified: "Verified",
    modified: "Modified",
    fake: "Fake",
    pending: "Pending",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg border text-sm font-medium ${styles[status]} ${className}`}
    >
      {labels[status]}
    </span>
  );
}

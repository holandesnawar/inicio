type Color = "orange" | "blue" | "green" | "slate";

const colors: Record<Color, string> = {
  orange: "bg-[#FFF7ED] text-[#F97316] border-[#F97316]/20",
  blue:   "bg-blue-50 text-blue-600 border-blue-200",
  green:  "bg-green-50 text-green-600 border-green-200",
  slate:  "bg-slate-100 text-slate-600 border-slate-200",
};

interface BadgeProps {
  children: React.ReactNode;
  color?: Color;
  className?: string;
}

export default function Badge({ children, color = "orange", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
}

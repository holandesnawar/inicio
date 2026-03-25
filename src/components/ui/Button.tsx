import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "white" | "outline-white" | "outline-blue" | "ghost-blue";
type Size    = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer whitespace-nowrap select-none";

const VARIANTS: Record<Variant, string> = {
  /* Light blue — main CTA */
  primary:
    "bg-[#4da3ff] text-[#0a1a4a] hover:bg-[#3391f0] hover:scale-[1.02] active:scale-[.98] focus-visible:ring-[#4da3ff]",

  /* White filled — CTA on dark sections */
  white:
    "bg-white text-[#1D0084] hover:bg-white/92 shadow-[0_2px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.22)] hover:scale-[1.02] active:scale-[.98] focus-visible:ring-white",

  /* Outline white — secondary on dark */
  "outline-white":
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/55 hover:scale-[1.02] focus-visible:ring-white",

  /* Outline blue — secondary on light */
  "outline-blue":
    "border border-[#025dc7]/35 text-[#025dc7] hover:bg-[#025dc7] hover:text-white hover:border-[#025dc7] hover:scale-[1.02] active:scale-[.98] focus-visible:ring-[#025dc7]",

  /* Ghost blue — minimal */
  "ghost-blue":
    "text-[#025dc7] hover:bg-[rgba(2,93,199,0.07)] hover:scale-[1.01] focus-visible:ring-[#025dc7]",
};

const SIZES: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-6 py-3   text-[14px]",
  lg: "px-7 py-3.5 text-[15px]",
};

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size; as?: "button" };
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size; as: "a" };
type Props = BtnProps | AnchorProps;

export default function Button({ variant = "primary", size = "md", as = "button", className = "", children, ...rest }: Props) {
  const cls = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  if (as === "a") return <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>;
  return <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
}

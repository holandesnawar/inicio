import { MARQUEE_ITEMS } from "@/lib/constants";

const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function Marquee() {
  return (
    <div data-navbar="light" className="bg-white border-y border-[#E8EBF4] py-8 overflow-hidden">

      <p className="text-center text-[11px] font-semibold text-[#C4C9D8] tracking-[0.14em] uppercase mb-6">
        Estudiantes de todo el mundo hispanohablante
      </p>

      <div className="relative flex">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="ticker flex gap-3 whitespace-nowrap will-change-transform">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium shrink-0 text-[#374151] bg-[#F4F5FB] border border-[#E8EBF4]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

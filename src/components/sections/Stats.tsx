import { STATS } from "@/lib/constants";
import Reveal from "@/components/ui/RevealOnScroll";

export default function Stats() {
  return (
    <section data-navbar="light" className="bg-white py-24 border-b border-[#DDE6F5]">
      <div className="max-w-5xl mx-auto px-6">

        <Reveal className="text-center mb-14">
          <p className="text-[12px] font-semibold text-[#9CA3AF] tracking-[0.15em] uppercase">
            La academia en números
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) as 0|1|2|3} className="text-center space-y-2">
              <p className="text-[56px] md:text-[64px] font-extrabold leading-none tracking-tight text-[#1D0084]">
                {s.value}
              </p>
              <p className="text-[13px] text-[#9CA3AF] font-medium">{s.label}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

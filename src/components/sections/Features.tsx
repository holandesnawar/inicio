import { FEATURES } from "@/lib/constants";
import Reveal from "@/components/ui/RevealOnScroll";

export default function Features() {
  return (
    <section data-navbar="light" id="metodo" className="relative bg-white overflow-hidden py-32">

      <div aria-hidden className="absolute inset-0 dots-light pointer-events-none" />
      {/* Soft blue radial top */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(2,93,199,0.06) 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D0084]/8 border border-[#1D0084]/14 text-[#1D0084] eyebrow">
            El método Nawar
          </span>
          <h2 className="title text-[#1D0084]">
            Por qué aprenderás más rápido{" "}
            <span className="text-[#025dc7]">aquí</span>
          </h2>
          <p className="text-[18px] text-[#4A5568] leading-relaxed max-w-lg mx-auto">
            No es un curso de idiomas genérico. Es un método construido desde cero para hispanohablantes, con o sin experiencia previa.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) as 0|1|2|3}>
              <div className="group card-soft rounded-2xl p-8 flex flex-col gap-5 h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#1D0084]/10 border border-[#1D0084]/14 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-[#1D0084]/16 transition-all duration-300">
                  {f.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-[16px] font-bold text-[#1D0084]">{f.title}</h3>
                  <p className="text-[14px] text-[#4A5568] leading-relaxed">{f.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

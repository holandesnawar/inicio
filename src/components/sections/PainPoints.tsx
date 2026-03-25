import { PAIN_POINTS } from "@/lib/constants";
import Reveal from "@/components/ui/RevealOnScroll";

export default function PainPoints() {
  return (
    <section data-navbar="dark" className="relative bg-[#1D0084] overflow-hidden py-32">

      {/* Radial glow — lighter blue in center */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(11,109,240,0.35) 0%, transparent 65%)" }}
        />
      </div>
      <div aria-hidden className="absolute inset-0 dots-dark pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow">
            <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ¿Te suena esto?
          </span>
          <h2 className="title text-white">
            El problema de aprender{" "}
            <span className="text-[#4da3ff]">neerlandés</span>
            {" "}en español
          </h2>
          <p className="text-[18px] text-white/55 leading-relaxed max-w-xl mx-auto">
            Estos son los obstáculos que enfrentan la mayoría de hispanohablantes. En Nawar los resolvemos uno por uno.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) as 0|1|2|3}>
              <div className="group glass rounded-2xl p-8 flex gap-5 items-start h-full">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-[17px] font-bold text-white">{p.title}</h3>
                  <p className="text-[14px] text-white/52 leading-relaxed">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-[16px] text-white/45">
            Nawar existe exactamente para esto.{" "}
            <a href="#metodo" className="text-[#4da3ff] font-semibold hover:text-white transition-colors">
              Ver cómo funciona →
            </a>
          </p>
        </Reveal>

      </div>
    </section>
  );
}

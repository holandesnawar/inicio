import { TESTIMONIALS } from "@/lib/constants";
import Reveal from "@/components/ui/RevealOnScroll";

export default function Testimonials() {
  return (
    <section data-navbar="dark" id="opiniones" className="relative bg-[#1D0084] overflow-hidden py-32">

      {/* Radial glow top */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
          style={{ background: "radial-gradient(ellipse at top center, rgba(11,109,240,0.40) 0%, transparent 65%)" }}
        />
      </div>
      <div aria-hidden className="absolute inset-0 dots-dark pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/14 text-white/60 eyebrow">
            Resultados reales
          </span>
          <h2 className="title text-white">
            Hispanohablantes que ya{" "}
            <span className="text-[#4da3ff]">hablan neerlandés</span>
          </h2>
          <p className="text-[18px] text-white/50 leading-relaxed max-w-md mx-auto">
            Más de 600 estudiantes. Algunos de sus testimonios.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) as 0|1|2} scale>
              <div className="glass rounded-2xl p-8 flex flex-col gap-6 h-full">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-[#F58220]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[15px] text-white/65 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#025dc7]/40 border border-white/16 flex items-center justify-center text-white font-bold text-[12px] shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[14px]">{t.name}</p>
                    <p className="text-white/38 text-[12px] mt-0.5">{t.origin}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

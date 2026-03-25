import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/RevealOnScroll";

export default function CallToAction() {
  return (
    <section data-navbar="dark" className="relative bg-[#1D0084] overflow-hidden py-36">

      {/* Strong central radial — lighter blue in center */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(11,109,240,0.45) 0%, transparent 65%)" }}
        />
      </div>
      <div aria-hidden className="absolute inset-0 dots-dark pointer-events-none" />

      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal className="space-y-8">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow">
            <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Empieza hoy
          </span>

          <h2 className="display text-white">
            El momento de hablar{" "}
            <span className="text-[#4da3ff]">neerlandés</span>
            <br />es ahora.
          </h2>

          <p className="text-[19px] text-white/50 leading-relaxed max-w-xl mx-auto">
            Únete a los más de 600 hispanohablantes que ya avanzan con método, comunidad y resultados reales.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <Button as="a" href="#cursos" variant="primary" size="lg">
              Ver todos los cursos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button as="a" href="#" variant="outline-white" size="lg">
              Contactar con la academia
            </Button>
          </div>

          <p className="text-[13px] text-white/30 pt-2">
            Sin compromiso · Orientación inicial gratuita
          </p>

        </Reveal>
      </div>
    </section>
  );
}

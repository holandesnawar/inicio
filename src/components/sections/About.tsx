import Reveal from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";

const pillars = [
  { icon: "🧠", label: "Método comparado español–neerlandés" },
  { icon: "🎙️", label: "Práctica oral desde la primera clase" },
  { icon: "🇳🇱", label: "Neerlandés real, no de libro de texto" },
  { icon: "🌍", label: "Comunidad exclusiva de hispanohablantes" },
];

export default function About() {
  return (
    <section data-navbar="light" id="academia" className="relative bg-white overflow-hidden py-32">

      <div aria-hidden className="absolute inset-0 dots-light pointer-events-none" />
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(circle, rgba(2,93,199,0.06) 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — visual */}
          <Reveal scale className="flex justify-center">
            <div className="relative w-72 lg:w-80">
              <div
                className="w-full aspect-[4/5] rounded-3xl border border-[#DDE6F5] bg-[#F0F5FF] flex flex-col items-center justify-center gap-6 p-8 overflow-hidden relative"
                style={{ boxShadow: "0 24px 60px rgba(29,0,132,0.10)" }}
              >
                {/* Inner radial */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(2,93,199,0.12) 0%, transparent 65%)" }}
                />
                <div aria-hidden className="absolute inset-0 dots-light opacity-60" />

                <div className="relative z-10 text-center space-y-2">
                  <p className="text-[#025dc7] eyebrow">Academia Nawar</p>
                  <p className="text-[#1D0084] font-extrabold text-[26px] leading-tight">Neerlandés<br />para hispanohablantes</p>
                </div>

                <div className="relative z-10 w-full space-y-2">
                  {pillars.map((p) => (
                    <div key={p.label} className="flex items-center gap-3 bg-white border border-[#DDE6F5] rounded-xl px-4 py-2.5">
                      <span className="text-base">{p.icon}</span>
                      <span className="text-[#1D0084] text-[12px] font-medium">{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shadow offset */}
              <div aria-hidden className="absolute top-4 left-4 w-full h-full rounded-3xl border border-[#DDE6F5] -z-10" />
            </div>
          </Reveal>

          {/* Right — copy */}
          <Reveal className="space-y-8" delay={1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde8f8] text-[#1D0084] eyebrow">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              La academia
            </span>

            <h2 className="title text-[#1D0084]">
              Diseñada para quienes aprenden{" "}
              <span className="text-[#025dc7]">desde el español</span>
            </h2>

            <div className="space-y-5 text-[16px] text-[#4A5568] leading-relaxed">
              <p>
                Nawar nació de una necesidad concreta: no existía ningún método serio para aprender neerlandés pensado específicamente para hispanohablantes. Todos los cursos asumían que el alumno partía del inglés.
              </p>
              <p>
                Llevamos más de cinco años desarrollando un sistema que parte del español como base lingüística. Comparamos estructuras, anticipamos los errores típicos del hispanohablante y construimos la comprensión desde lo que ya sabes.
              </p>
              <p>
                El resultado: nuestros estudiantes avanzan más rápido, con más confianza y menos frustración que en cualquier otro curso disponible.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["AG","CM","LP","RV"].map(ini => (
                  <div key={ini} className="w-9 h-9 rounded-full bg-[#1D0084] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                    {ini}
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-[#6B7180]">
                <span className="text-[#1D0084] font-semibold">+600 estudiantes</span> de 15 países
              </p>
            </div>

            <Button as="a" href="#cursos" variant="primary" size="md">
              Ver todos los cursos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Button>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

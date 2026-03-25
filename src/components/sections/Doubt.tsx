"use client";

import Reveal from "@/components/ui/RevealOnScroll";

const DOUBTS = [
  {
    icon: "😔",
    text: "Llevo meses con apps y libros pero sigo sin poder mantener una conversación básica.",
  },
  {
    icon: "😰",
    text: "Cuando alguien me habla en neerlandés, me bloqueo y no sé qué decir.",
  },
  {
    icon: "😤",
    text: "Todos los recursos están en inglés y no están pensados para mí.",
  },
  {
    icon: "😕",
    text: "No sé por dónde empezar ni si lo que estoy haciendo me está llevando a algún sitio.",
  },
];

export default function Doubt() {
  return (
    <section data-navbar="light" className="relative bg-white">
      <div aria-hidden className="absolute inset-0 dots-light pointer-events-none opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D0084]/8 border border-[#1D0084]/12 text-[#1D0084]/60 eyebrow">
            ¿Te suena esto?
          </span>
          <h2 className="title text-[#1D0084]">
            Si aprender neerlandés se siente{" "}
            <span className="text-[#025dc7]">imposible</span>,<br className="hidden sm:block" />
            {" "}no es culpa tuya.
          </h2>
          <p className="text-[17px] text-[#5A6480] leading-relaxed">
            La mayoría de recursos no están pensados para hispanohablantes. Nawar sí.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {DOUBTS.map((d, i) => (
            <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#DDE6F5] bg-white shadow-[0_2px_16px_rgba(29,0,132,0.05)] hover:border-[#025dc7]/25 hover:shadow-[0_4px_24px_rgba(2,93,199,0.09)] transition-all duration-200">
                <span className="text-2xl leading-none mt-0.5">{d.icon}</span>
                <p className="text-[15px] text-[#374151] leading-relaxed">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <a
            href="#lista-espera"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1D0084] text-white text-[15px] font-semibold hover:bg-[#025dc7] transition-all duration-200 shadow-[0_4px_20px_rgba(29,0,132,0.18)] hover:scale-[1.02]"
          >
            Empezar con Nawar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import { COMPARISON } from "@/lib/constants";
import Reveal from "@/components/ui/RevealOnScroll";

export default function StickyComparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      // travel = from section entering viewport to section leaving
      const travel = height - window.innerHeight;
      const raw = travel > 0 ? (-top) / travel : 0;
      setProgress(Math.min(Math.max(raw, 0), 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      data-navbar="light"
      className="relative bg-white"
    >
      <div aria-hidden className="absolute inset-0 dots-light pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Timeline line + animated dot — desktop only, sits on the column divider */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-24 bottom-24 pointer-events-none"
          style={{ left: "50%", transform: "translateX(-50%)", width: "20px" }}
        >
          {/* 1px line centered in the 20px wrapper */}
          <div className="absolute inset-y-0" style={{ left: "50%", transform: "translateX(-50%)", width: "1px", background: "#DDE6F5" }} />
          {/* Glowing dot that travels down the line — exactly centered */}
          <div
            className="absolute w-3.5 h-3.5 rounded-full bg-[#025dc7] border-2 border-white"
            style={{
              left: "50%",
              top: `${progress * 100}%`,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 0 4px rgba(2,93,199,0.15), 0 0 12px rgba(2,93,199,0.35)",
              transition: "top 0.08s linear",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

          {/* LEFT — STICKY */}
          <div className="lg:sticky lg:top-[72px] pt-24 pb-24 pr-0 lg:pr-16">
            <Reveal className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D0084]/8 border border-[#1D0084]/14 text-[#1D0084] eyebrow">
                Nawar vs academias clásicas
              </span>

              <h2 className="title text-[#1D0084]">
                Lo que marca la{" "}
                <span className="text-[#025dc7]">diferencia</span>
              </h2>

              <p className="text-[17px] text-[#5A6480] leading-relaxed">
                No es solo un curso de idiomas. Es el método que debería haber existido desde el principio para cualquier hispanohablante que quiere aprender neerlandés.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {["AG","CM","LP","RV"].map(ini => (
                    <div key={ini} className="w-8 h-8 rounded-full bg-[#1D0084] border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">
                      {ini}
                    </div>
                  ))}
                </div>
                <p className="text-[14px] text-[#9CA3AF]">
                  <span className="text-[#1D0084] font-semibold">+600 estudiantes</span>{" "}ya lo han comprobado
                </p>
              </div>

              <a
                href="#cursos"
                className="inline-flex items-center gap-2 text-[#025dc7] font-semibold text-[15px] hover:text-[#1D0084] transition-colors group"
              >
                Ver todos los cursos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>
          </div>

          {/* RIGHT — SCROLLING ROWS (no border-l, the absolute line covers it) */}
          <div className="pt-24 pb-24 pl-0 lg:pl-12 space-y-4">
            {COMPARISON.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) as 0|1|2|3}>
                <div className="compare-row p-7 flex gap-5 items-start">

                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#F0F5FF] border border-[#DDE6F5] flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3
                      className="text-[15px] font-semibold text-[#1D0084] leading-snug"
                      style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <div className="flex gap-2.5 items-start">
                      <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#025dc7] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-[13px] text-[#374151] leading-relaxed">{item.nawar}</p>
                    </div>

                    <div className="flex gap-2.5 items-start">
                      <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#F0F5FF] border border-[#DDE6F5] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#9CA3AF]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <p className="text-[13px] text-[#9CA3AF] leading-relaxed">{item.classic}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

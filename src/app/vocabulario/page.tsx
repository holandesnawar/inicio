import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WORDLISTS } from "@/lib/vocabulario";

export const metadata: Metadata = {
  title: "Vocabulario — Aprende neerlandés | Nawar",
  description: "Listas de vocabulario interactivas para aprender neerlandés desde el español. Aprende, practica y repasa con ejercicios diseñados para hispanohablantes.",
};

export default function VocabularioPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section data-navbar="dark" className="relative bg-[#1D0084] overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
              style={{ background: "radial-gradient(ellipse at center, rgba(11,109,240,0.35) 0%, transparent 65%)" }}
            />
          </div>
          <div aria-hidden className="absolute inset-0 dots-dark pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow mb-6">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vocabulario interactivo
            </span>

            <h1 className="display text-white mt-4" style={{ lineHeight: "1.18" }}>
              Aprende{" "}
              <span className="text-[#4da3ff]">vocabulario</span>
              <br />palabra a palabra
            </h1>

            <p className="mt-6 text-[18px] text-white/60 max-w-xl mx-auto leading-relaxed">
              Listas temáticas con pronunciación, ejemplos y práctica integrada. Diseñadas para hispanohablantes desde A0.
            </p>
          </div>
        </section>

        {/* ── Word lists grid ── */}
        <section data-navbar="light" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">

            <p className="text-[13px] text-[#9CA3AF] font-medium mb-10">
              {WORDLISTS.length} lista{WORDLISTS.length !== 1 ? "s" : ""} disponible{WORDLISTS.length !== 1 ? "s" : ""}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORDLISTS.map(list => (
                <Link
                  key={list.slug}
                  href={`/vocabulario/${list.slug}`}
                  className="group flex flex-col rounded-2xl border border-[#DDE6F5] hover:border-[#1D0084]/20 hover:shadow-[0_8px_32px_rgba(29,0,132,0.08)] transition-all duration-300 overflow-hidden bg-white"
                >
                  {/* Emoji header */}
                  <div
                    className="flex items-center justify-center py-10 text-6xl"
                    style={{ background: '#1D0084' }}
                  >
                    {list.emoji}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#dde8f8] text-[#1D0084] eyebrow">
                        {list.level}
                      </span>
                      <span className="text-[12px] text-[#9CA3AF] font-medium">
                        {list.words.length} palabras
                      </span>
                    </div>

                    <div>
                      <h2
                        className="text-[20px] font-bold text-[#1D0084] group-hover:text-[#025dc7] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                      >
                        {list.title}
                      </h2>
                      <p className="text-[13px] text-[#9CA3AF] font-medium mt-0.5">
                        {list.subtitle}
                      </p>
                    </div>

                    <p className="text-[14px] text-[#5A6480] leading-relaxed flex-1">
                      {list.description}
                    </p>

                    <div className="flex items-center gap-2 text-[14px] font-semibold text-[#025dc7] group-hover:gap-3 transition-all duration-200 pt-1">
                      Empezar
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Coming soon placeholder */}
              <div className="flex flex-col rounded-2xl border border-dashed border-[#DDE6F5] overflow-hidden opacity-50 select-none">
                <div
                  className="flex items-center justify-center py-10 text-6xl"
                  style={{ background: '#F0F5FF' }}
                >
                  ✨
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F0F5FF] text-[#9CA3AF] eyebrow w-fit">
                    Próximamente
                  </span>
                  <h2
                    className="text-[20px] font-bold text-[#9CA3AF]"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    Más listas en camino
                  </h2>
                  <p className="text-[14px] text-[#C4CBDB] leading-relaxed">
                    Trabajo, familia, comida, números, colores…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

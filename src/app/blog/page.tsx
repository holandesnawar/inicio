import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ARTICLES } from "@/lib/blog";
import type { Article } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Aprende neerlandés | Nawar",
  description: "Artículos prácticos sobre neerlandés para hispanohablantes: pronunciación, vocabulario, gramática y cultura de los Países Bajos.",
};

const CATEGORY_COLORS: Record<string, string> = {
  Cultura:       "bg-[#dde8f8] text-[#1D0084]",
  Vocabulario:   "bg-[#dde8f8] text-[#1D0084]",
  Aprendizaje:   "bg-[#dde8f8] text-[#1D0084]",
  Pronunciación: "bg-[#dde8f8] text-[#1D0084]",
};

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-[#DDE6F5] hover:border-[#1D0084]/20 hover:shadow-[0_8px_32px_rgba(29,0,132,0.08)] transition-all duration-300 overflow-hidden"
    >
      <div className="p-7 flex flex-col gap-4 flex-1">
        {/* Category + date */}
        <div className="flex items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full eyebrow ${CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS.Vocabulario}`}>
            {article.category}
          </span>
          <span className="text-[12px] text-[#9CA3AF] font-medium shrink-0">{article.date}</span>
        </div>

        {/* Title */}
        <h2
          className="text-[18px] font-bold text-[#1D0084] leading-snug group-hover:text-[#025dc7] transition-colors duration-200"
          style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
        >
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[15px] text-[#5A6480] leading-relaxed flex-1">
          {article.excerpt}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-[14px] font-semibold text-[#025dc7] group-hover:gap-3 transition-all duration-200 pt-1">
          Leer artículo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section
          data-navbar="dark"
          className="relative bg-[#1D0084] overflow-hidden"
        >
          {/* Background glow */}
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
              El blog de Nawar
            </span>

            <h1
              className="display text-white mt-4"
              style={{ lineHeight: "1.18" }}
            >
              Aprende neerlandés{" "}
              <span className="text-[#4da3ff]">con nosotros</span>
            </h1>

            <p className="mt-6 text-[18px] text-white/60 max-w-xl mx-auto leading-relaxed">
              Artículos prácticos sobre pronunciación, vocabulario, gramática y cultura neerlandesa, explicados desde el español.
            </p>
          </div>
        </section>

        {/* ── Article grid ── */}
        <section data-navbar="light" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">

            {/* Count */}
            <p className="text-[13px] text-[#9CA3AF] font-medium mb-10">
              {sorted.length} artículo{sorted.length !== 1 ? "s" : ""}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

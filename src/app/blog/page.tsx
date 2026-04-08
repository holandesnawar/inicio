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
  Cultura:       "bg-[#4da3ff]/15 text-[#4da3ff] border-[#4da3ff]/25",
  Vocabulario:   "bg-[#F58220]/15 text-[#F58220] border-[#F58220]/25",
  Aprendizaje:   "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/25",
  Pronunciación: "bg-[#8B5CF6]/15 text-[#8B5CF6] border-[#8B5CF6]/25",
};

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl border border-[#DDE6F5] hover:border-[#025dc7]/25 hover:shadow-[0_8px_40px_rgba(29,0,132,0.10)] transition-all duration-300 overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-[#F0F5FF] to-[#E0EBFF] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, rgba(77,163,255,0.3) 0%, transparent 60%)" }} />
        <span className="text-6xl opacity-20">📖</span>
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1D0084] text-white text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4da3ff] animate-pulse" />
            Artículo destacado
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-5">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold border ${CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS.Vocabulario}`}>
            {article.category}
          </span>
          <span className="text-[13px] text-[#9CA3AF]">{article.readTime} de lectura</span>
        </div>

        <h2
          className="text-[24px] lg:text-[28px] font-bold text-[#1D0084] leading-tight group-hover:text-[#025dc7] transition-colors duration-200 mb-4"
          style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
        >
          {article.title}
        </h2>

        <p className="text-[16px] text-[#5A6480] leading-relaxed mb-6">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 text-[14px] font-semibold text-[#025dc7] group-hover:gap-3 transition-all duration-200">
          Leer artículo completo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-[#DDE6F5] hover:border-[#025dc7]/20 hover:shadow-[0_8px_32px_rgba(29,0,132,0.08)] transition-all duration-300 overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#F0F5FF] to-[#E8EFFF] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 30%, rgba(77,163,255,0.25) 0%, transparent 60%)" }} />
        <span className="text-3xl opacity-25">📚</span>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Category + time */}
        <div className="flex items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS.Vocabulario}`}>
            {article.category}
          </span>
          <span className="text-[11px] text-[#9CA3AF] font-medium shrink-0">{article.readTime}</span>
        </div>

        {/* Title */}
        <h2
          className="text-[16px] font-bold text-[#1D0084] leading-snug group-hover:text-[#025dc7] transition-colors duration-200 line-clamp-2"
          style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
        >
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[14px] text-[#5A6480] leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>

        {/* Date + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E8EBF4]">
          <span className="text-[12px] text-[#9CA3AF]">{article.date}</span>
          <span className="flex items-center gap-1.5 text-[13px] font-semibold text-[#025dc7] group-hover:gap-2.5 transition-all duration-200">
            Leer
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

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

          <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-20 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow mb-5">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              El blog de Nawar
            </span>

            <h1
              className="display text-white mt-3"
              style={{ lineHeight: "1.18" }}
            >
              Recursos para aprender{" "}
              <span className="text-[#4da3ff]">neerlandés</span>
            </h1>

            <p className="mt-5 text-[18px] text-white/55 max-w-xl mx-auto leading-relaxed">
              Artículos prácticos sobre pronunciación, vocabulario, gramática y cultura neerlandesa, explicados desde el español.
            </p>
          </div>
        </section>

        {/* ── Featured Article ── */}
        <section data-navbar="light" className="bg-[#F0F5FF] pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-6">
            {featured && <FeaturedArticle article={featured} />}
          </div>
        </section>

        {/* ── Article grid ── */}
        <section data-navbar="light" className="bg-[#F0F5FF] pb-20">
          <div className="max-w-6xl mx-auto px-6">

            {/* Count */}
            <p className="text-[13px] text-[#9CA3AF] font-medium mb-8">
              {rest.length} artículo{rest.length !== 1 ? "s" : ""} más
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(article => (
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
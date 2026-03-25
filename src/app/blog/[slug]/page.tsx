import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ARTICLES, getArticle, getRelated } from "@/lib/blog";
import type { Article, Block } from "@/lib/blog";

/* ── Static params ── */
export function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Nawar`,
    description: article.excerpt,
  };
}

/* ── Prose renderer ── */
function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-[22px] font-bold text-[#1D0084] mt-10 mb-2 leading-snug"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="text-[17px] font-semibold text-[#1D0084] mt-6 mb-1"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[17px] text-[#374151] leading-[1.78]">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[17px] text-[#374151] leading-[1.7]">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#025dc7] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[17px] text-[#374151] leading-[1.7]">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#1D0084]/8 text-[#1D0084] text-[12px] font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/* ── Related card ── */
function RelatedCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-[#DDE6F5] hover:border-[#1D0084]/20 hover:shadow-[0_8px_32px_rgba(29,0,132,0.08)] transition-all duration-300 p-6 gap-3"
    >
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#dde8f8] text-[#1D0084] eyebrow w-fit">
        {article.category}
      </span>
      <h3
        className="text-[16px] font-bold text-[#1D0084] leading-snug group-hover:text-[#025dc7] transition-colors duration-200"
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        {article.title}
      </h3>
      <p className="text-[14px] text-[#5A6480] leading-relaxed line-clamp-2">
        {article.excerpt}
      </p>
      <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#025dc7] group-hover:gap-2.5 transition-all duration-200 mt-auto pt-1">
        Leer artículo
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}

/* ── Page ── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelated(article);

  return (
    <>
      <Navbar />
      <main>

        {/* ── Article header ── */}
        <section data-navbar="dark" className="relative bg-[#1D0084] overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
              style={{ background: "radial-gradient(ellipse at center, rgba(11,109,240,0.35) 0%, transparent 65%)" }}
            />
          </div>
          <div aria-hidden className="absolute inset-0 dots-dark pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 pt-36 pb-16">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white/80 transition-colors duration-200 mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Volver al blog
            </Link>

            {/* Category badge */}
            <div className="mb-5">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="display text-white"
              style={{ lineHeight: "1.18" }}
            >
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 mt-7 text-[13px] text-white/45">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/25" />
              <span>{article.readTime} de lectura</span>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section data-navbar="light" className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6">

            {/* Excerpt / lead */}
            <p className="text-[19px] text-[#025dc7] font-medium leading-relaxed border-l-[3px] border-[#025dc7]/25 pl-5 mb-12">
              {article.excerpt}
            </p>

            <Prose blocks={article.content} />

            {/* Share */}
            <div className="mt-16 pt-10 border-t border-[#DDE6F5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[15px] font-semibold text-[#1D0084]">
                ¿Te ha resultado útil? Compártelo
              </p>
              <div className="flex items-center gap-2">
                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.holandesnawar.com/blog/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[#5A6480] bg-[#F0F5FF] hover:bg-[#1D0084] hover:text-white transition-all duration-200"
                  aria-label="Compartir en X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.851L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(article.title + ' — ' + `https://www.holandesnawar.com/blog/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[#5A6480] bg-[#F0F5FF] hover:bg-[#25D366] hover:text-white transition-all duration-200"
                  aria-label="Compartir por WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related articles ── */}
        {related.length > 0 && (
          <section data-navbar="light" className="bg-[#F0F5FF] py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2
                className="text-[20px] font-bold text-[#1D0084] mb-8"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Artículos relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(a => (
                  <RelatedCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section data-navbar="dark" className="bg-[#1D0084] py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow mb-6">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Aprende con Nawar
            </span>
            <h2
              className="title text-white mt-4 mb-4"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-[17px] text-white/55 mb-8 leading-relaxed">
              Únete a la lista de espera y sé el primero en saber cuándo abrimos nuevas plazas.
            </p>
            <a
              href="/#lista-espera"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#4da3ff] text-[#0a1a4a] text-[15px] font-semibold hover:bg-[#3391f0] hover:scale-[1.02] transition-all duration-200"
            >
              Apuntarme a la lista de espera
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

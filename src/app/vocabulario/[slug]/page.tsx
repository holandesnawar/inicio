import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WordlistViewer from "@/components/vocabulario/WordlistViewer";
import { WORDLISTS, getWordlist } from "@/lib/vocabulario";

export function generateStaticParams() {
  return WORDLISTS.map(w => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const list = getWordlist(slug);
  if (!list) return {};
  return {
    title: `${list.title} — Vocabulario neerlandés | Nawar`,
    description: list.description,
  };
}

export default async function WordlistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const list = getWordlist(slug);
  if (!list) notFound();

  return (
    <>
      <Navbar />
      <main>
        <WordlistViewer list={list} />
      </main>
      <Footer />
    </>
  );
}

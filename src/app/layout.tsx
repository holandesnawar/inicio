import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nawar — Aprende neerlandés online",
  description:
    "Academia de neerlandés para hispanohablantes. Clases en vivo, método desde el español y comunidad activa.",
  keywords: "neerlandés, holandés, curso online, hispanohablantes, clases en vivo, Países Bajos",
  openGraph: {
    title: "Nawar — Neerlandés para hispanohablantes",
    description: "Aprende neerlandés con un método diseñado desde el español.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} h-full`} style={{ background: '#1D0084' }}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

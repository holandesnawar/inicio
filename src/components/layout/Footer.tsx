"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

const SOCIAL = [
  {
    name: "Instagram", href: "#",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    name: "YouTube", href: "#",
    icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
];

const BENEFITS = [
  "Acceso anticipado a nuevas plazas",
  "Material exclusivo de bienvenida",
  "Descuento especial al apuntarte",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    setSent(true);
    setEmail("");
  };

  return (
    <footer data-navbar="dark" className="bg-[#1D0084]">

      {/* ── Email signup block ── */}
      <div id="lista-espera" className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0b6df0]/15 via-[#1D0084]/8 to-transparent border border-white/10 px-8 py-12 md:px-14 md:py-16">
          <div className="max-w-xl">
            <h3
              className="text-[26px] md:text-[32px] font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Sé el primero en apuntarte
            </h3>
            <p className="text-[16px] text-white/55 leading-relaxed mb-8">
              Únete a la lista de espera y te avisamos cuando abramos nuevas plazas. Sin compromiso.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#4da3ff]/20 border border-[#4da3ff]/30 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#4da3ff]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-white/75">{benefit}</span>
                </div>
              ))}
            </div>

            {sent ? (
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#4da3ff]/15 border border-[#4da3ff]/25 text-white">
                <svg className="w-5 h-5 text-[#4da3ff] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[15px] font-medium">¡Apuntado! Te avisaremos pronto.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(false); }}
                  placeholder="Tu email"
                  className={`flex-1 px-5 py-4 rounded-xl bg-white/8 border text-white placeholder:text-white/40 text-[15px] outline-none transition-all ${
                    error ? "border-red-400/60" : "border-white/14 focus:border-[#4da3ff]/50"
                  }`}
                />
                <button
                  type="submit"
                  className="px-7 py-4 rounded-xl bg-[#4da3ff] text-[#0a1a4a] text-[15px] font-semibold hover:bg-[#5eb4ff] transition-all duration-200 shadow-[0_4px_20px_rgba(77,163,255,0.25)] whitespace-nowrap"
                >
                  Apuntarme
                </button>
              </form>
            )}

            {error && (
              <p className="text-[13px] text-red-400/80 mt-3">Introduce un email válido.</p>
            )}

            <p className="text-[12px] text-white/35 leading-relaxed mt-5">
              Al apuntarte, aceptas nuestra{" "}
              <a href="#" className="underline hover:text-white/60 transition-colors">política de privacidad</a>.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 border-t border-white/8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="https://d1yei2z3i6k35z.cloudfront.net/9533860/671a9c9265e23_Logo_Nawar_2.png"
              alt="Nawar"
              className="h-7 w-auto object-contain mb-4"
            />
            <p className="text-white/38 text-sm leading-relaxed mb-5">
              Academia de neerlandés para hispanohablantes.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 bg-white/6 border border-white/10 hover:text-white hover:bg-white/14 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/28 mb-4">Navegación</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academia */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/28 mb-4">Academia</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Acceso a alumnos</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Metodología</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/28 mb-4">Contacto</p>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:hola@holandesnawar.com" className="text-white/70 hover:text-white transition-colors duration-200">hola@holandesnawar.com</a></li>
              <li className="text-white/35">Clases 100% online · En directo</li>
              <li><a href="https://www.holandesnawar.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-white/70 transition-colors duration-200">holandesnawar.com ↗</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 mt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Nawar. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50 transition-colors duration-200">Privacidad</a>
            <a href="#" className="hover:text-white/50 transition-colors duration-200">Términos</a>
            <a href="#" className="hover:text-white/50 transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
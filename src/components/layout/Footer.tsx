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

export default function Footer() {
  const [email, setEmail]     = useState("");
  const [sent,  setSent]      = useState(false);
  const [error, setError]     = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) { setError(true); return; }
    setError(false);
    setSent(true);
    setEmail("");
  };

  return (
    <footer data-navbar="dark" className="bg-[#1D0084] border-t border-white/8">

      {/* ── CTA block ── */}
      <div id="lista-espera" className="max-w-6xl mx-auto px-6 pt-16">
        {/* Light blue card — inverted palette */}
        <div className="relative rounded-3xl bg-[#F0F5FF] overflow-hidden px-8 py-14 text-center">

          {/* Subtle light glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(77,163,255,0.55) 0%, rgba(77,163,255,0.18) 40%, transparent 75%)" }}
          />
          {/* Dot pattern */}
          <div aria-hidden className="absolute inset-0 dots-light pointer-events-none opacity-60" />

          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D0084]/8 border border-[#1D0084]/12 text-[#1D0084]/60 eyebrow">
              Lista de espera
            </span>

            <h3
              className="title text-[#1D0084]"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Sé el primero en saber<br />
              <span className="text-[#025dc7]">cuándo abrimos plazas</span>
            </h3>

            <p className="text-[16px] text-[#5A6480] leading-relaxed">
              Apúntate y te avisamos antes que nadie cuando haya nuevas incorporaciones.
            </p>

            {sent ? (
              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1D0084]/8 border border-[#1D0084]/12 text-[#1D0084] font-medium text-[15px]">
                <svg className="w-4 h-4 text-[#025dc7]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                ¡Apuntado! Te avisaremos pronto.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 justify-center pt-1"
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(false); }}
                  placeholder="tu@email.com"
                  className={`flex-1 max-w-sm px-5 py-3 rounded-xl bg-white border text-[#1D0084] placeholder:text-[#9CA3AF] text-[14px] outline-none focus:bg-white transition-colors ${
                    error ? "border-red-400/60" : "border-[#DDE6F5] focus:border-[#025dc7]/50"
                  }`}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#1D0084] text-white text-[14px] font-semibold hover:bg-[#025dc7] transition-all duration-200 shadow-[0_4px_16px_rgba(29,0,132,0.20)] hover:scale-[1.02] shrink-0"
                >
                  Apuntarme
                </button>
              </form>
            )}

            {error && (
              <p className="text-[13px] text-red-500/70">Introduce un email válido.</p>
            )}

            <p className="text-[12px] text-[#9CA3AF] pt-1">
              Sin spam. Solo te contactamos cuando haya plazas disponibles.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/8">

          <div className="space-y-5">
            <img
              src="https://d1yei2z3i6k35z.cloudfront.net/9533860/671a9c9265e23_Logo_Nawar_2.png"
              alt="Nawar"
              className="h-7 w-auto object-contain"
            />
            <p className="text-white/38 text-sm leading-relaxed max-w-xs">
              Academia online de neerlandés para hispanohablantes. Aprende de verdad, con método y comunidad.
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

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/28 mb-5">Navegación</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/85 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/28 mb-5">Contacto</p>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:hola@holandesnawar.com" className="text-white/85 hover:text-white transition-colors duration-200">hola@holandesnawar.com</a></li>
              <li className="text-white/22">Clases 100% online · En directo</li>
              <li><a href="https://www.holandesnawar.com" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">holandesnawar.com ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/18">
          <p>© {new Date().getFullYear()} Nawar. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            {["Privacidad", "Términos", "Cookies"].map((l) => (
              <a key={l} href="#" className="hover:text-white/45 transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BENEFITS = [
  {
    icon: "🎯",
    title: "Acceso anticipado",
    description: "Serás el primero en saber cuando abramos nuevas plazas.",
  },
  {
    icon: "📚",
    title: "Material exclusivo",
    description: "Recibirás contenido gratuito para empezar a practicar.",
  },
  {
    icon: "💰",
    title: "Precio especial",
    description: "Descuento exclusivo para los primeros de la lista.",
  },
  {
    icon: "🔔",
    title: "Sin compromiso",
    description: "Solo te avisamos. Decides si apuntarte cuando quieras.",
  },
];

const STATS = [
  { value: "600+", label: "Estudiantes formados" },
  { value: "4.9★", label: "Valoración media" },
  { value: "+5", label: "Años de experiencia" },
];

export default function ListaDeEspera() {
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
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section data-navbar="dark" className="relative bg-[#1D0084] overflow-hidden min-h-[85vh] flex items-center">
          {/* Background glow */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px]"
              style={{ background: "radial-gradient(ellipse at center, rgba(11,109,240,0.40) 0%, transparent 65%)" }}
            />
          </div>
          <div aria-hidden className="absolute inset-0 dots-dark pointer-events-none" />

          <div className="relative w-full max-w-6xl mx-auto px-6 py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — Copy */}
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4da3ff] animate-pulse" />
                  Próxima apertura
                </span>

                <h1
                  className="display text-white"
                  style={{ lineHeight: "1.15" }}
                >
                  Sé el primero en{" "}
                  <span className="text-[#4da3ff]">apuntarte</span>
                </h1>

                <p className="mt-5 text-[18px] text-white/55 leading-relaxed">
                  Únete a la lista de espera y te avisamos cuando abramos nuevas plazas. Sin compromiso, solo te escribimos cuando haya hueco.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mt-8">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[28px] font-bold text-white" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                        {stat.value}
                      </p>
                      <p className="text-[13px] text-white/45">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form card */}
              <div className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <div
                  className="glass rounded-3xl p-8 md:p-10"
                  style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.09)" }}
                >
                  {sent ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-[#4da3ff]/20 border border-[#4da3ff]/30 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-8 h-8 text-[#4da3ff]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-[20px] font-bold text-white mb-2" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                        ¡Ya estás en la lista!
                      </h3>
                      <p className="text-[15px] text-white/55">
                        Te avisaremos cuando abramos plazas.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3
                        className="text-[22px] font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                      >
                        Apúntate a la lista
                      </h3>
                      <p className="text-[14px] text-white/50 mb-6">
                        Sin compromiso. Solo te avisamos cuando haya plazas.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[13px] text-white/50 mb-2">Tu nombre</label>
                          <input
                            type="text"
                            placeholder="Tu nombre"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/14 text-white placeholder:text-white/35 text-[15px] outline-none focus:border-[#4da3ff]/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] text-white/50 mb-2">Tu email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(false); }}
                            placeholder="tu@email.com"
                            className={`w-full px-4 py-3.5 rounded-xl bg-white/8 border text-white placeholder:text-white/35 text-[15px] outline-none transition-colors ${
                              error ? "border-red-400/60" : "border-white/14 focus:border-[#4da3ff]/50"
                            }`}
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-6 py-4 rounded-xl bg-[#4da3ff] text-[#0a1a4a] text-[16px] font-semibold hover:bg-[#5eb4ff] transition-all duration-200 shadow-[0_4px_20px_rgba(77,163,255,0.30)]"
                        >
                          Apuntarme a la lista
                        </button>
                        {error && (
                          <p className="text-[13px] text-red-400/80">Introduce un email válido.</p>
                        )}
                      </form>

                      <p className="text-[11px] text-white/30 mt-4 leading-relaxed">
                        Al apuntarte, aceptas recibir emails sobre cursos de neerlandés.
                      </p>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section data-navbar="light" className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2
                className="text-[28px] md:text-[36px] font-bold text-[#1D0084] leading-tight"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                ¿Por qué unirse a la lista?
              </h2>
              <p className="mt-4 text-[17px] text-[#5A6480] leading-relaxed">
                No es solo un aviso. Ser parte de la lista tiene ventajas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="group p-8 rounded-2xl bg-[#F0F5FF] border border-[#DDE6F5] hover:border-[#025dc7]/25 hover:shadow-[0_8px_32px_rgba(2,93,199,0.08)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#DDE6F5] flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3
                    className="text-[17px] font-bold text-[#1D0084] mb-2"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] text-[#5A6480] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section data-navbar="dark" className="bg-[#1D0084] py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="text-[28px] md:text-[36px] font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              ¿Tienes dudas?
            </h2>
            <p className="mt-4 text-[17px] text-white/55 leading-relaxed">
              Escríbenos y te respondemos en menos de 24 horas.
            </p>
            <a
              href="mailto:hola@holandesnawar.com"
              className="inline-flex items-center gap-2.5 mt-8 px-7 py-4 rounded-xl bg-white text-[#1D0084] text-[15px] font-semibold hover:bg-white/95 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hola@holandesnawar.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
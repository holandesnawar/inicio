"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const FAQS = [
  {
    question: "¿Cómo son las clases?",
    answer: "Son clases en vivo, por videollamada, en grupos reducidos. No son vídeos pregrabados: interactúas con el profesor y con otros estudiantes desde el primer día.",
  },
  {
    question: "¿Necesito conocimientos previos?",
    answer: "No. Tenemos cursos desde cero (A1) hasta nivel intermedio (B1). Si nunca has estudiado neerlandés, empiezas por el principio.",
  },
  {
    question: "¿Cuánto tiempo tarda cada nivel?",
    answer: "Depende del ritmo, pero A1 dura unas 8 semanas, A2 unas 10 semanas, y B1 unas 12 semanas. El club de conversación es mensual.",
  },
  {
    question: "¿Puedo probar antes de apuntarme?",
    answer: "Sí. Ofrecemos una clase de prueba gratuita para que conozcas el método y veas si encaja contigo. Sin compromiso.",
  },
];

export default function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.includes("@")) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

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

          <div className="relative max-w-4xl mx-auto px-6 pt-36 pb-20 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#025dc7] text-[#e0f2ff] eyebrow mb-6">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Contacto
            </span>

            <h1
              className="display text-white"
              style={{ lineHeight: "1.15" }}
            >
              ¿Tienes dudas?{" "}
              <span className="text-[#4da3ff]">Escríbenos</span>
            </h1>

            <p className="mt-5 text-[18px] text-white/55 max-w-xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
            </p>
          </div>
        </section>

        {/* ── Contact section ── */}
        <section data-navbar="light" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Left — Form */}
              <div>
                {sent ? (
                  <div className="bg-[#F0F5FF] rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#025dc7]/10 border border-[#025dc7]/20 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-[#025dc7]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2
                      className="text-[22px] font-bold text-[#1D0084] mb-3"
                      style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                    >
                      Mensaje enviado
                    </h2>
                    <p className="text-[16px] text-[#5A6480]">
                      Te responderemos lo antes posible. Gracias por escribirnos.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-[24px] font-bold text-[#1D0084] mb-6"
                      style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                    >
                      Envíanos un mensaje
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-[13px] text-[#5A6480] mb-2 font-medium">Tu nombre</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="¿Cómo te llamas?"
                          className="w-full px-5 py-4 rounded-xl bg-[#F0F5FF] border border-[#DDE6F5] text-[#1D0084] placeholder:text-[#9CA3AF] text-[15px] outline-none focus:border-[#025dc7]/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#5A6480] mb-2 font-medium">Tu email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="tu@email.com"
                          required
                          className="w-full px-5 py-4 rounded-xl bg-[#F0F5FF] border border-[#DDE6F5] text-[#1D0084] placeholder:text-[#9CA3AF] text-[15px] outline-none focus:border-[#025dc7]/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#5A6480] mb-2 font-medium">Mensaje</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="¿En qué podemos ayudarte?"
                          rows={5}
                          className="w-full px-5 py-4 rounded-xl bg-[#F0F5FF] border border-[#DDE6F5] text-[#1D0084] placeholder:text-[#9CA3AF] text-[15px] outline-none focus:border-[#025dc7]/40 transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-4 rounded-xl bg-[#1D0084] text-white text-[16px] font-semibold hover:bg-[#025dc7] transition-colors duration-200"
                      >
                        Enviar mensaje
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Right — Info + FAQ */}
              <div>
                {/* Direct contact */}
                <div className="mb-12">
                  <h3
                    className="text-[18px] font-bold text-[#1D0084] mb-4"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    Contacto directo
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hola@holandesnawar.com"
                      className="flex items-center gap-4 p-5 rounded-xl bg-[#F0F5FF] border border-[#DDE6F5] hover:border-[#025dc7]/30 transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#DDE6F5] flex items-center justify-center text-[#1D0084] group-hover:bg-[#1D0084] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[15px] font-semibold text-[#1D0084]">Email</p>
                        <p className="text-[14px] text-[#5A6480]">hola@holandesnawar.com</p>
                      </div>
                    </a>
                    <a
                      href="https://instagram.com/holandes.nawar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-5 rounded-xl bg-[#F0F5FF] border border-[#DDE6F5] hover:border-[#025dc7]/30 transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#DDE6F5] flex items-center justify-center text-[#1D0084] group-hover:bg-[#1D0084] group-hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[15px] font-semibold text-[#1D0084]">Instagram</p>
                        <p className="text-[14px] text-[#5A6480]">@holandes.nawar</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3
                    className="text-[18px] font-bold text-[#1D0084] mb-4"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    Preguntas frecuentes
                  </h3>
                  <div className="space-y-3">
                    {FAQS.map((faq, i) => (
                      <details key={i} className="group p-5 rounded-xl bg-[#F0F5FF] border border-[#DDE6F5]">
                        <summary className="flex items-center justify-between cursor-pointer list-none text-[15px] font-semibold text-[#1D0084]">
                          {faq.question}
                          <svg className="w-5 h-5 text-[#9CA3AF] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <p className="mt-3 text-[14px] text-[#5A6480] leading-relaxed">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
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
import { COURSES } from "@/lib/constants";
import Reveal from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";

export default function Courses() {
  return (
    <section data-navbar="light" id="cursos" className="bg-white py-32 relative overflow-hidden">

      <div aria-hidden className="absolute inset-0 dots-light pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        <Reveal className="text-center max-w-2xl mx-auto mb-20 space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dde8f8] text-[#1D0084] eyebrow">
            <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Cursos disponibles
          </span>
          <h2 className="title-dark">
            Elige tu nivel y{" "}
            <span className="text-[#1D0084]">empieza</span>
          </h2>
          <p className="text-[17px] text-[#6B7180] leading-relaxed max-w-lg mx-auto">
            Todos los cursos incluyen clases en vivo, material descargable y acceso a la comunidad de hispanohablantes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((course, i) => (
            <Reveal key={course.level} delay={(i % 4) as 0|1|2|3}>
              <div className="card-white rounded-2xl overflow-hidden flex flex-col h-full">

                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-[#1D0084] to-[#4da3ff]" />

                <div className="p-6 flex flex-col flex-1 gap-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center px-3 py-1 text-[11px] font-bold rounded-lg bg-[#1D0084]/8 text-[#1D0084] border border-[#1D0084]/12">
                      {course.level}
                    </span>
                    {course.badge && (
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                        style={{
                          backgroundColor: course.badgeColor === "orange"
                            ? "rgba(245,130,32,0.08)"
                            : "rgba(77,163,255,0.10)",
                          color: course.badgeColor === "orange" ? "#F58220" : "#1D0084",
                          borderColor: course.badgeColor === "orange"
                            ? "rgba(245,130,32,0.22)"
                            : "rgba(77,163,255,0.25)",
                        }}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-[15px] leading-snug text-[#0C0C1E]">
                      {course.title}
                    </h3>
                    <p className="text-[13px] text-[#6B7180] leading-relaxed">{course.description}</p>
                  </div>

                  <div className="flex flex-col gap-1.5 text-[12px] text-[#9CA3AF] pt-4 border-t border-[#E8EBF4]">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"/>
                      </svg>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8h12a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1z"/>
                      </svg>
                      {course.sessions}
                    </span>
                  </div>

                  <Button as="a" href="#" variant="outline-blue" size="sm" className="w-full">
                    Ver detalles
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <p className="text-[14px] text-[#9CA3AF]">
            ¿No sabes qué nivel elegir?{" "}
            <a href="#" className="text-[#1D0084] font-semibold hover:text-[#025dc7] transition-colors">
              Escríbenos y te orientamos gratis →
            </a>
          </p>
        </Reveal>

      </div>
    </section>
  );
}

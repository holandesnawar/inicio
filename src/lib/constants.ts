export const SITE_NAME = "Nawar";

export const NAV_LINKS = [
  { label: "Inicio",      href: "/" },
  { label: "Formaciones", href: "#cursos" },
  { label: "Opiniones",   href: "#opiniones" },
  { label: "Blog",        href: "/blog" },
];

export const STATS = [
  { value: "600+",  label: "Estudiantes formados" },
  { value: "4.9★", label: "Valoración media" },
  { value: "+5",   label: "Años de experiencia" },
  { value: "8",    label: "Cursos disponibles" },
];

export const PAIN_POINTS = [
  {
    icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    title: "Todo está en inglés",
    description:
      "El 95 % de los recursos para aprender neerlandés están pensados para anglófonos. Si tu idioma es el español, no hay por dónde empezar.",
  },
  {
    icon: "🤯",
    title: "La gramática parece imposible",
    description:
      "Artículos de/het, verbos separables, orden de palabras… Sin que nadie te lo explique desde el español, el neerlandés parece un caos sin lógica.",
  },
  {
    icon: "📍",
    title: "Vives en los Países Bajos pero no avanzas",
    description:
      "Estás rodeado de neerlandés cada día: en el trabajo, en el supermercado, en el médico. Pero sin método, el entorno solo genera más frustración.",
  },
  {
    icon: "🔇",
    title: "Te bloqueas cuando tienes que hablar",
    description:
      "Entiendes algo pero en el momento de hablar te quedas en blanco. La confianza no viene sola: se entrena con práctica oral desde el primer día.",
  },
];

export const FEATURES = [
  {
    icon: "🎯",
    title: "Método pensado para hispanohablantes",
    description:
      "Cada estructura del neerlandés se explica comparando con el español. Aprendes más rápido porque partes desde lo que ya sabes.",
  },
  {
    icon: "🎙️",
    title: "Clases en vivo con feedback inmediato",
    description:
      "No es un curso pregrabado. Las sesiones son en directo: hablas, te corrigen en el momento y practicas desde la primera clase.",
  },
  {
    icon: "📐",
    title: "Progresión clara nivel a nivel",
    description:
      "Cada módulo construye sobre el anterior. Sin saltos, sin huecos. Sabrás exactamente en qué punto estás y a dónde vas.",
  },
  {
    icon: "🤝",
    title: "Comunidad de hispanohablantes",
    description:
      "Aprende con personas que comparten tu idioma y tus mismas dudas. Practicar en comunidad acelera el proceso y lo hace sostenible.",
  },
  {
    icon: "🇳🇱",
    title: "Enfocado en el neerlandés real",
    description:
      "El neerlandés que se usa en Países Bajos y Bélgica, en el trabajo y en la calle. No el de los libros de texto pensados para turistas.",
  },
  {
    icon: "📚",
    title: "Material estructurado y descargable",
    description:
      "Cada módulo incluye fichas de vocabulario, resúmenes de gramática y ejercicios. Todo accesible para que repases cuando quieras.",
  },
];

export const COURSES = [
  {
    level: "A1",
    title: "Neerlandés desde cero",
    description:
      "Presentaciones, abecedario, números y frases del día a día. El punto de partida para quien nunca ha estudiado holandés.",
    duration: "8 semanas",
    sessions: "16 sesiones",
    badge: "Más popular",
    badgeColor: "orange" as const,
  },
  {
    level: "A2",
    title: "Consolidación",
    description:
      "Amplías vocabulario, dominas el tiempo pasado y empiezas a mantener conversaciones básicas con fluidez creciente.",
    duration: "10 semanas",
    sessions: "20 sesiones",
    badge: null,
    badgeColor: null,
  },
  {
    level: "B1",
    title: "Nivel intermedio",
    description:
      "Gramática avanzada, expresión oral fluida y comprensión de textos del entorno cotidiano y profesional.",
    duration: "12 semanas",
    sessions: "24 sesiones",
    badge: "Nuevo",
    badgeColor: "accent" as const,
  },
  {
    level: "Club",
    title: "Club de conversación",
    description:
      "Sesiones semanales de práctica oral en grupo para ganar fluidez, perder el miedo a hablar y consolidar lo aprendido.",
    duration: "Mensual",
    sessions: "4 sesiones/mes",
    badge: null,
    badgeColor: null,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ana García",
    origin: "Madrid · trabaja en Ámsterdam",
    text: "Llevaba años intentando aprender con apps y no avanzaba. Con Nawar en tres meses ya mantengo conversaciones básicas en el trabajo. El método es completamente diferente a todo lo que había probado.",
    stars: 5,
    avatar: "AG",
  },
  {
    name: "Carlos Mendoza",
    origin: "Ciudad de México · vive en Rotterdam",
    text: "Lo que más me sorprende es cómo explica el neerlandés comparando con el español. De repente tiene lógica. Las clases en vivo son lo mejor: te corrige en el momento y eso vale más que cualquier app.",
    stars: 5,
    avatar: "CM",
  },
  {
    name: "Laura Pinto",
    origin: "Buenos Aires · vive en Bruselas",
    text: "Me mudé a Bélgica sin saber nada de neerlandés. Seis meses después puedo ir al médico, al banco y hablar con mis vecinos. Antes lo veía imposible.",
    stars: 5,
    avatar: "LP",
  },
];

export const COMPARISON = [
  {
    icon: "🇪🇸",
    title: "Explicado desde el español, no desde el inglés",
    nawar: "Comparamos el neerlandés con el español: gramática, pronunciación, estructura de frases. Avanzas más rápido porque partes desde lo que ya sabes.",
    classic: "La mayoría de cursos usan materiales diseñados para anglófonos que no tienen sentido para un hispanohablante.",
  },
  {
    icon: "🎙️",
    title: "Hablas desde la primera clase, con corrección en tiempo real",
    nawar: "Nuestras clases son en directo. Hablas, cometes errores, recibes feedback inmediato. La confianza oral no se construye viendo vídeos.",
    classic: "Los cursos grabados y las apps te dan vocabulario pero no te preparan para hablar de verdad cuando lo necesitas.",
  },
  {
    icon: "📐",
    title: "Progresión estructurada de nivel a nivel",
    nawar: "Cada módulo construye sobre el anterior con un orden lógico. Sabes exactamente dónde estás y qué te falta para llegar al siguiente nivel.",
    classic: "Sin una estructura clara, muchos estudiantes repiten contenido, tienen lagunas o avanzan sin consolidar las bases.",
  },
  {
    icon: "🤝",
    title: "Comunidad exclusiva de hispanohablantes",
    nawar: "Practicas con personas que comparten tu idioma y tus mismas dificultades. Eso cambia completamente la experiencia de aprendizaje.",
    classic: "En academias genéricas te mezclan con estudiantes de perfiles muy distintos, y nadie entiende exactamente tus obstáculos.",
  },
  {
    icon: "🇳🇱",
    title: "Neerlandés real, no de libro de texto",
    nawar: "El neerlandés que se usa en Países Bajos y Bélgica en el trabajo, la calle y el día a día. No el neerlandés formal que nadie habla.",
    classic: "Los libros de texto suelen enseñar un neerlandés académico y desactualizado que sorprende cuando llegas al país.",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Empiezas con una ruta clara",
    description:
      "Accedes a un recorrido estructurado desde cero para saber qué estudiar, en qué orden y con qué objetivo.",
  },
  {
    number: "02",
    title: "Aprendes lo que realmente vas a usar",
    description:
      "Trabajas vocabulario, gramática y frases útiles para entender y hablar neerlandés en situaciones reales.",
  },
  {
    number: "03",
    title: "Practicas para fijar el idioma",
    description:
      "Refuerzas con ejercicios, repaso y recursos diseñados para ayudarte a recordar mejor.",
  },
  {
    number: "04",
    title: "Resuelves dudas y sigues avanzando",
    description:
      "Tienes apoyo para no quedarte bloqueado y seguir progresando con más seguridad y constancia.",
  },
  {
    number: "05",
    title: "Construyes una base sólida",
    description:
      "No se trata de memorizar por memorizar, sino de entender el idioma y poder usarlo cada vez mejor.",
  },
];

export const MARQUEE_ITEMS = [
  "🇪🇸 España", "🇲🇽 México", "🇦🇷 Argentina", "🇨🇴 Colombia",
  "🇻🇪 Venezuela", "🇵🇪 Perú", "🇨🇱 Chile", "🇪🇨 Ecuador",
  "🇺🇾 Uruguay", "🇧🇴 Bolivia", "🇩🇴 Rep. Dominicana", "🇵🇦 Panamá",
  "🇨🇷 Costa Rica", "🇵🇾 Paraguay", "🇨🇺 Cuba",
];

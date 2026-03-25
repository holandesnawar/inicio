export type Block =
  | { type: 'p';    text: string }
  | { type: 'h2';   text: string }
  | { type: 'h3';   text: string }
  | { type: 'ul';   items: string[] }
  | { type: 'ol';   items: string[] }

export interface Article {
  slug:     string
  title:    string
  date:     string      // "9 de julio de 2025"
  dateISO:  string      // "2025-07-09"
  category: string
  excerpt:  string
  readTime: string
  related:  string[]
  content:  Block[]
}

export const ARTICLES: Article[] = [
  /* ─────────────────────────────────────────────────────────────
     1. Bandera
  ───────────────────────────────────────────────────────────── */
  {
    slug:     "bandera-holanda-significado",
    title:    "¿Qué significan los colores de la bandera de Holanda? Origen y curiosidades",
    date:     "9 de julio de 2025",
    dateISO:  "2025-07-09",
    category: "Cultura",
    excerpt:  "Los colores rojo, blanco y azul de la bandera neerlandesa tienen un origen fascinante. Descubre la historia detrás de cada franja y por qué el naranja sigue siendo tan importante para los Países Bajos.",
    readTime: "4 min",
    related:  ["verbos-mas-usados-neerlandes", "como-hacer-la-compra-en-neerlandes"],
    content: [
      { type: "p", text: "La bandera de los Países Bajos es una de las más reconocibles de Europa: tres franjas horizontales en rojo, blanco y azul. Sin embargo, lo que muchos no saben es que originalmente no era roja, sino naranja. Entender la historia de esta bandera es entender una parte esencial de la identidad neerlandesa." },
      { type: "h2", text: "El origen histórico: del naranja al rojo" },
      { type: "p", text: "Durante el siglo XVI, cuando los Países Bajos luchaban por su independencia del dominio español, la bandera original llevaba los colores naranja, blanco y azul. El naranja hacía referencia directa a Guillermo de Orange, el líder del movimiento independentista y fundador de la casa real neerlandesa. El blanco y el azul eran colores comunes en los estandartes militares de la época." },
      { type: "p", text: "Esta bandera tricolor se convirtió en el símbolo de la revolución y de la República de las Siete Provincias Unidas, el primer estado neerlandés reconocido internacionalmente." },
      { type: "h2", text: "¿Por qué el naranja cambió a rojo?" },
      { type: "p", text: "El cambio del naranja al rojo se produjo de forma gradual a lo largo del siglo XVII. Existen tres explicaciones principales:" },
      { type: "ul", items: [
        "El tinte naranja utilizado en aquella época era inestable: se desteñía con el sol y la humedad del mar, virando hacia tonos rojizos con el uso.",
        "El rojo resultaba más visible y práctico en el campo de batalla y en las banderas navales, donde el naranja se confundía fácilmente con otros colores.",
        "En el siglo XVII quedó establecido de facto el uso del rojo, y en 1937 un decreto real oficializó definitivamente los colores rojo, blanco y azul como los de la bandera nacional.",
      ]},
      { type: "p", text: "A pesar del cambio oficial, el naranja nunca desapareció. Sigue siendo considerado el color no oficial de los Países Bajos y el emblema por excelencia de la identidad neerlandesa en eventos nacionales y deportivos." },
      { type: "h2", text: "El significado de los colores actuales" },
      { type: "p", text: "Aunque el gobierno neerlandés no ha asignado oficialmente un significado simbólico a cada color, la interpretación más extendida es la siguiente:" },
      { type: "ul", items: [
        "Rojo: representa el valor y la resistencia del pueblo neerlandés.",
        "Blanco: simboliza la paz, la honestidad y la unidad entre las provincias.",
        "Azul: evoca la lealtad, la vigilancia y la perseverancia.",
      ]},
      { type: "h2", text: "Curiosidades sobre la bandera neerlandesa" },
      { type: "ul", items: [
        "El azul de la bandera neerlandesa es ligeramente más oscuro que el de la bandera de Luxemburgo, con la que a menudo se confunde.",
        "En ocasiones oficiales como el Día del Rey o actos militares, se coloca un gallardete naranja sobre la bandera.",
        "El diseño actual fue oficialmente adoptado el 19 de febrero de 1937 mediante decreto real.",
        "Es una de las banderas tricolor más antiguas del mundo, antecedente directo de la francesa.",
      ]},
      { type: "h2", text: "¿Y el naranja, entonces?" },
      { type: "p", text: "El naranja es inseparable de la identidad neerlandesa. Durante el Koningsdag (Día del Rey) las calles se tiñen de naranja: la gente viste de naranja, decora con naranja y celebra con naranja. La selección nacional de fútbol, conocida como la Oranje, lleva ese color con orgullo desde hace décadas." },
      { type: "p", text: "En definitiva, aunque no aparezca en la bandera oficial, el naranja vive en la cultura, en las celebraciones y en el alma del pueblo neerlandés. Comprender este matiz histórico te ayudará a entender mejor la identidad del país al que quizás te estás preparando para mudarte o en el que ya vives." },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     2. Verbos
  ───────────────────────────────────────────────────────────── */
  {
    slug:     "verbos-mas-usados-neerlandes",
    title:    "Los 10 verbos más usados en neerlandés",
    date:     "18 de julio de 2025",
    dateISO:  "2025-07-18",
    category: "Vocabulario",
    excerpt:  "Empieza por los verbos que más vas a necesitar. Dominar estos 10 verbos en neerlandés te dará una base sólida para hablar y entender el idioma desde el primer día.",
    readTime: "6 min",
    related:  ["errores-aprender-neerlandes", "como-hacer-la-compra-en-neerlandes"],
    content: [
      { type: "p", text: "Cuando empiezas a aprender neerlandés, no hace falta memorizar cientos de palabras de golpe. La estrategia más efectiva es dominar primero los verbos que aparecen en casi todas las conversaciones. Con estos 10 verbos podrás construir frases reales desde el primer día." },
      { type: "h2", text: "1. Zijn — ser / estar" },
      { type: "p", text: "Es el verbo más fundamental del neerlandés, equivalente a 'ser' y 'estar' en español. Se usa para describir estados, identidades y ubicaciones." },
      { type: "ul", items: ["Ik ben moe. → Estoy cansado/a.", "Hij is leraar. → Él es profesor.", "Wij zijn hier. → Estamos aquí."] },
      { type: "h2", text: "2. Hebben — tener" },
      { type: "p", text: "Expresa posesión y también funciona como auxiliar para formar el tiempo pasado (perfecto), igual que 'haber' en español." },
      { type: "ul", items: ["Wij hebben een hond. → Tenemos un perro.", "Ik heb honger. → Tengo hambre.", "Zij heeft het gedaan. → Ella lo ha hecho."] },
      { type: "h2", text: "3. Gaan — ir" },
      { type: "p", text: "Esencial para hablar de movimiento, planes y el futuro próximo. Muy parecido en uso al español 'ir'." },
      { type: "ul", items: ["Zij gaat naar school. → Ella va al colegio.", "Ik ga morgen. → Me voy mañana.", "Gaan we? → ¿Nos vamos?"] },
      { type: "h2", text: "4. Doen — hacer" },
      { type: "p", text: "Versátil y muy frecuente. Se usa para acciones generales y también en preguntas cotidianas." },
      { type: "ul", items: ["Wat doe je? → ¿Qué haces?", "Ik doe mijn best. → Hago lo mejor que puedo.", "Wat moet ik doen? → ¿Qué tengo que hacer?"] },
      { type: "h2", text: "5. Kunnen — poder" },
      { type: "p", text: "Expresa capacidad o posibilidad. Es un verbo modal, así que su conjugación es irregular, pero aparece constantemente." },
      { type: "ul", items: ["Ik kan Nederlands spreken. → Puedo hablar neerlandés.", "Kun jij me helpen? → ¿Puedes ayudarme?", "Dat kan niet. → Eso no puede ser."] },
      { type: "h2", text: "6. Willen — querer" },
      { type: "p", text: "Imprescindible para expresar deseos y hacer peticiones en situaciones cotidianas." },
      { type: "ul", items: ["We willen iets drinken. → Queremos tomar algo.", "Ik wil dit. → Quiero esto.", "Wat wil je eten? → ¿Qué quieres comer?"] },
      { type: "h2", text: "7. Moeten — deber / tener que" },
      { type: "p", text: "Expresa obligaciones, reglas o recomendaciones. Muy útil en contextos laborales y cotidianos." },
      { type: "ul", items: ["Je moet je huiswerk maken. → Tienes que hacer los deberes.", "Ik moet gaan. → Tengo que irme.", "We moeten praten. → Tenemos que hablar."] },
      { type: "h2", text: "8. Zeggen — decir" },
      { type: "p", text: "Necesario para transmitir lo que dice otra persona o para introducir citas indirectas." },
      { type: "ul", items: ["Hij zegt dat hij moe is. → Dice que está cansado.", "Wat zeg je? → ¿Qué dices?", "Dat zeg ik altijd. → Eso lo digo siempre."] },
      { type: "h2", text: "9. Weten — saber (un dato, una información)" },
      { type: "p", text: "A diferencia de 'kennen' (conocer a una persona o lugar), 'weten' se usa para saber información concreta. Es uno de los verbos que más confunden al principio." },
      { type: "ul", items: ["Ik weet het niet. → No lo sé.", "Weet jij hoe laat het is? → ¿Sabes qué hora es?", "Ik weet waar hij woont. → Sé dónde vive."] },
      { type: "h2", text: "10. Komen — venir" },
      { type: "p", text: "Uno de los más frecuentes para hablar de planes, eventos y movimiento hacia el hablante." },
      { type: "ul", items: ["Kom je morgen? → ¿Vienes mañana?", "Ze komen om acht uur. → Vienen a las ocho.", "Kom binnen! → ¡Pasa/Entra!"] },
      { type: "h2", text: "Consejo final" },
      { type: "p", text: "No intentes aprender todos los verbos a la vez. Trabaja con dos o tres cada semana, usa ejemplos reales y practícalos en contexto. La repetición en situaciones cotidianas es lo que realmente los fija en tu memoria. Con estos diez verbos ya puedes construir cientos de frases útiles en neerlandés." },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     3. Errores
  ───────────────────────────────────────────────────────────── */
  {
    slug:     "errores-aprender-neerlandes",
    title:    "Errores comunes al aprender neerlandés (y cómo evitarlos si hablas español)",
    date:     "4 de agosto de 2025",
    dateISO:  "2025-08-04",
    category: "Aprendizaje",
    excerpt:  "Aprender neerlandés desde el español tiene sus trampas. Conocer los errores más frecuentes te ayudará a evitarlos antes de que se conviertan en malos hábitos difíciles de corregir.",
    readTime: "7 min",
    related:  ["mejorar-pronunciacion-neerlandes", "alfabeto-neerlandes-pronunciacion"],
    content: [
      { type: "p", text: "El neerlandés es un idioma con mucha lógica interna, pero también con diferencias importantes respecto al español que pueden generar confusión. La buena noticia es que muchos de estos errores son predecibles: si los conoces de antemano, puedes evitarlos desde el principio." },
      { type: "h2", text: "1. Pronunciar el neerlandés como si fuera español" },
      { type: "p", text: "Este es el primer obstáculo. El neerlandés tiene sonidos que no existen en español y que requieren práctica específica. Los más problemáticos son:" },
      { type: "ul", items: [
        "La 'g' gutural: se pronuncia desde la garganta, similar a la 'j' española en algunas regiones pero mucho más fuerte.",
        "El diptongo 'ui': no tiene equivalente en español. Se pronuncia aproximadamente como una 'au' muy cerrada.",
        "La 'r': más gutural que en español estándar, especialmente en el centro y norte de los Países Bajos.",
        "La 'v' y la 'w': en neerlandés suenan de forma diferente entre sí y distinta al español.",
      ]},
      { type: "p", text: "Solución: escucha neerlandés real desde el primer día. Podcasts, vídeos de YouTube o la radio neerlandesa te ayudan a familiarizarte con los sonidos antes de intentar reproducirlos." },
      { type: "h2", text: "2. Traducir palabra por palabra desde el español" },
      { type: "p", text: "En neerlandés, algunas estructuras básicas no se traducen literalmente del español. Estos son dos de los errores más frecuentes:" },
      { type: "ul", items: [
        "Decir 'Ik heb 25 jaar' en lugar de 'Ik ben 25 jaar oud'. En neerlandés la edad se expresa con el verbo 'zijn' (ser/estar), no con 'hebben' (tener).",
        "Decir 'Ik ben honger' en lugar de 'Ik heb honger'. El hambre, en neerlandés, se 'tiene', no se 'es'.",
      ]},
      { type: "p", text: "Consejo: aprende las frases como bloques completos, no intentes construirlas traduciendo desde el español. Un diccionario como Van Dale o un buscador de frases nativas te ayudará a verificar la estructura correcta." },
      { type: "h2", text: "3. Confundir los artículos 'de' y 'het'" },
      { type: "p", text: "En español, el género de los sustantivos sigue reglas bastante claras. En neerlandés, en cambio, no existe una regla universal para saber si un sustantivo lleva 'de' o 'het'. El artículo 'het' se usa con diminutivos acabados en '-je' y con algunas categorías de palabras, pero en muchos casos hay que memorizarlo directamente." },
      { type: "p", text: "Estrategia: cuando aprendas una palabra nueva, aprende siempre el artículo junto a ella. No aprendas 'huis' (casa), aprende 'het huis'. Esta pequeña costumbre te ahorrará muchos errores en el futuro." },
      { type: "h2", text: "4. No dominar los verbos separables" },
      { type: "p", text: "Los verbos separables son uno de los rasgos más característicos del neerlandés y uno de los que más confunden. Estos verbos se dividen en dos partes durante la conjugación: la primera se queda en la posición del verbo y la segunda va al final de la frase." },
      { type: "ul", items: [
        "'Aankomen' (llegar): Ik kom morgen aan. (Llego mañana.)",
        "'Opbellen' (llamar por teléfono): Ik bel je op. (Te llamo.)",
        "'Uitmaken' (romper, en pareja): Hij maakt het uit. (Él lo deja.)",
      ]},
      { type: "p", text: "Consejo: cuando aprendas un verbo nuevo, comprueba si es separable. Los diccionarios suelen indicarlo. Aprende siempre la frase completa, no solo el infinitivo." },
      { type: "h2", text: "5. Descuidar la comprensión auditiva" },
      { type: "p", text: "El neerlandés hablado es bastante diferente al neerlandés escrito, y hay diferencias notables entre el neerlandés de los Países Bajos y el de Bélgica (flamenco). Muchos estudiantes avanzan bien en gramática y vocabulario pero luego no entienden a los nativos cuando hablan a velocidad normal." },
      { type: "p", text: "Solución: exponte al neerlandés oral desde el primer día, aunque no entiendas nada. El oído necesita tiempo para acostumbrarse a los ritmos y sonidos del idioma. Empieza con contenido para principiantes y sube gradualmente de nivel." },
      { type: "h2", text: "6. No distinguir 'jij/je' de 'u'" },
      { type: "p", text: "En neerlandés existe una distinción entre el trato formal y el informal que no tiene equivalente directo en el español peninsular actual (sí en el latinoamericano con 'usted')." },
      { type: "ul", items: [
        "'Jij' o 'je' se usan con amigos, familia, compañeros de trabajo y personas de tu misma edad o más jóvenes.",
        "'U' se usa en contextos formales: con personas mayores, en entornos profesionales formales, con clientes, con la administración.",
      ]},
      { type: "p", text: "En la práctica, los neerlandeses tienden a ser bastante informales, así que el uso de 'u' va disminuyendo. Sin embargo, en un contexto profesional o con personas desconocidas, empezar con 'u' es una señal de respeto." },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     4. Alfabeto
  ───────────────────────────────────────────────────────────── */
  {
    slug:     "alfabeto-neerlandes-pronunciacion",
    title:    "El alfabeto neerlandés explicado: letras, sonidos y pronunciación correcta",
    date:     "4 de marzo de 2025",
    dateISO:  "2025-03-04",
    category: "Pronunciación",
    excerpt:  "El alfabeto neerlandés se parece al español, pero los sonidos son muy distintos. Aprende a pronunciar cada letra correctamente con ejemplos prácticos comparados con el español.",
    readTime: "8 min",
    related:  ["mejorar-pronunciacion-neerlandes", "errores-aprender-neerlandes"],
    content: [
      { type: "p", text: "El neerlandés es una lengua germánica hablada principalmente en los Países Bajos, Bélgica (Flandes y Bruselas) y algunas regiones de Surinam y las Antillas Neerlandesas. Su alfabeto es el mismo que el español —26 letras latinas— pero los sonidos son en muchos casos completamente diferentes. Dominar la pronunciación desde el inicio es clave para ser entendido y para entender a los nativos." },
      { type: "h2", text: "Las letras más diferentes respecto al español" },
      { type: "p", text: "Aunque el alfabeto sea el mismo, hay varias letras cuya pronunciación en neerlandés sorprende a los hispanohablantes:" },
      { type: "h3", text: "G — la consonante gutural" },
      { type: "p", text: "La 'g' en neerlandés es uno de los sonidos más característicos del idioma. Se pronuncia desde la garganta, con una fricción fuerte similar a la 'j' española en algunas variantes regionales (como la castellana), pero todavía más áspera. Ejemplo: 'gaan' (ir) suena aproximadamente como 'jaan' con fricción gutural." },
      { type: "h3", text: "J — como la 'y' española" },
      { type: "p", text: "En neerlandés, la 'j' suena como la 'y' española de 'yo' o 'ya'. Ejemplo: 'jaar' (año) se pronuncia aproximadamente 'yaar'." },
      { type: "h3", text: "W — entre 'v' y 'w'" },
      { type: "p", text: "La 'w' neerlandesa no suena como la inglesa. Se pronuncia con los labios más abiertos, con un sonido parecido al cruce entre una 'v' y una 'u'. Ejemplo: 'water' se pronuncia algo parecido a 'váter' con ese sonido intermedio." },
      { type: "h3", text: "R — gutural en muchas regiones" },
      { type: "p", text: "La 'r' neerlandesa varía según la región. En el centro y norte es bastante gutural, similar a la 'r' francesa. En el sur (Brabante, Limburgo) puede ser más vibrante. Para hispanohablantes, la versión gutural es la que más extraña al principio." },
      { type: "h3", text: "U — vocal sin equivalente exacto" },
      { type: "p", text: "La 'u' neerlandesa es una vocal redondeada que no existe en español. Se pronuncia como una 'i' con los labios redondeados como para decir 'u'. Ejemplo: 'nu' (ahora)." },
      { type: "h2", text: "Combinaciones de vocales clave" },
      { type: "p", text: "El neerlandés tiene varios diptongos y combinaciones vocálicas que tampoco tienen equivalente directo en español:" },
      { type: "ul", items: [
        "'ij' o 'ei': suenan igual, como una 'ei' rápida. Ejemplo: 'zijn' (ser/estar), 'klein' (pequeño).",
        "'ui': uno de los sonidos más difíciles para hispanohablantes. Aproximadamente una 'au' muy cerrada y redondeada. Ejemplo: 'huis' (casa).",
        "'ou' o 'au': suenan igual, como 'au'. Ejemplo: 'oud' (viejo), 'blauw' (azul).",
        "'oe': suena como 'u' larga. Ejemplo: 'boek' (libro).",
        "'eu': similar a la 'e' francesa de 'bleu'. Ejemplo: 'neus' (nariz).",
      ]},
      { type: "h2", text: "Vocales largas y cortas" },
      { type: "p", text: "En neerlandés, la longitud de la vocal cambia el significado de la palabra. La duplicación de vocales (aa, ee, oo, uu) indica una vocal larga:" },
      { type: "ul", items: [
        "'man' (hombre) vs. 'maan' (luna)",
        "'weg' (camino) vs. 'weeg' (pesa)",
        "'bot' (hueso/torpe) vs. 'boot' (barco)",
      ]},
      { type: "p", text: "Este contraste es importante porque pronunciar mal la longitud vocal puede cambiar completamente el significado de lo que dices." },
      { type: "h2", text: "Consejo práctico" },
      { type: "p", text: "No intentes aprender toda la fonética de golpe. Céntrate primero en los sonidos más diferentes del español —la 'g' gutural, la 'ij/ei', la 'ui'— y practícalos específicamente. Herramientas como Forvo te permiten escuchar a nativos pronunciar palabras concretas. Úsala desde el principio." },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     5. Mejorar pronunciación
  ───────────────────────────────────────────────────────────── */
  {
    slug:     "mejorar-pronunciacion-neerlandes",
    title:    "Cómo mejorar tu pronunciación en neerlandés paso a paso (guía para hispanohablantes)",
    date:     "4 de marzo de 2025",
    dateISO:  "2025-03-04",
    category: "Pronunciación",
    excerpt:  "La pronunciación es uno de los mayores retos al aprender neerlandés. Con esta guía paso a paso, desarrollarás un acento más natural y mejorarás tu comprensión oral desde el principio.",
    readTime: "7 min",
    related:  ["alfabeto-neerlandes-pronunciacion", "errores-aprender-neerlandes"],
    content: [
      { type: "p", text: "La pronunciación del neerlandés es uno de los aspectos que más echa atrás a los estudiantes hispanohablantes. Sonidos guturales, diptongos sin equivalente en español y una musicalidad muy distinta hacen que al principio cueste entender a los nativos y que ellos nos entiendan a nosotros. Pero con la estrategia correcta, mejorar es cuestión de tiempo y práctica constante." },
      { type: "h2", text: "1. Escucha atentamente a hablantes nativos" },
      { type: "p", text: "El primer paso para mejorar la pronunciación es exponerte al sonido real del idioma. Antes de intentar reproducir los sonidos, tu oído necesita familiarizarse con ellos. Escucha series y películas en neerlandés, podcasts para aprendices, la radio NOS o creadores de contenido neerlandeses en YouTube." },
      { type: "p", text: "Presta atención a la entonación, a cómo se conectan las palabras al hablar rápido y a qué vocales se alargan o se acortan. No necesitas entender todo; el objetivo en esta fase es acostumbrar el oído." },
      { type: "h2", text: "2. Estudia la fonética específica del neerlandés" },
      { type: "p", text: "El neerlandés tiene sonidos que no existen en español. No basta con aproximarlos: hay que aprenderlos de cero. Los más importantes para los hispanohablantes son la 'g' gutural, los diptongos 'ui' y 'ij/ei', y la distinción entre vocales largas y cortas." },
      { type: "p", text: "Busca guías fonéticas específicas para hispanohablantes y practica cada sonido de forma aislada antes de usarlo en palabras. El sitio Forvo y los vídeos fonéticos de YouTube son recursos muy útiles en esta fase." },
      { type: "h2", text: "3. Repite palabras y frases en voz alta" },
      { type: "p", text: "La pronunciación es una habilidad motora. Para desarrollarla, necesitas repetición: tu boca, tu lengua y tu garganta tienen que aprender movimientos nuevos. Lee en voz alta, repite frases después de escucharlas y trabaja con listas de palabras con sonidos difíciles." },
      { type: "p", text: "No tengas miedo de exagerar los sonidos al principio. Mejor exagerarlos conscientemente que reducirlos inconscientemente hacia los sonidos del español." },
      { type: "h2", text: "4. Grábate y compárate con nativos" },
      { type: "p", text: "Una de las herramientas más eficaces (y menos usadas) es grabarte hablando y comparar tu pronunciación con la de un nativo. Identifica qué sonidos se alejan más del original y trabaja específicamente en esos." },
      { type: "p", text: "Al principio puede resultar incómodo escucharse, pero es el método más directo para detectar tus puntos débiles y ver tu progreso con el tiempo." },
      { type: "h2", text: "5. Trabaja el ritmo y la entonación" },
      { type: "p", text: "La pronunciación no es solo pronunciar bien cada sonido aislado. El neerlandés tiene un ritmo y una entonación propios que, si no se aprenden, hacen que suenes 'raro' incluso si cada palabra es correcta. Las preguntas, las negaciones y las frases afirmativas tienen patrones de entonación distintos que conviene practicar desde pronto." },
      { type: "h2", text: "6. Practica con trabalenguas en neerlandés" },
      { type: "p", text: "Los trabalenguas son una herramienta clásica y muy efectiva para trabajar la agilidad articulatoria. Algunos exemplos en neerlandés:" },
      { type: "ul", items: [
        "\"De kat krabt de krullen van de trap.\" (El gato araña los rizos de la escalera.)",
        "\"Hanneke hakt hakhout in honderd harde hakken.\" (Hanneke corta leña en cien golpes fuertes.)",
      ]},
      { type: "p", text: "Empiézalos despacio, pronunciando cada sonido bien, y aumenta la velocidad gradualmente cuando domines la articulación." },
      { type: "h2", text: "7. Habla con nativos o con un profesor" },
      { type: "p", text: "No hay nada que sustituya la conversación real con un hablante nativo. Puedes buscar intercambios de idiomas online, usar plataformas como Tandem o HelloTalk, o trabajar con un profesor que te dé feedback en tiempo real sobre tu pronunciación. El feedback inmediato acelera el aprendizaje de forma notable." },
      { type: "h2", text: "8. Usa herramientas digitales de pronunciación" },
      { type: "p", text: "Existen aplicaciones y recursos digitales diseñados específicamente para trabajar la pronunciación: Forvo para escuchar palabras pronunciadas por nativos, Speechling para práctica guiada, o simplemente el sistema de reconocimiento de voz de Google Translate para comprobar si te entienden." },
      { type: "h2", text: "9. No tengas miedo de cometer errores" },
      { type: "p", text: "El miedo a pronunciar mal es uno de los frenos más grandes en el aprendizaje de idiomas. Los neerlandeses, en general, aprecian mucho el esfuerzo de los extranjeros por hablar su idioma. Equivocarse es parte del proceso y cada error es una oportunidad de aprendizaje. La perfección no es el objetivo inicial: la comunicación sí lo es." },
      { type: "h2", text: "10. Sumérgete en el idioma" },
      { type: "p", text: "Si vives en los Países Bajos o en Bélgica, tienes la inmersión al alcance de la mano. Habla neerlandés en el supermercado, en la farmacia, con los vecinos. Si no, cambia el idioma de tu teléfono al neerlandés, sigue creadores de contenido en neerlandés en redes sociales y escucha música neerlandesa. Cuanto más presente esté el idioma en tu vida diaria, más rápido mejorarás." },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     6. La compra
  ───────────────────────────────────────────────────────────── */
  {
    slug:     "como-hacer-la-compra-en-neerlandes",
    title:    "Cómo hacer la compra en neerlandés sin problemas",
    date:     "23 de febrero de 2025",
    dateISO:  "2025-02-23",
    category: "Vocabulario",
    excerpt:  "Ir al supermercado, preguntar precios, pedir en la panadería... Aprende el vocabulario y las frases esenciales para hacer la compra en neerlandés con total confianza.",
    readTime: "5 min",
    related:  ["verbos-mas-usados-neerlandes", "errores-aprender-neerlandes"],
    content: [
      { type: "p", text: "Hacer la compra en neerlandés puede parecer complicado al principio, pero con un poco de vocabulario básico y algunas frases clave puedes desenvolverte sin problemas en cualquier supermercado o mercado de los Países Bajos o Bélgica. Esta guía te da todo lo que necesitas para empezar." },
      { type: "h2", text: "Vocabulario básico del supermercado" },
      { type: "p", text: "Estas son las palabras que más vas a necesitar en cualquier establecimiento:" },
      { type: "ul", items: [
        "Winkel → tienda",
        "Supermarkt → supermercado",
        "Mandje → cesta de la compra",
        "Winkelwagen → carrito de la compra",
        "Kassa → caja / cajero",
        "Bon → ticket / recibo",
        "Kortingskaart → tarjeta de descuento",
        "Aanbieding → oferta",
        "Prijs → precio",
        "Betalen → pagar",
      ]},
      { type: "h2", text: "Frases útiles para la tienda" },
      { type: "p", text: "Con estas cinco frases podrás resolver la mayoría de situaciones habituales:" },
      { type: "ul", items: [
        "\"Waar vind ik...?\" → ¿Dónde encuentro...? (para preguntar por un producto)",
        "\"Is dit vers?\" → ¿Esto es fresco? (para productos de alimentación)",
        "\"Hoeveel kost dit?\" → ¿Cuánto cuesta esto?",
        "\"Kan ik met kaart betalen?\" → ¿Puedo pagar con tarjeta?",
        "\"Mag ik een bon?\" → ¿Me puede dar el recibo?",
      ]},
      { type: "h2", text: "Vocabulario de productos frescos" },
      { type: "p", text: "Para moverte bien por la sección de frescos, aprende estas palabras clave:" },
      { type: "ul", items: [
        "Groenten → verduras",
        "Fruit → fruta",
        "Vlees → carne",
        "Vis → pescado",
        "Zuivel → lácteos",
        "Brood → pan",
        "Eieren → huevos",
        "Kaas → queso",
      ]},
      { type: "h2", text: "Alternativas al supermercado" },
      { type: "p", text: "En los Países Bajos y Bélgica también encontrarás opciones más locales y especializadas:" },
      { type: "ul", items: [
        "Markt (mercado): muchas ciudades tienen mercado semanal con productores locales. Una experiencia muy neerlandesa y una oportunidad perfecta para practicar el idioma.",
        "Bakkerij (panadería): el pan artesanal es parte de la cultura neerlandesa. Las panaderías locales suelen tener una oferta muy variada.",
        "Slagerij (carnicería): si buscas carne de calidad o cortes específicos, la carnicería tradicional es tu mejor opción.",
      ]},
      { type: "h2", text: "Los supermercados principales" },
      { type: "p", text: "Conocer las cadenas te ayudará a entender la cultura de la compra en los Países Bajos:" },
      { type: "ul", items: [
        "Albert Heijn: el supermercado de referencia. Buena calidad y amplia variedad, aunque los precios son algo más altos.",
        "Jumbo: segunda cadena más grande, con precios más competitivos y una buena relación calidad-precio.",
        "Lidl y Aldi: los supermercados de descuento. Muy populares entre estudiantes y familias.",
        "Dirk y Plus: opciones intermedias, con buenas ofertas y productos locales.",
      ]},
      { type: "h2", text: "Consejos prácticos para la compra" },
      { type: "p", text: "Algunos hábitos que te ahorrarán tiempo y sorpresas:" },
      { type: "ul", items: [
        "Lleva tu propia bolsa reutilizable (tas). En los Países Bajos las bolsas de plástico se pagan.",
        "Las cajas de autopago (zelfscankassa) son muy comunes. Con un poco de vocabulario básico las manejarás sin problema.",
        "Evita ir a comprar entre las 17:00 y las 19:00: son las horas pico después del trabajo.",
        "Fíjate siempre en la fecha de caducidad: 'houdbaar tot' significa 'consumir preferentemente antes de'.",
        "Muchos supermercados tienen app propia con descuentos y listas de la compra digitales. Muy práctico para aprender vocabulario real.",
      ]},
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug)
}

export function getRelated(article: Article): Article[] {
  return article.related
    .map(slug => ARTICLES.find(a => a.slug === slug))
    .filter((a): a is Article => a !== undefined)
    .slice(0, 3)
}

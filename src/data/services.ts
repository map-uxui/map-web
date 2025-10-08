export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  icon: string;
  context: string;
  objective: string;
  fullDescription: string;
  gallery: string[];
  process: string[];
  deliverables: string[];
  duration: string;
  startingPrice: string;
  technologies: string[];
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: "product-design",
    title: "Diseño de productos",
    category: "UX/UI Design",
    description: "Creamos experiencias digitales centradas en el usuario",
    shortDescription: "Diseño integral de productos digitales que conectan con usuarios",
    icon: "Pen",
    context: "En un mercado digital saturado, destacar requiere más que funcionalidad básica. Los usuarios esperan experiencias intuitivas, atractivas y memorables. Nuestro servicio de diseño de productos digitales se centra en crear soluciones que no solo resuelvan problemas, sino que generen conexiones emocionales duraderas con los usuarios.",
    objective: "Desarrollar productos digitales que combinen usabilidad excepcional, diseño visual impactante y funcionalidad robusta para crear experiencias que superen las expectativas del usuario y impulsen el crecimiento del negocio.",
    fullDescription: "Nuestro proceso de diseño de productos abarca desde la conceptualización inicial hasta la implementación final. Trabajamos con metodologías ágiles y design thinking para crear soluciones innovadoras. Incluimos investigación de usuarios, arquitectura de información, prototipado interactivo, testing de usabilidad, diseño visual y handoff técnico. Utilizamos herramientas como Figma, Sketch, Principle y After Effects para crear experiencias fluidas y engaging.",
    gallery: [
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc1OTU0MTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTk1NDE1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1OTU0MTUxMHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    process: [
      "Investigación y análisis de usuarios",
      "Definición de arquitectura de información",
      "Wireframing y prototipado",
      "Diseño visual y sistema de componentes",
      "Testing de usabilidad",
      "Implementación y handoff técnico"
    ],
    deliverables: [
      "Research report completo",
      "User personas y journey maps",
      "Wireframes y prototipos interactivos",
      "Design system completo",
      "Archivos de diseño organizados",
      "Documentación técnica para desarrollo"
    ],
    duration: "6-12 semanas",
    startingPrice: "$3,500",
    technologies: ["Figma", "Sketch", "Principle", "After Effects", "InVision", "Maze"],
    whatsappMessage: "Hola! Me interesa el servicio de Diseño de productos digitales. ¿Podríamos agendar una llamada para discutir mi proyecto?"
  },
  {
    id: "ux-analysis",
    title: "Análisis UX",
    category: "Research & Strategy",
    description: "Investigamos y optimizamos la experiencia de usuario",
    shortDescription: "Análisis profundo para optimizar la experiencia de usuario",
    icon: "Search",
    context: "Los productos digitales exitosos se basan en un entendimiento profundo de los usuarios y sus necesidades. Nuestro servicio de análisis UX identifica oportunidades de mejora, puntos de fricción y áreas de optimización para maximizar la satisfacción del usuario y los resultados de negocio.",
    objective: "Proporcionar insights accionables sobre la experiencia de usuario actual, identificar oportunidades de mejora y crear una hoja de ruta clara para optimizar la usabilidad, accesibilidad y satisfacción general del producto.",
    fullDescription: "Realizamos auditorías integrales de UX utilizando metodologías cuantitativas y cualitativas. Incluimos análisis heurístico, testing de usabilidad, análisis de métricas, entrevistas con usuarios, estudios de eye-tracking y evaluaciones de accesibilidad. Utilizamos herramientas como Hotjar, Google Analytics, Maze, UserTesting y axe para obtener insights profundos y recomendaciones específicas.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTk1NDE0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTQxNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk1NDE0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    process: [
      "Auditoría heurística completa",
      "Análisis de métricas y comportamiento",
      "Testing de usabilidad con usuarios reales",
      "Evaluación de accesibilidad",
      "Benchmarking competitivo",
      "Reporte de recomendaciones priorizadas"
    ],
    deliverables: [
      "Reporte de auditoría UX detallado",
      "Heatmaps y análisis de comportamiento",
      "Videos y insights de testing",
      "Evaluación de accesibilidad WCAG",
      "Roadmap de mejoras priorizadas",
      "Presentación ejecutiva de hallazgos"
    ],
    duration: "3-6 semanas",
    startingPrice: "$2,200",
    technologies: ["Hotjar", "Google Analytics", "Maze", "UserTesting", "axe-core", "Figma"],
    whatsappMessage: "Hola! Necesito un análisis UX para mi producto digital. ¿Podemos hablar sobre el alcance y proceso?"
  },
  {
    id: "branding",
    title: "Branding",
    category: "Visual Identity",
    description: "Desarrollamos identidades visuales memorables",
    shortDescription: "Identidades de marca que conectan y perduran",
    icon: "Palette",
    context: "En un mercado competitivo, una identidad visual sólida es fundamental para diferenciarse y crear conexiones emocionales duraderas. Nuestro servicio de branding va más allá del diseño de logos, creando ecosistemas visuales completos que comunican valores, personalidad y propósito de marca.",
    objective: "Desarrollar una identidad visual cohesiva y memorable que refleje la esencia de la marca, resuene con el público objetivo y se adapte consistentemente a todos los puntos de contacto digitales y físicos.",
    fullDescription: "Creamos identidades visuales completas que incluyen estrategia de marca, diseño de logotipo, paleta de colores, tipografía, iconografía, fotografía, aplicaciones digitales y físicas. Nuestro proceso incluye investigación de mercado, definición de personalidad de marca, exploración creativa, refinamiento y creación de brand guidelines. Utilizamos metodologías de design thinking y semiótica visual.",
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGxvZ298ZW58MXx8fHwxNzU5NTQxNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHBhbGV0dGUlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTQxNTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1OTU0MTUxOHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    process: [
      "Investigación de marca y competencia",
      "Definición de estrategia y personalidad",
      "Exploración creativa y conceptos",
      "Diseño de logo y elementos principales",
      "Desarrollo de sistema visual completo",
      "Creación de brand guidelines"
    ],
    deliverables: [
      "Logotipo principal y variaciones",
      "Paleta de colores completa",
      "Tipografías corporativas",
      "Sistema de iconografía",
      "Mockups de aplicaciones",
      "Manual de identidad visual (Brand Guidelines)"
    ],
    duration: "4-8 semanas",
    startingPrice: "$2,800",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "After Effects", "InDesign"],
    whatsappMessage: "Hola! Estoy interesado en desarrollar la identidad visual de mi marca. ¿Podríamos agendar una reunión para discutir el proyecto?"
  },
  {
    id: "consultoria",
    title: "Asesoría",
    category: "Strategy & Consulting",
    description: "Te acompañamos en la estrategia digital",
    shortDescription: "Asesoría estratégica para el éxito digital",
    icon: "Users",
    context: "La transformación digital requiere más que herramientas; necesita estrategia, visión y ejecución experta. Nuestro servicio de asesoría proporciona orientación estratégica para navegar el ecosistema digital, optimizar procesos y alcanzar objetivos de negocio de manera eficiente y sostenible.",
    objective: "Proporcionar orientación estratégica integral para acelerar la transformación digital, optimizar procesos de diseño y desarrollo, y establecer bases sólidas para el crecimiento escalable en el entorno digital.",
    fullDescription: "Ofrecemos asesoría integral en estrategia digital, transformación de procesos, optimización de equipos, selección de tecnologías y roadmaps de producto. Incluimos auditorías organizacionales, definición de procesos ágiles, capacitación de equipos, implementación de metodologías y seguimiento de resultados. Trabajamos como partners estratégicos para impulsar la madurez digital de las organizaciones.",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc1OTU0MTUyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHBsYW5uaW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5NTQxNTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk1NDE1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    process: [
      "Diagnóstico organizacional inicial",
      "Definición de objetivos estratégicos",
      "Roadmap de transformación digital",
      "Implementación de procesos ágiles",
      "Capacitación y mentoring de equipos",
      "Seguimiento y optimización continua"
    ],
    deliverables: [
      "Diagnóstico de madurez digital",
      "Estrategia de transformación personalizada",
      "Roadmap de implementación detallado",
      "Procesos y metodologías optimizadas",
      "Programas de capacitación para equipos",
      "Métricas y KPIs de seguimiento"
    ],
    duration: "2-6 meses",
    startingPrice: "$4,200",
    technologies: ["Miro", "Notion", "Slack", "Figma", "Jira", "Google Workspace"],
    whatsappMessage: "Hola! Necesito asesoría para la estrategia digital de mi empresa. ¿Podemos agendar una consulta inicial?"
  }
];
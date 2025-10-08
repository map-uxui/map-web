import { Project } from "../components/ProjectModal";

export const projects: Project[] = [
  {
    id: "hablalo-web",
    title: "Háblalo Web",
    category: "Accesibilidad",
    description: "Comunicación sin barreras para todos.",
    year: "2024",
    client: "Fundación Accesible",
    context: "La comunicación digital sigue siendo un desafío para personas con discapacidades auditivas y del habla. Háblalo Web nace de la necesidad de crear una plataforma inclusiva que democratice la comunicación, permitiendo que todas las personas, independientemente de sus habilidades, puedan expresarse y ser comprendidas en el entorno digital.",
    objective: "Desarrollar una plataforma web que traduzca automáticamente entre lengua de señas, texto y voz, eliminando las barreras comunicativas y promoviendo la inclusión digital. El objetivo principal es crear un ecosistema comunicativo donde la diversidad sea una fortaleza, no una limitación.",
    fullDescription: "Háblalo Web es una revolución en comunicación inclusiva que integra inteligencia artificial, reconocimiento gestual y síntesis de voz para crear puentes comunicativos. La plataforma utiliza algoritmos avanzados de machine learning para interpretar lenguaje de señas en tiempo real, convirtiendo gestos en texto y voz, y viceversa. Implementamos tecnologías como TensorFlow.js para el procesamiento en tiempo real, WebRTC para comunicación fluida, y un diseño UX centrado en accesibilidad con alto contraste, navegación por teclado y compatibilidad total con lectores de pantalla.",
    gallery: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk1NDE0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1585229260143-8d6f99d24c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NTQxNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc1OTU0MTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["React", "TensorFlow.js", "WebRTC", "Node.js", "Python", "MongoDB", "Socket.io"],
    link: "https://hablalo-web.com"
  },
  {
    id: "accesrun",
    title: "AccesRun",
    category: "Plugin",
    description: "Diseño adaptable para cada usuario y sus necesidades específicas.",
    year: "2024",
    client: "DevTools Inc.",
    context: "Los diseñadores y desarrolladores enfrentan constantemente el desafío de crear interfaces verdaderamente accesibles. AccesRun surge como respuesta a la falta de herramientas especializadas que permitan validar y optimizar la accesibilidad en tiempo real durante el proceso de diseño y desarrollo.",
    objective: "Crear un plugin integral para Figma y editores de código que automatice la evaluación de accesibilidad, sugiera mejoras en tiempo real y garantice que los productos digitales cumplan con los estándares WCAG 2.1 AA desde la fase de diseño hasta la implementación final.",
    fullDescription: "AccesRun es un plugin revolucionario que transforma el workflow de accesibilidad. Integra análisis automático de contraste, simulación de discapacidades visuales, verificación de navegación por teclado y generación de código accesible. El plugin utiliza algoritmos avanzados para detectar problemas de accesibilidad en tiempo real, ofrece sugerencias contextualizar y genera reportes detallados. Incluye una biblioteca de componentes pre-validados y patrones de diseño inclusivo que aceleran el desarrollo manteniendo los más altos estándares de accesibilidad.",
    gallery: [
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc1OTU0MTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDg3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1585229260143-8d6f99d24c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NTQxNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["JavaScript", "Figma API", "VS Code Extension", "TypeScript", "Chrome DevTools", "WCAG Guidelines"],
    link: "https://accesrun-plugin.dev"
  },
  {
    id: "neo-traslados",
    title: "Neo Traslados",
    category: "Branding + Web",
    description: "Experiencia optimizada que convierte visitantes.",
    year: "2023",
    client: "Neo Traslados",
    context: "Neo Traslados necesitaba renovar completamente su presencia digital para competir en el mercado de transporte ejecutivo. La empresa requería una identidad visual moderna y una plataforma web que reflejara su compromiso con la excelencia, seguridad y puntualidad en el servicio de traslados premium.",
    objective: "Desarrollar una identidad de marca sólida y una experiencia web optimizada para conversión que posicione a Neo Traslados como líder en transporte ejecutivo, aumentando las reservas online y fortaleciendo la confianza del cliente a través de un diseño profesional y funcional.",
    fullDescription: "Neo Traslados representa una transformación integral que abarca desde el rediseño del logotipo hasta la implementación de una plataforma web de alta conversión. Desarrollamos una identidad visual que comunica elegancia y confiabilidad, utilizando una paleta de colores sofisticada y tipografía premium. La web incluye sistema de reservas en tiempo real, seguimiento GPS de vehículos, cotizador automático, galería de flota y testimonios de clientes. Implementamos estrategias de SEO, optimización de velocidad y diseño responsivo para maximizar la experiencia del usuario y las conversiones.",
    gallery: [
      "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc1OTU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk1NDE0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc1OTU0MTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Google Maps API", "Framer Motion"],
    link: "https://neotraslados.com"
  },
  {
    id: "tiendapp",
    title: "TiendApp",
    category: "E-commerce",
    description: "Comercio digital con experiencia superior.",
    year: "2024",
    client: "Retail Solutions",
    context: "El comercio electrónico requiere plataformas que no solo vendan productos, sino que creen experiencias memorables. TiendApp nace para resolver los problemas comunes del e-commerce: cargas lentas, procesos de compra complejos, falta de personalización y experiencias móviles deficientes.",
    objective: "Crear una plataforma de e-commerce de nueva generación que combine velocidad, personalización e inteligencia artificial para ofrecer experiencias de compra excepcionales, aumentar las conversiones y fidelizar clientes a través de tecnología innovadora.",
    fullDescription: "TiendApp revoluciona el comercio electrónico integrando IA para recomendaciones personalizadas, búsqueda inteligente y chatbots de atención al cliente. La plataforma incluye checkout de una página, múltiples métodos de pago, gestión avanzada de inventario, análisis predictivo de ventas y marketing automation. Implementamos Progressive Web App (PWA) para experiencias móviles nativas, optimización de imágenes automática, CDN global y arquitectura serverless para máximo rendimiento. El dashboard administrativo ofrece insights en tiempo real y herramientas de gestión integral.",
    gallery: [
      "https://images.unsplash.com/photo-1614029896656-a094f640558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTI2NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDg3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnQlMjBvbmxpbmV8ZW58MXx8fHwxNzU5NTQxNDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Redis", "Stripe", "AWS", "Elasticsearch"],
    link: "https://tiendapp.shop"
  },
  {
    id: "dataviz-pro",
    title: "DataViz Pro",
    category: "Dashboard",
    description: "Inteligencia de negocio visualizada.",
    year: "2024",
    client: "Analytics Corp",
    context: "Las empresas generan enormes volúmenes de datos pero luchan por convertirlos en insights accionables. DataViz Pro responde a la necesidad crítica de democratizar el análisis de datos, haciendo que la inteligencia de negocio sea accesible para todos los niveles organizacionales.",
    objective: "Desarrollar una plataforma de visualización de datos intuitiva que transforme información compleja en insights claros y accionables, permitiendo a las organizaciones tomar decisiones basadas en datos de manera rápida y eficiente.",
    fullDescription: "DataViz Pro es una plataforma integral de business intelligence que combina potentes capacidades de análisis con interfaces intuitivas. Incluye conectores a múltiples fuentes de datos, visualizaciones interactivas personalizables, alertas automáticas, reportes programados y colaboración en tiempo real. La plataforma utiliza machine learning para detectar patrones, anomalías y tendencias automáticamente. Implementamos arquitectura modular con microservicios, procesamiento en tiempo real con Apache Kafka, y visualizaciones avanzadas con D3.js y WebGL para manejo de grandes volúmenes de datos.",
    gallery: [
      "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc1OTIwOTgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NTk1NDE0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc1OTU0MTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["Vue.js", "Python", "Apache Kafka", "D3.js", "PostgreSQL", "Docker", "Kubernetes", "TensorFlow"],
    link: "https://dataviz-pro.com"
  },
  {
    id: "fittracker",
    title: "FitTracker",
    category: "Mobile App",
    description: "Wellness móvil personalizado.",
    year: "2024",
    client: "Wellness Tech",
    context: "El mercado de aplicaciones de fitness está saturado de soluciones genéricas que no se adaptan a las necesidades individuales. FitTracker surge para crear una experiencia verdaderamente personalizada que evoluciona con el usuario y se adapta a su estilo de vida único.",
    objective: "Desarrollar una aplicación móvil de fitness inteligente que utilice IA para crear planes de entrenamiento personalizados, adaptándose continuamente a los progresos, preferencias y limitaciones del usuario para maximizar resultados y adherencia al ejercicio.",
    fullDescription: "FitTracker es una aplicación móvil revolucionaria que combina inteligencia artificial, gamificación y comunidad para crear la experiencia de fitness más personalizada del mercado. La app incluye plans adaptativos de entrenamiento, nutrición inteligente, seguimiento biométrico, integración con wearables, desafíos sociales y coaching virtual. Utilizamos algoritmos de machine learning para analizar patrones de ejercicio, predecir lesiones y optimizar rutinas. La interfaz incluye realidad aumentada para corrección de posturas, streaming de clases en vivo y un marketplace de entrenadores certificados.",
    gallery: [
      "https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1OTI2NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDg3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwd29ya291dHxlbnwxfHx8fDE3NTk1NDE0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["React Native", "TensorFlow Lite", "Firebase", "HealthKit", "Google Fit", "AWS", "WebRTC"],
    link: "https://fittracker.app"
  },
  {
    id: "corpsuite",
    title: "CorpSuite",
    category: "Web Design",
    description: "Soluciones empresariales innovadoras.",
    year: "2024",
    client: "Enterprise Solutions",
    context: "Las empresas modernas necesitan presencias digitales que reflejen su innovación y profesionalismo. CorpSuite responde a la demanda de soluciones web empresariales que no solo informen, sino que impulsen el crecimiento del negocio y fortalezcan las relaciones con stakeholders.",
    objective: "Crear una plataforma web empresarial integral que combine diseño premium, funcionalidad avanzada y herramientas de gestión para establecer una presencia digital autoritativa que genere confianza, atraiga talento y facilite el crecimiento empresarial.",
    fullDescription: "CorpSuite es una solución web empresarial completa que integra sitio corporativo, portal de empleados, sistema de gestión de clientes y herramientas de comunicación interna. La plataforma incluye CMS personalizado, integración con sistemas ERP, automatización de procesos, portal de recursos humanos y analytics avanzados. Implementamos arquitectura escalable con microservicios, seguridad empresarial con autenticación multifactor, CDN global para rendimiento óptimo y cumplimiento con regulaciones de privacidad internacionales.",
    gallery: [
      "https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTQ1MzIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc1OTU0MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU5NTQxNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Elasticsearch", "JWT"],
    link: "https://corpsuite.enterprise"
  },
  {
    id: "tastehub",
    title: "TasteHub",
    category: "Food App",
    description: "Experiencia gastronómica digital.",
    year: "2024",
    client: "Food Innovation Lab",
    context: "La industria gastronómica ha evolucionado hacia experiencias digitales inmersivas. TasteHub responde a la necesidad de conectar comensales con experiencias culinarias únicas, desde descubrimiento de restaurantes hasta delivery gourmet, creando un ecosistema gastronómico completo.",
    objective: "Desarrollar una plataforma gastronómica integral que conecte usuarios con experiencias culinarias excepcionales, desde reservas y delivery hasta clases de cocina virtuales, creando una comunidad global de amantes de la gastronomía.",
    fullDescription: "TasteHub es un ecosistema gastronómico completo que incluye marketplace de restaurantes, delivery premium, reservas inteligentes, clases de cocina virtual, comunidad de food bloggers y marketplace de ingredientes especiales. La plataforma utiliza IA para recomendaciones personalizadas basadas en preferencias dietéticas, alergias y gustos. Incluye sistema de reviews verificados, programas de fidelidad, integración con redes sociales gastronómicas y herramientas de gestión para restaurantes. Implementamos geolocalización avanzada, realidad aumentada para visualización de platos y streaming en vivo para experiencias culinarias interactivas.",
    gallery: [
      "https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTQ5OTAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDg3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzU5NTQxNDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["Flutter", "Node.js", "MongoDB", "Redis", "Stripe", "Google Maps", "Firebase", "WebRTC"],
    link: "https://tastehub.food"
  },
  {
    id: "coindash",
    title: "CoinDash",
    category: "Crypto",
    description: "Trading inteligente simplificado.",
    year: "2024",
    client: "CryptoTech Solutions",
    context: "El mercado de criptomonedas requiere herramientas sofisticadas pero accesibles para traders de todos los niveles. CoinDash surge para democratizar el trading de criptomonedas, ofreciendo análisis profesional e interfaces intuitivas que empoderan tanto a principiantes como a expertos.",
    objective: "Crear una plataforma de trading de criptomonedas que combine análisis técnico avanzado, inteligencia artificial y diseño intuitivo para facilitar decisiones de inversión informadas y maximizar oportunidades en el volátil mercado cripto.",
    fullDescription: "CoinDash es una plataforma de trading de criptomonedas de nueva generación que integra análisis técnico avanzado, señales de IA, portfolio management automático y educación financiera. La plataforma incluye trading automático con bots inteligentes, análisis de sentimiento del mercado, alertas personalizadas, simulador de trading y comunidad de traders. Implementamos conectores a múltiples exchanges, análisis en tiempo real con WebSockets, visualizaciones avanzadas con TradingView, seguridad bancaria con autenticación multifactor y cold storage para fondos.",
    gallery: [
      "https://images.unsplash.com/photo-1635183607544-bf69187cc310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGRhc2hib2FyZCUyMHVpfGVufDF8fHx8MTc1OTU0MTAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc1OTU0MTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmd8ZW58MXx8fHwxNzU5NTQxNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["React", "Python", "WebSocket", "TradingView", "PostgreSQL", "Redis", "Kubernetes", "Blockchain APIs"],
    link: "https://coindash.crypto"
  },
  {
    id: "homefinder",
    title: "HomeFinder",
    category: "Real Estate",
    description: "Tu hogar ideal te espera.",
    year: "2024",
    client: "PropTech Innovations",
    context: "El mercado inmobiliario digital necesita evolucionar más allá de simples listados. HomeFinder responde a la demanda de experiencias inmobiliarias inmersivas que conecten emocionalmente a los compradores con propiedades, utilizando tecnología avanzada para facilitar decisiones de vida importantes.",
    objective: "Desarrollar una plataforma inmobiliaria revolucionaria que utilice realidad virtual, inteligencia artificial y análisis predictivo para crear experiencias de búsqueda de hogar personalizadas, eficientes y emocionalmente resonantes.",
    fullDescription: "HomeFinder transforma la búsqueda inmobiliaria con tours virtuales en 360°, matching inteligente basado en lifestyle, análisis de vecindarios con datos en tiempo real, calculadoras financieras avanzadas y asistente virtual de propiedades. La plataforma incluye herramientas de CRM para agentes, sistema de ofertas digitales, verificación de documentos automática y marketplace de servicios relacionados (mudanzas, seguros, decoración). Implementamos geolocalización avanzada, integración con MLS, machine learning para valuaciones automáticas y realidad aumentada para visualización de renovaciones.",
    gallery: [
      "https://images.unsplash.com/photo-1633633292416-1bb8e7b2832b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc1OTU0MTAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDg3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaG91c2V8ZW58MXx8fHwxNzU5NTQxNTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Matterport", "Google Maps", "Stripe", "AWS", "TensorFlow"],
    link: "https://homefinder.properties"
  },
  {
    id: "learnspace",
    title: "LearnSpace",
    category: "EdTech",
    description: "Educación sin límites.",
    year: "2024",
    client: "EduFuture Inc.",
    context: "La educación digital ha demostrado su potencial transformador, pero aún necesita plataformas que combinen pedagogía efectiva con tecnología avanzada. LearnSpace responde a la necesidad de crear experiencias educativas personalizadas que se adapten al ritmo y estilo de aprendizaje de cada estudiante.",
    objective: "Crear una plataforma educativa inteligente que personalice el aprendizaje utilizando IA, gamificación y análisis de datos para maximizar la retención de conocimientos y crear experiencias educativas engaging para estudiantes de todas las edades.",
    fullDescription: "LearnSpace es una plataforma educativa revolucionaria que adapta contenido en tiempo real según el progreso y preferencias del estudiante. Incluye aulas virtuales inmersivas, laboratorios de simulación, sistema de mentorías peer-to-peer, gamificación avanzada con logros y rankings, y herramientas de colaboración en tiempo real. La plataforma utiliza machine learning para identificar gaps de conocimiento, predecir dificultades y recomendar recursos personalizados. Implementamos realidad virtual para experiencias inmersivas, blockchain para certificaciones verificables y analytics avanzados para educadores.",
    gallery: [
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHBsYXRmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTU0MTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc1OTU0MTQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTk1NDE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["React", "Django", "PostgreSQL", "WebRTC", "Three.js", "TensorFlow", "Blockchain", "WebXR"],
    link: "https://learnspace.education"
  },
  {
    id: "soundwave",
    title: "SoundWave",
    category: "Music",
    description: "Tu música, tu momento.",
    year: "2024",
    client: "Audio Innovations",
    context: "El streaming musical ha evolucionado hacia experiencias más personalizadas y sociales. SoundWave responde a la necesidad de crear una plataforma que no solo reproduzca música, sino que comprenda los momentos, emociones y contextos únicos de cada usuario para crear bandas sonoras perfectas para su vida.",
    objective: "Desarrollar una plataforma de streaming musical inteligente que utilice IA contextual, análisis emocional y datos biométricos para crear experiencias musicales ultra-personalizadas que se adapten al momento, estado de ánimo y actividad del usuario.",
    fullDescription: "SoundWave revoluciona el streaming musical con IA que analiza contexto, ubicación, actividad física, clima y estado emocional para crear playlists perfectas. La plataforma incluye funciones de escucha social, creación colaborativa de playlists, descubrimiento musical inteligente, herramientas para artistas independientes y experiencias inmersivas con audio espacial. Implementamos análisis de sentimiento en tiempo real, integración con wearables para datos biométricos, tecnología de audio 3D, machine learning para recomendaciones contextuales y herramientas de creación musical colaborativa.",
    gallery: [
      "https://images.unsplash.com/photo-1642310290610-069d05d3c6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGFwcCUyMHVpfGVufDF8fHx8MTc1OTU0MTAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDg3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzU5NTQxNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "WebAudio API", "TensorFlow", "AWS", "Spotify API", "WebRTC"],
    link: "https://soundwave.music"
  }
];
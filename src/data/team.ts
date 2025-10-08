export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  description: string;
  image: string;
  bio: string;
  expertise: string[];
  experience: Experience[];
  education: Education[];
  achievements: string[];
  skills: Skill[];
  languages: Language[];
  certifications: string[];
  contact: {
    email: string;
    linkedin: string;
    portfolio?: string;
    github?: string;
  };
  yearsOfExperience: number;
  location: string;
  availability: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  honors?: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Language {
  name: string;
  level: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "map",
    name: "Map",
    role: "Designer & Client",
    department: "Diseño",
    description: "Encargado de diseñar productos y llevar adelante los productos digitales y comunicacionales.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFvDit_nZK1Yw/profile-displayphoto-crop_800_800/B4DZlQkQUnIEAI-/0/1757993306654?e=1762387200&v=beta&t=Qy_AWNlWCkU6X1pNZe4bZp0SQ_t7T9ILrcF7-ETvQQM",
    bio: "Diseñador multidisciplinario especializado en productos digitales y estrategias comunicacionales. Map combina visión creativa con conocimiento técnico para desarrollar soluciones que conectan marcas con sus audiencias de manera efectiva. Su enfoque integral abarca desde la conceptualización hasta la implementación de proyectos digitales innovadores.",
    expertise: ["Product Design", "UI/UX Design", "Digital Strategy", "Brand Communication", "Creative Direction"],
    experience: [
      {
        company: "MAP Design",
        position: "Designer & Client Lead",
        duration: "2020 - Presente",
        description: "Liderazgo en diseño de productos digitales y gestión de relaciones con clientes estratégicos.",
        achievements: [
          "Diseño de 150+ productos digitales exitosos",
          "Gestión de cartera de clientes premium con 95% de retención",
          "Implementación de design systems escalables",
          "Liderazgo de proyectos de transformación digital"
        ]
      },
      {
        company: "Creative Studio",
        position: "Senior Product Designer",
        duration: "2017 - 2020",
        description: "Diseño de experiencias digitales para startups y empresas tecnológicas.",
        achievements: [
          "Rediseño de productos que incrementaron conversión en 80%",
          "Creación de 25+ identidades de marca",
          "Mentoring de equipo de diseñadores junior"
        ]
      },
      {
        company: "Digital Agency",
        position: "UI/UX Designer",
        duration: "2015 - 2017",
        description: "Desarrollo de interfaces y experiencias de usuario para aplicaciones web y móviles.",
        achievements: [
          "Diseño de 40+ aplicaciones móviles",
          "Optimización de UX que mejoró satisfacción del usuario en 60%"
        ]
      }
    ],
    education: [
      {
        institution: "Universidad de Palermo",
        degree: "Licenciatura en Diseño Gráfico",
        year: "2016",
        honors: "Magna Cum Laude"
      },
      {
        institution: "Interaction Design Foundation",
        degree: "Certificación en UX Design",
        year: "2018",
        honors: "Especialización en Design Thinking"
      }
    ],
    achievements: [
      "Designer del Año - Design Awards LATAM 2023",
      "Awwwards Site of the Year (2 proyectos)",
      "Speaker en UX Week Buenos Aires 2022",
      "Dribbble Top Designer con 200K+ seguidores",
      "Google Design Sprint Certified Facilitator"
    ],
    skills: [
      {
        category: "Design Tools",
        items: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "After Effects"]
      },
      {
        category: "Metodologías",
        items: ["Design Thinking", "Human-Centered Design", "Lean UX", "Design Sprint", "Agile Design"]
      },
      {
        category: "Especialización",
        items: ["Product Design", "Brand Identity", "Digital Strategy", "Client Relations", "Team Leadership"]
      }
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Fluido (C1)" },
      { name: "Portugués", level: "Intermedio (B2)" }
    ],
    certifications: [
      "Google UX Design Certificate",
      "Adobe Certified Expert (ACE)",
      "Google Design Sprint Facilitator",
      "Figma Community Leader"
    ],
    contact: {
      email: "map@mapdesign.co",
      linkedin: "https://linkedin.com/in/map-designer",
      portfolio: "https://mapdesign.portfolio"
    },
    yearsOfExperience: 8,
    location: "Buenos Aires, Argentina",
    availability: "Tiempo completo"
  },
  {
    id: "jp",
    name: "JP",
    role: "Sales Manager",
    department: "Ventas",
    description: "Encargado de ventas, contratos, estrategias y prospección.",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQGASprqmvrwEg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1626224368261?e=1760220000&v=beta&t=we13kuQtN1Y7_6D6g0Krz-P9DxTP9-j6Sg3GmkKlDdE",
    bio: "Especialista en ventas y desarrollo de negocios con amplia experiencia en el sector tecnológico. JP lidera la estrategia comercial de MAP Design, enfocándose en construir relaciones sólidas con clientes y desarrollar oportunidades de crecimiento. Su enfoque consultivo y orientado a resultados ha posicionado a la empresa como partner estratégico de sus clientes.",
    expertise: ["Business Development", "Sales Strategy", "Client Relations", "Contract Negotiation", "Market Analysis"],
    experience: [
      {
        company: "MAP Design",
        position: "Sales Manager",
        duration: "2021 - Presente",
        description: "Liderazgo del área comercial, desarrollo de estrategias de ventas y gestión de cuentas clave.",
        achievements: [
          "Crecimiento del 250% en ventas anuales",
          "Desarrollo de cartera de 80+ clientes activos",
          "Implementación de CRM que mejoró conversión en 45%",
          "Negociación de contratos por valor superior a $2M USD"
        ]
      },
      {
        company: "TechSales Solutions",
        position: "Senior Sales Executive",
        duration: "2018 - 2021",
        description: "Desarrollo de negocios y ventas consultivas para soluciones tecnológicas.",
        achievements: [
          "Superación de metas de ventas en 120% por 3 años consecutivos",
          "Desarrollo de 50+ nuevas cuentas corporativas",
          "Liderazgo de equipo de ventas de 8 personas"
        ]
      },
      {
        company: "Digital Solutions Corp",
        position: "Business Developer",
        duration: "2016 - 2018",
        description: "Prospección de nuevos clientes y desarrollo de estrategias de mercado.",
        achievements: [
          "Identificación de 30+ oportunidades de negocio mensuales",
          "Desarrollo de propuestas comerciales ganadoras con 60% de cierre"
        ]
      }
    ],
    education: [
      {
        institution: "Universidad de Buenos Aires",
        degree: "MBA en Marketing y Ventas",
        year: "2017",
        honors: "Especialización en Negocios Digitales"
      },
      {
        institution: "Universidad Argentina de la Empresa",
        degree: "Licenciatura en Administración de Empresas",
        year: "2014",
        honors: "Cum Laude"
      }
    ],
    achievements: [
      "Sales Manager del Año - Tech Sales Awards 2023",
      "Top Performer en ventas por 5 años consecutivos",
      "Speaker en Sales Conference LATAM 2022",
      "Certificación en Salesforce Sales Excellence",
      "Reconocimiento por Mejor Estrategia Comercial 2023"
    ],
    skills: [
      {
        category: "Ventas",
        items: ["Consultive Selling", "B2B Sales", "Enterprise Sales", "Account Management", "Lead Generation"]
      },
      {
        category: "Negociación",
        items: ["Contract Negotiation", "Pricing Strategy", "Deal Closing", "Objection Handling", "Value Selling"]
      },
      {
        category: "Herramientas CRM",
        items: ["Salesforce", "HubSpot", "Pipedrive", "Monday Sales", "Google Analytics", "LinkedIn Sales Navigator"]
      },
      {
        category: "Estrategia",
        items: ["Market Analysis", "Competitive Intelligence", "Sales Forecasting", "Territory Planning", "Customer Segmentation"]
      }
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Fluido (C1)" },
      { name: "Portugués", level: "Intermedio (B2)" }
    ],
    certifications: [
      "Salesforce Sales Cloud Consultant",
      "HubSpot Sales Software Certification",
      "Google Analytics Certified",
      "LinkedIn Sales Navigator Certified"
    ],
    contact: {
      email: "jp@mapdesign.co",
      linkedin: "https://linkedin.com/in/jp-salesmanager"
    },
    yearsOfExperience: 7,
    location: "Buenos Aires, Argentina",
    availability: "Tiempo completo"
  }
];
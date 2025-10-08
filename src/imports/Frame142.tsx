import imgPlataformaDeComunicacionInclusiva from "figma:asset/3f54b19f2c76103a1d9fbb924c46977848297b4a.png";
import imgPersonalizacionDeUiYContrastesSegunNecesidades from "figma:asset/cee8c303a409d80719ba80e1f906b9b812cec012.png";
import imgArquitecturaSimpleOrientadaAConversion from "figma:asset/35434059b14eca09d48a6ed42568dc1d0454593f.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useProject } from "../App";
import { projects } from "../data/projects";
import { Editable } from "../components/admin/ContentManager";

function Frame11() {
  return (
    <div className="text-center mb-16">
      <div className="flex flex-col font-normal gap-6 text-[#0aafb8]">
        <div
          className="font-space-grotesk"
          style={{ fontVariationSettings: "'wdth' 95, 'wght' 600" }}
        >
          <Editable 
            id="works_title"
            defaultContent="Trabajos"
            section="trabajos"
            className="text-5xl md:text-6xl leading-tight"
          >
            {(content) => <h1 className="text-5xl md:text-6xl leading-tight">{content}</h1>}
          </Editable>
        </div>
        <Editable 
          id="works_description"
          defaultContent="Descubre nuestra experiencia a través de proyectos reales que transforman ideas en soluciones digitales efectivas."
          type="textarea"
          section="trabajos"
          multiline
          className="font-['Inter:Regular',_sans-serif] text-xl theme-text max-w-3xl mx-auto"
        />
      </div>
    </div>
  );
}

interface ProjectCardProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

function ProjectCard({ id, tag, title, description, image, alt }: ProjectCardProps) {
  const { openProject } = useProject();
  
  const handleClick = () => {
    const project = projects.find(p => p.id === id);
    if (project) openProject(project);
  };

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer w-full max-w-[350px] h-[280px] theme-card-bg rounded-2xl overflow-hidden border theme-border transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative w-full h-[160px] overflow-hidden">
        <img 
          src={image}
          alt={alt}
          className="w-full h-full object-cover rounded-t-2xl transition-opacity duration-300 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Container */}
      <div className="p-2 flex flex-col gap-2 h-[120px]">
        {/* Tag */}
        <div className="inline-flex">
          <span className="px-3 py-1 bg-[#2f2640] text-[#f0f1f5] text-xs font-semibold rounded-full">
            {tag}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="theme-text font-bold text-lg leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="theme-text-secondary text-sm leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Frame142() {
  const projectsData = [
    {
      id: 'hablalo-web',
      tag: 'Accesibilidad',
      title: 'Háblalo Web',
      description: 'Comunicación sin barreras para todos.',
      image: imgPlataformaDeComunicacionInclusiva,
      alt: 'Plataforma de comunicación inclusiva'
    },
    {
      id: 'accesrun',
      tag: 'Plugin',
      title: 'AccesRun',
      description: 'Diseño adaptable para cada usuario y sus necesidades específicas.',
      image: imgPersonalizacionDeUiYContrastesSegunNecesidades,
      alt: 'Personalización de UI y contrastes según necesidades'
    },
    {
      id: 'neo-traslados',
      tag: 'Branding + Web',
      title: 'Neo Traslados',
      description: 'Experiencia optimizada que convierte visitantes.',
      image: imgArquitecturaSimpleOrientadaAConversion,
      alt: 'Arquitectura simple orientada a conversión'
    },
    {
      id: 'tiendapp',
      tag: 'E-commerce',
      title: 'TiendApp',
      description: 'Comercio digital con experiencia superior.',
      image: 'https://images.unsplash.com/photo-1614029896656-a094f640558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTI2NzAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Plataforma de comercio electrónico moderna'
    },
    {
      id: 'dataviz-pro',
      tag: 'Dashboard',
      title: 'DataViz Pro',
      description: 'Inteligencia de negocio visualizada.',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc1OTIwOTgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Panel de análisis y visualización de datos'
    },
    {
      id: 'fittracker',
      tag: 'Mobile App',
      title: 'FitTracker',
      description: 'Wellness móvil personalizado.',
      image: 'https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1OTI2NzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'App móvil para seguimiento de ejercicios'
    },
    {
      id: 'corpsuite',
      tag: 'Web Design',
      title: 'CorpSuite',
      description: 'Soluciones empresariales innovadoras.',
      image: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTQ1MzIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Diseño web corporativo moderno'
    },
    {
      id: 'tastehub',
      tag: 'Food App',
      title: 'TasteHub',
      description: 'Experiencia gastronómica digital.',
      image: 'https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTQ5OTAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'App de restaurante y delivery'
    },
    {
      id: 'coindash',
      tag: 'Crypto',
      title: 'CoinDash',
      description: 'Trading inteligente simplificado.',
      image: 'https://images.unsplash.com/photo-1635183607544-bf69187cc310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGRhc2hib2FyZCUyMHVpfGVufDF8fHx8MTc1OTU0MTAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Dashboard de criptomonedas'
    },
    {
      id: 'homefinder',
      tag: 'Real Estate',
      title: 'HomeFinder',
      description: 'Tu hogar ideal te espera.',
      image: 'https://images.unsplash.com/photo-1633633292416-1bb8e7b2832b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc1OTU0MTAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'App inmobiliaria'
    }
  ];

  return (
    <div className="w-full bg-white/5 rounded-3xl p-6">
      <Frame11 />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center max-h-[70vh] overflow-y-auto scrollbar-hide">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            tag={project.tag}
            title={project.title}
            description={project.description}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}
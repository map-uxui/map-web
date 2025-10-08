import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  context: string;
  objective: string;
  fullDescription: string;
  gallery: string[];
  link: string;
  year: string;
  client: string;
  technologies: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % project.gallery.length,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + project.gallery.length) %
        project.gallery.length,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="theme-bg border theme-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 theme-bg border-b theme-border p-6 flex items-center justify-between w-full z-20">
          <div>
            <h2
              className="text-2xl theme-accent font-['Georama:Regular',_sans-serif]"
              style={{ fontVariationSettings: "'wdth' 128" }}
            >
              {project.title}
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="inline-block theme-card-bg px-3 py-1 rounded-full text-[12px] theme-text font-['Inter:Semi_Bold',_sans-serif]">
                {project.category}
              </span>
              <span className="theme-text-secondary text-sm">
                {project.year}
              </span>
              <span className="theme-text-secondary text-sm">
                {project.client}
              </span>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="theme-text hover:theme-card-bg h-10 w-10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Contexto */}
          <section>
            <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
              Contexto
            </h3>
            <p className="theme-text leading-relaxed font-['Inter:Regular',_sans-serif]">
              {project.context}
            </p>
          </section>

          {/* Objetivo */}
          <section>
            <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
              Objetivo
            </h3>
            <p className="theme-text leading-relaxed font-['Inter:Regular',_sans-serif]">
              {project.objective}
            </p>
          </section>

          {/* Galería */}
          <section>
            <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
              Galería
            </h3>
            <div className="space-y-4">
              {/* Imagen principal */}
              <div className="relative group">
                <div className="aspect-video rounded-xl overflow-hidden theme-card-bg">
                  <ImageWithFallback
                    src={project.gallery[currentImageIndex]}
                    alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation arrows */}
                {project.gallery.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </>
                )}

                {/* Image counter */}
                {project.gallery.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} /{" "}
                    {project.gallery.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {project.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? "border-theme-accent"
                          : "border-transparent hover:border-theme-accent"
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Descripción */}
          <section>
            <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
              Descripción
            </h3>
            <p className="theme-text leading-relaxed font-['Inter:Regular',_sans-serif] mb-4">
              {project.fullDescription}
            </p>

            {/* Tecnologías */}
            <div className="mb-4">
              <h4 className="theme-accent mb-2 font-['Inter:Semi_Bold',_sans-serif]">
                Tecnologías utilizadas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="theme-card-bg border theme-border theme-accent px-3 py-1 rounded-full text-sm font-['Inter:Regular',_sans-serif]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Link */}
          <section>
            <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
              Links
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                onClick={() =>
                  window.open(project.link, "_blank")
                }
                className="theme-accent-bg hover:theme-accent-bg text-white transition-all duration-300 group"
              >
                <Globe className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Sitio Web
              </Button>
              <Button
                onClick={() =>
                  window.open(`${project.link}/demo`, "_blank")
                }
                variant="outline"
                className="border-theme-accent theme-accent hover:theme-accent-bg hover:text-white transition-all duration-300 group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Demo Live
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    `https://github.com/mapdesign/${project.id}`,
                    "_blank",
                  )
                }
                variant="outline"
                className="theme-border theme-text hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Repositorio
              </Button>
            </div>

            <div className="border-t theme-border pt-4">
              <h4 className="theme-accent mb-3 font-['Inter:Semi_Bold',_sans-serif] flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir proyecto
              </h4>
              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?text=Mira este increíble proyecto: ${project.title}&url=${project.link}&via=mapdesign`,
                      "_blank",
                    )
                  }
                  size="icon"
                  variant="outline"
                  className="border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${project.link}`,
                      "_blank",
                    )
                  }
                  size="icon"
                  variant="outline"
                  className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${project.link}`,
                      "_blank",
                    )
                  }
                  size="icon"
                  variant="outline"
                  className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: project.title,
                        text: project.description,
                        url: project.link,
                      });
                    } else {
                      navigator.clipboard.writeText(
                        project.link,
                      );
                      // Aquí podrías agregar una notificación de "Link copiado"
                    }
                  }}
                  size="icon"
                  variant="outline"
                  className="border-theme-accent theme-accent hover:theme-accent-bg hover:text-white transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
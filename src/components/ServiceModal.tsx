import { X, ExternalLink, ArrowLeft, ArrowRight, MessageCircle, Calendar, Mail, Clock, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import type { Service } from "../data/services";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.gallery.length) % service.gallery.length);
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+5491123456789"; // Reemplazar con número real
    const message = encodeURIComponent(service.whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleScheduleCall = () => {
    // Integración con Calendly o similar
    window.open("https://calendly.com/mapdesign/consultoria-inicial", '_blank');
  };

  const handleContactForm = () => {
    // Scroll to contact form or open contact modal
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="theme-bg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Fixed Header */}
        <div className="sticky top-0 theme-bg border-b theme-border p-6 flex items-center justify-between w-full z-20">
          <div>
            <h2 className="text-2xl theme-accent font-['Georama:Regular',_sans-serif]" style={{ fontVariationSettings: "'wdth' 128" }}>
              {service.title}
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="inline-block theme-card-bg px-3 py-1 rounded-full text-[12px] theme-text font-['Inter:Semi_Bold',_sans-serif]">
                {service.category}
              </span>
              <Button
                onClick={() => {
                  const phoneNumber = "+5491123456789"; // Reemplazar con número real
                  const message = encodeURIComponent(`Hola! Me interesa consultar sobre el servicio: ${service.title}`);
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                size="sm"
                className="theme-accent-bg hover:theme-accent-bg text-white transition-all duration-300 flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar Servicio
              </Button>
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

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="p-6 space-y-8">
            
            {/* Context Section */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">Contexto</h3>
              <p className="theme-text leading-relaxed">{service.context}</p>
            </section>

            {/* Objective Section */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">Objetivo</h3>
              <p className="theme-text leading-relaxed">{service.objective}</p>
            </section>

            {/* Gallery Section */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">Galería</h3>
              <div className="relative">
                <div className="relative aspect-video rounded-lg overflow-hidden theme-card-bg">
                  <ImageWithFallback 
                    src={service.gallery[currentImageIndex]} 
                    alt={`${service.title} - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {service.gallery.length > 1 && (
                    <>
                      <Button
                        onClick={prevImage}
                        size="icon"
                        variant="ghost"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        onClick={nextImage}
                        size="icon"
                        variant="ghost"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </>
                  )}
                </div>
                
                {service.gallery.length > 1 && (
                  <div className="flex justify-center mt-4 gap-2">
                    {service.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentImageIndex ? 'bg-theme-accent' : 'theme-border bg-transparent border'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Full Description */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">Descripción Completa</h3>
              <p className="theme-text leading-relaxed">{service.fullDescription}</p>
            </section>

            {/* Process */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">Proceso</h3>
              <div className="grid gap-3">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full theme-accent-bg text-white text-sm flex items-center justify-center font-['Inter:Semi_Bold',_sans-serif]">
                      {index + 1}
                    </div>
                    <span className="theme-text">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Deliverables */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">Entregables</h3>
              <div className="grid gap-3">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 theme-accent" />
                    <span className="theme-text">{deliverable}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="inline-block theme-card-bg px-3 py-1 rounded-full text-sm theme-text border theme-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Contact Actions */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">¿Listo para comenzar?</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <Button
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Contactar por WhatsApp
                </Button>
                
                <Button
                  onClick={handleScheduleCall}
                  variant="outline"
                  className="border-theme-accent theme-accent hover:theme-accent-bg hover:text-white transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Agendar Reunión
                </Button>
                
                <Button
                  onClick={handleContactForm}
                  variant="outline"
                  className="theme-border theme-text hover:bg-white hover:text-black transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Enviar Formulario
                </Button>
              </div>

              <div className="mt-4 p-4 theme-card-bg rounded-lg border theme-border">
                <p className="theme-text-secondary text-sm text-center">
                  💡 <strong>Consulta inicial gratuita:</strong> Agendemos una llamada de 30 minutos para discutir tu proyecto sin compromiso
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Service };
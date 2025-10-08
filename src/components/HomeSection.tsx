import Frame10 from "../imports/Frame10";
import { useSearch } from "../App";
import { Button } from "./ui/button";
import { Editable } from "./admin/ContentManager";
import { MaterialIcon } from "./MaterialIcon";

export function HomeSection() {
  const { navigateToSection } = useSearch();

  const contactInfo = [
    {
      icon: "mail",
      title: "Email",
      contentId: "contact_email",
      defaultContent: "contacto@mapdesign.com",
      linkPrefix: "mailto:"
    },
    {
      icon: "phone",
      title: "Teléfono", 
      contentId: "contact_phone",
      defaultContent: "+54 11 1234-5678",
      linkPrefix: "tel:"
    },
    {
      icon: "location_on",
      title: "Ubicación",
      contentId: "contact_location",
      defaultContent: "Buenos Aires, Argentina",
      linkPrefix: "#"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-6 flex flex-col justify-center pb-20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto z-10 w-full relative">
        <div className="flex flex-col">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col font-normal gap-6 theme-accent">
              <div
                className="font-space-grotesk"
                style={{ fontVariationSettings: "'wdth' 95, 'wght' 600" }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
                  <Editable 
                    id="home_title"
                    defaultContent="Naveguemos nuevos proyectos"
                    section="home"
                    className="theme-accent"
                  />
                </h1>
              </div>
              <div className="font-['Inter:Regular',_sans-serif] text-xl theme-text max-w-3xl mx-auto mb-12">
                <Editable 
                  id="home_subtitle"
                  defaultContent="Bienvenido a MAP Design, donde transformamos ideas en experiencias digitales memorables."
                  type="textarea"
                  section="home"
                  className="theme-text"
                  multiline={true}
                />
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Editable
                  id="whatsapp_link"
                  defaultContent="https://wa.me/541112345678?text=Hola! Me interesa conocer más sobre sus servicios."
                  type="link"
                  section="home"
                >
                  {(whatsappUrl) => (
                    <Button 
                      onClick={() => window.open(whatsappUrl, '_blank')}
                      className="theme-accent-bg text-white px-8 py-3 transition-all duration-300 group border-none"
                    >
                      <MaterialIcon icon="chat" size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <Editable
                        id="whatsapp_button_text"
                        defaultContent="Enviar WhatsApp"
                        section="home"
                        className="text-white"
                        inline={true}
                      />
                    </Button>
                  )}
                </Editable>
                
                <Editable
                  id="calendly_link"
                  defaultContent="https://calendly.com/mapdesign"
                  type="link"
                  section="home"
                >
                  {(calendlyUrl) => (
                    <Button 
                      onClick={() => window.open(calendlyUrl, '_blank')}
                      variant="outline"
                      className="theme-border border theme-accent hover:theme-accent-bg hover:text-white px-8 py-3 transition-all duration-300 group bg-transparent"
                    >
                      <MaterialIcon icon="calendar_month" size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <Editable
                        id="calendly_button_text"
                        defaultContent="Agendar reunión"
                        section="home"
                        className="theme-accent group-hover:text-white"
                        inline={true}
                      />
                    </Button>
                  )}
                </Editable>
              </div>

              {/* Quick navigation to services */}
              <div className="mt-8">
                <button
                  onClick={() => navigateToSection('servicios')}
                  className="theme-accent hover:underline font-['Inter:Medium',_sans-serif] text-lg transition-all duration-300"
                >
                  Ver nuestros servicios →
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}

        </div>
      </div>
    </div>
  );
}
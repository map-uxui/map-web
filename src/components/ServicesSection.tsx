import { services } from "../data/services";
import { useService } from "../App";
import { Editable } from "./admin/ContentManager";
import { MaterialIcon } from "./MaterialIcon";

export function ServicesSection() {
  const { openService } = useService();

  const iconMap = {
    'Pen': 'edit',
    'Search': 'search',
    'Palette': 'palette', 
    'Users': 'groups'
  };

  return (
    <div className="relative min-h-[calc(100vh-50px)] overflow-hidden px-6 pt-16">
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
                <Editable 
                  id="services_title"
                  defaultContent="Servicios"
                  section="servicios"
                  className="text-5xl md:text-6xl leading-tight"
                >
                  {(content) => <h1 className="text-5xl md:text-6xl leading-tight">{content}</h1>}
                </Editable>
              </div>
              <Editable 
                id="services_description"
                defaultContent="Trabajamos para que tus proyectos dentro de estas temáticas alcancen su máximo potencial según tus posibilidades."
                type="textarea"
                section="servicios"
                multiline
                className="font-['Inter:Regular',_sans-serif] text-xl theme-text max-w-3xl mx-auto"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {services.map((service, index) => {
              const iconName = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div
                  key={service.id}
                  onClick={() => openService(service)}
                  className="group theme-card-bg border theme-border rounded-xl p-8 hover:border-[var(--portfolio-accent)]/40 transition-all duration-300 hover:transform hover:scale-105 h-80 w-full cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="p-4 bg-[var(--portfolio-accent)]/10 rounded-full group-hover:bg-[var(--portfolio-accent)]/20 transition-colors duration-300 mb-6">
                      <MaterialIcon 
                        icon={iconName}
                        size={32} 
                        className="theme-accent group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <h3 className="theme-text mb-4 text-lg">
                      {service.title}
                    </h3>
                    <div className="flex-1 flex items-center">
                      <p className="text-sm theme-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
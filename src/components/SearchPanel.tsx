import { useState, useEffect, useCallback } from 'react';
import { Search, X, ArrowRight, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { useSearch } from '../App';

// Contenido simplificado para búsqueda
const searchableContent = [
  {
    section: "inicio",
    title: "Inicio - Portfolio Personal",
    content: "Naveguemos nuevos proyectos. Comencemos el viaje para descubrir tu proyecto, desarrollemos productos digitales, pensemos branding de tu marca y potenciemos tu negocio. Enviar un mensaje. Agendar una meet. Desarrollador frontend, react typescript, diseño web moderno, experiencias digitales, portfolio personal."
  },
  {
    section: "trabajos", 
    title: "Trabajos - Portfolio de Proyectos",
    content: "Trabajos. Consulta algunos de nuestros trabajos realizados. Háblalo Web - Plataforma de comunicación inclusiva. AccesRun - Personalización de UI y contrastes según necesidades. Neo Traslados - Arquitectura simple orientada a conversión. Proyectos portfolio, casos estudio desarrollos."
  },
  {
    section: "servicios",
    title: "Servicios - Desarrollo y Diseño", 
    content: "Servicios. Trabajamos para que tus proyectos alcancen su máximo potencial. Diseño de productos, creamos experiencias digitales centradas en el usuario. Análisis UX, investigamos y optimizamos la experiencia de usuario. Branding, desarrollamos identidades visuales memorables. Asesoría, te acompañamos en la estrategia digital."
  },
  {
    section: "partners",
    title: "Partners - Nuestros Aliados Estratégicos",
    content: "Partners. Conoce a nuestros aliados estratégicos que hacen posible transformar tus ideas en soluciones digitales exitosas. María González CEO Fundadora especialista estrategia digital. Carlos Mendoza Director Técnico desarrollador full-stack. Ana Rodríguez Diseñadora UX UI experiencias usuario. Diego Herrera Project Manager metodologías ágiles. Quieres formar parte de nuestros partners, talento excepcional, oportunidades colaborativas."
  },
  {
    section: "contacto",
    title: "Contacto - Información Personal",
    content: "Contacto, email teléfono, redes sociales, formulario contacto, información personal, comunicación mensaje, enviar mensaje, agendar meet, consulta profesional."
  }
];

export function SearchPanel() {
  const { isSearchOpen, toggleSearch, searchQuery, setSearchQuery, searchResults, setSearchResults, navigateToSection } = useSearch();
  const [inputFocused, setInputFocused] = useState(false);
  const [recentSearches] = useState<string[]>(['proyectos', 'servicios', 'contacto']);

  // Función de búsqueda memoizada
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchableContent
      .map(item => {
        const lowerContent = item.content.toLowerCase();
        const lowerTitle = item.title.toLowerCase();
        
        // Buscar en título y contenido
        const titleMatch = lowerTitle.includes(lowerQuery);
        const contentMatch = lowerContent.includes(lowerQuery);
        
        if (titleMatch || contentMatch) {
          // Extraer contexto alrededor de la coincidencia
          const index = lowerContent.indexOf(lowerQuery);
          let match = '';
          
          if (index !== -1) {
            const start = Math.max(0, index - 30);
            const end = Math.min(item.content.length, index + query.length + 30);
            match = item.content.substring(start, end);
          } else {
            // Si no hay coincidencia exacta, usar las primeras palabras del contenido
            match = item.content.substring(0, 80) + '...';
          }
          
          return {
            section: item.section,
            content: item.content,
            match: match
          };
        }
        return null;
      })
      .filter(Boolean) as Array<{ section: string; content: string; match: string }>;

    setSearchResults(results);
  }, [setSearchResults]);

  // Handle ESC key to close search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isSearchOpen) {
        toggleSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isSearchOpen, toggleSearch]);

  // Búsqueda con debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, performSearch]);

  const handleResultClick = (section: string) => {
    navigateToSection(section);
  };

  const handleRecentSearchClick = (search: string) => {
    setSearchQuery(search);
  };

  const getSectionDisplayName = (section: string) => {
    const names: { [key: string]: string } = {
      inicio: "Inicio",
      trabajos: "Trabajos", 
      servicios: "Servicios",
      partners: "Partners",
      contacto: "Contacto"
    };
    return names[section] || section;
  };

  const popularSearches = ['proyectos', 'diseño', 'desarrollo web', 'branding', 'UX', 'react'];

  if (!isSearchOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#1a1625] transform transition-all duration-300 ease-in-out">
      <div className="h-full flex flex-col">
        {/* Search Input Header */}
        <div className="p-6 border-b border-[rgba(240,241,245,0.1)]">
          <div className={`relative flex items-center bg-[rgba(255,255,255,0.05)] rounded-xl border transition-colors duration-200 ${
            inputFocused ? 'border-[#0aafb8] shadow-[0_0_0_3px_rgba(10,175,184,0.1)]' : 'border-[rgba(240,241,245,0.1)]'
          }`}>
            <button 
              onClick={toggleSearch}
              className="p-3 ml-2 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-all duration-300 hover:scale-105"
            >
              <X className="w-5 h-5 text-[rgba(240,241,245,0.8)] transition-transform duration-300 rotate-90 hover:rotate-180" />
            </button>
            <input
              type="text"
              placeholder="Buscar en toda la web..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className="w-full px-4 py-4 bg-transparent text-[#F0F1F5] placeholder:text-[rgba(240,241,245,0.5)] outline-none"
              autoFocus
            />

            <div className="p-3 mr-2">
              <Search className="w-5 h-5 text-[rgba(240,241,245,0.5)] transition-transform duration-300 rotate-12" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {searchQuery.trim() === '' ? (
            <div className="space-y-8">
              {/* Búsquedas Recientes */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[rgba(240,241,245,0.5)]" />
                    <h3 className="text-[rgba(240,241,245,0.7)] text-sm">Búsquedas recientes</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearchClick(search)}
                        className="px-3 py-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(10,175,184,0.1)] border border-[rgba(240,241,245,0.1)] hover:border-[rgba(10,175,184,0.3)] rounded-lg text-sm text-[rgba(240,241,245,0.8)] transition-all duration-200"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Búsquedas Populares */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-[rgba(240,241,245,0.5)]" />
                  <h3 className="text-[rgba(240,241,245,0.7)] text-sm">Búsquedas populares</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleRecentSearchClick(search)}
                      className="px-3 py-2 bg-[rgba(10,175,184,0.05)] hover:bg-[rgba(10,175,184,0.1)] border border-[rgba(10,175,184,0.2)] hover:border-[rgba(10,175,184,0.3)] rounded-lg text-sm text-[#0aafb8] transition-all duration-200"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mensaje de Bienvenida */}
              <div className="text-center py-12">
                <Sparkles className="w-16 h-16 text-[rgba(240,241,245,0.2)] mx-auto mb-4" />
                <p className="text-[rgba(240,241,245,0.4)] text-lg mb-2">
                  Busca en todo el contenido
                </p>
                <p className="text-[rgba(240,241,245,0.3)] text-sm">
                  Encuentra proyectos, servicios, información de contacto y más
                </p>
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-[rgba(240,241,245,0.2)] mx-auto mb-4" />
              <p className="text-[rgba(240,241,245,0.5)] text-lg mb-2">
                No se encontraron resultados
              </p>
              <p className="text-[rgba(240,241,245,0.3)] text-sm">
                Intenta con otros términos de búsqueda
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[rgba(240,241,245,0.7)] text-sm">
                  {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
                </h3>
                <span className="text-[rgba(240,241,245,0.4)] text-xs">
                  para "{searchQuery}"
                </span>
              </div>
              <div className="space-y-3">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result.section)}
                    className="group cursor-pointer p-4 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(10,175,184,0.05)] rounded-xl border border-[rgba(240,241,245,0.05)] hover:border-[rgba(10,175,184,0.2)] transition-all duration-200 hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#0aafb8] font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#0aafb8] rounded-full"></div>
                        {getSectionDisplayName(result.section)}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[rgba(240,241,245,0.4)] group-hover:text-[#0aafb8] transition-colors duration-200 group-hover:translate-x-1" />
                    </div>
                    <p className="text-[rgba(240,241,245,0.8)] leading-relaxed text-sm">
                      {result.match}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
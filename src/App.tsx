import { useState, createContext, useContext, useEffect, useCallback } from "react";
import { HeroSection } from "./components/HeroSection";
import { HomeSection } from "./components/HomeSection";
import { WorksSection } from "./components/WorksSection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { AdminDashboard } from "./components/AdminDashboard";
import { LoginForm } from "./components/admin/LoginForm";
import { AdminLayout } from "./components/admin/AdminLayout";
import { ContentManagerProvider, GlobalEditModeProvider } from "./components/admin/ContentManager";
import { SideNavigationWithState } from "./components/SideNavigationWithTheme";
import { NavBar } from "./components/NavBar";
import { SearchPanel } from "./components/SearchPanel";
import { ProjectModal, Project } from "./components/ProjectModal";
import { ServiceModal, Service } from "./components/ServiceModal";
import { TeamModal, TeamMember } from "./components/TeamModal";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SplineBackground } from "./components/SplineBackground";
import { SectionTransition } from "./components/SectionTransition";
import { Toaster } from "./components/ui/sonner";

// Context for animation state
const AnimationContext = createContext({
  isAnimationPlaying: true,
  toggleAnimation: () => {}
});

// Context for search state
const SearchContext = createContext({
  isSearchOpen: false,
  toggleSearch: () => {},
  searchQuery: '',
  setSearchQuery: (query: string) => {},
  searchResults: [] as Array<{ section: string; content: string; match: string }>,
  setSearchResults: (results: Array<{ section: string; content: string; match: string }>) => {},
  navigateToSection: (section: string, options?: { scroll?: boolean }) => {}
});

// Context for project modal
const ProjectContext = createContext({
  selectedProject: null as Project | null,
  openProject: (project: Project) => {},
  closeProject: () => {}
});

// Context for service modal
const ServiceContext = createContext({
  selectedService: null as Service | null,
  openService: (service: Service) => {},
  closeService: () => {}
});

// Context for team modal
const TeamContext = createContext({
  selectedMember: null as TeamMember | null,
  openMember: (member: TeamMember) => {},
  closeMember: () => {}
});

// Context for theme
const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {}
});

export const useAnimation = () => useContext(AnimationContext);
export const useSearch = () => useContext(SearchContext);
export const useProject = () => useContext(ProjectContext);
export const useService = () => useContext(ServiceContext);
export const useTeam = () => useContext(TeamContext);
export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('');
  const [activeSection, setActiveSection] = useState('inicio');
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{ section: string; content: string; match: string }>>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Simple routing system
  useEffect(() => {
    const path = window.location.pathname;
    setCurrentRoute(path);
    
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleAnimation = () => {
    const newState = !isAnimationPlaying;
    setIsAnimationPlaying(newState);
    
    // Apply or remove animation disable class to body
    if (newState) {
      document.body.classList.remove('animations-disabled');
    } else {
      document.body.classList.add('animations-disabled');
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const navigateToSection = useCallback((section: string, options: { scroll?: boolean } = {}) => {
    setActiveSection(section);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    
    // Scroll to the section with enhanced smooth scrolling
    if (options.scroll !== false) {
      setIsNavigating(true);
      const element = document.getElementById(section);
      if (element) {
        const scrollBehavior = isAnimationPlaying ? 'smooth' : 'auto';

        element.scrollIntoView({
          behavior: scrollBehavior,
          block: 'start',
          inline: 'nearest'
        });

        // Clear navigation flag after scroll completes
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000);
      }
    }
  }, [isAnimationPlaying]);

  const handleSectionVisible = useCallback((section: string) => {
    // Don't update active section if user is actively navigating
    if (!isNavigating) {
      setActiveSection((prev) => (prev === section ? prev : section));
    }
  }, [isNavigating]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const openService = (service: Service) => {
    setSelectedService(service);
  };

  const closeService = () => {
    setSelectedService(null);
  };

  const openMember = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeMember = () => {
    setSelectedMember(null);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleAdminLogin = (email: string, password: string) => {
    // Verificación de credenciales específicas
    if (email === "map.uxui@gmail.com" && password === "Admin12") {
      setIsAdminAuthenticated(true);
      localStorage.setItem('mapdesign_admin_session', 'true');
    } else {
      // No debería llegar aquí, pero por seguridad
      setIsAdminAuthenticated(false);
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('mapdesign_admin_session');
  };

  // Check admin session on mount
  useEffect(() => {
    const adminSession = localStorage.getItem('mapdesign_admin_session');
    if (adminSession === 'true') {
      setIsAdminAuthenticated(true);
    }
  }, []);

  // Apply animation state to body on mount and state changes
  useEffect(() => {
    if (isAnimationPlaying) {
      document.body.classList.remove('animations-disabled');
    } else {
      document.body.classList.add('animations-disabled');
    }
  }, [isAnimationPlaying]);

  // Enhanced scroll spy effect with intersection observer
  useEffect(() => {
    const sections = ['inicio', 'servicios', 'trabajos', 'partners'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Better detection zone
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      let maxVisibility = 0;
      let mostVisibleSection = 'inicio';

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
          maxVisibility = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (maxVisibility > 0.25) {
        setActiveSection(mostVisibleSection);
      }
    }, observerOptions);

    sectionElements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Admin route check
  if (currentRoute === '/admin') {
    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div className={`min-h-screen theme-bg ${isDark ? 'dark' : ''}`}>
          {/* Spline 3D Background */}
          <SplineBackground />
          
          {/* Animated Background as overlay */}
          <div className="relative z-[1]">
            <AnimatedBackground />
          </div>
          
          <div className="relative z-20">
            {!isAdminAuthenticated ? (
              <LoginForm onLogin={handleAdminLogin} />
            ) : (
              <ContentManagerProvider>
                <AdminLayout onLogout={handleAdminLogout} />
              </ContentManagerProvider>
            )}
          </div>
          <Toaster />
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <GlobalEditModeProvider>
      <AnimationContext.Provider value={{ isAnimationPlaying, toggleAnimation }}>
        <SearchContext.Provider value={{ 
          isSearchOpen, 
          toggleSearch, 
          searchQuery, 
          setSearchQuery, 
          searchResults, 
          setSearchResults,
          navigateToSection 
        }}>
          <ProjectContext.Provider value={{
            selectedProject,
            openProject,
            closeProject
          }}>
            <ServiceContext.Provider value={{
              selectedService,
              openService,
              closeService
            }}>
              <TeamContext.Provider value={{
                selectedMember,
                openMember,
                closeMember
              }}>
                <ThemeContext.Provider value={{
                  isDark,
                  toggleTheme
                }}>
            <div className={`min-h-screen theme-bg ${isDark ? 'dark' : ''}`}>
            {/* Animated Background */}
            <AnimatedBackground />
            
            {/* Navigation Bar */}
            <div className="relative z-30">
              <NavBar />
            </div>
            
            {/* Search Panel */}
            <div className="relative z-40">
              <SearchPanel />
            </div>
            
            {/* Main Content - Vertical Scroll Layout */}
            <div className="relative z-20 ml-[80px]">
              {/* Inicio Section */}
              <section id="inicio" className="min-h-screen pt-[72px]">
                <SectionTransition
                  isActive={activeSection === 'inicio'}
                  sectionId="inicio"
                  onFullyVisible={handleSectionVisible}
                >
                  <HomeSection />
                </SectionTransition>
              </section>

              {/* Servicios Section */}
              <section id="servicios" className="min-h-screen pt-8">
                <SectionTransition
                  isActive={activeSection === 'servicios'}
                  sectionId="servicios"
                  onFullyVisible={handleSectionVisible}
                >
                  <ServicesSection />
                </SectionTransition>
              </section>

              {/* Trabajos Section */}
              <section id="trabajos" className="min-h-screen pt-8">
                <SectionTransition
                  isActive={activeSection === 'trabajos'}
                  sectionId="trabajos"
                  onFullyVisible={handleSectionVisible}
                >
                  <WorksSection />
                </SectionTransition>
              </section>

              {/* Partners Section */}
              <section id="partners" className="min-h-screen pt-8">
                <SectionTransition
                  isActive={activeSection === 'partners'}
                  sectionId="partners"
                  onFullyVisible={handleSectionVisible}
                >
                  <TeamSection />
                </SectionTransition>
              </section>
            </div>
            
            {/* Side Navigation */}
            <div className="relative z-30">
              <SideNavigationWithState 
                activeSection={activeSection} 
                onSectionChange={navigateToSection} 
              />
            </div>

            {/* Project Modal */}
            <ProjectModal 
              project={selectedProject} 
              onClose={closeProject} 
            />

            {/* Service Modal */}
            <ServiceModal 
              service={selectedService} 
              onClose={closeService} 
            />

            {/* Team Modal */}
            <TeamModal 
              member={selectedMember} 
              onClose={closeMember} 
            />

              <Toaster />
            </div>
                </ThemeContext.Provider>
              </TeamContext.Provider>
            </ServiceContext.Provider>
          </ProjectContext.Provider>
        </SearchContext.Provider>
      </AnimationContext.Provider>
    </GlobalEditModeProvider>
  );
}
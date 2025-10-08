import { useState, createContext, useContext } from "react";
import { NavBar } from "../NavBar";
import { SideNavigationWithState } from "../SideNavigationWithTheme";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { LogOut, Settings, Save, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { GlobalEditModeProvider } from "./ContentManager";
import { HomeSection } from "../HomeSection";
import { WorksSection } from "../WorksSection";
import { ServicesSection } from "../ServicesSection";
import { TeamSection } from "../TeamSection";

interface AdminLayoutProps {
  onLogout: () => void;
}

// Context for edit mode
const EditModeContext = createContext({
  isEditMode: true,
  toggleEditMode: () => {},
  hasUnsavedChanges: false,
  setHasUnsavedChanges: (value: boolean) => {}
});

export const useEditMode = () => useContext(EditModeContext);

export function AdminLayout({ onLogout }: AdminLayoutProps) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isEditMode, setIsEditMode] = useState(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const toggleEditMode = () => {
    if (hasUnsavedChanges && isEditMode) {
      if (window.confirm("Tienes cambios sin guardar. ¿Estás seguro de salir del modo edición?")) {
        setIsEditMode(!isEditMode);
        setHasUnsavedChanges(false);
      }
    } else {
      setIsEditMode(!isEditMode);
    }
  };

  const handleSaveAll = () => {
    // Aquí se guardarían todos los cambios pendientes
    toast.success("Todos los cambios han sido guardados");
    setHasUnsavedChanges(false);
  };

  const handleLogout = () => {
    if (hasUnsavedChanges) {
      if (window.confirm("Tienes cambios sin guardar. ¿Estás seguro de cerrar sesión?")) {
        onLogout();
      }
    } else {
      onLogout();
    }
  };

  const renderSection = () => {
    console.log('Rendering section:', activeSection); // Debug log
    switch (activeSection) {
      case 'inicio':
        return <HomeSection key="home" />;
      case 'trabajos':
        return <WorksSection key="works" />;
      case 'servicios':
        return <ServicesSection key="services" />;
      case 'partners':
        return <TeamSection key="team" />;
      default:
        return <HomeSection key="home-default" />;
    }
  };

  return (
    <EditModeContext.Provider value={{
      isEditMode,
      toggleEditMode,
      hasUnsavedChanges,
      setHasUnsavedChanges
    }}>
      <GlobalEditModeProvider
        isEditMode={isEditMode}
        onToggleEditMode={toggleEditMode}
        hasUnsavedChanges={hasUnsavedChanges}
        onSetHasUnsavedChanges={setHasUnsavedChanges}
      >
        <div className="min-h-screen theme-bg">
        {/* Admin Header Overlay */}
        <div className="fixed top-0 left-0 right-[80px] z-50 bg-[var(--portfolio-accent)]/95 backdrop-blur-sm border-b border-[var(--portfolio-accent)]/20">
          <div className="px-8 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Settings className="w-3 h-3 mr-1" />
                Modo Administrador
              </Badge>
              
              {hasUnsavedChanges && (
                <Badge variant="destructive" className="bg-orange-500/20 text-orange-200 border-orange-300/30">
                  Cambios sin guardar
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {hasUnsavedChanges && (
                <Button
                  size="sm"
                  onClick={handleSaveAll}
                  className="bg-green-600 hover:bg-green-700 text-white text-xs h-8"
                >
                  <Save className="w-3 h-3 mr-1" />
                  Guardar Todo
                </Button>
              )}
              
              <Button
                size="sm"
                variant="outline"
                onClick={toggleEditMode}
                className="border-white/30 text-white hover:bg-white/10 text-xs h-8"
              >
                {isEditMode ? (
                  <>
                    <EyeOff className="w-3 h-3 mr-1" />
                    Vista Previa
                  </>
                ) : (
                  <>
                    <Eye className="w-3 h-3 mr-1" />
                    Editar
                  </>
                )}
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={handleLogout}
                className="border-white/30 text-white hover:bg-red-500/20 hover:border-red-300/50 text-xs h-8"
              >
                <LogOut className="w-3 h-3 mr-1" />
                Salir
              </Button>
            </div>
          </div>
        </div>

        {/* Main NavBar with offset */}
        <div className="pt-[48px]">
          <NavBar />
        </div>
        
        {/* Main Content */}
        <div className="mr-[80px] pt-[72px]">
          {renderSection()}
        </div>
        
        {/* Side Navigation */}
        <SideNavigationWithState 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />

        {/* Edit Mode Indicator */}
        {isEditMode && (
          <div className="fixed bottom-4 left-4 z-40">
            <div className="bg-[var(--portfolio-accent)] text-white px-3 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Modo Edición Activo
            </div>
          </div>
        )}
        </div>
      </GlobalEditModeProvider>
    </EditModeContext.Provider>
  );
}
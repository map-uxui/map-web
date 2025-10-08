import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Plus, Users, Briefcase, Settings, ArrowLeft } from "lucide-react";
import { ProjectForm } from "./admin/ProjectForm";
import { ServiceForm } from "./admin/ServiceForm";
import { TeamForm } from "./admin/TeamForm";
import { ProjectList } from "./admin/ProjectList";
import { ServiceList } from "./admin/ServiceList";
import { TeamList } from "./admin/TeamList";
import { useTheme } from "../App";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showForm, setShowForm] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();

  const handleBackToSite = () => {
    window.history.pushState({}, '', '/');
    window.location.reload();
  };

  const renderFormContent = () => {
    switch (showForm) {
      case "project":
        return <ProjectForm onCancel={() => setShowForm(null)} />;
      case "service":
        return <ServiceForm onCancel={() => setShowForm(null)} />;
      case "team":
        return <TeamForm onCancel={() => setShowForm(null)} />;
      default:
        return null;
    }
  };

  if (showForm) {
    return (
      <div className="min-h-screen theme-bg p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => setShowForm(null)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
            <h1 className="theme-text text-2xl font-bold">
              {showForm === "project" && "Nuevo Proyecto"}
              {showForm === "service" && "Nuevo Servicio"}
              {showForm === "team" && "Nuevo Miembro"}
            </h1>
          </div>
          {renderFormContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-bg">
      {/* Header */}
      <div className="border-b theme-border">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="theme-text text-2xl font-bold">MAP Design Admin</h1>
              <Badge variant="secondary" className="theme-accent">
                Dashboard
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="flex items-center gap-2"
              >
                {isDark ? "🌙" : "☀️"}
                {isDark ? "Dark" : "Light"}
              </Button>
              <Button
                variant="outline"
                onClick={handleBackToSite}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al sitio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Vista General
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Proyectos
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Servicios
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Equipo
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="theme-card-bg border theme-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="theme-text text-sm font-medium">Total Proyectos</CardTitle>
                  <Briefcase className="h-4 w-4 theme-accent" />
                </CardHeader>
                <CardContent>
                  <div className="theme-text text-2xl font-bold">12</div>
                  <p className="theme-text-secondary text-xs">+2 este mes</p>
                </CardContent>
              </Card>

              <Card className="theme-card-bg border theme-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="theme-text text-sm font-medium">Servicios Activos</CardTitle>
                  <Settings className="h-4 w-4 theme-accent" />
                </CardHeader>
                <CardContent>
                  <div className="theme-text text-2xl font-bold">8</div>
                  <p className="theme-text-secondary text-xs">Todos disponibles</p>
                </CardContent>
              </Card>

              <Card className="theme-card-bg border theme-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="theme-text text-sm font-medium">Miembros del Equipo</CardTitle>
                  <Users className="h-4 w-4 theme-accent" />
                </CardHeader>
                <CardContent>
                  <div className="theme-text text-2xl font-bold">2</div>
                  <p className="theme-text-secondary text-xs">Map y JP</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="theme-card-bg border theme-border hover:border-[var(--portfolio-accent)]/30 transition-colors cursor-pointer" onClick={() => setShowForm("project")}>
                <CardHeader>
                  <CardTitle className="theme-text flex items-center gap-2">
                    <Plus className="w-5 h-5 theme-accent" />
                    Agregar Proyecto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="theme-text-secondary text-sm">Crear un nuevo proyecto en el portfolio</p>
                </CardContent>
              </Card>

              <Card className="theme-card-bg border theme-border hover:border-[var(--portfolio-accent)]/30 transition-colors cursor-pointer" onClick={() => setShowForm("service")}>
                <CardHeader>
                  <CardTitle className="theme-text flex items-center gap-2">
                    <Plus className="w-5 h-5 theme-accent" />
                    Agregar Servicio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="theme-text-secondary text-sm">Añadir un nuevo servicio ofrecido</p>
                </CardContent>
              </Card>

              <Card className="theme-card-bg border theme-border hover:border-[var(--portfolio-accent)]/30 transition-colors cursor-pointer" onClick={() => setShowForm("team")}>
                <CardHeader>
                  <CardTitle className="theme-text flex items-center gap-2">
                    <Plus className="w-5 h-5 theme-accent" />
                    Agregar Miembro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="theme-text-secondary text-sm">Incorporar nuevo miembro al equipo</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="theme-text text-xl font-semibold">Gestión de Proyectos</h2>
              <Button onClick={() => setShowForm("project")} className="theme-accent-bg hover:bg-[var(--portfolio-accent-hover)] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Proyecto
              </Button>
            </div>
            <ProjectList />
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="theme-text text-xl font-semibold">Gestión de Servicios</h2>
              <Button onClick={() => setShowForm("service")} className="theme-accent-bg hover:bg-[var(--portfolio-accent-hover)] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Servicio
              </Button>
            </div>
            <ServiceList />
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="theme-text text-xl font-semibold">Gestión del Equipo</h2>
              <Button onClick={() => setShowForm("team")} className="theme-accent-bg hover:bg-[var(--portfolio-accent-hover)] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Miembro
              </Button>
            </div>
            <TeamList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
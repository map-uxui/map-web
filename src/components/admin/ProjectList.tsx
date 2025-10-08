import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Edit, Trash2, Eye, ExternalLink } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ProjectList() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const loadProjects = () => {
      const adminProjects = JSON.parse(localStorage.getItem('adminProjects') || '[]');
      setProjects(adminProjects);
    };

    loadProjects();
    
    // Listen for storage changes
    window.addEventListener('storage', loadProjects);
    return () => window.removeEventListener('storage', loadProjects);
  }, []);

  const handleDelete = (projectId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      const updatedProjects = projects.filter(p => p.id !== projectId);
      localStorage.setItem('adminProjects', JSON.stringify(updatedProjects));
      setProjects(updatedProjects);
      toast.success('Proyecto eliminado exitosamente');
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'web-design': 'bg-blue-100 text-blue-800',
      'mobile-app': 'bg-green-100 text-green-800',
      'branding': 'bg-purple-100 text-purple-800',
      'ui-ux': 'bg-pink-100 text-pink-800',
      'e-commerce': 'bg-orange-100 text-orange-800',
      'landing-page': 'bg-cyan-100 text-cyan-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'web-design': 'Diseño Web',
      'mobile-app': 'App Móvil',
      'branding': 'Branding',
      'ui-ux': 'UI/UX',
      'e-commerce': 'E-commerce',
      'landing-page': 'Landing Page'
    };
    return labels[category] || category;
  };

  if (projects.length === 0) {
    return (
      <Card className="theme-card-bg border theme-border">
        <CardContent className="py-12 text-center">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="theme-text text-lg font-semibold mb-2">No hay proyectos</h3>
          <p className="theme-text-secondary">Crea tu primer proyecto para comenzar</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id} className="theme-card-bg border theme-border hover:border-[var(--portfolio-accent)]/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="theme-text text-lg font-semibold truncate">
                    {project.title}
                  </h3>
                  <Badge className={getCategoryColor(project.category)}>
                    {getCategoryLabel(project.category)}
                  </Badge>
                  {project.year && (
                    <Badge variant="outline" className="border theme-border theme-text">
                      {project.year}
                    </Badge>
                  )}
                </div>
                
                <p className="theme-text-secondary text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies?.slice(0, 3).map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies?.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} más
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs theme-text-secondary">
                  {project.client && (
                    <span>Cliente: {project.client}</span>
                  )}
                  {project.duration && (
                    <span>Duración: {project.duration}</span>
                  )}
                  {project.status && (
                    <span className="capitalize">Estado: {project.status}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {project.links?.live && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(project.links.live, '_blank')}
                    className="h-8 w-8"
                    title="Ver proyecto en vivo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  title="Ver detalles"
                >
                  <Eye className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  title="Editar proyecto"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(project.id)}
                  className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                  title="Eliminar proyecto"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {project.image && (
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
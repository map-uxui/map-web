import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Edit, Trash2, Eye } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ServiceList() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const loadServices = () => {
      const adminServices = JSON.parse(localStorage.getItem('adminServices') || '[]');
      setServices(adminServices);
    };

    loadServices();
    
    // Listen for storage changes
    window.addEventListener('storage', loadServices);
    return () => window.removeEventListener('storage', loadServices);
  }, []);

  const handleDelete = (serviceId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
      const updatedServices = services.filter(s => s.id !== serviceId);
      localStorage.setItem('adminServices', JSON.stringify(updatedServices));
      setServices(updatedServices);
      toast.success('Servicio eliminado exitosamente');
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'design': 'bg-purple-100 text-purple-800',
      'development': 'bg-blue-100 text-blue-800',
      'consulting': 'bg-green-100 text-green-800',
      'maintenance': 'bg-orange-100 text-orange-800',
      'marketing': 'bg-pink-100 text-pink-800',
      'branding': 'bg-cyan-100 text-cyan-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'design': 'Diseño',
      'development': 'Desarrollo',
      'consulting': 'Consultoría',
      'maintenance': 'Mantenimiento',
      'marketing': 'Marketing',
      'branding': 'Branding'
    };
    return labels[category] || category;
  };

  if (services.length === 0) {
    return (
      <Card className="theme-card-bg border theme-border">
        <CardContent className="py-12 text-center">
          <div className="text-4xl mb-4">🛠️</div>
          <h3 className="theme-text text-lg font-semibold mb-2">No hay servicios</h3>
          <p className="theme-text-secondary">Crea tu primer servicio para comenzar</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {services.map((service) => (
        <Card key={service.id} className="theme-card-bg border theme-border hover:border-[var(--portfolio-accent)]/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="theme-text text-lg font-semibold truncate">
                    {service.title}
                  </h3>
                  <Badge className={getCategoryColor(service.category)}>
                    {getCategoryLabel(service.category)}
                  </Badge>
                </div>
                
                <p className="theme-text-secondary text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 text-xs theme-text-secondary mb-3">
                  {service.duration && (
                    <span>Duración: {service.duration}</span>
                  )}
                  {service.price && (
                    <span>Precio: {service.price}</span>
                  )}
                  {service.icon && (
                    <span>Icono: {service.icon}</span>
                  )}
                </div>

                {service.features && service.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.features.slice(0, 3).map((feature: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{service.features.length - 3} más
                      </Badge>
                    )}
                  </div>
                )}

                {service.technologies && service.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 5).map((tech: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs border theme-border">
                        {tech}
                      </Badge>
                    ))}
                    {service.technologies.length > 5 && (
                      <Badge variant="outline" className="text-xs border theme-border">
                        +{service.technologies.length - 5}
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
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
                  title="Editar servicio"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(service.id)}
                  className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                  title="Eliminar servicio"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {service.image && (
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
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
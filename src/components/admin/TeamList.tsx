import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Edit, Trash2, Eye, Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function TeamList() {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const loadMembers = () => {
      const adminMembers = JSON.parse(localStorage.getItem('adminTeam') || '[]');
      setMembers(adminMembers);
    };

    loadMembers();
    
    // Listen for storage changes
    window.addEventListener('storage', loadMembers);
    return () => window.removeEventListener('storage', loadMembers);
  }, []);

  const handleDelete = (memberId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este miembro?')) {
      const updatedMembers = members.filter(m => m.id !== memberId);
      localStorage.setItem('adminTeam', JSON.stringify(updatedMembers));
      setMembers(updatedMembers);
      toast.success('Miembro eliminado exitosamente');
    }
  };

  const getDepartmentColor = (department: string) => {
    const colors: { [key: string]: string } = {
      'Diseño': 'bg-purple-100 text-purple-800',
      'Desarrollo': 'bg-blue-100 text-blue-800',
      'Ventas': 'bg-green-100 text-green-800',
      'Marketing': 'bg-pink-100 text-pink-800',
      'Administración': 'bg-orange-100 text-orange-800'
    };
    return colors[department] || 'bg-gray-100 text-gray-800';
  };

  const getAvailabilityColor = (availability: string) => {
    const colors: { [key: string]: string } = {
      'Tiempo completo': 'bg-green-100 text-green-800',
      'Medio tiempo': 'bg-yellow-100 text-yellow-800',
      'Por proyectos': 'bg-blue-100 text-blue-800',
      'Consultoría': 'bg-purple-100 text-purple-800'
    };
    return colors[availability] || 'bg-gray-100 text-gray-800';
  };

  if (members.length === 0) {
    return (
      <Card className="theme-card-bg border theme-border">
        <CardContent className="py-12 text-center">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="theme-text text-lg font-semibold mb-2">No hay miembros del equipo</h3>
          <p className="theme-text-secondary">Agrega el primer miembro para comenzar</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {members.map((member) => (
        <Card key={member.id} className="theme-card-bg border theme-border hover:border-[var(--portfolio-accent)]/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[var(--portfolio-accent)]/20"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0aafb8&color=fff&size=128`;
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[var(--portfolio-accent)]/10 flex items-center justify-center">
                    <span className="text-[var(--portfolio-accent)] font-semibold text-lg">
                      {member.name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2) || '??'}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="theme-text text-lg font-semibold truncate">
                    {member.name}
                  </h3>
                  <Badge className={getDepartmentColor(member.department)}>
                    {member.department}
                  </Badge>
                  {member.availability && (
                    <Badge className={getAvailabilityColor(member.availability)}>
                      {member.availability}
                    </Badge>
                  )}
                </div>
                
                <p className="theme-accent text-sm font-medium mb-2">
                  {member.role}
                </p>

                <p className="theme-text-secondary text-sm mb-3 line-clamp-2">
                  {member.description || member.bio}
                </p>

                <div className="flex items-center gap-4 text-xs theme-text-secondary mb-3">
                  {member.yearsOfExperience && (
                    <span>{member.yearsOfExperience} años de experiencia</span>
                  )}
                  {member.location && (
                    <span>📍 {member.location}</span>
                  )}
                </div>

                {/* Expertise */}
                {member.expertise && member.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.expertise.slice(0, 3).map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {member.expertise.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{member.expertise.length - 3} más
                      </Badge>
                    )}
                  </div>
                )}

                {/* Contact Links */}
                <div className="flex items-center gap-3">
                  {member.contact?.email && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() => window.open(`mailto:${member.contact.email}`, '_blank')}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  )}
                  {member.contact?.linkedin && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() => window.open(member.contact.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  )}
                  {member.contact?.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() => window.open(member.contact.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {member.contact?.portfolio && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() => window.open(member.contact.portfolio, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
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
                  title="Editar miembro"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(member.id)}
                  className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                  title="Eliminar miembro"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
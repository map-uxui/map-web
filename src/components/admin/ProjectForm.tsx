import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { X, Plus } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ProjectFormProps {
  onCancel: () => void;
  project?: any; // Para edición
}

export function ProjectForm({ onCancel, project }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    id: project?.id || "",
    title: project?.title || "",
    description: project?.description || "",
    longDescription: project?.longDescription || "",
    category: project?.category || "",
    year: project?.year || new Date().getFullYear().toString(),
    client: project?.client || "",
    duration: project?.duration || "",
    status: project?.status || "completed",
    image: project?.image || "",
    images: project?.images || [""],
    technologies: project?.technologies || [""],
    features: project?.features || [""],
    challenges: project?.challenges || [""],
    solutions: project?.solutions || [""],
    results: project?.results || [""],
    testimonial: project?.testimonial || {
      quote: "",
      author: "",
      position: "",
      company: ""
    },
    team: project?.team || [""],
    links: project?.links || {
      live: "",
      github: "",
      figma: "",
      behance: ""
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], ""]
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_: string, i: number) => i !== index)
    }));
  };

  const handleTestimonialChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      testimonial: {
        ...prev.testimonial,
        [field]: value
      }
    }));
  };

  const handleLinksChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      links: {
        ...prev.links,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!formData.title || !formData.description || !formData.category) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }

    // Clean empty strings from arrays
    const cleanData = {
      ...formData,
      id: formData.id || `project-${Date.now()}`,
      technologies: formData.technologies.filter(tech => tech.trim() !== ""),
      features: formData.features.filter(feature => feature.trim() !== ""),
      challenges: formData.challenges.filter(challenge => challenge.trim() !== ""),
      solutions: formData.solutions.filter(solution => solution.trim() !== ""),
      results: formData.results.filter(result => result.trim() !== ""),
      team: formData.team.filter(member => member.trim() !== ""),
      images: formData.images.filter(img => img.trim() !== "")
    };

    // Save to localStorage (in a real app, this would be an API call)
    const existingProjects = JSON.parse(localStorage.getItem('adminProjects') || '[]');
    if (project) {
      // Edit existing
      const updatedProjects = existingProjects.map((p: any) => 
        p.id === project.id ? cleanData : p
      );
      localStorage.setItem('adminProjects', JSON.stringify(updatedProjects));
      toast.success("Proyecto actualizado exitosamente");
    } else {
      // Add new
      existingProjects.push(cleanData);
      localStorage.setItem('adminProjects', JSON.stringify(existingProjects));
      toast.success("Proyecto creado exitosamente");
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Información Básica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="theme-text">Título *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Nombre del proyecto"
                className="theme-card-bg border theme-border theme-text"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="theme-text">Categoría *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="theme-card-bg border theme-border theme-text">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-design">Diseño Web</SelectItem>
                  <SelectItem value="mobile-app">App Móvil</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="ui-ux">UI/UX</SelectItem>
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="landing-page">Landing Page</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year" className="theme-text">Año</Label>
              <Input
                id="year"
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                placeholder="2024"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client" className="theme-text">Cliente</Label>
              <Input
                id="client"
                value={formData.client}
                onChange={(e) => handleInputChange('client', e.target.value)}
                placeholder="Nombre del cliente"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration" className="theme-text">Duración</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                placeholder="2 meses"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="theme-text">Descripción Corta *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descripción breve del proyecto"
              className="theme-card-bg border theme-border theme-text"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="longDescription" className="theme-text">Descripción Larga</Label>
            <Textarea
              id="longDescription"
              value={formData.longDescription}
              onChange={(e) => handleInputChange('longDescription', e.target.value)}
              placeholder="Descripción detallada del proyecto"
              className="theme-card-bg border theme-border theme-text"
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="theme-text">Imagen Principal</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              placeholder="URL de la imagen principal"
              className="theme-card-bg border theme-border theme-text"
            />
          </div>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Tecnologías</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.technologies.map((tech, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={tech}
                onChange={(e) => handleArrayChange('technologies', index, e.target.value)}
                placeholder="Tecnología utilizada"
                className="theme-card-bg border theme-border theme-text"
              />
              {formData.technologies.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeArrayItem('technologies', index)}
                  className="border theme-border"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => addArrayItem('technologies')}
            className="flex items-center gap-2 border theme-border"
          >
            <Plus className="w-4 h-4" />
            Agregar Tecnología
          </Button>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Características</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={feature}
                onChange={(e) => handleArrayChange('features', index, e.target.value)}
                placeholder="Característica del proyecto"
                className="theme-card-bg border theme-border theme-text"
              />
              {formData.features.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeArrayItem('features', index)}
                  className="border theme-border"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => addArrayItem('features')}
            className="flex items-center gap-2 border theme-border"
          >
            <Plus className="w-4 h-4" />
            Agregar Característica
          </Button>
        </CardContent>
      </Card>

      {/* Submit buttons */}
      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={onCancel} className="border theme-border">
          Cancelar
        </Button>
        <Button type="submit" className="theme-accent-bg hover:bg-[var(--portfolio-accent-hover)] text-white">
          {project ? 'Actualizar' : 'Crear'} Proyecto
        </Button>
      </div>
    </form>
  );
}
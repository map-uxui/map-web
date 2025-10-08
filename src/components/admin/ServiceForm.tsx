import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { X, Plus } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ServiceFormProps {
  onCancel: () => void;
  service?: any; // Para edición
}

export function ServiceForm({ onCancel, service }: ServiceFormProps) {
  const [formData, setFormData] = useState({
    id: service?.id || "",
    title: service?.title || "",
    description: service?.description || "",
    longDescription: service?.longDescription || "",
    icon: service?.icon || "",
    image: service?.image || "",
    category: service?.category || "",
    duration: service?.duration || "",
    price: service?.price || "",
    features: service?.features || [""],
    process: service?.process || [""],
    deliverables: service?.deliverables || [""],
    technologies: service?.technologies || [""],
    examples: service?.examples || [""],
    benefits: service?.benefits || [""]
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
      id: formData.id || `service-${Date.now()}`,
      features: formData.features.filter(feature => feature.trim() !== ""),
      process: formData.process.filter(step => step.trim() !== ""),
      deliverables: formData.deliverables.filter(item => item.trim() !== ""),
      technologies: formData.technologies.filter(tech => tech.trim() !== ""),
      examples: formData.examples.filter(example => example.trim() !== ""),
      benefits: formData.benefits.filter(benefit => benefit.trim() !== "")
    };

    // Save to localStorage (in a real app, this would be an API call)
    const existingServices = JSON.parse(localStorage.getItem('adminServices') || '[]');
    if (service) {
      // Edit existing
      const updatedServices = existingServices.map((s: any) => 
        s.id === service.id ? cleanData : s
      );
      localStorage.setItem('adminServices', JSON.stringify(updatedServices));
      toast.success("Servicio actualizado exitosamente");
    } else {
      // Add new
      existingServices.push(cleanData);
      localStorage.setItem('adminServices', JSON.stringify(existingServices));
      toast.success("Servicio creado exitosamente");
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
                placeholder="Nombre del servicio"
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
                  <SelectItem value="design">Diseño</SelectItem>
                  <SelectItem value="development">Desarrollo</SelectItem>
                  <SelectItem value="consulting">Consultoría</SelectItem>
                  <SelectItem value="maintenance">Mantenimiento</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="theme-text">Duración</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleInputChange('duration', e.target.value)}
                placeholder="2-4 semanas"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="theme-text">Precio</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                placeholder="Desde $1,000"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="icon" className="theme-text">Icono</Label>
              <Input
                id="icon"
                value={formData.icon}
                onChange={(e) => handleInputChange('icon', e.target.value)}
                placeholder="Nombre del icono Lucide"
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
              placeholder="Descripción breve del servicio"
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
              placeholder="Descripción detallada del servicio"
              className="theme-card-bg border theme-border theme-text"
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="theme-text">Imagen</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              placeholder="URL de la imagen del servicio"
              className="theme-card-bg border theme-border theme-text"
            />
          </div>
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
                placeholder="Característica del servicio"
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

      {/* Process */}
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Proceso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.process.map((step, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={step}
                onChange={(e) => handleArrayChange('process', index, e.target.value)}
                placeholder={`Paso ${index + 1} del proceso`}
                className="theme-card-bg border theme-border theme-text"
              />
              {formData.process.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeArrayItem('process', index)}
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
            onClick={() => addArrayItem('process')}
            className="flex items-center gap-2 border theme-border"
          >
            <Plus className="w-4 h-4" />
            Agregar Paso
          </Button>
        </CardContent>
      </Card>

      {/* Deliverables */}
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Entregables</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.deliverables.map((deliverable, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={deliverable}
                onChange={(e) => handleArrayChange('deliverables', index, e.target.value)}
                placeholder="Entregable del servicio"
                className="theme-card-bg border theme-border theme-text"
              />
              {formData.deliverables.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeArrayItem('deliverables', index)}
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
            onClick={() => addArrayItem('deliverables')}
            className="flex items-center gap-2 border theme-border"
          >
            <Plus className="w-4 h-4" />
            Agregar Entregable
          </Button>
        </CardContent>
      </Card>

      {/* Submit buttons */}
      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={onCancel} className="border theme-border">
          Cancelar
        </Button>
        <Button type="submit" className="theme-accent-bg hover:bg-[var(--portfolio-accent-hover)] text-white">
          {service ? 'Actualizar' : 'Crear'} Servicio
        </Button>
      </div>
    </form>
  );
}
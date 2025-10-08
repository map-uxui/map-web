import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { X, Plus } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface TeamFormProps {
  onCancel: () => void;
  member?: any; // Para edición
}

export function TeamForm({ onCancel, member }: TeamFormProps) {
  const [formData, setFormData] = useState({
    id: member?.id || "",
    name: member?.name || "",
    role: member?.role || "",
    department: member?.department || "",
    description: member?.description || "",
    image: member?.image || "",
    bio: member?.bio || "",
    expertise: member?.expertise || [""],
    yearsOfExperience: member?.yearsOfExperience || 0,
    location: member?.location || "",
    availability: member?.availability || "",
    experience: member?.experience || [{
      company: "",
      position: "",
      duration: "",
      description: "",
      achievements: [""]
    }],
    education: member?.education || [{
      institution: "",
      degree: "",
      year: "",
      honors: ""
    }],
    achievements: member?.achievements || [""],
    skills: member?.skills || [{
      category: "",
      items: [""]
    }],
    languages: member?.languages || [{
      name: "",
      level: ""
    }],
    certifications: member?.certifications || [""],
    contact: member?.contact || {
      email: "",
      linkedin: "",
      portfolio: "",
      github: ""
    }
  });

  const handleInputChange = (field: string, value: string | number) => {
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

  const handleContactChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp: any, i: number) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu: any, i: number) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleSkillCategoryChange = (index: number, category: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill: any, i: number) => 
        i === index ? { ...skill, category } : skill
      )
    }));
  };

  const handleSkillItemChange = (skillIndex: number, itemIndex: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill: any, i: number) => 
        i === skillIndex ? {
          ...skill,
          items: skill.items.map((item: string, j: number) => j === itemIndex ? value : item)
        } : skill
      )
    }));
  };

  const addSkillItem = (skillIndex: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill: any, i: number) => 
        i === skillIndex ? { ...skill, items: [...skill.items, ""] } : skill
      )
    }));
  };

  const removeSkillItem = (skillIndex: number, itemIndex: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.map((skill: any, i: number) => 
        i === skillIndex ? {
          ...skill,
          items: skill.items.filter((_: string, j: number) => j !== itemIndex)
        } : skill
      )
    }));
  };

  const addSkillCategory = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, { category: "", items: [""] }]
    }));
  };

  const removeSkillCategory = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_: any, i: number) => i !== index)
    }));
  };

  const handleLanguageChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.map((lang: any, i: number) => 
        i === index ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const addLanguage = () => {
    setFormData(prev => ({
      ...prev,
      languages: [...prev.languages, { name: "", level: "" }]
    }));
  };

  const removeLanguage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!formData.name || !formData.role || !formData.department) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }

    // Clean data
    const cleanData = {
      ...formData,
      id: formData.id || `member-${Date.now()}`,
      expertise: formData.expertise.filter(item => item.trim() !== ""),
      achievements: formData.achievements.filter(item => item.trim() !== ""),
      certifications: formData.certifications.filter(item => item.trim() !== ""),
      skills: formData.skills.filter((skill: any) => 
        skill.category.trim() !== "" && skill.items.some((item: string) => item.trim() !== "")
      ).map((skill: any) => ({
        ...skill,
        items: skill.items.filter((item: string) => item.trim() !== "")
      })),
      languages: formData.languages.filter((lang: any) => 
        lang.name.trim() !== "" && lang.level.trim() !== ""
      )
    };

    // Save to localStorage
    const existingMembers = JSON.parse(localStorage.getItem('adminTeam') || '[]');
    if (member) {
      // Edit existing
      const updatedMembers = existingMembers.map((m: any) => 
        m.id === member.id ? cleanData : m
      );
      localStorage.setItem('adminTeam', JSON.stringify(updatedMembers));
      toast.success("Miembro actualizado exitosamente");
    } else {
      // Add new
      existingMembers.push(cleanData);
      localStorage.setItem('adminTeam', JSON.stringify(existingMembers));
      toast.success("Miembro creado exitosamente");
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Información Personal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="theme-text">Nombre *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Nombre completo"
                className="theme-card-bg border theme-border theme-text"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="theme-text">Rol *</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                placeholder="Posición en la empresa"
                className="theme-card-bg border theme-border theme-text"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department" className="theme-text">Departamento *</Label>
              <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                <SelectTrigger className="theme-card-bg border theme-border theme-text">
                  <SelectValue placeholder="Selecciona departamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Diseño">Diseño</SelectItem>
                  <SelectItem value="Desarrollo">Desarrollo</SelectItem>
                  <SelectItem value="Ventas">Ventas</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Administración">Administración</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience" className="theme-text">Años de Experiencia</Label>
              <Input
                id="yearsOfExperience"
                type="number"
                value={formData.yearsOfExperience}
                onChange={(e) => handleInputChange('yearsOfExperience', parseInt(e.target.value) || 0)}
                placeholder="5"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location" className="theme-text">Ubicación</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Buenos Aires, Argentina"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="availability" className="theme-text">Disponibilidad</Label>
              <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                <SelectTrigger className="theme-card-bg border theme-border theme-text">
                  <SelectValue placeholder="Selecciona disponibilidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tiempo completo">Tiempo completo</SelectItem>
                  <SelectItem value="Medio tiempo">Medio tiempo</SelectItem>
                  <SelectItem value="Por proyectos">Por proyectos</SelectItem>
                  <SelectItem value="Consultoría">Consultoría</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="theme-text">Descripción Corta</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descripción breve del rol"
              className="theme-card-bg border theme-border theme-text"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="theme-text">Biografía</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              placeholder="Biografía detallada"
              className="theme-card-bg border theme-border theme-text"
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="theme-text">Foto de Perfil</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              placeholder="URL de la foto de perfil"
              className="theme-card-bg border theme-border theme-text"
            />
          </div>
        </CardContent>
      </Card>

      {/* Expertise */}
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Áreas de Expertise</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.expertise.map((item, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={item}
                onChange={(e) => handleArrayChange('expertise', index, e.target.value)}
                placeholder="Área de expertise"
                className="theme-card-bg border theme-border theme-text"
              />
              {formData.expertise.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeArrayItem('expertise', index)}
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
            onClick={() => addArrayItem('expertise')}
            className="flex items-center gap-2 border theme-border"
          >
            <Plus className="w-4 h-4" />
            Agregar Expertise
          </Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="theme-text">Email</Label>
              <Input
                id="email"
                value={formData.contact.email}
                onChange={(e) => handleContactChange('email', e.target.value)}
                placeholder="email@mapdesign.co"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="theme-text">LinkedIn</Label>
              <Input
                id="linkedin"
                value={formData.contact.linkedin}
                onChange={(e) => handleContactChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/usuario"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="portfolio" className="theme-text">Portfolio</Label>
              <Input
                id="portfolio"
                value={formData.contact.portfolio}
                onChange={(e) => handleContactChange('portfolio', e.target.value)}
                placeholder="https://portfolio.com"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github" className="theme-text">GitHub</Label>
              <Input
                id="github"
                value={formData.contact.github}
                onChange={(e) => handleContactChange('github', e.target.value)}
                placeholder="https://github.com/usuario"
                className="theme-card-bg border theme-border theme-text"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="theme-card-bg border theme-border">
        <CardHeader>
          <CardTitle className="theme-text">Idiomas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.languages.map((language, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={language.name}
                onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                placeholder="Idioma"
                className="theme-card-bg border theme-border theme-text"
              />
              <Select value={language.level} onValueChange={(value) => handleLanguageChange(index, 'level', value)}>
                <SelectTrigger className="theme-card-bg border theme-border theme-text w-40">
                  <SelectValue placeholder="Nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nativo">Nativo</SelectItem>
                  <SelectItem value="Fluido (C2)">Fluido (C2)</SelectItem>
                  <SelectItem value="Avanzado (C1)">Avanzado (C1)</SelectItem>
                  <SelectItem value="Intermedio (B2)">Intermedio (B2)</SelectItem>
                  <SelectItem value="Básico (A2)">Básico (A2)</SelectItem>
                  <SelectItem value="Principiante (A1)">Principiante (A1)</SelectItem>
                </SelectContent>
              </Select>
              {formData.languages.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeLanguage(index)}
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
            onClick={addLanguage}
            className="flex items-center gap-2 border theme-border"
          >
            <Plus className="w-4 h-4" />
            Agregar Idioma
          </Button>
        </CardContent>
      </Card>

      {/* Submit buttons */}
      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={onCancel} className="border theme-border">
          Cancelar
        </Button>
        <Button type="submit" className="theme-accent-bg hover:bg-[var(--portfolio-accent-hover)] text-white">
          {member ? 'Actualizar' : 'Crear'} Miembro
        </Button>
      </div>
    </form>
  );
}
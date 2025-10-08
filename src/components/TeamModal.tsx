import { X, MapPin, Clock, Mail, Linkedin, Github, ExternalLink, Award, BookOpen, Briefcase, Languages, Star, User } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { TeamMember } from "../data/team";

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null;

  const handleContactEmail = () => {
    window.open(`mailto:${member.contact.email}`, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(member.contact.linkedin, '_blank');
  };

  const handlePortfolio = () => {
    if (member.contact.portfolio) {
      window.open(member.contact.portfolio, '_blank');
    }
  };

  const handleGitHub = () => {
    if (member.contact.github) {
      window.open(member.contact.github, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="theme-bg rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Fixed Header */}
        <div className="sticky top-0 theme-bg border-b theme-border p-6 flex items-center justify-between w-full z-20">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-theme-accent">
                <ImageWithFallback 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 theme-accent-bg rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl theme-accent font-['Georama:Regular',_sans-serif]" style={{ fontVariationSettings: "'wdth' 128" }}>
                {member.name}
              </h2>
              <div className="flex items-center gap-4 mt-1">
                <span className="inline-block theme-card-bg px-3 py-1 rounded-full text-[12px] theme-text font-['Inter:Semi_Bold',_sans-serif]">
                  {member.role}
                </span>
                <span className="theme-text-secondary text-sm flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {member.location}
                </span>
                <span className="theme-text-secondary text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {member.yearsOfExperience} años exp.
                </span>
              </div>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="theme-text hover:theme-card-bg h-10 w-10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6 space-y-8">
            
            {/* Bio Section */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif] flex items-center gap-2">
                <User className="w-5 h-5" />
                Biografía
              </h3>
              <p className="theme-text leading-relaxed text-justify">{member.bio}</p>
            </section>

            {/* Expertise */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif] flex items-center gap-2">
                <Star className="w-5 h-5" />
                Áreas de Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-block theme-card-bg border theme-border px-3 py-1 rounded-full text-sm theme-accent font-['Inter:Semi_Bold',_sans-serif]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-xl theme-accent mb-6 font-['Inter:Semi_Bold',_sans-serif] flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Experiencia Profesional
              </h3>
              <div className="space-y-6">
                {member.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-theme-accent pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 theme-accent-bg rounded-full"></div>
                    <div className="theme-card-bg rounded-lg p-4 border theme-border">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="theme-text font-['Inter:Semi_Bold',_sans-serif] text-lg">
                          {exp.position}
                        </h4>
                        <span className="theme-accent text-sm font-['Inter:Semi_Bold',_sans-serif]">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="theme-accent font-['Inter:Semi_Bold',_sans-serif] mb-2">
                        {exp.company}
                      </p>
                      <p className="theme-text mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="space-y-1">
                        <p className="theme-text font-['Inter:Semi_Bold',_sans-serif] text-sm mb-2">
                          Logros destacados:
                        </p>
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 theme-accent-bg rounded-full mt-2 flex-shrink-0"></div>
                            <span className="theme-text-secondary text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif] flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Educación
              </h3>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <div key={index} className="theme-card-bg rounded-lg p-4 border theme-border">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h4 className="theme-text font-['Inter:Semi_Bold',_sans-serif]">
                          {edu.degree}
                        </h4>
                        <p className="theme-accent text-sm">
                          {edu.institution}
                        </p>
                        {edu.honors && (
                          <p className="theme-text-secondary text-sm mt-1">
                            🏆 {edu.honors}
                          </p>
                        )}
                      </div>
                      <span className="theme-text-secondary text-sm mt-2 md:mt-0">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
                Habilidades Técnicas
              </h3>
              <div className="space-y-4">
                {member.skills.map((skillGroup, index) => (
                  <div key={index} className="theme-card-bg rounded-lg p-4 border theme-border">
                    <h4 className="theme-text font-['Inter:Semi_Bold',_sans-serif] mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="inline-block theme-card-bg px-2 py-1 rounded text-sm theme-text border theme-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif] flex items-center gap-2">
                <Languages className="w-5 h-5" />
                Idiomas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {member.languages.map((lang, index) => (
                  <div key={index} className="theme-card-bg rounded-lg p-3 border theme-border text-center">
                    <p className="theme-text font-['Inter:Semi_Bold',_sans-serif]">
                      {lang.name}
                    </p>
                    <p className="theme-accent text-sm">
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif] flex items-center gap-2">
                <Award className="w-5 h-5" />
                Reconocimientos y Logros
              </h3>
              <div className="space-y-2">
                {member.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 theme-accent mt-0.5 flex-shrink-0" />
                    <span className="theme-text">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
                Certificaciones
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.certifications.map((cert, index) => (
                  <div key={index} className="theme-card-bg rounded-lg p-3 border theme-border flex items-center gap-2">
                    <div className="w-2 h-2 theme-accent-bg rounded-full"></div>
                    <span className="theme-text text-sm">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h3 className="text-xl theme-accent mb-4 font-['Inter:Semi_Bold',_sans-serif]">
                Contacto
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleContactEmail}
                  className="theme-accent-bg hover:theme-accent-bg text-white transition-all duration-300 group flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Email
                </Button>
                
                <Button
                  onClick={handleLinkedIn}
                  variant="outline"
                  className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300 group flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  LinkedIn
                </Button>
                
                {member.contact.portfolio && (
                  <Button
                    onClick={handlePortfolio}
                    variant="outline"
                    className="border-theme-accent theme-accent hover:theme-accent-bg hover:text-white transition-all duration-300 group flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Portfolio
                  </Button>
                )}
                
                {member.contact.github && (
                  <Button
                    onClick={handleGitHub}
                    variant="outline"
                    className="theme-border theme-text hover:bg-white hover:text-black transition-all duration-300 group flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    GitHub
                  </Button>
                )}
              </div>

              <div className="mt-4 p-4 theme-card-bg rounded-lg border theme-border">
                <p className="theme-text-secondary text-sm">
                  <strong>Estado:</strong> {member.availability} | <strong>Departamento:</strong> {member.department}
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

export { TeamMember };
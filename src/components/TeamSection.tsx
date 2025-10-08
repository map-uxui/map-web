import { ImageWithFallback } from "./figma/ImageWithFallback";
import { teamMembers } from "../data/team";
import { useTeam } from "../App";
import { Editable } from "./admin/ContentManager";

function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  const { openMember } = useTeam();
  return (
    <div 
      onClick={() => openMember(member)}
      className="group cursor-pointer theme-card-bg rounded-2xl p-8 border theme-border hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-[var(--portfolio-accent)]/30 w-full max-w-sm mx-auto"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Circular Profile Photo */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[var(--portfolio-accent)]/20 group-hover:border-[var(--portfolio-accent)]/40 transition-all duration-300">
            <ImageWithFallback
              src={member.image}
              alt={`Foto de ${member.name}`}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          {/* Status indicator dot (optional) */}
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>

        {/* Name and Role */}
        <div className="space-y-2">
          <h3 className="font-['Inter:Bold',_sans-serif] theme-text text-xl group-hover:text-[var(--portfolio-accent)] transition-colors duration-300">
            {member.name}
          </h3>
          
          <div className="inline-block bg-[var(--portfolio-accent)]/10 px-4 py-1.5 rounded-full">
            <p className="font-['Inter:Semi_Bold',_sans-serif] text-[var(--portfolio-accent)] text-sm">
              {member.role}
            </p>
          </div>
        </div>
        
        {/* Description */}
        <div className="space-y-3">
          <p className="font-['Inter:Regular',_sans-serif] theme-text-secondary text-sm leading-relaxed max-w-xs">
            {member.description}
          </p>
          
          {/* View Profile Button */}
          <button className="inline-flex items-center gap-2 font-['Inter:Semi_Bold',_sans-serif] text-[var(--portfolio-accent)] text-sm hover:text-[var(--portfolio-accent-hover)] transition-colors duration-300 group/button">
            Ver perfil
            <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-[var(--portfolio-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </div>
  );
}

export function TeamSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex flex-col font-normal gap-6 theme-accent">
              <div
                className="font-space-grotesk"
                style={{ fontVariationSettings: "'wdth' 95, 'wght' 600" }}
              >
                <Editable 
                  id="team_title"
                  defaultContent="Partners"
                  section="partners"
                  className="text-5xl md:text-6xl leading-tight"
                >
                  {(content) => <h1 className="text-5xl md:text-6xl leading-tight">{content}</h1>}
                </Editable>
              </div>
              <Editable 
                id="team_description"
                defaultContent="Conoce a nuestros partners estratégicos que hacen posible transformar tus ideas en soluciones digitales exitosas."
                type="textarea"
                section="partners"
                multiline
                className="font-['Inter:Regular',_sans-serif] text-xl theme-text max-w-3xl mx-auto"
              />
            </div>
          </div>

          {/* Team Grid */}
          <div className="w-full max-w-4xl mx-auto">

          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">

          </div>

          {/* Partners Section */}
          <div className="text-center mt-20">
            <div className="flex flex-col gap-8">

              {/* Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* Estudio Podio */}
                <div className="group cursor-pointer theme-card-bg rounded-2xl overflow-hidden p-6 border theme-border hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--portfolio-accent)]/20 to-[var(--portfolio-accent)]/40 flex items-center justify-center">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMGxvZ28lMjBkZXNpZ24lMjBhZ2VuY3l8ZW58MXx8fHwxNzU5NjExODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Estudio Podio Logo"
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                    <h3 className="font-['Inter:Bold',_sans-serif] theme-text text-lg group-hover:text-[var(--portfolio-accent)] transition-colors duration-300">
                      Estudio Podio
                    </h3>
                  </div>
                </div>

                {/* Crecima */}
                <div className="group cursor-pointer theme-card-bg rounded-2xl overflow-hidden p-6 border theme-border hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--portfolio-accent)]/20 to-[var(--portfolio-accent)]/40 flex items-center justify-center">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYXJrZXRpbmclMjBhZ2VuY3klMjBsb2dvJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU5NjExODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Crecima Logo"
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                    <h3 className="font-['Inter:Bold',_sans-serif] theme-text text-lg group-hover:text-[var(--portfolio-accent)] transition-colors duration-300">
                      Crecima
                    </h3>
                  </div>
                </div>

                {/* JC Desarrollo */}
                <div className="group cursor-pointer theme-card-bg rounded-2xl overflow-hidden p-6 border theme-border hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--portfolio-accent)]/20 to-[var(--portfolio-accent)]/40 flex items-center justify-center">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758626104169-6835c0bd03e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudCUyMGNvbXBhbnklMjBsb2dvJTIwdGVjaCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTYxMTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="JC Desarrollo Logo"
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                    <h3 className="font-['Inter:Bold',_sans-serif] theme-text text-lg group-hover:text-[var(--portfolio-accent)] transition-colors duration-300">
                      JC Desarrollo
                    </h3>
                  </div>
                </div>

                {/* Dupa Publicidad/Marketing */}
                <div className="group cursor-pointer theme-card-bg rounded-2xl overflow-hidden p-6 border theme-border hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--portfolio-accent)]/20 to-[var(--portfolio-accent)]/40 flex items-center justify-center">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1554774853-d50f9c681ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMG1hcmtldGluZyUyMGFnZW5jeSUyMGxvZ28lMjBicmFuZGluZ3xlbnwxfHx8fDE3NTk2MTI2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Dupa Publicidad/Marketing Logo"
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                      />
                    </div>
                    <h3 className="font-['Inter:Bold',_sans-serif] theme-text text-lg group-hover:text-[var(--portfolio-accent)] transition-colors duration-300">
                      Dupa Publicidad/Marketing
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--portfolio-bg)] via-[var(--portfolio-bg)] to-[var(--portfolio-card-bg)] opacity-50" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[var(--portfolio-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[var(--portfolio-accent)]/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
    </div>
  );
}
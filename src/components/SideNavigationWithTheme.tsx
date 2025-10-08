import svgPaths from "../imports/svg-w7t3jdjrmc";
import { useAnimation, useSearch, useTheme } from "../App";
import { SocialLinkEditor } from "./admin/ContentManager";
import IconIoniconsLogosLogoBehance from "../imports/IconIoniconsLogosLogoBehance";
import { MaterialIcon } from "./MaterialIcon";

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

function Svg({ isActive }: { isActive: boolean }) {
  return (
    <MaterialIcon
      icon="home"
      size={24}
      className={`transition-colors duration-200 ${
        isActive ? 'text-[var(--portfolio-nav-bg)]' : 'text-[var(--portfolio-text-secondary)]'
      }`} 
    />
  );
}

function Link({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative h-[64px] w-full cursor-pointer transition-all duration-200 flex flex-col items-center justify-center" 
      data-name="Link"
      onClick={onClick}
    >
      <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-[var(--portfolio-accent)]' : 'hover:bg-[var(--portfolio-border)]'}`}>
        <Svg isActive={isActive} />
      </div>
      <div className={`flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic text-[14px] text-center mt-1 w-full ${isActive ? 'text-[var(--portfolio-text)]' : 'text-[var(--portfolio-text-secondary)]'}`}>
        <p className="leading-[14px]">Inicio</p>
      </div>
    </div>
  );
}

function Svg1({ isActive }: { isActive: boolean }) {
  return (
    <MaterialIcon
      icon="work"
      size={24}
      className={`transition-colors duration-200 ${
        isActive ? 'text-[var(--portfolio-nav-bg)]' : 'text-[var(--portfolio-text-secondary)]'
      }`} 
    />
  );
}

function Link1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative h-[64px] w-full cursor-pointer transition-all duration-200 flex flex-col items-center justify-center" 
      data-name="Link"
      onClick={onClick}
    >
      <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-[var(--portfolio-accent)]' : 'hover:bg-[var(--portfolio-border)]'}`}>
        <Svg1 isActive={isActive} />
      </div>
      <div className={`flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic text-[14px] text-center mt-1 w-full ${isActive ? 'text-[var(--portfolio-text)]' : 'text-[var(--portfolio-text-secondary)]'}`}>
        <p className="leading-[14px]">Trabajos</p>
      </div>
    </div>
  );
}

function Svg2({ isActive }: { isActive: boolean }) {
  return (
    <MaterialIcon
      icon="settings"
      size={24}
      className={`transition-colors duration-200 ${
        isActive ? 'text-[var(--portfolio-nav-bg)]' : 'text-[var(--portfolio-text-secondary)]'
      }`} 
    />
  );
}

function Link2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative h-[64px] w-full cursor-pointer transition-all duration-200 flex flex-col items-center justify-center" 
      data-name="Link"
      onClick={onClick}
    >
      <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-[var(--portfolio-accent)]' : 'hover:bg-[var(--portfolio-border)]'}`}>
        <Svg2 isActive={isActive} />
      </div>
      <div className={`flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic text-[14px] text-center mt-1 w-full ${isActive ? 'text-[var(--portfolio-text)]' : 'text-[var(--portfolio-text-secondary)]'}`}>
        <p className="leading-[14px]">Servicios</p>
      </div>
    </div>
  );
}

function Svg4({ isActive }: { isActive: boolean }) {
  return (
    <MaterialIcon
      icon="handshake"
      size={24}
      className={`transition-colors duration-200 ${
        isActive ? 'text-[var(--portfolio-nav-bg)]' : 'text-[var(--portfolio-text-secondary)]'
      }`} 
    />
  );
}

function Link4({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative h-[64px] w-full cursor-pointer transition-all duration-200 flex flex-col items-center justify-center" 
      data-name="Link"
      onClick={onClick}
    >
      <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-[var(--portfolio-accent)]' : 'hover:bg-[var(--portfolio-border)]'}`}>
        <Svg4 isActive={isActive} />
      </div>
      <div className={`flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic text-[14px] text-center mt-1 w-full ${isActive ? 'text-[var(--portfolio-text)]' : 'text-[var(--portfolio-text-secondary)]'}`}>
        <p className="leading-[14px]">Partners</p>
      </div>
    </div>
  );
}

function SearchButton() {
  const { isSearchOpen, toggleSearch } = useSearch();
  
  return (
    <div 
      className={`relative h-[64px] w-full cursor-pointer transition-all duration-300 ease-out flex flex-col items-center justify-center group ${
        isSearchOpen 
          ? 'bg-[var(--portfolio-accent)]/15 transform -translate-x-1 shadow-lg' 
          : 'hover:bg-[var(--portfolio-accent)]/5 hover:transform hover:scale-105'
      }`}
      onClick={toggleSearch}
    >
      {isSearchOpen ? (
        <MaterialIcon icon="close" size={20} className={`transition-all duration-300 ease-out transform text-[var(--portfolio-accent)] scale-110 rotate-90`} />
      ) : (
        <MaterialIcon icon="search" size={20} className={`transition-all duration-300 ease-out transform text-[var(--portfolio-text-secondary)] group-hover:text-[var(--portfolio-accent)] group-hover:scale-110`} />
      )}
      <div className={`flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic text-[14px] text-center mt-1 w-full transition-all duration-300 ease-out ${
        isSearchOpen 
          ? 'text-[var(--portfolio-accent)] transform scale-105' 
          : 'text-[var(--portfolio-text-secondary)] group-hover:text-[var(--portfolio-accent)]'
      }`}>
        <p className="leading-[14px] transition-all duration-300">{isSearchOpen ? 'Cerrar' : 'Buscar'}</p>
      </div>
      {isSearchOpen && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-[var(--portfolio-accent)] rounded-r-full animate-pulse shadow-md transition-all duration-300"></div>
      )}
      {/* Subtle glow effect when active */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-[var(--portfolio-accent)]/10 rounded-lg blur-sm opacity-75 transition-all duration-300"></div>
      )}
      {/* Hover ripple effect */}
      <div className="absolute inset-0 bg-[var(--portfolio-accent)]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
    </div>
  );
}

function SocialLinks() {
  const socialMedia = [
    {
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      platform: "Instagram",
      defaultUrl: "https://www.instagram.com/map.uxui/"
    },
    {
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      platform: "LinkedIn",
      defaultUrl: "https://www.linkedin.com/in/map-exp/"
    },
    {
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.938 4.503c.702 0 1.34-.06 1.92-.188.577-.13 1.07-.33 1.485-.61.41-.28.733-.65.96-1.12.225-.47.34-.99.34-1.56 0-.75-.22-1.35-.66-1.79-.44-.44-1.05-.66-1.83-.66-.58 0-1.14.06-1.67.18-.53.12-1.01.32-1.44.58-.43.26-.77.6-1.01 1-.24.4-.36.87-.36 1.4 0 .75.22 1.35.66 1.79.44.44 1.05.66 1.6.66zm.14 2.26c-.68 0-1.36-.04-2.04-.12-.68-.08-1.31-.24-1.89-.48-.58-.24-1.06-.57-1.44-.99-.38-.42-.57-.96-.57-1.62 0-.58.15-1.08.45-1.5.3-.42.7-.77 1.19-1.05.49-.28 1.04-.48 1.65-.6.61-.12 1.24-.18 1.89-.18.65 0 1.28.06 1.89.18.61.12 1.16.32 1.65.6.49.28.89.63 1.19 1.05.3.42.45.92.45 1.5 0 .66-.19 1.2-.57 1.62-.38.42-.86.75-1.44.99-.58.24-1.21.4-1.89.48-.68.08-1.36.12-2.04.12zm8.86 12.01c-.39 0-.77-.04-1.14-.12-.37-.08-.7-.2-.99-.36-.29-.16-.52-.36-.69-.6-.17-.24-.26-.52-.26-.84 0-.39.08-.74.24-1.05.16-.31.37-.57.63-.78.26-.21.55-.37.87-.48.32-.11.63-.16.93-.16.3 0 .58.05.84.15.26.1.48.24.66.42.18.18.32.39.42.63.1.24.15.5.15.78 0 .27-.05.52-.15.75-.1.23-.24.43-.42.6-.18.17-.4.3-.66.39-.26.09-.54.14-.84.14z"/>
        </svg>
      ),
      platform: "Behance",
      defaultUrl: "https://www.behance.net/map-dg"
    }
  ];

  return (
    <div className="flex flex-col gap-2 pb-4">
      {socialMedia.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <SocialLinkEditor
            key={index}
            platform={social.platform}
            defaultUrl={social.defaultUrl}
            icon={
              <div className="relative h-[40px] w-full cursor-pointer transition-all duration-200 flex flex-col items-center justify-center hover:bg-[var(--portfolio-border)] group">
                <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-[var(--portfolio-accent)]/10 text-[#f5f5f5] group-hover:text-[var(--portfolio-accent)]">
                  {index === 2 ? <IconIoniconsLogosLogoBehance className="w-5 h-5" /> : <IconComponent />}
                </div>
              </div>
            }
          />
        );
      })}
    </div>
  );
}

function PlayPauseButton() {
  const { isAnimationPlaying, toggleAnimation } = useAnimation();
  
  return (
    <div className="relative h-[64px] w-full cursor-pointer transition-all duration-200 flex flex-col items-center justify-center hover:bg-[var(--portfolio-border)]" 
         onClick={toggleAnimation}>
      {isAnimationPlaying ? (
        <MaterialIcon icon="pause" size={20} className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-200" />
      ) : (
        <MaterialIcon icon="play_arrow" size={20} className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-200" />
      )}
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic text-[14px] text-center mt-1 w-full text-[var(--portfolio-text-secondary)]">
        <p className="leading-[14px]">{isAnimationPlaying ? 'Pausar' : 'Activar'}</p>
      </div>
    </div>
  );
}

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className="relative h-[64px] w-full cursor-pointer transition-all duration-200 flex flex-col items-center justify-center hover:bg-[var(--portfolio-border)]" 
         onClick={toggleTheme}>
      {isDark ? (
        <MaterialIcon icon="dark_mode" size={20} className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-200" />
      ) : (
        <MaterialIcon icon="light_mode" size={20} className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-200" />
      )}
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic text-[14px] text-center mt-1 w-full text-[var(--portfolio-text-secondary)]">
        <p className="leading-[14px]">{isDark ? 'Oscuro' : 'Claro'}</p>
      </div>
    </div>
  );
}

function Nav({ activeSection, onSectionChange }: { activeSection: string; onSectionChange: (section: string) => void }) {
  return (
    <div className="flex flex-col h-full w-full" data-name="Nav">
      {/* Search Button - Top */}
      <div className="pt-4">
        <SearchButton />
      </div>
      
      {/* Navigation Icons */}
      <div className="flex flex-col gap-4 py-4">
        <Link isActive={activeSection === 'inicio'} onClick={() => onSectionChange('inicio')} />
        <Link2 isActive={activeSection === 'servicios'} onClick={() => onSectionChange('servicios')} />
        <Link1 isActive={activeSection === 'trabajos'} onClick={() => onSectionChange('trabajos')} />
        <Link4 isActive={activeSection === 'partners'} onClick={() => onSectionChange('partners')} />
      </div>
      
      {/* Spacer */}
      <div className="flex-1"></div>
      
      {/* Social Media Links */}
      <SocialLinks />
      
      {/* Play/Pause and Theme Toggle Buttons - Bottom */}
      <div className="pb-4">
        <PlayPauseButton />
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export function SideNavigationWithState({ activeSection, onSectionChange }: SideNavigationProps) {
  return (
    <div className="fixed left-0 top-0 bottom-0 z-40">
      <div className="w-[80px] h-full bg-[var(--portfolio-nav-bg)] overflow-visible">
        <Nav activeSection={activeSection} onSectionChange={onSectionChange} />
      </div>
    </div>
  );
}
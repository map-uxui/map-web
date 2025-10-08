import svgPaths from "../imports/svg-w7t3jdjrmc";

interface BottomNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

function Svg({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute size-[20px] translate-x-[-50%] translate-y-[-50%]" data-name="SVG" style={{ top: "calc(50% - 10px)", left: "calc(50% - 0.01px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2026e800} id="Vector" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#0aafb8] rounded-full"></div>
  );
}

function Link({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`relative h-[56px] left-[33.55px] rounded-[9999px] top-1/2 translate-y-[-50%] w-[88.68px] cursor-pointer transition-all duration-200 ${isActive ? 'bg-[rgba(10,175,184,0.1)]' : 'hover:bg-[rgba(255,255,255,0.05)]'}`} 
      data-name="Link"
      onClick={onClick}
    >
      <Svg isActive={isActive} />
      <div className={`absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[16px] justify-center leading-[0] left-[44.53px] not-italic text-[12px] text-center top-[40px] translate-x-[-50%] translate-y-[-50%] w-[57.054px] ${isActive ? 'text-[#0aafb8]' : 'text-[rgba(240,241,245,0.8)]'}`}>
        <p className="leading-[16px]">Inicio</p>
      </div>
      {isActive && <ActiveIndicator />}
    </div>
  );
}

function Svg1({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute left-1/2 size-[20px] translate-x-[-50%] translate-y-[-50%]" data-name="SVG" style={{ top: "calc(50% - 10px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pe6b10c0} id="Vector" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d={svgPaths.p4c21d00} id="Vector_2" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`absolute h-[56px] left-[157.32px] rounded-[9999px] top-1/2 translate-y-[-50%] w-[80.96px] cursor-pointer transition-all duration-200 ${isActive ? 'bg-[rgba(10,175,184,0.1)]' : 'hover:bg-[rgba(255,255,255,0.05)]'}`} 
      data-name="Link"
      onClick={onClick}
    >
      <Svg1 isActive={isActive} />
      <div className={`absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[16px] justify-center leading-[0] left-[16px] not-italic text-[12px] top-[40px] translate-y-[-50%] w-[49.31px] ${isActive ? 'text-[#0aafb8]' : 'text-[rgba(240,241,245,0.8)]'}`}>
        <p className="leading-[16px]">Trabajos</p>
      </div>
      {isActive && <ActiveIndicator />}
    </div>
  );
}

function Svg2({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute left-1/2 size-[20px] translate-x-[-50%] translate-y-[-50%]" data-name="SVG" style={{ top: "calc(50% - 10px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pc921000} id="Vector" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d={svgPaths.p16bbd80} id="Vector_2" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d="M4.16667 5V8.33333" id="Vector_3" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d="M15.8333 11.6667V15" id="Vector_4" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d="M8.33333 1.66667V3.33333" id="Vector_5" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d="M5.83333 6.66667H2.5" id="Vector_6" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d="M17.5 13.3333H14.1667" id="Vector_7" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
          <path d="M9.16667 2.5H7.5" id="Vector_8" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`absolute h-[56px] left-[273.38px] rounded-[9999px] top-1/2 translate-y-[-50%] w-[84.34px] cursor-pointer transition-all duration-200 ${isActive ? 'bg-[rgba(10,175,184,0.1)]' : 'hover:bg-[rgba(255,255,255,0.05)]'}`} 
      data-name="Link"
      onClick={onClick}
    >
      <Svg2 isActive={isActive} />
      <div className={`absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[16px] justify-center leading-[0] left-[16px] not-italic text-[12px] top-[40px] translate-y-[-50%] w-[52.7px] ${isActive ? 'text-[#0aafb8]' : 'text-[rgba(240,241,245,0.8)]'}`}>
        <p className="leading-[16px]">Servicios</p>
      </div>
      {isActive && <ActiveIndicator />}
    </div>
  );
}

function Svg3({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute size-[20px] translate-x-[-50%] translate-y-[-50%]" data-name="SVG" style={{ top: "calc(50% - 10px)", left: "calc(50% + 0.005px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke={isActive ? "#0aafb8" : "var(--stroke-0, #F0F1F5)"} strokeLinecap="round" strokeLinejoin="round" strokeOpacity={isActive ? "1" : "0.8"} strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link3({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`absolute h-[56px] left-[392.81px] rounded-[9999px] top-1/2 translate-y-[-50%] w-[83.63px] cursor-pointer transition-all duration-200 ${isActive ? 'bg-[rgba(10,175,184,0.1)]' : 'hover:bg-[rgba(255,255,255,0.05)]'}`} 
      data-name="Link"
      onClick={onClick}
    >
      <Svg3 isActive={isActive} />
      <div className={`absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[16px] justify-center leading-[0] left-[16px] not-italic text-[12px] top-[40px] translate-y-[-50%] w-[52.305px] ${isActive ? 'text-[#0aafb8]' : 'text-[rgba(240,241,245,0.8)]'}`}>
        <p className="leading-[16px]">Contacto</p>
      </div>
      {isActive && <ActiveIndicator />}
    </div>
  );
}

function Nav({ activeSection, onSectionChange }: { activeSection: string; onSectionChange: (section: string) => void }) {
  return (
    <div className="absolute bottom-px left-px top-px w-[510px]" data-name="Nav">
      <Link isActive={activeSection === 'inicio'} onClick={() => onSectionChange('inicio')} />
      <Link1 isActive={activeSection === 'trabajos'} onClick={() => onSectionChange('trabajos')} />
      <Link2 isActive={activeSection === 'servicios'} onClick={() => onSectionChange('servicios')} />
      <Link3 isActive={activeSection === 'contacto'} onClick={() => onSectionChange('contacto')} />
    </div>
  );
}

export function BottomNavigationWithState({ activeSection, onSectionChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="w-[512px] h-[58px]">
        <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(40,33,54,0.8)] relative rounded-[9999px] size-full" data-name="Header">
          <div aria-hidden="true" className="absolute border border-[#0aafb8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          <Nav activeSection={activeSection} onSectionChange={onSectionChange} />
        </div>
      </div>
    </div>
  );
}
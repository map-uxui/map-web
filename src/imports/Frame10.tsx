function ButtonDialog({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#0aafb8] hover:bg-[#0aafb8]/90 box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[200px] transition-all duration-300 cursor-pointer" 
      data-name="Button dialog"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-50 w-[129px]">
        <p className="leading-[20px]">Enviar un mensaje</p>
      </div>
    </button>
  );
}

function ButtonDialog1({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#0aafb8] hover:bg-[#0aafb8]/90 box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[200px] transition-all duration-300 cursor-pointer" 
      data-name="Button dialog"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-50 w-[129px]">
        <p className="leading-[20px]">Agendar una meet</p>
      </div>
    </button>
  );
}

function Frame16({ onContactClick, onMeetClick }: { onContactClick?: () => void; onMeetClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <ButtonDialog onClick={onContactClick} />
      <ButtonDialog1 onClick={onMeetClick} />
    </div>
  );
}

export default function Frame10({ onContactClick, onMeetClick }: { onContactClick?: () => void; onMeetClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative size-full">
      <div className="flex flex-col font-['Georama:Regular',_sans-serif] font-normal h-[173px] justify-center leading-[72px] relative shrink-0 text-[#0aafb8] text-[60px] text-center w-[767px]" style={{ fontVariationSettings: "'wdth' 128" }}>
        <p className="mb-0">Naveguemos nuevos</p>
        <p>proyectos</p>
      </div>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[#0aafb8] text-[20px] text-center" style={{ width: "min-content" }}>
        Comencemos el viaje para descubrir tu proyecto, desarrollemos productos digitales, pensemos branding de tu marca y potenciemos tu negocio.
      </p>
      <Frame16 onContactClick={onContactClick} onMeetClick={onMeetClick} />
    </div>
  );
}
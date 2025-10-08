import svgPaths from "../imports/svg-m5otznwheq";

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ className = "", size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'w-16 h-4',
    medium: 'w-36 h-10', 
    large: 'w-48 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} scale-190`} data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 180 46">
        <g id="logo map">
          <path d={svgPaths.p13e16f00} fill="#0aafb8" />
          <path d={svgPaths.p50c5d00} fill="#0aafb8" />
          <path d={svgPaths.p1a33880} fill="#0aafb8" />
          <path d={svgPaths.pbad1280} fill="#0aafb8" />
        </g>
      </svg>
    </div>
  );
}
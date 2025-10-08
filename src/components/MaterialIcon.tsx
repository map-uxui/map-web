interface MaterialIconProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg' | number;
  className?: string;
  filled?: boolean;
}

export function MaterialIcon({ icon, size = 'md', className = '', filled = true }: MaterialIconProps) {
  const sizeClass = typeof size === 'number' ? '' : `icon-${size}`;
  const style = typeof size === 'number' ? { 
    fontSize: `${size}px`,
    fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`
  } : {
    fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size === 'sm' ? 20 : size === 'lg' ? 48 : 24}`
  };

  return (
    <span 
      className={`material-symbols-outlined ${sizeClass} ${className}`}
      style={style}
    >
      {icon}
    </span>
  );
}
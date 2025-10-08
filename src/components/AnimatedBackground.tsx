import { useAnimation } from "../App";
import Threads from "./Threads";

export function AnimatedBackground() {
  const { isAnimationPlaying } = useAnimation();

  if (!isAnimationPlaying) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden optimized-background">
      {/* Threads animation background */}
      <div className="absolute inset-0 opacity-30">
        <Threads
          color={[0.039, 0.686, 0.722]}
          amplitude={0.6}
          distance={0.05}
          enableMouseInteraction={true}
        />
      </div>
      
      {/* Organic pattern background - reduced opacity to complement Threads */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1920 1080" 
          fill="none" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Fluid organic shapes */}
          <defs>
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--portfolio-accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--portfolio-accent)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--portfolio-accent)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--portfolio-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Animated organic shapes */}
          <g className="animate-gentle-float">
            <path 
              d="M150,300 Q300,150 450,300 T750,300 Q900,450 750,600 T450,600 Q300,450 150,300 Z" 
              fill="url(#gradient1)"
            />
          </g>
          
          <g className="animate-soft-glow" style={{ animationDelay: '1s' }}>
            <path 
              d="M1200,200 Q1400,100 1600,250 T1800,400 Q1700,600 1500,500 T1200,400 Q1100,300 1200,200 Z" 
              fill="url(#gradient2)"
            />
          </g>
          
          <g className="animate-gentle-float" style={{ animationDelay: '2s' }}>
            <ellipse 
              cx="800" 
              cy="800" 
              rx="200" 
              ry="150" 
              fill="url(#gradient1)"
              opacity="0.4"
            />
          </g>
          
          {/* Flowing lines */}
          <g className="animate-soft-glow" style={{ animationDelay: '0.5s' }}>
            <path 
              d="M0,500 Q200,400 400,500 T800,500 Q1000,400 1200,500 T1600,500 Q1800,600 1920,500" 
              stroke="var(--portfolio-accent)" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.3"
            />
          </g>
          
          <g className="animate-gentle-float" style={{ animationDelay: '1.5s' }}>
            <path 
              d="M100,700 Q300,600 500,700 T900,700 Q1100,800 1300,700 T1700,700 Q1900,600 1920,700" 
              stroke="var(--portfolio-accent)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.2"
            />
          </g>
        </svg>
      </div>

      {/* Reduced floating particles to complement Spline */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-gentle-float"
            style={{
              backgroundColor: 'var(--portfolio-accent)',
              opacity: 0.05,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
import { lazy, Suspense } from 'react';
import { useAnimation } from '../App';
import { useSplineLoader } from './hooks/useSplineLoader';

// Lazy load Spline to prevent Three.js conflicts
const SplineComponent = lazy(() => 
  import('@splinetool/react-spline').then(module => ({
    default: module.default
  })).catch(() => ({
    default: () => null // Fallback if Spline fails to load
  }))
);

interface SplineBackgroundProps {
  className?: string;
}

export function SplineBackground({ className = '' }: SplineBackgroundProps) {
  const { isAnimationPlaying } = useAnimation();
  const {
    shouldLoad,
    isLoaded,
    hasError,
    isSupported,
    handleLoad,
    handleError
  } = useSplineLoader({
    delayMs: 1500, // Increased delay for better stability
    timeoutMs: 10000, // Longer timeout
    fallbackOnError: true
  });

  return (
    <div className={`fixed inset-0 w-full h-full spline-container ${className}`}>
      {/* Loading state */}
      {!isLoaded && !hasError && shouldLoad && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1625] via-[#2a1f3d] to-[#1a1625] animate-pulse">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,175,184,0.1),transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#0aafb8] text-sm opacity-50">Cargando experiencia 3D...</div>
          </div>
        </div>
      )}

      {/* Error fallback or not supported */}
      {(hasError || !isSupported) && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1625] via-[#2a1f3d] to-[#1a1625]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,175,184,0.1),transparent_70%)]" />
          {/* Enhanced fallback pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0aafb8] rounded-full filter blur-3xl animate-gentle-float" />
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#0aafb8] rounded-full filter blur-2xl animate-gentle-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-2/3 left-1/2 w-16 h-16 bg-[#0aafb8] rounded-full filter blur-xl animate-soft-glow" style={{ animationDelay: '4s' }} />
          </div>
        </div>
      )}

      {/* Spline scene with enhanced loading */}
      {!hasError && isSupported && shouldLoad && (
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${!isAnimationPlaying ? 'pointer-events-none' : ''}`}
          style={{
            filter: !isAnimationPlaying ? 'grayscale(100%)' : 'none',
            transform: !isAnimationPlaying ? 'scale(1.02)' : 'scale(1)',
            transition: 'filter 0.3s ease, transform 0.3s ease'
          }}
        >
          <Suspense fallback={<div className="absolute inset-0" />}>
            <SplineComponent
              scene="https://prod.spline.design/Z2AN3EOrK8gwws6S/scene.splinecode"
              onLoad={handleLoad}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent'
              }}
            />
          </Suspense>
        </div>
      )}

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1625]/90 via-transparent to-[#1a1625]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1625]/50 via-transparent to-[#1a1625]/50 pointer-events-none" />
    </div>
  );
}
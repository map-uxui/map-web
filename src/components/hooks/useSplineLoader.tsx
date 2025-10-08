import { useState, useEffect, useRef } from 'react';

interface UseSplineLoaderOptions {
  delayMs?: number;
  timeoutMs?: number;
  fallbackOnError?: boolean;
}

export function useSplineLoader(options: UseSplineLoaderOptions = {}) {
  const {
    delayMs = 1000,
    timeoutMs = 8000,
    fallbackOnError = true
  } = options;

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  
  const timeoutRef = useRef<NodeJS.Timeout>();
  const delayRef = useRef<NodeJS.Timeout>();

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsSupported(!!gl);
      
      // Clean up test canvas
      canvas.remove();
    } catch (e) {
      setIsSupported(false);
    }
  }, []);

  // Delayed loading to prevent conflicts
  useEffect(() => {
    if (!isSupported) {
      setHasError(true);
      return;
    }

    delayRef.current = setTimeout(() => {
      setShouldLoad(true);
    }, delayMs);

    return () => {
      if (delayRef.current) {
        clearTimeout(delayRef.current);
      }
    };
  }, [delayMs, isSupported]);

  // Timeout fallback
  useEffect(() => {
    if (!shouldLoad || isLoaded || hasError) return;

    timeoutRef.current = setTimeout(() => {
      if (!isLoaded && fallbackOnError) {
        console.warn('Spline loading timeout, using fallback');
        setHasError(true);
      }
    }, timeoutMs);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shouldLoad, isLoaded, hasError, timeoutMs, fallbackOnError]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleError = (error: any) => {
    console.warn('Spline failed to load:', error);
    setHasError(true);
    setIsLoaded(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (delayRef.current) {
        clearTimeout(delayRef.current);
      }
    };
  }, []);

  return {
    shouldLoad: shouldLoad && isSupported,
    isLoaded,
    hasError: hasError || !isSupported,
    isSupported,
    handleLoad,
    handleError
  };
}
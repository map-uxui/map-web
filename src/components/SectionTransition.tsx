import { motion } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import { useAnimation } from "../App";

interface SectionTransitionProps {
  children: ReactNode;
  isActive: boolean;
  sectionId: string;
  onFullyVisible?: (sectionId: string) => void;
}

export function SectionTransition({ children, isActive, sectionId, onFullyVisible }: SectionTransitionProps) {
  const { isAnimationPlaying } = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !onFullyVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.55 &&
            entry.boundingClientRect.top <= (window.innerHeight * 0.35)
          ) {
            onFullyVisible(sectionId);
          }
        });
      },
      {
        threshold: [0.55],
        rootMargin: "0px 0px -35% 0px"
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [onFullyVisible, sectionId]);

  // If animations are disabled, render children without Motion components
  if (!isAnimationPlaying) {
    return (
      <div className="relative no-animations" ref={containerRef}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
      viewport={{ 
        once: false, 
        amount: 0.3,
        margin: "-100px 0px"
      }}
      className="relative"
    >
      <motion.div
        animate={{
          scale: isActive ? 1 : 0.98,
          opacity: isActive ? 1 : 0.85,
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
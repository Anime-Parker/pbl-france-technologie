'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAccessibility } from '@/context/AccessibilityContext';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useAccessibility();
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    if (reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    document.addEventListener('mousemove', onMove);
    const interactives = document.querySelectorAll('a, button, [role="button"], input, [data-interactive]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    let raf: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${isHovering.current ? 1.8 : 1})`;
        cursorRef.current.style.borderColor = isHovering.current
          ? 'rgba(212, 175, 55, 0.6)'
          : 'rgba(255, 255, 255, 0.3)';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-10 h-10 rounded-full border border-white/30 transition-[border-color,transform] duration-200 ease-out mix-blend-difference"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-white"
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}

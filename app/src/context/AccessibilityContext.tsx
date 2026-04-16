'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AccessibilityState {
  reducedMotion: boolean;
  soundEnabled: boolean;
  toggleMotion: () => void;
  toggleSound: () => void;
}

const AccessibilityContext = createContext<AccessibilityState>({
  reducedMotion: false,
  soundEnabled: true,
  toggleMotion: () => {},
  toggleSound: () => {},
});

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleMotion = useCallback(() => setReducedMotion(p => !p), []);
  const toggleSound = useCallback(() => setSoundEnabled(p => !p), []);

  return (
    <AccessibilityContext.Provider value={{ reducedMotion, soundEnabled, toggleMotion, toggleSound }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => useContext(AccessibilityContext);

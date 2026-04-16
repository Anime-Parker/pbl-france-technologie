'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface PresentationState {
  isPresentationMode: boolean;
  togglePresentationMode: () => void;
}

const PresentationContext = createContext<PresentationState>({
  isPresentationMode: false,
  togglePresentationMode: () => {},
});

export function PresentationProvider({ children }: { children: React.ReactNode }) {
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const togglePresentationMode = useCallback(() => {
    setIsPresentationMode((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on 'p' or 'P'
      if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.altKey && !e.metaKey && e.target === document.body) {
        togglePresentationMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePresentationMode]);

  useEffect(() => {
    // Add a class to the body to globally style presentation mode
    if (isPresentationMode) {
      document.body.classList.add('presentation-mode-active');
    } else {
      document.body.classList.remove('presentation-mode-active');
    }
  }, [isPresentationMode]);

  return (
    <PresentationContext.Provider value={{ isPresentationMode, togglePresentationMode }}>
      {children}
    </PresentationContext.Provider>
  );
}

export const usePresentation = () => useContext(PresentationContext);

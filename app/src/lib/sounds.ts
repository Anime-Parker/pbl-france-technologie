'use client';

let clickSound: { play: () => void } | null = null;
let hoverSound: { play: () => void } | null = null;
let howlerLoaded = false;

async function loadHowler() {
  if (howlerLoaded) return;
  try {
    const { Howl } = await import('howler');
    clickSound = new Howl({
      src: ['data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA='],
      volume: 0.15,
      rate: 1.2,
    });
    hoverSound = new Howl({
      src: ['data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA='],
      volume: 0.05,
      rate: 1.8,
    });
    howlerLoaded = true;
  } catch {
    // Howler not available, silent fallback
  }
}

// Preload on first interaction
if (typeof window !== 'undefined') {
  window.addEventListener('click', () => loadHowler(), { once: true });
  window.addEventListener('mousemove', () => loadHowler(), { once: true });
}

export function playClick(enabled: boolean) {
  if (!enabled) return;
  try {
    clickSound?.play();
  } catch { /* ignore */ }
}

export function playHover(enabled: boolean) {
  if (!enabled) return;
  try {
    hoverSound?.play();
  } catch { /* ignore */ }
}

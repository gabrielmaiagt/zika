'use client';

import { useState, useEffect } from 'react';

const COUNTDOWN_MINUTES = 10;
const TEN_MINUTES_IN_MS = COUNTDOWN_MINUTES * 60 * 1000;

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(TEN_MINUTES_IN_MS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const key = 'packTimerStart';
    const startTime = Number(localStorage.getItem(key)) || Date.now();
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, String(startTime));
    }

    const endTime = startTime + TEN_MINUTES_IN_MS;

    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      
      if (remaining > 0) {
        setTimeLeft(remaining);
        requestAnimationFrame(tick);
      } else {
        setTimeLeft(0);
        // Reset timer for next visit if it expires
        localStorage.removeItem(key);
      }
    };

    tick();

  }, [isClient]);

  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  
  const displayTime = isClient 
    ? `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(COUNTDOWN_MINUTES).padStart(2, '0')}:00`;

  return (
    <span className="font-mono tabular-nums">
      {displayTime}
    </span>
  );
}

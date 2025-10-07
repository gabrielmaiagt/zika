'use client';

import { useState, useEffect } from 'react';

const TEN_MINUTES_IN_MS = 10 * 60 * 1000;

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(TEN_MINUTES_IN_MS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let timerStartTimeStr = localStorage.getItem('packTimerStart');
    let timerStartTime: number;

    if (timerStartTimeStr) {
      timerStartTime = parseInt(timerStartTimeStr, 10);
      const elapsed = Date.now() - timerStartTime;
      if (elapsed >= TEN_MINUTES_IN_MS) {
        // Timer expired in a previous session, restart it
        timerStartTime = Date.now();
        localStorage.setItem('packTimerStart', timerStartTime.toString());
      }
    } else {
      timerStartTime = Date.now();
      localStorage.setItem('packTimerStart', timerStartTime.toString());
    }
    
    const calculateInitialTimeLeft = () => {
        const elapsed = Date.now() - timerStartTime;
        return Math.max(0, TEN_MINUTES_IN_MS - elapsed);
    };

    setTimeLeft(calculateInitialTimeLeft());

    const interval = setInterval(() => {
        const newTimeLeft = calculateInitialTimeLeft();
        setTimeLeft(newTimeLeft);

        if (newTimeLeft <= 0) {
            clearInterval(interval);
            // Optionally, remove the key to restart on next visit
            // localStorage.removeItem('packTimerStart'); 
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [isClient]);

  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  if (!isClient) {
    return (
        <span className="font-mono text-lg md:text-xl tracking-wider">10:00</span>
    );
  }

  return (
    <span className="font-mono text-lg md:text-xl tracking-wider">
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </span>
  );
}

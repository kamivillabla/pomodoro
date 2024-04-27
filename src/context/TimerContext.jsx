import React, { createContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export const timeDefaults = {
  POMO: 25 * 60,
  SHORT: 5 * 60,
  BREAK: 15 * 60,
};

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState('POMO');
  const [time, setTime] = useState(timeDefaults.POMO);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => setTime((t) => t - 1), 1);
    } else if (time === 0) {
      playSound();
      setIsActive(false);
      setTime(timeDefaults[currentTime]);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sound/sonidoclick.mp3')
    );
    sound.playAsync();
  }

  return (
    <TimerContext.Provider
      value={{
        currentTime,
        setCurrentTime,
        time,
        setTime,
        isActive,
        setIsActive,
        timeDefaults,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

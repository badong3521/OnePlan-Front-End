/* eslint-disable @typescript-eslint/no-shadow */
import { useState, useRef } from 'react';

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState<any>(initialState);
  const [isActive, setIsActive] = useState<any>(false);
  const [isPaused, setIsPaused] = useState<any>(false);
  const [isDone, setIsDone] = useState<any>(false);
  const countRef = useRef<any>(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handelDone = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(timer);
    setIsDone(true);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(true);
    setTimer(0);
  };

  return {
    timer,
    isActive,
    isPaused,
    isDone,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    handelDone,
  };
};

export default useTimer;

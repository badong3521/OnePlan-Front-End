/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useRef } from 'react';
import { FaRegClock } from 'react-icons/fa';
import useTimer from '../../utils/hook/useTimer';

const StopWatch = () => {
  const increment = useRef<any>(null);

  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes: any = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <h3>React Stopwatch {<FaRegClock />}</h3>
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

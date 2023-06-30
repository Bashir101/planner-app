import React, { useState, useEffect } from 'react';

const StopwatchWidget = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        const now = Date.now();
        setElapsedTime(now - startTime);
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, startTime]);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setElapsedTime(0);
    } else {
      setIsRunning(true);
      setStartTime(Date.now() - elapsedTime);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = `00${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 1000 / 60) % 60)}`.slice(-2);
    const hours = `0${Math.floor((time / 1000 / 60 / 60) % 24)}`.slice(-2);

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch-widget">
      <h3>Stopwatch</h3>
      <div className="stopwatch-time">{formatTime(elapsedTime)}</div>
      <div className="stopwatch-controls">
        <button
          onClick={handleStartStop}
          className={`stopwatch-button ${isRunning ? 'stop-button' : 'start-button'}`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <span className="button-space" /> {/* Add a span element with a CSS class for spacing */}
        <button onClick={handleReset} className="stopwatch-button reset-button">Reset</button>
      </div>
    </div>
  );
};

export default StopwatchWidget;

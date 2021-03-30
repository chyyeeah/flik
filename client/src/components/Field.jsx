import React, { useState, useEffect } from 'react';

export default (props) => {
  const [ windowDimensions, setWindowDimensions ] = useState({
    width: window.innerWidth, height: window.innerHeight
  });
  const [ gameInProgress, setGameInProgress ] = useState(false);
  const [ targetsRemaining, setTargetsRemaining ] = useState(0);
  const [ targetStatus, setTargetStatus ] = useState({
    width: '0',
    height: '0',
    top: '0',
    left: '0',
  });

  useEffect(() => {
    if (targetsRemaining < 1) {
      setGameInProgress(false);
    } else {
      // pop up target
      const posX = Math.floor(Math.random() * windowDimensions.width);
      const posY = Math.floor(Math.random() * windowDimensions.height);
      setTargetStatus({
        width: '30px',
        height: '30px',
        top: `${posY}px`,
        left: `${posX}px`,
      });
    }
  }, [ gameInProgress, targetsRemaining ]);

  let timer;
  const countdown = () => timer = setTimeout(() => {
    setTargetsRemaining(1);
    setGameInProgress(true);
  }, 3000);
  const abortStart = () => clearTimeout(timer);
  const clickAttempt = () => {
    setTargetsRemaining(targetsRemaining - 1);
    setTargetStatus({
      width: '0',
      height: '0',
      top: `0`,
      left: `0`,
    });
  };

  const startButton = !gameInProgress
    ? <button
        id="start"
        onMouseEnter={countdown}
        onMouseLeave={abortStart} />
    : null;

  return (
    <div>
      { startButton }
      <div
        id='capture-layer'
        onClick={clickAttempt}></div>
      <button
        className='target'
        style={targetStatus}></button>
    </div>
  );
};

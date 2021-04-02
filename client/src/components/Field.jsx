import React, { useState, useEffect } from 'react';
import axios from 'axios';
import calcDistance from '../utils/calcDistance';
import SetUserModal from './SetUserModal.jsx';
import HubModal from './HubModal.jsx';

export default (props) => {
  const [ windowDimensions, setWindowDimensions ] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [ username, setUsername ] = useState('');
  const [ usernameModal, setUsernameModal ] = useState(true);
  const [ displayHubModal, setDisplayHubModal ] = useState(false);
  const [ gameInProgress, setGameInProgress ] = useState(false);
  const [ targetsRemaining, setTargetsRemaining ] = useState(0);
  const [ targetVisible, setTargetVisible ] = useState(false);
  const [ targetPosition, setTargetPosition ] = useState({
    width: '0',
    height: '0',
    top: '0',
    left: '0',
    backgroundColor: 'transparent'
  });
  const [ startTime, setStartTime ] = useState(0);
  const [ results, setResults ] = useState([]);

  useEffect(() => {
    if (targetsRemaining < 1) {
      if (gameInProgress) {
        setGameInProgress(false);
        axios.post('/score', { player: username, results })
          .then(() => {
            setDisplayHubModal(true);
          });
      }
    } else {
      const posX = 15 + Math.floor(Math.random() * (windowDimensions.width - 50));
      const posY = 15 + Math.floor(Math.random() * windowDimensions.height - 50);
      setTimeout(() => {
        setStartTime(new Date().getTime());
        setTargetPosition({
          width: '30px',
          height: '30px',
          top: `${posY}px`,
          left: `${posX}px`,
          backgroundColor: 'red'
        });
        setTargetVisible(true);
      }, Math.random() * 1000);
    }
  }, [ targetsRemaining ]);

  const setUser = name => {
    setUsername(name);
    setUsernameModal(false);
    setDisplayHubModal(true);
  };

  let timer;
  const countdown = () => timer = setTimeout(() => {
    setTargetsRemaining(1);
    setGameInProgress(true);
  }, 2000);
  const abortStart = () => clearTimeout(timer);
  const clickAttempt = (e) => {
    const distance = calcDistance(
      targetPosition.left,
      targetPosition.top,
      e.pageX,
      e.pageY,
    );
    const duration = new Date().getTime() - startTime;

    setResults([...results, { distance_from_target: distance, click_time: duration }]);
    setTargetVisible(false);
    setTargetsRemaining(targetsRemaining - 1);
    setTargetPosition({
      width: '0',
      height: '0',
      top: `0`,
      left: `0`,
      backgroundColor: 'transparent'
    });
  };

  const startButton = !gameInProgress
    ? <button
        id="start"
        onMouseEnter={countdown}
        onMouseLeave={abortStart} />
    : null;

  const captureLayer = gameInProgress && targetVisible
    ? <div
      id='capture-layer'
      onClick={clickAttempt}></div>
    : null;

  const setUserModal = usernameModal
    ? <SetUserModal
        username={username}
        setUser={setUser} />
    : null;

  const hubModal = displayHubModal
    ? <HubModal
        username={username}
        setDisplayHubModal={setDisplayHubModal}
        results={results}
        setResults={setResults} />
    : null;

  return (
    <div>
      { startButton }
      { captureLayer }
      <button
        className='target'
        style={targetPosition}></button>
      { setUserModal }
      { hubModal }
    </div>
  );
};

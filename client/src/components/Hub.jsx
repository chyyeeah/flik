import React from 'react';
import Stats from './stats.jsx';

export default ({ username, setUsernameModal, setDisplayHubModal }) => {
  const playClickHandler = e => {
    e.preventDefault();
    setDisplayHubModal(false);
  };

  return (
    <div className='hub-modal'>
      <div className='stats-graph'>
        <Stats />
      </div>
      <button onClick={playClickHandler}>Play?</button>
    </div>
  );
};
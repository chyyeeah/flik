import React from 'react';
import Stats from './stats.jsx';

export default ({ username, setUsernameModal, setDisplayHubModal }) => {
  const playClickHandler = e => {
    e.preventDefault();
    setDisplayHubModal(false);
  };

  return (
    <div className='hub-modal'>
      <h2>Hello, {username}!</h2>
      <Stats username={username} />
      <button onClick={playClickHandler}>Play?</button>
    </div>
  );
};
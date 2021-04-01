import React from 'react';
import Stats from './stats.jsx';

export default ({ username, setDisplayHubModal }) => {
  const playClickHandler = e => {
    e.preventDefault();
    setDisplayHubModal(false);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Hello, {username}!</p>
        </header>
        <section className="modal-card-body">
          <Stats username={username} />
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={playClickHandler}>Play?</button>
        </footer>
      </div>
    </div>
  );
};
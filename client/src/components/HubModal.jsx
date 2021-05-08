import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stats from './stats.jsx';

export default ({
  username, setDisplayHubModal,
  results, setResults, gameMode, setGameMode }) => {
  const  [ careerStats, setCareerStats ] = useState({});

  useEffect(() => {
    axios.get(`/stats/${username}/career`)
      .then(res => {
        setCareerStats(res.data);
      })
  }, []);

  const playClickHandler = e => {
    e.preventDefault();
    setDisplayHubModal(false);
    setResults([]);
  };

  const handleChange = e => setGameMode(e.target.value);

  const careerStatsResults = Object.entries(careerStats).length > 0
    ? <div>
        <h2 className='title is-2'>Career Stats</h2>
        <div className="columns">
          <div className="column">
            <h4 className='title is-4'>Distance From Target</h4>
            <p>{careerStats.avgcareerdistance.toFixed(3)} px</p>
          </div>
          <div className="column">
            <h4 className='title is-4'>Reaction Time</h4>
            <p>{careerStats.avgcareerduration.toFixed(3)} ms</p>
          </div>
        </div>
      </div>
    : null;

  const latestResults = results.length > 0
    ? <div>
        <h3 className='title is-3'>Nice! Here are your results:</h3>
        <div className='columns'>
          <div className='column'>
            <h4 className='title is-4'>Distance From Target</h4>
            <p>{results[0].distance_from_target.toFixed(3)} px</p>
          </div>
          <div className='column'>
            <h4 className='title is-4'>Reaction Time</h4>
            <p>{results[0].click_time} ms</p>
          </div>
        </div>
      </div>
    : null;

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Hello, {username}!</p>
        </header>
        <section className="modal-card-body">
          { careerStatsResults }
          <h3 className='title is-3 mt-5'>7-Day Progress</h3>
          <Stats username={username} />
          { latestResults }
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={playClickHandler}>Play?</button>
          <div class="control">
            <div class="select">
              <select value={gameMode} onChange={handleChange}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
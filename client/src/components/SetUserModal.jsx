import React, { useState } from 'react';

export default ({ setUser }) => {
  const [ username, setUsername ] = useState('');
  const [ validUsername, setValidUsername ] = useState(true);

  const inputHandler = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    setValidUsername(true);
    if (username.length > 1) {
      setUser(username);
      setValidUsername(true);
      setUsername('');
    } else {
      setValidUsername(false);
    }
  };

  const invalidUsername = !validUsername
    ? <>
        <p className="block">
          <span className="icon has-text-danger">
            <i className="fas fa-ban"></i>
          </span>
          There was an error in your submission. Please try again.
        </p>
      </>
    : null;

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Hello!</p>
        </header>
        <section className="modal-card-body">
          { invalidUsername }
          <form className="box">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Ashe"
                  value={username}
                  onChange={inputHandler}></input>
              </div>
            </div>
            <button className="button is-success" onClick={submitHandler}>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};
import React, { userState } from 'react';

export default ({ username, inputHandler, submitHandler }) => {
  return (
    <div className='username-modal'>
      <h2>Hello!</h2>
      <form>
        <label>
          Please enter a player name:
          <input
            type='text'
            value={username}
            onChange={inputHandler} ></input>
        </label>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};
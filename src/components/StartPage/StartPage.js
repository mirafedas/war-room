import React from 'react';
import ls from "local-storage";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import './StartPage.scss';

const CN = 'start-page';

const StartPage = () => {
  const formLogin = React.createRef();

  const handleClick = () => {
    const username = formLogin.current[0].value;
    const isInputValid = formLogin.current.reportValidity();
    if (isInputValid) {
      ls.set('username', username);
      window.location = '/chat';
    }
  }

  const username = ls.get('username');

  return (
    <Router>
    <div className={`${CN}__wrapper`}>
      <p className={`${CN}__text`}>Please enter your username:</p>
      <form
        className={`${CN}__input-wrapper`}
        ref={formLogin}
      >
        <input
          className={`${CN}__input`}
          defaultValue={username}
          type="text"
          required
        >
        </input>
        <Link to="/chat">
          <button className={`${CN}__button`} onClick={handleClick}>Start chatting >>></button>
        </Link>
      </form>
    </div>
    </Router>
  )
}

export default StartPage;

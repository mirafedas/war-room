import React from 'react';
import ls from "local-storage";
import { Link } from "react-router-dom";

import './Chatroom.scss';

const CN = 'chatroom';

const Chatroom = () => {
  const formMessage = React.createRef();
  const username = ls.get('username');
  const handleClick = () => {
    console.log(formMessage.current[0].value)
  }

  return (
    <div className={`${CN}__wrapper`}>
      <div className={`${CN}__messages`}></div>
      <p className={`${CN}__text`}>Please enter your message:</p>
      <form
        className={`${CN}__input-wrapper`}
        ref={formMessage}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className={`${CN}__input`}
        >
        </input>
        <Link to="/chat">
          <button className={`${CN}__button`} onClick={handleClick}>Send message</button>
        </Link>
      </form>
    </div>
  )
}

export default Chatroom;
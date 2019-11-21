import React from 'react';

import './Message.scss';

const CN = 'message';

const Message = ({ username, message }) => (
  <span className={`${CN}__text`}>
    <strong>{username}</strong>: <em>{message}</em>
  </span>
);

export default Message;

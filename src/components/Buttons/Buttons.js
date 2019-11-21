import React from 'react';

import './Buttons.scss';

const CN = 'buttons';

const Buttons = (props) => {
  return (
    <div className={`${CN}__wrapper`}>
      <button className={`${CN}__btn`} onClick={props.changeImage}>Change image</button>
    </div>
  );
}

export default Buttons;
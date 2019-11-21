import React from 'react';

import './Main.scss';

const CN = 'main-image'

const Main = (props) => {
  console.log(props);
  const {imageSrc} = props;
  
  return (
    <img className={CN} src={imageSrc}/>
  )
}

export default Main;
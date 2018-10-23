import React from 'react';
import './steps.css';

const Progress = (props) => {
  const style = {
    width: (props.stepNum /4 * 100) + '%'
  }
  return(
    <div className="ProgressBar" style={style}></div>
  );
}

export default Progress;
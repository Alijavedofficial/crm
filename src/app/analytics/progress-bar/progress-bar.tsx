import React from 'react';
import './progress-bar.scss';

const ProgressBar = () => {
  return (
    <div className="progress-bars-container">
      <div className="progress-bar">
        <div className="label" style={{color: '#ff6b00', paddingBottom: '20px'}}>unassembled</div>
      </div>
      <div className="progress-bar">
      
        <div className="bar-container">
          <div className="bar green" style={{width: '60%'}}></div>
        </div>
        <div className="label">average processing time</div>
      
      </div>
    </div>
  );
};

export default ProgressBar;
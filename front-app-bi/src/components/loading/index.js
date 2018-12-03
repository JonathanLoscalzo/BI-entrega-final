import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';
export default function(props) {
  return (
    <div className="loading-container">
      <div>
        <CircularProgress
          className="loading-circular"
          size={100}
          thickness={7}
        />
        <div className="loading-text">
          <p>Procesando Informacion...</p>
        </div>
      </div>
    </div>
  );
}

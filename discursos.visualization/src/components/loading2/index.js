import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { MdSync } from 'react-icons/md'
import { toast } from 'react-toastify';
import './style.css';

export default function (props) {
  if (props.loading) {
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
      </div>)
  } else if (props.error) {
    toast.error("Ocurrió un error, intente nuevamente")
    return (
      <div>
        Ocurrió un error, intente nuevamente
        <Button onClick={() => props.reload()} color="primary" aria-label="Menu">
          <MdSync />
        </Button>
      </div>
    )
  } else {
    return props.children
  }
}

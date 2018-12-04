import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './style.css';
export default function (props) {
  return (
    <AppBar className="Header-app" position="static" color="default">
      <Toolbar>
        <Typography style={{ margin: 'auto' }} variant="title" color="inherit">
          BI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

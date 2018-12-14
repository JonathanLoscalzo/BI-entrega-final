import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowLeft';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

export default (props) =>
    (<Button
        onClick={() => props.handleGoBack()}
        variant="fab"
        color="primary"
        aria-label="Add"
        style={style}>
        <KeyboardArrowUp />
    </Button>)
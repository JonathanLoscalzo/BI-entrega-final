import React, { Component } from 'react';

export const CustomizedDot = class extends Component {
    render() {
        const { cx, cy, stroke, payload, value } = this.props;
        if (payload.speeches.length > 0) {
            return (<svg xmlns="http://www.w3.org/2000/svg" x={cx - 10} y={cy - 10} width="20" height="20" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z" /></svg>);
        }
        else {
            return null;
        }
    }
};

import React, { Component, PropTypes } from 'react';

class Speech extends Component {
    render() {
        const { title } = this.props
        return <div style={{ width: 200, margin: 'auto' }}>{title}</div>
    }
}

export default class CustomTooltip extends Component {
    render() {
        const { active, speechs, label } = this.props;
        const { name, price, speeches } = speechs.filter(x => x.name == label)[0] || {}
        if (active) {
            return (
                <div style={{ background: '#e6e6e680', padding: 15, borderRadius: 3 }} className="custom-tooltip">
                    <p className="desc">{`${name} -- Dolar: $${price.toFixed(2)}`}</p>
                    {speeches.map(a => <Speech {...a} />)}
                </div>
            );
        }

        return null;
    }
}
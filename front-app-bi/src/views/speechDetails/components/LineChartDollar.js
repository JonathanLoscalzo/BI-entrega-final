import React, { Component } from 'react';

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import './style.css';
import CustomTooltip from './CustomTooltip'
export default class LineChartDollar extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        console.log(this.props.speechs);
        return (
            <LineChart style={{ 'margin-top': 25 }} width={this.state.width * 0.95} height={600} data={this.props.speechs}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CustomTooltip casa='casa' speechs={this.props.speechs} />} />
                <Legend />

                <Line type="monotone" dataKey="price" stroke="#82ca9d" activeDot={{
                    onClick: (a) => this.props.history.push({
                        pathname: '/details'
                    })
                }} />
            </LineChart>
        )
    }

}
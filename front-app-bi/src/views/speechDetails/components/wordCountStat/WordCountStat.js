import React, { Component } from 'react';
import './style.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class WordCountStat extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, data: [] };
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
    componentWillMount() {
        this.props.getWordCounts(this.props._id)
    }
    render() {
        return (
            <div style={{ margin: 10 }}>
                <div style={{ display: 'inline-block' }}>
                    <div style={{ fontWeight: 600 }}>Palabras más mencionadas</div>
                    <div>
                        <BarChart style={{ marginTop: 25 }} width={this.state.width * 0.95} height={600} data={this.props.wordcount}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="word" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>


            </div>
        )
    }



}
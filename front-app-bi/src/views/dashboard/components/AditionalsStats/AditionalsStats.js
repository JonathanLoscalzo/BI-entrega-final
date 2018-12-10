import React, { Component } from 'react';
import './AditionalsStats.css';
import { Divider } from '@material-ui/core';
import { WordcountChart } from './WordcountChart';
import { NgramsChart } from './NgramsChart';

export const AditionalStats = props => {
    return (
        <div style={{ margin: 10 }}>
            <WordcountChart data={props.wordcounts.data} />
            <br />
            <br />
            <Divider />
            <br />
            <br />
            <NgramsChart data={props.ngrams.data} />
        </div>
    )
}
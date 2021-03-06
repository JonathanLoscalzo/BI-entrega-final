import React from 'react';
import _ from 'lodash'
import './AditionalsStats.css'

import Highcharts from 'highcharts'
import HC from 'highcharts/modules/wordcloud.src'

import HighchartsReact from 'highcharts-react-official'

HC(Highcharts)

export default class extends React.Component {

    render() {
        const { data, title } = this.props;
        const options = {
            series: [{
                type: 'wordcloud',
                data: data.map(x => ({ name: x.ngram, weight: x.counter })),
                name: 'WordCounts'
            }],
            title: {
                text: title
            }
        }

        return (
            <div style={{ display: 'inline-block' }}>
                <div style={{ fontWeight: 600 }}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={'chart'}
                        options={options}
                    />
                </div>
            </div>
        )
    }
}

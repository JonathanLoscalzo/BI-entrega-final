import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { data } from './AditionalsStats';
import _ from 'lodash'
import { Colors } from '../../../../constants'

import Highcharts from 'highcharts'
import HC from 'highcharts/modules/wordcloud.src'
import HighchartsReact from 'highcharts-react-official'
HC(Highcharts)

export const WordcountChart = ({ data }) => {
    const options = {
        series: [{
            type: 'wordcloud',
            data: data.map(x => ({ name: x.word, weight: x.word_count })),
            name: 'WordCounts'
        }],
        title: ""
    }

    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ fontWeight: 600 }}>Palabras más mencionadas</div>
            <div>
                <p>Contabilizamos las palabras más mencionadas de todos los discursos</p>
                <p>Fueron filtradas las "stop-words", son palabras "vacías", que no tienen significado (conectores, artículos, pronombres, preposiciones...)</p>
            </div>
            <div>
                <div style={{ fontWeight: 600 }}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={'chart'}
                        options={options}
                    />
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import _ from 'lodash'
import { Colors } from '../../../../constants'
import Highcharts from 'highcharts'
import HC from 'highcharts/modules/wordcloud.src'
import HighchartsReact from 'highcharts-react-official'
HC(Highcharts)

export const NgramsChart = ({ data }) => {
    const options = {
        series: [{
            type: 'wordcloud',
            data: data.map(x => ({ name: x.ngram, weight: x.counter })),
            name: 'WordCounts'
        }],
        title: ""
    }
    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ fontWeight: 600 }}>N-grams más mencionados</div>
            <div>
                <p>Un n-grama es una subsecuencia de n elementos de una secuencia dada. En nuestro caso, los discursos son la secuencia.</p>
                <p>Contabilizamos n-gramas con N = [5,6,7]</p>
                <p>Hay frases que suelen repetirse, más de lo que pensamos...</p>
                <p>Los siguientes gráficos contienen el conjunto de los ngramas más mencionados para los casos 5, 6 y 7.</p>
            </div>
            <div style={{ fontWeight: 600, minWidth: "1000px", maxWidth: "1000px", margin: "0 auto" }}>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'chart'}
                    options={options}
                />
            </div>
        </div>)
}

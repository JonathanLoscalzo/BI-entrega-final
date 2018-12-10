import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { data } from './AditionalsStats';
import _ from 'lodash'
import { Colors } from '../../../../constants'

export const WordcountChart = ({ data }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ fontWeight: 600 }}>Palabras más mencionadas</div>
            <div>
                <p>Contabilizamos las palabras más mencionadas de todos los discursos</p>
                <p>Fueron filtradas las "stop-words", son palabras que no tienen significado (artículos, pronombres, preposiciones...)</p>
            </div>
            <div>
                <BarChart
                    data={data}
                    width={600}
                    height={300}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis label="Palabra" hide={true} dataKey="word" />
                    <YAxis />
                    <Tooltip />

                    <Bar label="Cantidad" dataKey="word_count" fill={_.sample(Colors)} />
                </BarChart>
            </div>
        </div>
    )
}
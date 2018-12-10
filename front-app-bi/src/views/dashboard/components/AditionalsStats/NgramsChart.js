import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import _ from 'lodash'
import { Colors } from '../../../../constants'


export const NgramsChart = ({ data }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ fontWeight: 600 }}>N-grams más mencionados</div>
            <div>
                <p>Un n-grama es una subsecuencia de n elementos de una secuencia dada. En nuestro caso, los discursos.</p>
                <p>Contabilizamos n-ramas con N = [5,6,7]</p>
                <p>Hay frases que suelen repetirse</p>
                <p>En el siguiente link, se puede ver un listado más completo "aquí"</p>
                <p>El siguiente gráfico, tiene el conjunto de los ngramas que más se mencionan</p>
            </div>
            <BarChart
                data={data}
                width={600}
                height={300}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis label={"Ngram"} hide={true} dataKey="ngram" />
                <YAxis />

                <Tooltip />

                <Bar label="Cantidad" dataKey="counter" fill={_.sample(Colors)} />
            </BarChart>
        </div>)
}

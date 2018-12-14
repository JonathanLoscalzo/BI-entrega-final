import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import _ from 'lodash'
import { Colors } from '../../../../constants'


export default ({ data, title }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ fontWeight: 600 }}>{title}</div>

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

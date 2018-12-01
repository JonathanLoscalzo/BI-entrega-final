import axios from 'axios'
import moment from 'moment'
import fs from 'fs';
const request = () => (
    axios.get('https://bankersalgo.com/apihistoric2/5bfdb399edcc0/d6f8d1769410fc1fc1bd9fe65e36f99f/USD/2017-12-16').then(
        data => ({ "date": data.data.date, "ARS": data.rates.ARS })
    ).catch(err => null)
)
const init = async () => {
    fs.writeFile('./data/temp.txt', '');
    let startDate = moment(new Date(2018, 1, 1));
    let aux = 1
    const currentDay = moment(new Date());
    while (startDate < currentDay) {
        // console.log(aux);
        // console.log(startDate);
        // console.log(moment(startDate).format("YYYY-MM-DD"));
        fs.appendFile('./data/temp.txt', `${moment(startDate).format("YYYY-MM-DD")},${'dolarr'}\n`);
        startDate = startDate.add(1, 'days')
        aux++

    }
    console.log(await request())
}
init()

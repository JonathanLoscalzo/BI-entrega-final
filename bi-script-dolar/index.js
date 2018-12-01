import axios from 'axios'
import moment from 'moment'
import fs from 'fs';
const request = (date) => (
    axios.get(`https://bankersalgo.com/apihistoric2/5bfdb399edcc0/d6f8d1769410fc1fc1bd9fe65e36f99f/USD/${date}`).then(
        data => data.data.rates.ARS
    ).catch(err => null)
)
const init = async () => {
    let startDate = moment(new Date(2017, 1, 1));
    let aux = 1
    const currentDay = moment(new Date());
    while (startDate < currentDay) {
        fs.appendFile('./data/temp.txt', `${moment(startDate).format("YYYY-MM-DD")},${await request(moment(startDate).format("YYYY-MM-DD"))}\n`);
        startDate = startDate.add(1, 'days')
        aux++
    }
    // console.log(await request())
}
init()

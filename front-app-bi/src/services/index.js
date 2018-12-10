import axios from 'axios';
import { URL } from '../constants';

const mainService = {
    getWordcounts: () =>
        axios({
            method: 'GET',
            url: `${URL}/stats/wordcounts`
        }).then(response => response.data),
    getNgrams: () =>
        axios({
            method: 'GET',
            url: `${URL}/stats/ngrams`
        }).then(response => response.data),
    getCommonStats: () =>
        axios({
            method: 'GET',
            url: `${URL}/stats`
        }).then(response => response.data),
    getSpeechById: (id) =>
        axios({
            method: 'GET',
            url: `${URL}/speeches/${id}`
        }).then(response => response.data),
};

export default mainService;
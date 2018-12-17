import axios from 'axios';
import { URL } from '../constants';

const mainService = {
    getWordcounts: () =>
        axios({
            method: 'GET',
            headers: { 'Access-Control-Allow-Origin': '*' },
            url: `${URL}/stats/wordcounts`
        }).then(response => response.data),
    getNgrams: () =>
        axios({
            method: 'GET',
            headers: { 'Access-Control-Allow-Origin': '*' },
            url: `${URL}/stats/ngrams`
        }).then(response => response.data),
    getCommonStats: () =>
        axios({
            method: 'GET',
            headers: { 'Access-Control-Allow-Origin': '*' },
            url: `${URL}/stats`
        }).then(response => response.data),
    getSpeechById: (id) =>
        axios({
            method: 'GET',
            headers: { 'Access-Control-Allow-Origin': '*' },
            url: `${URL}/speeches/${id}`
        }).then(response => response.data),
};

export default mainService;
import axios from 'axios';
import { URL } from '../../../constants';
export const detailsService = {
  getSpeechById: (id) =>
    axios({
      method: 'GET',
      headers: { 'Access-Control-Allow-Origin': '*' },
      url: `${URL}/speeches/${id}`
    }).then(response => response.data[0])

};

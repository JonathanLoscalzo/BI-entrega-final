import axios from 'axios';
import { URL } from '../../../constants';
export const detailsService = {
  getSpeechById: (id) =>
    axios({
      method: 'GET',
      url: `${URL}/speeches/${id}`
    }).then(response => response.data[0])

};

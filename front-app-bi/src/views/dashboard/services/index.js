import axios from 'axios';
import { URL } from '../../../constants';
export const dashboardService = {
  getdollar: () =>
    axios({
      method: 'GET',
      url: `${URL}/speeches/dollar`
    }).then(response => response.data)

};

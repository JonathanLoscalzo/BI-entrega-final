import axios from 'axios';
import { URL } from '../../../constants';
import { mapObjectToQueryParams } from '../../../helpers/mapObjectToQueryParams';

export const dashboardService = {
  getdollar: (obj) =>
    axios({
      method: 'GET',
      url: `${URL}/speeches/dollar?${mapObjectToQueryParams(obj)}`
    }).then(response => response.data)
};

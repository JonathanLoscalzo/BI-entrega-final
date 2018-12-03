import axios from 'axios';
import { URL } from '../../../constants';
export const listingService = {
  getCatalogProcessId: () =>
    axios({
      method: 'GET',
      url: `${URL}/api/process/CatalogProcess`,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.data[0].id)

};

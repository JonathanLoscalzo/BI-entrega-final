import { dashboardService } from '../services';
import to from '../../../helpers/to'
import { toast } from 'react-toastify';

export const getDollarList = image => {
  return async (dispatch, getState) => {
    try {
      console.log('llega');
      dispatch({
        type: 'GET_CATALOG'
      });

      let idCatalogProcess, products, err;

      console.log(await to(dashboardService.getdollar()));



      dispatch({
        type: 'GET_CATALOG_SUCCESS',
        data: products
      });

    } catch (error) {
      toast.error(error);
      dispatch({
        type: 'GET_CATALOG_ERROR'
      });
    }

  };
};

import { dashboardService } from '../services';
import { toast } from 'react-toastify';

export const getDollarList = image => {
  return async (dispatch, getState) => {
    try {
      console.log('llega');
      dispatch({
        type: 'GET_SPEECHS'
      });
      let speechs = await dashboardService.getdollar();



      dispatch({
        type: 'GET_SPEECHS_SUCCESS',
        data: speechs
      });

    } catch (error) {
      toast.error(error);
      dispatch({
        type: 'GET_SPEECHS_ERROR'
      });
    }

  };
};

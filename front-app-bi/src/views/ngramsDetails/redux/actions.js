import mainService from '../../../services/index';
import {
  GET_NGRAMS_REQUEST,
  GET_NGRAMS_RESPONSE,
  GET_NGRAMS_ERROR
} from './reducer'

export const load = () => async (dispatch) => {
  try {

    dispatch({ type: GET_NGRAMS_REQUEST })

    let ngrams = await mainService.getNgrams()

    dispatch({
      type: GET_NGRAMS_RESPONSE,
      payload: ngrams
    });
  } catch (error) {
    dispatch({
      type: GET_NGRAMS_ERROR
    });
  }
};
import mainService from '../../../services/index';
import {
  GET_WORDCOUNTS_REQUEST,
  GET_WORDCOUNTS_RESPONSE,
  GET_WORDCOUNTS_ERROR
} from './reducer'

export const load = () => async (dispatch) => {
  try {

    dispatch({ type: GET_WORDCOUNTS_REQUEST })

    let wordcounts = await mainService.getWordcounts()

    dispatch({
      type: GET_WORDCOUNTS_RESPONSE,
      payload: wordcounts
    });
    
  } catch (error) {
    dispatch({
      type: GET_WORDCOUNTS_ERROR
    });
  }
};
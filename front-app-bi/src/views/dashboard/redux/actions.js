import { toast } from 'react-toastify';

import { dashboardService } from '../services';
import mainService from '../../../services/index'

import {
  GET_NGRAMS_ERROR, GET_NGRAMS_RESPONSE, GET_NGRAMS_REQUEST,
  GET_WORDCOUNTS_ERROR, GET_WORDCOUNTS_REQUEST, GET_WORDCOUNTS_RESPONSE
} from './reducer'

export const getDollarList = (startDate, endDate) => {
  return async (dispatch, getState) => {
    try {

      dispatch({
        type: 'GET_SPEECHS'
      });

      let speechs;
      if (!!startDate && !!endDate) {
        speechs = await dashboardService.getdollar({ startDate: startDate.format("YYYY-MM-DD"), endDate: endDate.format("YYYY-MM-DD") })
      } else {
        speechs = await dashboardService.getdollar();
      }

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

export const getNgrams = () => {
  return async (dispatch, getState) => {
    try {

      dispatch({
        type: GET_NGRAMS_REQUEST
      });

      let ngrams = await mainService.getNgrams()

      dispatch({
        type: GET_NGRAMS_RESPONSE,
        data: ngrams.ngrams.slice(0, 20)
      });

    } catch (error) {

      toast.error(error);
      dispatch({
        type: GET_NGRAMS_ERROR
      });

    }
  };
};

export const getWordcounts = () => {
  return async (dispatch, getState) => {
    try {

      dispatch({
        type: GET_WORDCOUNTS_REQUEST
      });

      let wordcounts = await mainService.getWordcounts()
      dispatch({
        type: GET_WORDCOUNTS_RESPONSE,
        data: wordcounts.slice(0, 20)
      });

    } catch (error) {

      toast.error(error);
      dispatch({
        type: GET_WORDCOUNTS_ERROR
      });

    }
  };
};

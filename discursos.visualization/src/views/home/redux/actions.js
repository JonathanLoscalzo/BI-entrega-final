import mainService from '../../../services/index';

import {
    GET_COMMON_REQUEST,
    GET_COMMON_RESPONSE,
    GET_COMMON_ERROR,
    GET_NGRAMS_ERROR, GET_NGRAMS_RESPONSE, GET_NGRAMS_REQUEST,
    GET_WORDCOUNTS_ERROR, GET_WORDCOUNTS_REQUEST, GET_WORDCOUNTS_RESPONSE
} from './reducer'

import { toast } from 'react-toastify'

export const load = () => async (dispatch) => {
    try {

        dispatch({ type: GET_COMMON_REQUEST })

        let common = await mainService.getCommonStats()
        dispatch({
            type: GET_COMMON_RESPONSE,
            payload: common
        });
    } catch (error) {
        dispatch({
            type: GET_COMMON_ERROR
        });
    }
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
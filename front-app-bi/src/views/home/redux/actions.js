import mainService from '../../../services/index';
import {
    GET_COMMON_REQUEST,
    GET_COMMON_RESPONSE,
    GET_COMMON_ERROR
} from './reducer'

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
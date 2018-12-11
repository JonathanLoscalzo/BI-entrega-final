import mainService from '../../../services/index';
import {
    LOADED,
} from './reducer'

export const load = () => async (dispatch) => {
    dispatch({
        type: LOADED,
    });
};
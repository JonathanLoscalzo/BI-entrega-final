export const GET_COMMON_REQUEST = 'COMMON/GET_COMMON_REQUEST'
export const GET_COMMON_RESPONSE = 'COMMON/GET_COMMON_RESPONSE'
export const GET_COMMON_ERROR = 'COMMON/GET_COMMON_ERROR'

const initialState = {
  data: null,
  loading: true,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMON_REQUEST:
      return { ...state, loading: true, data: null };
    case GET_COMMON_RESPONSE:
      return { ...state, loading: false, data: action.payload };
    case GET_COMMON_ERROR:
      return { ...state, loading: false, data: null, error: true };
    default:
      return state;
  }
}

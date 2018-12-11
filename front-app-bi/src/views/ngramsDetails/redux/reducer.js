export const GET_NGRAMS_REQUEST = 'NGRAMS/GET_NGRAMS_REQUEST'
export const GET_NGRAMS_RESPONSE = 'NGRAMS/GET_NGRAMS_RESPONSE'
export const GET_NGRAMS_ERROR = 'NGRAMS/GET_NGRAMS_ERROR'

const initialState = {
  data: null,
  loading: true,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NGRAMS_REQUEST:
      return { ...state, loading: true, data: null };
    case GET_NGRAMS_RESPONSE:
      return { ...state, loading: false, data: action.payload };
    case GET_NGRAMS_ERROR:
      return { ...state, loading: false, data: null, error: true };
    default:
      return state;
  }
}

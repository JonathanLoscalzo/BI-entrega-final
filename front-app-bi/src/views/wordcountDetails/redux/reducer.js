export const GET_WORDCOUNTS_REQUEST = 'WORDCOUNTS/GET_WORDCOUNTS_REQUEST'
export const GET_WORDCOUNTS_RESPONSE = 'WORDCOUNTS/GET_WORDCOUNTS_RESPONSE'
export const GET_WORDCOUNTS_ERROR = 'WORDCOUNTS/GET_WORDCOUNTS_ERROR'

const initialState = {
  data: null,
  loading: true,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORDCOUNTS_REQUEST:
      return { ...state, loading: true, data: null };
    case GET_WORDCOUNTS_RESPONSE:
      return { ...state, loading: false, data: action.payload };
    case GET_WORDCOUNTS_ERROR:
      return { ...state, loading: false, data: null, error: true };
    default:
      return state;
  }
}

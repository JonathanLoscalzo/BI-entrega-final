export const GET_COMMON_REQUEST = 'COMMON/GET_COMMON_REQUEST'
export const GET_COMMON_RESPONSE = 'COMMON/GET_COMMON_RESPONSE'
export const GET_COMMON_ERROR = 'COMMON/GET_COMMON_ERROR'

export const GET_NGRAMS_REQUEST = 'COMMON/GET_NGRAMS_REQUEST'
export const GET_NGRAMS_RESPONSE = 'COMMON/GET_NGRAMS_RESPONSE'
export const GET_NGRAMS_ERROR = 'COMMON/GET_NGRAMS_ERROR'

export const GET_WORDCOUNTS_REQUEST = 'COMMON/GET_WORDCOUNTS_REQUEST'
export const GET_WORDCOUNTS_RESPONSE = 'COMMON/GET_WORDCOUNTS_RESPONSE'
export const GET_WORDCOUNTS_ERROR = 'COMMON/GET_WORDCOUNTS_ERROR'

const initialState = {
  data: null,
  ngrams: { data: null, error: false },
  wordcounts: { data: null, error: false },
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

    case GET_NGRAMS_REQUEST:
      return { ...state, ngrams: { data: null, error: false } }
    case GET_NGRAMS_RESPONSE:
      return { ...state, ngrams: { data: action.data, error: false } }
    case GET_NGRAMS_ERROR:
      return { ...state, ngrams: { data: null, error: true } }


    case GET_WORDCOUNTS_REQUEST:
      return { ...state, wordcounts: { data: null, error: false } }
    case GET_WORDCOUNTS_RESPONSE:
      return { ...state, wordcounts: { data: action.data, error: false } }
    case GET_WORDCOUNTS_ERROR:
      return { ...state, wordcounts: { data: null, error: true } }
    default:
      return state;
  }
}

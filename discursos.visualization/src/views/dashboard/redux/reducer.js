import moment from 'moment'

const initialState = {
  speechs: null,
  ngrams: { data: null, error: false },
  wordcounts: { data: null, error: false },
  minDate: moment().year(2015).month(11).date(16),
  maxDate: moment().year(2018).month(11).date(1),
  error: false,
};

export const GET_NGRAMS_REQUEST = 'GET_NGRAMS_REQUEST'
export const GET_NGRAMS_RESPONSE = 'GET_NGRAMS_RESPONSE'
export const GET_NGRAMS_ERROR = 'GET_NGRAMS_ERROR'

export const GET_WORDCOUNTS_REQUEST = 'GET_WORDCOUNTS_REQUEST'
export const GET_WORDCOUNTS_RESPONSE = 'GET_WORDCOUNTS_RESPONSE'
export const GET_WORDCOUNTS_ERROR = 'GET_WORDCOUNTS_ERROR'

export const HANDLE_MINDATE = "HANDLE_MINDATE";
export const HANDLE_MAXDATE = "HANDLE_MAXDATE";

export default function (state = initialState, action) {
  switch (action.type) {

    case 'GET_SPEECHS':
      return { ...state, speechs: null };
    case 'GET_SPEECHS_SUCCESS':
      return { ...state, speechs: action.data, error: false };
    case 'GET_SPEECHS_ERROR':
      return { ...state, speechs: null, error: true };

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

    case HANDLE_MAXDATE:
      return { ...state, maxDate: action.payload };
    case HANDLE_MINDATE:
      return { ...state, minDate: action.payload };
      
    default:
      return state;
  }
}

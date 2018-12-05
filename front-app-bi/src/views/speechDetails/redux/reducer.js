const initialState = {
  speechs: null,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_SPEECHS':
      return { ...state, speechs: null };
    case 'GET_SPEECHS_SUCCESS':
      return { ...state, speechs: action.data, error: false };
    case 'GET_SPEECHS_ERROR':
      return { ...state, speechs: null, error: true };
    default:
      return state;
  }
}

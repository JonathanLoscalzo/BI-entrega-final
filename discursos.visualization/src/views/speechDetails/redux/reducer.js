const initialState = {
  speech: null,
  wordcounts: [],
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'RESET_WORD_COUNT':
      return initialState;
    case 'GET_SPEECHS_BY_ID_SUCCESS':
      return { ...state, wordcounts: [...state.wordcounts, ...action.data.items], speech: action.data, error: false };
    default:
      return state;
  }
}

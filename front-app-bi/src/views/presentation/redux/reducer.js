export const LOADED = 'INFORM/LOADED'

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADED:
      setTimeout(200)
      return { ...state, loading: false };
    default:
      return state;
  }
}

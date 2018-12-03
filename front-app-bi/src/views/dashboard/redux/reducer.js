const initialState = {
  products: null,
  error: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATALOG':
      return { ...state, products: null };
    case 'GET_CATALOG_SUCCESS':
      return { ...state, products: action.data, error: false };
    case 'GET_CATALOG_ERROR':
      return { ...state, products: [], error: true };
    default:
      return state;
  }
}

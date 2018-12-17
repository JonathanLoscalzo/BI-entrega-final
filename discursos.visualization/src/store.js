import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const rootReducer = combineReducers({ ...reducers, routing: routerReducer });
const history = createHistory();

function configureStore(browserHistory) {

  // const persistConfig = {
  //   key: 'root',
  //   storage
  // };

  // const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(routerMiddleware(browserHistory), thunk)
  );

  //let persistor = persistStore(store);

  return { store/*, persistor*/ };
}

export { history };
export default configureStore;

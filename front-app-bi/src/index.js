import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import Dashboard from './views/dashboard';

import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const { store, persistor } = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard} />

        </Switch>
      </Router>
      <ToastContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

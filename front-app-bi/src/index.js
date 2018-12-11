import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';

import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import MomentUtils from '@date-io/moment';
import configureStore, { history } from './store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import registerServiceWorker from './registerServiceWorker';

import Dashboard from './views/dashboard';
import SpeechDetails from './views/speechDetails'
import Ngrams from './views/ngramsDetails/index'
import Wordcounts from './views/wordcountDetails/index'
import Stats from './views/home/index'
import Home from './views/presentation/index'

const { store, persistor } = configureStore(history);

const Footer = () => (
  <footer className="footer-distributed">

    {/* <div class="footer-right">

      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-github"></i></a>

    </div>

    <div class="footer-left">

      <p class="footer-links">
        <a href="#">Home</a>
        ·
					<a href="#">Blog</a>
        ·
					<a href="#">Pricing</a>
        ·
					<a href="#">About</a>
        ·
					<a href="#">Faq</a>
        ·
					<a href="#">Contact</a>
      </p>

      <p>Company Name &copy; 2015</p>
    </div> */}

  </footer>
)

const Layout = (props) => {
  return (
    <div>
      {/* <Headers /> */}
      {props.children}
      <Footer />
    </div>
  )
}

const App = ({ history }) => {
  return (
    <Layout >
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Stats" component={Stats} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Ngrams" component={Ngrams} />
          <Route exact path="/Wordcounts" component={Wordcounts} />
          <Route exact path="/details" component={SpeechDetails} />
        </Switch>
      </Router>
    </Layout>
  )
}

const Index = () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App history={history} />
      </MuiPickersUtilsProvider>
      <ToastContainer />
    </div>
    {/* </PersistGate> */}
  </Provider>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
registerServiceWorker();

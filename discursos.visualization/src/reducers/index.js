import mainReducer from './mainReducer';
import dashboard from '../views/dashboard/redux/reducer';
import speechDetail from '../views/speechDetails/redux/reducer'
import ngramsDetails from '../views/ngramsDetails/redux/reducer';
import wordcounts from '../views/wordcountDetails/redux/reducer'
import common from '../views/home/redux/reducer'
import home from '../views/presentation/redux/reducer'

import { reducer as formReducer } from 'redux-form';
const rootReducer = {
  mainReducer,
  dashboard,
  speechDetail,
  ngrams: ngramsDetails,
  wordcounts,
  common,
  home,
  formReducer
};

export default rootReducer;

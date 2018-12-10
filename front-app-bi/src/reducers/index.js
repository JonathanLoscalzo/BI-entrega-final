import mainReducer from './mainReducer';
import dashboard from '../views/dashboard/redux/reducer';
import speechDetail from '../views/speechDetails/redux/reducer'

import { reducer as formReducer } from 'redux-form';
const rootReducer = {
  mainReducer,
  dashboard,
  speechDetail,
  formReducer
};

export default rootReducer;

import mainReducer from './mainReducer';
import dashboard from '../views/dashboard/redux/reducer';

import { reducer as formReducer } from 'redux-form';
const rootReducer = {
  mainReducer,
  dashboard,
  formReducer
};

export default rootReducer;

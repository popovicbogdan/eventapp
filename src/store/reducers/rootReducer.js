import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import primaryColorReducer from './colorReducer';

const colorReducer = combineReducers({
  primaryColors: primaryColorReducer
});

const rootReducer = combineReducers({
  items: itemsReducer,
  colors: colorReducer
});

export default rootReducer;

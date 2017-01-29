import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  routing,
  settingsReducer
});

export default rootReducer;

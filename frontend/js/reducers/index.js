import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import videos from './videos';

const rootReducer = combineReducers({
  videos,
  routing: routerReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import videoList from './reducer.video-list';

const rootReducer = combineReducers({
  videoList,
  routing: routerReducer
});

export default rootReducer;

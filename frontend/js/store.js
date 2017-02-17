import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
);

export default store;

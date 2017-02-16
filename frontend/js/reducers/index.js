import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

let initialState = {
  test: false
};

function employees(state = initialState, action) {
  return state
}

export default combineReducers({ employees, routing: routerReducer });

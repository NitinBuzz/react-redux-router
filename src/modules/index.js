import { combineReducers } from 'redux'
import counter from './counter'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter
//   ... // rest of your reducers
});

export default createRootReducer;

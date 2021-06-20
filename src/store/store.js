import { createStore } from 'redux';
import { firstReducers } from './reducers/firstReducer';

const store = createStore(
  firstReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

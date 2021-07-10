import { firstReducers } from './reducers/firstReducer';
import { configureStore } from '@reduxjs/toolkit';
import { secondReducers } from './reducers/secondReducer';

const store = configureStore({
  reducer: {
    first: firstReducers,
    second: secondReducers,
  },
});
export default store;
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

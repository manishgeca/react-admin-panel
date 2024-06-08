import { createStore, combineReducers } from 'redux';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  // other reducers can be added here
});

const store = createStore(rootReducer);

export default store;

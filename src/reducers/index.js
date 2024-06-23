// src/reducers/index.js
import { combineReducers } from 'redux';
import cartReducer  from './cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

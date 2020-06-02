import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { expenseReducer } from './expense';

const reducer = combineReducers({
  counter: counterReducer,
  expense: expenseReducer,
});

export const store = configureStore({ reducer });

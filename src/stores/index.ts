import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { expenseReducer } from './expense';

const reducer = combineReducers({
  expense: expenseReducer,
});

export const store = configureStore({ reducer });

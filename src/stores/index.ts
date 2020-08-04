import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { expenseReducer } from './expense';
import { isLoadingReducer } from './loading';

const reducer = combineReducers({
  expense: expenseReducer,
  isLoading: isLoadingReducer,
});

export const store = configureStore({ reducer });

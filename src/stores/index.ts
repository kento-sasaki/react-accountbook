import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { expenseReducer } from './expense';
import { isLoadingReducer } from './loading';
import { deviceReducer } from './device';

const reducer = combineReducers({
  expense: expenseReducer,
  isLoading: isLoadingReducer,
  device: deviceReducer,
});

export const store = configureStore({ reducer });

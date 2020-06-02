import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { AddExpenseFormComponent } from './addExpenseForm';
import { store } from '../stores/index';

export default {
  component: AddExpenseFormComponent,
  title: 'AddExpenseForm',
};

export const addExpense = () => {
  return (
    <Provider store={store}>
      <AddExpenseFormComponent />
    </Provider>
  );
};

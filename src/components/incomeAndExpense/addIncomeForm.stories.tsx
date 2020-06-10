import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { AddIncomeFormComponent } from './addIncomeForm';
import { store } from '../../stores/index';

export default {
  component: AddIncomeFormComponent,
  title: 'AddIncomeForm',
};

export const addIncome = () => {
  return (
    <Provider store={store}>
      <AddIncomeFormComponent />
    </Provider>
  );
};

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { store } from '../../stores/index';
import { ExpensePieChart } from './expensePieChart';

export default {
  component: ExpensePieChart,
  title: 'ExpensePieChart',
};

const tagExpenses = [
  {
    amount: 1000,
    tagLabel: '食費',
  },
  {
    amount: 2000,
    tagLabel: '電気代',
  },
  {
    amount: 3000,
    tagLabel: 'ガス代',
  },
  {
    amount: 4000,
    tagLabel: '水道代',
  },
  {
    amount: 5000,
    tagLabel: '家賃',
  },
];

export const expensePieChart = () => {
  return (
    <Provider store={store}>
      <ExpensePieChart tagExpenses={tagExpenses} />
    </Provider>
  );
};

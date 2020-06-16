import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { store } from '../../stores/index';
import { ExpenseChart } from './charts';

export default {
  component: ExpenseChart,
  title: 'ExpenseCharts',
};

const expense = [
  { date: new Date(2020, 0, 1), formatedDate: '2020/1/1', amount: 400 },
  { date: new Date(2020, 0, 2), formatedDate: '2020/1/2', amount: 1200 },
  { date: new Date(2020, 0, 3), formatedDate: '2020/1/3', amount: 1500 },
  { date: new Date(2020, 0, 4), formatedDate: '2020/1/4', amount: 400 },
  { date: new Date(2020, 0, 5), formatedDate: '2020/1/5', amount: 1500 },
];

export const expenseChart = () => {
  return (
    <Provider store={store}>
      <ExpenseChart expense={expense} />
    </Provider>
  );
};

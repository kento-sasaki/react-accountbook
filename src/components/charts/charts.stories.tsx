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
  {
    id: '1',
    date: new Date(2020, 0, 1),
    formatedDate: '2020/1/1',
    amount: 400,
    tagLabel: 'tag1',
    tagIcon: 'tag',
  },
  {
    id: '2',
    date: new Date(2020, 0, 2),
    formatedDate: '2020/1/2',
    amount: 1200,
    tagLabel: 'tag2',
    tagIcon: 'tag',
  },
  {
    id: '3',
    date: new Date(2020, 0, 3),
    formatedDate: '2020/1/3',
    amount: 1500,
    tagLabel: 'tag3',
    tagIcon: 'tag',
  },
  {
    id: '4',
    date: new Date(2020, 0, 4),
    formatedDate: '2020/1/4',
    amount: 400,
    tagLabel: 'tag4',
    tagIcon: 'tag',
  },
  {
    id: '5',
    date: new Date(2020, 0, 5),
    formatedDate: '2020/1/5',
    amount: 1500,
    tagLabel: 'tag5',
    tagIcon: 'tag',
  },
];

export const expenseChart = () => {
  return (
    <Provider store={store}>
      <ExpenseChart expense={expense} />
    </Provider>
  );
};

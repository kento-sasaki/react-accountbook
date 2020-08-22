import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { Detail } from './detail';
import { store } from '../../stores/index';
import { StoreExpense } from '../../interfaces';

export default {
  component: Detail,
  title: 'Detail',
};

const expense: StoreExpense[] = [
  {
    id: '1',
    date: new Date(2020, 0, 5),
    formatedDate: '2020/1/5',
    amount: 5000,
    tagLabel: '家賃',
    tagIcon: 'home',
  },
  {
    id: '2',
    date: new Date(2020, 0, 4),
    formatedDate: '2020/1/4',
    amount: 4000,
    tagLabel: '水道代',
    tagIcon: 'bath',
  },
  {
    id: '3',
    date: new Date(2020, 0, 3),
    formatedDate: '2020/1/3',
    amount: 3000,
    tagLabel: 'ガス代',
    tagIcon: 'fire',
  },
  {
    id: '4',
    date: new Date(2020, 0, 2),
    formatedDate: '2020/1/2',
    amount: 2000,
    tagLabel: '電気代',
    tagIcon: 'power cord',
  },
  {
    id: '5',
    date: new Date(2020, 0, 1),
    formatedDate: '2020/1/1',
    amount: 1000,
    tagLabel: '食費',
    tagIcon: 'food',
  },
];

export const detail = () => {
  return (
    <Provider store={store}>
      <Detail expense={expense} />
    </Provider>
  );
};

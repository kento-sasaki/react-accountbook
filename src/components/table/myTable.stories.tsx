import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { store } from '../../stores/index';
import { MyTable } from './myTable';

export default {
  component: MyTable,
  title: 'MyTable',
};

const expense = [
  {
    id: '1',
    date: new Date(2020, 0, 1),
    formatedDate: '2020/1/1',
    amount: 1000,
    tagLabel: 'tag1',
    tagIcon: 'tag',
  },
  {
    id: '2',
    date: new Date(2020, 0, 2),
    formatedDate: '2020/1/2',
    amount: 2000,
    tagLabel: 'tag2',
    tagIcon: 'tag',
  },
  {
    id: '3',
    date: new Date(2020, 0, 3),
    formatedDate: '2020/1/3',
    amount: 3000,
    tagLabel: 'tag3',
    tagIcon: 'tag',
  },
  {
    id: '4',
    date: new Date(2020, 0, 4),
    formatedDate: '2020/1/4',
    amount: 4000,
    tagLabel: 'tag4',
    tagIcon: 'tag',
  },
  {
    id: '5',
    date: new Date(2020, 0, 5),
    formatedDate: '2020/1/5',
    amount: 5000,
    tagLabel: 'tag5',
    tagIcon: 'tag',
  },
];

export const myTable = () => {
  return (
    <Provider store={store}>
      <Table>
        <Table.Body>
          <MyTable expense={expense} />
        </Table.Body>
      </Table>
    </Provider>
  );
};

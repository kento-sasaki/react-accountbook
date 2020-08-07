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
  { id: '1', date: new Date(2020, 0, 1), formatedDate: '2020/1/1', amount: 1000, tag: 'tag1' },
  { id: '2', date: new Date(2020, 0, 2), formatedDate: '2020/1/2', amount: 2000, tag: 'tag2' },
  { id: '3', date: new Date(2020, 0, 3), formatedDate: '2020/1/3', amount: 3000, tag: 'tag3' },
  { id: '4', date: new Date(2020, 0, 4), formatedDate: '2020/1/4', amount: 4000, tag: 'tag4' },
  { id: '5', date: new Date(2020, 0, 5), formatedDate: '2020/1/5', amount: 5000, tag: 'tag5' },
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

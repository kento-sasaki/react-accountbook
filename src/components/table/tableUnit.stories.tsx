import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { store } from '../../stores/index';
import { MyTableUnit } from './myTableUnit';

export default {
  component: MyTableUnit,
  title: 'MyTableUnit',
};

const expense = { id: '0', date: new Date(2020, 0, 1), formatedDate: '2020/1/1', amount: 10000 };

export const myTableUnit = () => {
  return (
    <Provider store={store}>
      <Table>
        <Table.Body>
          <MyTableUnit expense={expense} />
        </Table.Body>
      </Table>
    </Provider>
  );
};

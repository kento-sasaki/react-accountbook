/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Table } from 'semantic-ui-react';
import { MyTableUnit } from '../../containers/table/myTableUnit';
import { StoreExpense } from '../../interfaces';

interface MyTableProps {
  expense: StoreExpense[];
}

export const MyTable: FC<MyTableProps> = ({ expense }) => {
  return (
    <Table basic="very" data-testid="expense-table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={3} content="Date" />
          <Table.HeaderCell width={3} content="Amount" />
          <Table.HeaderCell width={4} content="Tag" />
          <Table.HeaderCell width={6} content="Action" />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {expense.map((exp) => (
          <MyTableUnit expense={exp} key={exp.id} />
        ))}
      </Table.Body>
    </Table>
  );
};

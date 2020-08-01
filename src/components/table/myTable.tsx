/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Table } from 'semantic-ui-react';
import { MyTableUnit } from '../../containers/myTableUnit';
import { Expense } from '../../interfaces';

interface MyTableProps {
  expense: Expense[];
}

export const MyTable: FC<MyTableProps> = ({ expense }) => {
  return (
    <Table basic="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={5} content="Date" />
          <Table.HeaderCell width={5} content="Amount" />
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

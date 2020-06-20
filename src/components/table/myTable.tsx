/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Table } from 'semantic-ui-react';
import { MyTableUnit } from './myTableUnit';
import { Expense } from '../../interfaces';

interface MyTableProps {
  expense: Expense[];
}

export const MyTable: FC<MyTableProps> = ({ expense }) => {
  const createReversedArray = (array: Expense[]) => {
    const tempArr: Expense[] = [];

    array.forEach((element) => {
      tempArr.unshift(element);
    });

    return tempArr;
  };

  return (
    <Table basic="very" fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell content="Date" />
          <Table.HeaderCell content="Amount" />
          <Table.HeaderCell content="Action" />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {createReversedArray(expense).map((exp) => (
          <MyTableUnit expense={exp} key={exp.id} />
        ))}
      </Table.Body>
    </Table>
  );
};

/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Table } from 'semantic-ui-react';
import { Expense } from '../../interfaces';
import { ActionButton } from './actionButton';

interface MyTableUnitProps {
  expense: Expense;
}

export const MyTableUnit: FC<MyTableUnitProps> = ({ expense }) => {
  return (
    <Table.Row>
      <Table.Cell content={expense.formatedDate} />
      <Table.Cell content="Expense" />
      <Table.Cell content={expense.amount} />
      <Table.Cell>
        <ActionButton />
      </Table.Cell>
    </Table.Row>
  );
};

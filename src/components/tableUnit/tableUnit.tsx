/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Table, Dropdown } from 'semantic-ui-react';
import { Expense } from '../../interfaces';

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
        <Dropdown text="Action">
          <Dropdown.Menu>
            <Dropdown.Item text="Edit" />
            <Dropdown.Item text="Delete" />
          </Dropdown.Menu>
        </Dropdown>
      </Table.Cell>
    </Table.Row>
  );
};

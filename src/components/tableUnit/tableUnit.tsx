/** @jsx jsx */
import React, { FC, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Table, Button, Dropdown, Input } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { Expense } from '../../interfaces';

interface MyTableUnitProps {
  expense: Expense;
}

export const MyTableUnit: FC<MyTableUnitProps> = ({ expense }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const dateOptions = [...Array(30).keys()].map((n) => {
    return {
      text: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
      value: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
    };
  });

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  return (
    <Table.Row>
      <Table.Cell
        content={
          isEditable ? (
            <Dropdown
              css={css`
                min-width: 9rem !important;
              `}
              compact
              placeholder="Date"
              selection
              options={dateOptions}
              defaultValue={
                dateOptions[dateOptions.map((obj) => obj.text).indexOf(expense.formatedDate)].value
              }
              // onChange={handleChangeDate}
            />
          ) : (
            expense.formatedDate
          )
        }
      />
      <Table.Cell content={isEditable ? <Input value={expense.amount} /> : expense.amount} />
      <Table.Cell>
        {isEditable ? (
          <Button content="Save" icon="save" color="teal" onClick={handleSaveClick} />
        ) : (
          <Button basic content="Edit" icon="edit" color="teal" onClick={handleEditClick} />
        )}

        <Button basic content="Delete" icon="trash" color="red" />
      </Table.Cell>
    </Table.Row>
  );
};

/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import {
  Table,
  Button,
  Dropdown,
  Input,
  InputOnChangeData,
  DropdownProps,
} from 'semantic-ui-react';
import dayjs from 'dayjs';
import { Expense } from '../../interfaces';

interface MyTableUnitProps {
  expense?: Expense;
  isEditable?: boolean;
  handleChangeAmount?: (e: FormEvent, { key }: InputOnChangeData) => void;
  handleChangeDate?: (e: FormEvent, { key }: DropdownProps) => void;
  handleEditClick?: () => void;
  handleCancelClick?: () => void;
  handleSaveClick?: () => void;
  amount?: string;
  dateOptions?: { key: number; text: string; value: string }[];
}

export const MyTableUnitComponent: FC<MyTableUnitProps> = ({
  expense = {
    id: '0',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: '',
  },
  isEditable = false,
  handleChangeAmount = () => {},
  handleChangeDate = () => {},
  handleEditClick = () => {},
  handleCancelClick = () => {},
  handleSaveClick = () => {},
  amount = '',
  dateOptions = [{ key: 0, text: 'Date', value: 'Date' }],
}) => {
  if (isEditable) {
    return (
      <Table.Row>
        <Table.Cell
          content={
            <Dropdown
              css={css`
                min-width: 9rem !important;
              `}
              placeholder="Date"
              selection
              options={dateOptions}
              defaultValue={
                dateOptions[dateOptions.map((obj) => obj.text).indexOf(expense.formatedDate)].value
              }
              onChange={handleChangeDate}
            />
          }
        />
        <Table.Cell content={<Input value={amount} onChange={handleChangeAmount} />} />
        <Table.Cell>
          <Button content="Save" icon="save" color="teal" onClick={handleSaveClick} />
          <Button basic content="Cancel" icon="cancel" color="grey" onClick={handleCancelClick} />
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Table.Row>
      <Table.Cell content={expense.formatedDate} />
      <Table.Cell content={expense.amount} />
      <Table.Cell>
        <Button basic content="Edit" icon="edit" color="teal" onClick={handleEditClick} />
        <Button basic content="Delete" icon="trash" color="red" />
      </Table.Cell>
    </Table.Row>
  );
};

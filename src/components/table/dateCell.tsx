/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Table, Dropdown, DropdownProps } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { Expense } from '../../interfaces';

interface DateCellProps {
  expense?: Expense;
  isEditable?: boolean;
  handleChangeDate?: (e: FormEvent, { key }: DropdownProps) => void;
  dateOptions?: { key: number; text: string; value: number }[];
}

export const DateCellComponent: FC<DateCellProps> = ({
  expense = {
    id: '0',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: '',
  },
  isEditable = false,
  handleChangeDate = () => {},
  dateOptions = [{ key: 0, text: 'Date', value: 0 }],
}) => {
  if (isEditable) {
    return (
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
    );
  }

  return <Table.Cell content={expense.formatedDate} />;
};

/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Table, Input, InputOnChangeData } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { StoreExpense } from '../../interfaces';

interface Props {
  expense?: StoreExpense;
  isEditable?: boolean;
  handleChangeAmount?: (e: FormEvent, { key }: InputOnChangeData) => void;
  amount?: string;
}

export const AmountCellComponent: FC<Props> = ({
  expense = {
    id: '0',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: 0,
  },
  isEditable = false,
  handleChangeAmount = () => {},
  amount = '',
}) => {
  if (isEditable) {
    return (
      <Table.Cell
        content={
          <Input
            css={css`
              max-width: 7rem !important;
            `}
            value={amount}
            onChange={handleChangeAmount}
          />
        }
      />
    );
  }

  return <Table.Cell content={expense.amount} />;
};

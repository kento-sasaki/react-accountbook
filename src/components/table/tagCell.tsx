/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Table, Input, InputOnChangeData } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { Expense } from '../../interfaces';

interface TagCellProps {
  expense?: Expense;
  isEditable?: boolean;
  handleChangeTag?: (e: FormEvent, { key }: InputOnChangeData) => void;
  tag?: string;
}

export const TagCellComponent: FC<TagCellProps> = ({
  expense = {
    id: '0',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: 0,
    tag: '',
  },
  isEditable = false,
  handleChangeTag = () => {},
  tag = '',
}) => {
  if (isEditable) {
    return (
      <Table.Cell
        content={
          <Input
            css={css`
              max-width: 7rem !important;
            `}
            value={tag}
            onChange={handleChangeTag}
          />
        }
      />
    );
  }

  return <Table.Cell content={expense.tag} />;
};

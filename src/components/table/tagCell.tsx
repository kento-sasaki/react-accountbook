/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { Table, Label, Dropdown, DropdownProps } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { StoreExpense } from '../../interfaces';

interface TagCellProps {
  expense?: StoreExpense;
  isEditable?: boolean;
  handleChangeTag?: (e: FormEvent, { key }: DropdownProps) => void;
}

export const tagOptions = [
  { key: 0, text: '食費', value: '食費', icon: 'food' },
  { key: 1, text: 'その他', value: 'その他', icon: 'tag' },
];

export const TagCellComponent: FC<TagCellProps> = ({
  expense = {
    id: '0',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: 0,
    tagLabel: 'その他',
    tagIcon: 'tag',
  },
  isEditable = false,
  handleChangeTag = () => {},
}) => {
  if (isEditable) {
    return (
      <Table.Cell
        content={
          <Dropdown
            placeholder="Select tag"
            fluid
            selection
            options={tagOptions}
            onChange={handleChangeTag}
            defaultValue={expense.tagLabel}
          />
        }
      />
    );
  }

  return (
    <Table.Cell
      content={<Label icon={expense.tagIcon} content={expense.tagLabel} size="large" basic />}
    />
  );
};

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
  { key: 0, text: '食費', value: '食費', icon: 'food', color: '#049C94', colorLabel: 'teal' },
  { key: 1, text: '家賃', value: '家賃', icon: 'home', color: '#5929BB', colorLabel: 'violet' },
  {
    key: 2,
    text: '電気代',
    value: '電気代',
    icon: 'power cord',
    color: '#EBAE00',
    colorLabel: 'yellow',
  },
  { key: 3, text: '水道代', value: '水道代', icon: 'bath', color: '#1778C1', colorLabel: 'blue' },
  { key: 4, text: 'ガス代', value: 'ガス代', icon: 'fire', color: '#D11A1A', colorLabel: 'red' },
  { key: 5, text: '電話', value: '電話', icon: 'phone', color: '#F36203', colorLabel: 'orange' },
  {
    key: 6,
    text: '交通費',
    value: '交通費',
    icon: 'subway',
    color: '#13AB38',
    colorLabel: 'green',
  },
  { key: 7, text: 'その他', value: 'その他', icon: 'tag', color: '#838383', colorLabel: 'grey' },
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
  const tagColorLabel = tagOptions[tagOptions.map((tag) => tag.icon).indexOf(expense.tagIcon)]
    .colorLabel as
    | 'green'
    | 'grey'
    | 'teal'
    | 'violet'
    | 'yellow'
    | 'blue'
    | 'red'
    | 'orange'
    | 'olive'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'black';

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
      content={
        <Label
          icon={expense.tagIcon}
          color={tagColorLabel}
          content={expense.tagLabel}
          size="large"
          basic
        />
      }
    />
  );
};

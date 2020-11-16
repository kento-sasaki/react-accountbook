/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { Table, Label, Dropdown, DropdownProps } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { StoreExpense } from '../../interfaces';
import { tagOptions, getColorLabel } from '../../utils/utils';

interface Props {
  expense?: StoreExpense;
  isEditable?: boolean;
  handleChangeTag?: (e: FormEvent, { key }: DropdownProps) => void;
}

export const TagCellComponent: FC<Props> = ({
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
  const tagColorlabel = getColorLabel(expense.tagIcon);

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
            data-testid="tag-text"
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
          color={tagColorlabel}
          content={expense.tagLabel}
          size="large"
          basic
        />
      }
    />
  );
};

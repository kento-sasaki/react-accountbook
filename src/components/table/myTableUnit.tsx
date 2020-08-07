/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { Table, InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { DateCellComponent } from './dateCell';
import { AmountCellComponent } from './amountCell';
import { TagCellComponent } from './tagCell';
import { ActionsCellComponent } from './actionsCell';
import { Expense } from '../../interfaces';

interface MyTableUnitProps {
  expense?: Expense;
  isEditable?: boolean;
  isOpen?: boolean;
  handleChangeAmount?: (e: FormEvent, { key }: InputOnChangeData) => void;
  handleChangeDate?: (e: FormEvent, { key }: DropdownProps) => void;
  handleChangeTag?: (e: FormEvent, { key }: InputOnChangeData) => void;
  handleEditClick?: () => void;
  openConfirm?: () => void;
  closeConfirm?: () => void;
  handleEditCancelClick?: () => void;
  handleSaveClick?: () => void;
  handleDeleteClick?: () => void;
  amount?: string;
  dateOptions?: { key: number; text: string; value: string }[];
  tag?: string;
}

export const MyTableUnitComponent: FC<MyTableUnitProps> = ({
  expense = {
    id: '0',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: 0,
    tag: '',
  },
  isEditable = false,
  isOpen = false,
  handleChangeAmount = () => {},
  handleChangeDate = () => {},
  handleChangeTag = () => {},
  handleEditClick = () => {},
  handleEditCancelClick = () => {},
  openConfirm = () => {},
  closeConfirm = () => {},
  handleSaveClick = () => {},
  handleDeleteClick = () => {},
  amount = '',
  dateOptions = [{ key: 0, text: 'Date', value: 'Date' }],
  tag = '',
}) => {
  return (
    <Table.Row>
      <DateCellComponent
        expense={expense}
        isEditable={isEditable}
        handleChangeDate={handleChangeDate}
        dateOptions={dateOptions}
      />
      <AmountCellComponent
        expense={expense}
        isEditable={isEditable}
        handleChangeAmount={handleChangeAmount}
        amount={amount}
      />
      <TagCellComponent
        expense={expense}
        isEditable={isEditable}
        handleChangeTag={handleChangeTag}
        tag={tag}
      />
      <ActionsCellComponent
        isEditable={isEditable}
        isOpen={isOpen}
        handleEditClick={handleEditClick}
        handleEditCancelClick={handleEditCancelClick}
        openConfirm={openConfirm}
        closeConfirm={closeConfirm}
        handleSaveClick={handleSaveClick}
        handleDeleteClick={handleDeleteClick}
      />
    </Table.Row>
  );
};

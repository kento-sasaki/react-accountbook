/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { Table, InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { DateCellComponent } from './dateCell';
import { AmountCellComponent } from './amountCell';
import { TagCellComponent } from './tagCell';
import { ActionsCellComponent } from './actionsCell';
import { StoreExpense } from '../../interfaces';

interface MyTableUnitProps {
  expense?: StoreExpense;
  isEditable?: boolean;
  isOpen?: boolean;
  handleChangeAmount?: (e: FormEvent, { key }: InputOnChangeData) => void;
  handleChangeDate?: (e: FormEvent, { key }: DropdownProps) => void;
  handleChangeTag?: (e: FormEvent, { key }: DropdownProps) => void;
  handleEditClick?: () => void;
  openConfirm?: () => void;
  closeConfirm?: () => void;
  handleEditCancelClick?: () => void;
  handleSaveClick?: () => void;
  handleDeleteClick?: () => void;
  amount?: string;
  dateOptions?: { key: number; text: string; value: number }[];
}

export const MyTableUnitComponent: FC<MyTableUnitProps> = ({
  expense = {
    id: '0',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: 0,
    tagLabel: 'その他',
    tagIcon: 'tag',
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
  dateOptions = [{ key: 0, text: 'Date', value: 0 }],
}) => {
  return (
    <Table.Row data-testid="table-unit">
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
      />
      <ActionsCellComponent
        isEditable={isEditable}
        isOpen={isOpen}
        amount={amount}
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

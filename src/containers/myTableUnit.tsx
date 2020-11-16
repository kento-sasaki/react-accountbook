/** @jsx jsx */
import React, { FC, useState, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { StoreExpense } from '../interfaces';
import { updateExpense, deleteExpense } from '../firebase/firestore';
import { MyTableUnitComponent } from '../components/table/myTableUnit';
import { createDateOptions } from '../utils/utils';

interface Props {
  expense: StoreExpense;
}

export const MyTableUnit: FC<Props> = ({ expense }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(expense.date);
  const [amount, setAmount] = useState<string>(`${expense.amount}`);
  const [tag, setTag] = useState<string>(expense.tagLabel);

  const handleChangeDate = (e: FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'number') {
      setDate(dayjs().subtract(value, 'day').toDate());
    }
  };

  const handleChangeAmount = (e: FormEvent, { value }: InputOnChangeData) => {
    setAmount(value);
  };

  const handleChangeTag = (e: FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'string') {
      setTag(value);
    }
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const openConfirm = () => {
    setIsOpen(true);
  };

  const handleEditCancelClick = () => {
    setIsEditable(false);
  };

  const closeConfirm = () => {
    setIsOpen(false);
  };

  const handleSaveClick = async () => {
    await updateExpense(expense.id, Number(amount), date, tag);
    setIsEditable(false);
  };

  const handleDeleteClick = async () => {
    await deleteExpense(expense.id);
    setIsOpen(false);
  };

  const dateOptions = createDateOptions(31);

  return (
    <MyTableUnitComponent
      expense={expense}
      isEditable={isEditable}
      isOpen={isOpen}
      handleChangeAmount={handleChangeAmount}
      handleChangeDate={handleChangeDate}
      handleChangeTag={handleChangeTag}
      handleEditClick={handleEditClick}
      handleEditCancelClick={handleEditCancelClick}
      openConfirm={openConfirm}
      closeConfirm={closeConfirm}
      handleSaveClick={handleSaveClick}
      handleDeleteClick={handleDeleteClick}
      amount={amount}
      dateOptions={dateOptions}
    />
  );
};

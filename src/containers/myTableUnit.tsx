/** @jsx jsx */
import React, { FC, useState, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { useDispatch } from 'react-redux';
import { InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { Expense } from '../interfaces';
import { updateExpense, deleteExpense } from '../firebase/firestore';
import { fetchExpense } from '../stores/expense';
import { MyTableUnitComponent } from '../components/table/myTableUnit';

interface MyTableUnitProps {
  expense: Expense;
}

export const MyTableUnit: FC<MyTableUnitProps> = ({ expense }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>(`${expense.amount}`);
  const [date, setDate] = useState<Date>(expense.date);
  const dispatch = useDispatch();

  const handleChangeAmount = (e: FormEvent, { value }: InputOnChangeData) => {
    setAmount(value);
  };

  const handleChangeDate = (e: FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'string') {
      setDate(dayjs(value).toDate());
    }
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleEditCancelClick = () => {
    setIsEditable(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSaveClick = async () => {
    await updateExpense(expense.id, Number(amount), date);
    setIsEditable(false);
    await dispatch(fetchExpense());
  };

  const handleDeleteClick = async () => {
    console.log(1);
    await deleteExpense(expense.id);
    setIsOpen(false);
    await dispatch(fetchExpense());
    console.log(2);
  };

  const dateOptions = [...Array(30).keys()].map((n) => {
    return {
      key: n,
      text: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
      value: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
    };
  });

  return (
    <MyTableUnitComponent
      expense={expense}
      isEditable={isEditable}
      isOpen={isOpen}
      handleChangeAmount={handleChangeAmount}
      handleChangeDate={handleChangeDate}
      handleEditClick={handleEditClick}
      handleEditCancelClick={handleEditCancelClick}
      openModal={openModal}
      closeModal={closeModal}
      handleSaveClick={handleSaveClick}
      handleDeleteClick={handleDeleteClick}
      amount={amount}
      dateOptions={dateOptions}
    />
  );
};

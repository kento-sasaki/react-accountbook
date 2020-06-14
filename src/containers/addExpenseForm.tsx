/** @jsx jsx */
import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { jsx } from '@emotion/core';
import dayjs from 'dayjs';
import { InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import { AddExpenseFormComponent } from '../components/incomeAndExpense/addExpenseForm';
import { addExpense } from '../firebase/firestore';
import { fetchExpense } from '../stores/expense';

export const AddExpenseForm: FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const dispatch = useDispatch();

  const handleChangeAmount = (e: FormEvent, { value }: InputOnChangeData) => {
    setAmount(value);
  };

  const handleChangeDate = (e: FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'number') {
      setDate(dayjs().subtract(value, 'day').toDate());
    }
  };

  const handleClick = () => {
    addExpense(Number(amount), date);
    setAmount('');
    dispatch(fetchExpense());
  };

  const dateOptions = [...Array(30).keys()].map((n) => {
    return {
      text: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
      value: n,
    };
  });

  return (
    <AddExpenseFormComponent
      handleChangeAmount={handleChangeAmount}
      handleChangeDate={handleChangeDate}
      handleClick={handleClick}
      amount={amount}
      dateOptions={dateOptions}
    />
  );
};

/** @jsx jsx */
import React, { FC, useState, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import dayjs from 'dayjs';
import { InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import { AddExpenseFormComponent } from '../components/expense/addExpenseForm';
import { addExpense } from '../firebase/firestore';
import { createDateOptions, tagOptions } from '../utils/utils';

export const AddExpenseForm: FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [tag, setTag] = useState<string>('その他');

  const handleChangeAmount = (e: FormEvent, { value }: InputOnChangeData) => {
    setAmount(value);
  };

  const handleChangeDate = (e: FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'number') {
      setDate(dayjs().subtract(value, 'day').toDate());
    }
  };

  const handleChangeTag = (e: FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'string') {
      setTag(value);
    }
  };

  const handleClick = async () => {
    await addExpense(Number(amount), date, tag);
    setAmount('');
    setTag('その他');
  };

  const dateOptions = createDateOptions(31);

  return (
    <AddExpenseFormComponent
      handleChangeAmount={handleChangeAmount}
      handleChangeDate={handleChangeDate}
      handleChangeTag={handleChangeTag}
      handleClick={handleClick}
      amount={amount}
      date={date}
      tag={tag}
      dateOptions={dateOptions}
      tagOptions={tagOptions}
    />
  );
};

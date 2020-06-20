/** @jsx jsx */
import React, { FC, useState, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { useDispatch } from 'react-redux';
import {
  Table,
  Button,
  Dropdown,
  Input,
  InputOnChangeData,
  DropdownProps,
} from 'semantic-ui-react';
import dayjs from 'dayjs';
import { Expense } from '../../interfaces';
import { updateExpense } from '../../firebase/firestore';
import { fetchExpense } from '../../stores/expense';

interface MyTableUnitProps {
  expense: Expense;
}

export const MyTableUnit: FC<MyTableUnitProps> = ({ expense }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
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

  const handleCancelClick = () => {
    setIsEditable(false);
  };

  const handleSaveClick = async () => {
    await updateExpense(expense.id, Number(amount), date);
    setIsEditable(false);
    await dispatch(fetchExpense());
  };

  const dateOptions = [...Array(30).keys()].map((n) => {
    return {
      key: n,
      text: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
      value: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
    };
  });

  if (isEditable) {
    return (
      <Table.Row>
        <Table.Cell
          content={
            <Dropdown
              css={css`
                min-width: 9rem !important;
              `}
              placeholder="Date"
              selection
              options={dateOptions}
              defaultValue={
                dateOptions[dateOptions.map((obj) => obj.text).indexOf(expense.formatedDate)].value
              }
              onChange={handleChangeDate}
            />
          }
        />
        <Table.Cell content={<Input value={amount} onChange={handleChangeAmount} />} />
        <Table.Cell>
          <Button content="Save" icon="save" color="teal" onClick={handleSaveClick} />
          <Button basic content="Cancel" icon="cancel" color="grey" onClick={handleCancelClick} />
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Table.Row>
      <Table.Cell content={expense.formatedDate} />
      <Table.Cell content={expense.amount} />
      <Table.Cell>
        <Button basic content="Edit" icon="edit" color="teal" onClick={handleEditClick} />
        <Button basic content="Delete" icon="trash" color="red" />
      </Table.Cell>
    </Table.Row>
  );
};

/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Input, Button, Dropdown, DropdownProps, InputOnChangeData } from 'semantic-ui-react';

const margin = css`
  margin: 0.5rem;
  display: flex;
`;

interface AddExpenseFormProps {
  handleChangeAmount?: (e: FormEvent, { key }: InputOnChangeData) => void;
  handleChangeDate?: (e: FormEvent, { key }: DropdownProps) => void;
  handleClick?: () => void;
  amount?: string;
  dateOptions?: { key: number; text: string; value: number }[];
}

export const AddExpenseFormComponent: FC<AddExpenseFormProps> = ({
  handleClick = () => {},
  handleChangeAmount = () => {},
  handleChangeDate = () => {},
  amount = '',
  dateOptions = [{ key: 0, text: 'Date', value: 'Date' }],
}) => {
  return (
    <div css={margin}>
      <Input action onChange={handleChangeAmount} placeholder="Expense" value={amount}>
        <input />
        <Dropdown
          css={css`
            min-width: 9rem !important;
          `}
          placeholder="Date"
          selection
          options={dateOptions}
          onChange={handleChangeDate}
          fluid
        />
        <Button
          color="teal"
          onClick={handleClick}
          content="Submit"
          disabled={!(/\d+/giu.test(amount) && !/[a-z]+/giu.test(amount))}
        />
      </Input>
    </div>
  );
};

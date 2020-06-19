/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Input, Button, Dropdown, DropdownProps, InputOnChangeData } from 'semantic-ui-react';

const margin = css`
  margin: 0.5rem;
`;

interface AddIncomeFormProps {
  handleChangeAmount?: (e: FormEvent, { value }: InputOnChangeData) => void;
  handleChangeDate?: (e: FormEvent, { value }: DropdownProps) => void;
  handleClick?: () => void;
  amount?: string;
  dateOptions?: { text: string; value: number }[];
}

export const AddIncomeFormComponent: FC<AddIncomeFormProps> = ({
  handleClick = () => {},
  handleChangeAmount = () => {},
  handleChangeDate = () => {},
  amount = '',
  dateOptions = [{ text: 'Date', value: 0 }],
}) => {
  return (
    <div css={margin}>
      <Input
        // icon="yen"
        // iconPosition="left"
        action
        onChange={handleChangeAmount}
        placeholder="Income"
        value={amount}
      >
        <input />
        <Dropdown
          css={css`
            min-width: 9rem !important;
          `}
          compact
          placeholder="Date"
          selection
          options={dateOptions}
          onChange={handleChangeDate}
        />
        <Button
          positive
          onClick={handleClick}
          content="Submit"
          disabled={!(/\d+/giu.test(amount) && !/[a-z]+/giu.test(amount))}
          attached="right"
        />
      </Input>
    </div>
  );
};

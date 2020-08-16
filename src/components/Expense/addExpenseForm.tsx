/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import dayjs from 'dayjs';
import { Input, Button, Dropdown, DropdownProps, InputOnChangeData } from 'semantic-ui-react';

const wrapper = css`
  margin: 0.5rem;
  display: flex;
`;

const margin = css`
  margin: 0.5rem !important;
`;

interface AddExpenseFormProps {
  handleChangeAmount?: (e: FormEvent, { key }: InputOnChangeData) => void;
  handleChangeDate?: (e: FormEvent, { key }: DropdownProps) => void;
  handleChangeTag?: (e: FormEvent, { key }: DropdownProps) => void;
  handleClick?: () => void;
  amount?: string;
  date?: Date;
  tag?: string;
  dateOptions?: { key: number; text: string; value: number }[];
  tagOptions?: {
    key: number;
    text: string;
    value: string;
    icon: string;
    color: string;
    colorLabel: string;
  }[];
}

export const AddExpenseFormComponent: FC<AddExpenseFormProps> = ({
  handleClick = () => {},
  handleChangeAmount = () => {},
  handleChangeDate = () => {},
  handleChangeTag = () => {},
  amount = '',
  date = new Date(),
  tag = '',
  dateOptions = [{ key: 0, text: 'Date', value: 'Date' }],
  tagOptions = [
    { key: 0, text: 'その他', value: 'その他', icon: 'tag', color: '#838383', colorLabel: 'grey' },
  ],
}) => {
  return (
    <div css={wrapper}>
      <Input
        css={margin}
        icon="jpy"
        iconPosition="left"
        onChange={handleChangeAmount}
        placeholder="Expense"
        value={amount}
      />
      <Dropdown
        css={css`
          ${margin}
          min-width: 11rem !important;
        `}
        button
        selection
        className="icon"
        labeled
        icon="calendar alternate outline"
        text={dayjs(date).format('YYYY/MM/DD')}
        options={dateOptions}
        onChange={handleChangeDate}
      />
      <Dropdown
        css={css`
          ${margin}
          min-width: 9rem !important;
        `}
        button
        selection
        className="icon"
        labeled
        icon="tag"
        text={tag}
        options={tagOptions}
        onChange={handleChangeTag}
      />
      <Button
        css={margin}
        color="teal"
        onClick={handleClick}
        content="Submit"
        disabled={!(/\d+/giu.test(amount) && !/[a-z]+/giu.test(amount))}
      />
    </div>
  );
};

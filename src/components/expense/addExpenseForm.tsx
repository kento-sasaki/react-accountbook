/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import dayjs from 'dayjs';
import { Input, Button, Dropdown, Grid, DropdownProps, InputOnChangeData } from 'semantic-ui-react';

const displayFlex = css`
  display: flex;
`;

const padding = (x: number, y: number) => css`
  padding: ${y}rem ${x}rem !important;
`;

const margin = (top: number, right: number, bottom: number, left: number) => css`
  margin: ${top}rem ${right}rem ${bottom}rem ${left}rem !important;
`;

interface Props {
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
    colorlabel: string;
  }[];
}

export const AddExpenseFormComponent: FC<Props> = ({
  handleClick = () => {},
  handleChangeAmount = () => {},
  handleChangeDate = () => {},
  handleChangeTag = () => {},
  amount = '',
  date = new Date(),
  tag = '',
  dateOptions = [{ key: 0, text: 'Date', value: 'Date' }],
  tagOptions = [
    { key: 0, text: 'その他', value: 'その他', icon: 'tag', color: '#838383', colorlabel: 'grey' },
  ],
}) => {
  return (
    <Grid columns="equal" data-testid="add-expense-form">
      <Grid.Row stretched>
        <Grid.Column
          width={12}
          css={css`
            ${padding(0, 0)}
            ${margin(0, 0.2, 0, 1)}
          `}
        >
          <Input
            css={margin(0.1, 0.1, 0.1, 0.1)}
            icon="jpy"
            iconPosition="left"
            onChange={handleChangeAmount}
            placeholder="Expense"
            value={amount}
          />
          <div css={displayFlex}>
            <Dropdown
              css={css`
                ${margin(0.1, 0.1, 0.1, 0.1)}
                min-width: 11rem !important;
              `}
              button
              selection
              className="icon"
              labeled
              fluid
              icon="calendar alternate outline"
              text={dayjs(date).format('YYYY/MM/DD')}
              options={dateOptions}
              onChange={handleChangeDate}
            />
            <Dropdown
              css={css`
                ${margin(0.1, 0.1, 0.1, 0.1)}
                min-width: 9rem !important;
              `}
              button
              selection
              fluid
              className="icon"
              labeled
              icon="tag"
              text={tag}
              options={tagOptions}
              onChange={handleChangeTag}
              data-testid="tag-text"
            />
          </div>
        </Grid.Column>

        <Grid.Column
          css={css`
            ${padding(0, 0)}
            ${margin(0, 1, 0, 0.2)}
          `}
        >
          <Button
            color="teal"
            onClick={handleClick}
            content="Submit"
            disabled={!(/\d+/giu.test(amount) && !/[a-z]+/giu.test(amount))}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

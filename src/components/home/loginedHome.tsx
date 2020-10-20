/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Segment, Grid, Header, Divider, Message } from 'semantic-ui-react';
import { ExpenseBarChart } from '../charts/expenseBarChart';
import { ExpensePieChart } from '../charts/expensePieChart';
import { AddExpenseForm } from '../../containers/addExpenseForm';
import { MyTable } from '../table/myTable';
import { InputFile } from '../../containers/inputFile';
import { Detail } from '../detail/detail';
import { StoreExpense, TagLabel } from '../../interfaces';

interface Props {
  expense: StoreExpense[];
  displayExpense: StoreExpense[];
  handleRequireClick?: (repquirement: { tagLabel: TagLabel; require: boolean }) => void;
}

export const LoginedHomeComponent: FC<Props> = ({
  expense,
  displayExpense,
  handleRequireClick = () => {},
}) => {
  const margin = (top: number, right: number, bottom: number, left: number) =>
    css`
      margin: ${top}rem ${right}rem ${bottom} ${left}rem !important;
    `;

  return (
    <Grid centered css={margin(0, 0.5, 0, 0.5)}>
      <Grid.Column mobile={16} tablet={16} computer={16} largeScreen={12} widescreen={12}>
        <Segment>
          <Header content="Latest expenses" />
          <ExpenseBarChart expense={displayExpense} />
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={5} computer={4} largeScreen={4} widescreen={4}>
        <Segment>
          <Header content="Breakdown of expenses" textAlign="center" />
          <ExpensePieChart expense={displayExpense} />
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={11} computer={12} largeScreen={9} widescreen={6}>
        <Segment attached="top">
          <Header>More information</Header>
          <Detail expense={expense} handleRequireClick={handleRequireClick} />
        </Segment>
        <Message attached="bottom">
          <Header as="h5" content="タグをクリックすると、そのタグごとの表示に切り替えます。" />
        </Message>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={14} computer={13} largeScreen={7} widescreen={6}>
        <Segment>
          <Header content="Register your expenses" />
          <AddExpenseForm />
          <Divider />
          <Header size="medium" content="Register your expenses from the receipts" />
          <InputFile />
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={14} computer={13} largeScreen={12} widescreen={12}>
        <Segment>
          <MyTable expense={displayExpense} />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

/** @jsx jsx */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { jsx, css } from '@emotion/core';
import { Segment, Grid, Header } from 'semantic-ui-react';
import { ExpenseBarChart } from '../charts/expenseBarChart';
import { ExpensePieChart } from '../charts/expensePieChart';
import { AddExpenseForm } from '../../containers/addExpenseForm';
import { MyTable } from '../table/myTable';
import { InputFile } from '../../containers/inputFile';
import { Store } from '../../interfaces';

export const LoginedHome: FC = () => {
  const expense = useSelector((store: Store) => store.expense.expense);

  const margin = (top: number, right: number, bottom: number, left: number) =>
    css`
      margin: ${top}rem ${right}rem ${bottom} ${left}rem !important;
    `;

  return (
    <Grid centered css={margin(0, 0.5, 0, 0.5)}>
      <Grid.Row>
        <Grid.Column mobile={10} tablet={11} computer={12} largeScreen={12} widescreen={12}>
          <Segment>
            <Header content="Latest Expenses" />
            <ExpenseBarChart expense={expense} />
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={6} tablet={5} computer={4} largeScreen={4} widescreen={4}>
          <Segment>
            <Header content="Breakdown of Expenses" />
            <ExpensePieChart expense={expense} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <AddExpenseForm />
        <InputFile />
      </Grid.Row>
      <Grid.Column mobile={16} tablet={14} computer={13} largeScreen={12} widescreen={12}>
        <Segment>
          <MyTable expense={expense} />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

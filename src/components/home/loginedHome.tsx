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
      <Grid.Column mobile={16} tablet={16} computer={12} largeScreen={12} widescreen={15}>
        <Segment color="teal">
          <Header content="Latest Expenses" />
          <ExpenseBarChart expense={expense} />
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={7} tablet={6} computer={4} largeScreen={4} widescreen={3}>
        <Segment color="teal">
          <Header content="Breakdown of Expenses" textAlign="center" />
          <ExpensePieChart expense={expense} />
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={9} tablet={10} computer={8} largeScreen={10} widescreen={5}>
        <Segment inverted color="teal">
          <Header>Hello</Header>
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={8} largeScreen={6} widescreen={4}>
        <Segment color="teal">
          <Header content="Register Your Expenses" />
          <Segment basic vertical>
            <AddExpenseForm />
            <InputFile />
          </Segment>
        </Segment>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={14} computer={13} largeScreen={12} widescreen={12}>
        <Segment color="teal">
          <MyTable expense={expense} />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

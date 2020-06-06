/** @jsx jsx */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { Container, Button, Grid } from 'semantic-ui-react';
import { ExpenseChart } from './charts';
import { AddIncomeForm } from '../containers/addIncomeForm';
import { AddExpenseForm } from '../containers/addExpenseForm';
import { getExpense } from '../firebase/firestore';
import { Store } from '../interfaces';

export const Home: FC = () => {
  const expense = useSelector((store: Store) => store.expense.expense);

  const handleClick = async () => {
    await getExpense();
  };

  return (
    <Container>
      <h1>Home</h1>
      <Grid>
        <ExpenseChart expense={expense} />
        <Grid.Row>
          <AddIncomeForm />
          <AddExpenseForm />
        </Grid.Row>
      </Grid>
      <Button content="get expense" onClick={handleClick} color="teal" />
    </Container>
  );
};

/** @jsx jsx */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { Segment, Grid } from 'semantic-ui-react';
import { ExpenseChart } from './charts/charts';
import { AddExpenseForm } from '../containers/addExpenseForm';
import { MyTable } from './table/myTable';
import { InputFile } from '../containers/inputFile';
import { Store } from '../interfaces';

export const Home: FC = () => {
  const expense = useSelector((store: Store) => store.expense.expense);

  return (
    <Grid centered>
      <Grid.Column mobile={16} tablet={15} computer={14} largeScreen={13} widescreen={10}>
        <Segment>
          <ExpenseChart expense={expense} />
        </Segment>
      </Grid.Column>
      <Grid.Row>
        <AddExpenseForm />
        <InputFile />
      </Grid.Row>
      <Grid.Column mobile={16} tablet={14} computer={12} largeScreen={10} widescreen={8}>
        <Segment>
          <MyTable expense={expense} />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

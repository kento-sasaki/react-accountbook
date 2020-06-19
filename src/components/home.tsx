/** @jsx jsx */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { Segment, Table, Grid } from 'semantic-ui-react';
import { ExpenseChart } from './charts/charts';
import { AddIncomeForm } from '../containers/addIncomeForm';
import { AddExpenseForm } from '../containers/addExpenseForm';
import { MyTableUnit } from './tableUnit/tableUnit';
import { Store, Expense } from '../interfaces';

export const Home: FC = () => {
  const expense = useSelector((store: Store) => store.expense.expense);

  // const handleClick = async () => {
  //   await getExpense();
  // };

  const createReversedArray = (array: Expense[]) => {
    const tempArr: Expense[] = [];

    array.forEach((element) => {
      tempArr.unshift(element);
    });

    return tempArr;
  };

  return (
    <Grid centered>
      <Grid.Column mobile={16} tablet={15} computer={14} largeScreen={13} widescreen={10}>
        <Segment>
          <ExpenseChart expense={expense} />
        </Segment>
      </Grid.Column>
      <Grid.Row>
        <AddIncomeForm />
        <AddExpenseForm />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={14} computer={12} largeScreen={10} widescreen={8}>
          <Segment>
            <Table basic="very" fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell content="Date" />
                  <Table.HeaderCell content="Amount" />
                  <Table.HeaderCell content="Action" />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {createReversedArray(expense).map((exp) => {
                  return <MyTableUnit expense={exp} />;
                })}
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      {/* <Button content="get expense" onClick={handleClick} color="teal" /> */}
    </Grid>
  );
};

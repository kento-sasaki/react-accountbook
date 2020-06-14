/** @jsx jsx */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { Segment, Table, Grid, Container } from 'semantic-ui-react';
import { ExpenseChart } from './charts';
import { AddIncomeForm } from '../containers/addIncomeForm';
import { AddExpenseForm } from '../containers/addExpenseForm';
import { MyTableUnit } from './tableUnit/tableUnit';
import { Expense } from '../firebase/firestore';
import { Store } from '../interfaces';

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
      <Segment>
        <ExpenseChart expense={expense} />
      </Segment>
      <Grid.Row>
        <AddIncomeForm />
        <AddExpenseForm />
      </Grid.Row>
      <Grid.Row>
        <Container>
          <Segment>
            <Table basic="very" size="small">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell content="Date" />
                  <Table.HeaderCell content="Income or Expense" />
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
        </Container>
      </Grid.Row>
      {/* <Button content="get expense" onClick={handleClick} color="teal" /> */}
    </Grid>
  );
};

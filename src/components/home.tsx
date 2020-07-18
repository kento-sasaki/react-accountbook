/** @jsx jsx */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { Segment, Grid, Image, Container } from 'semantic-ui-react';
import { ExpenseChart } from './charts/charts';
import { AddExpenseForm } from '../containers/addExpenseForm';
import { MyTable } from './table/myTable';
import { InputFile } from '../containers/inputFile';
import { Store, User } from '../interfaces';
import topImage from '../images/top.svg';

interface HomeProps {
  currentUser?: User | null;
  isLoading?: boolean;
}

export const Home: FC<HomeProps> = ({ currentUser = null, isLoading = false }) => {
  const expense = useSelector((store: Store) => store.expense.expense);
  console.log('isLoading: ', isLoading);

  const LoginedHome: FC = () => {
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

  const LogoutedHome: FC = () => {
    return (
      <Container>
        <Grid centered>
          <Grid.Column width={8}>
            <Segment basic textAlign="center">
              <h1>Welcome</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={topImage} fluid />
          </Grid.Column>
        </Grid>
      </Container>
    );
  };

  return currentUser ? <LoginedHome /> : <LogoutedHome />;
};

/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Segment, Grid, Header, Divider } from 'semantic-ui-react';
import { ExpensePieChart } from '../charts/expensePieChart';
import { MyList } from '../list/myList';
import { AddExpenseForm } from '../../containers/addExpenseForm';
import { InputFile } from '../../containers/inputFile';
import { Detail } from '../detail/detail';
import { StoreExpense, TagLabel } from '../../interfaces';

interface Props {
  expense: StoreExpense[];
  displayExpense: StoreExpense[];
  handleRequireClick?: (repquirement: { tagLabel: TagLabel; require: boolean }) => void;
}

export const MobileHomeComponent: FC<Props> = ({
  expense,
  displayExpense,
  handleRequireClick = () => {},
}) => {
  return (
    <Segment basic as="div">
      <Segment>
        <Grid centered>
          <Grid.Column width="10">
            <Header as="h4" content="最近の支出" />
            <ExpensePieChart expense={displayExpense} />
          </Grid.Column>
          <Grid.Column width="6" verticalAlign="middle">
            <Segment basic textAlign="center">
              <Header as="h4" content="支出総額" />
              <Header
                content={`¥
                ${expense
                  .map((exp) => exp.amount)
                  .reduce((previous, current) => previous + current)}
              `}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width="16">
            <Detail expense={expense} handleRequireClick={handleRequireClick} />
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Header as="h4" content="支出を登録" />
        <AddExpenseForm />
        <Divider />
        <Header as="h4" content="レシートの画像から支出を登録" />
        <InputFile />
      </Segment>
      <Segment>
        <MyList expense={displayExpense} />
      </Segment>
    </Segment>
  );
};

/** @jsx jsx */
import React, { FC } from "react";
import { jsx } from "@emotion/core";
import { Container, Button, Grid } from "semantic-ui-react";
import { AddIncomeForm } from "../containers/addIncomeForm";
import { AddExpenseForm } from "../containers/addExpenseForm";
import { getExpense } from "../firebase/firestore";

export const Home: FC = () => {
  const handleClick = async () => {
    console.log(await getExpense());
  };

  return (
    <Container>
      <h1>Home</h1>
      <Grid>
        <Grid.Row>
          <AddIncomeForm />
          <AddExpenseForm />
        </Grid.Row>
      </Grid>
      <Button content="get expense" onClick={handleClick} color="teal" />
    </Container>
  );
};

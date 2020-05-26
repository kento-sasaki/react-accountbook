/** @jsx jsx */
import React, { FC, useEffect } from "react";
import { jsx } from "@emotion/core";
import { Header, Button, Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getExpense } from "../firebase/firestore";
import { increment, decrement, reset } from "../stores/counter";
import { Store } from "../interfaces";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const count = useSelector((store: Store) => store.counter.count);

  const clickIncrement = () => {
    dispatch(increment());
  };
  const clickDecrement = () => {
    dispatch(decrement());
  };
  const clickReset = () => {
    dispatch(reset());
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" textAlign="center" content="Counter" />
          <Header as="h3" textAlign="center" data-testid="result">
            Count: {count}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button color="blue" content=" + " onClick={clickIncrement} data-testid="increment" />
        <Button color="grey" content=" - " onClick={clickDecrement} data-testid="decrement" />
        <Button color="red" content="reset" onClick={clickReset} data-testid="reset" />
      </Grid.Row>
      <Grid.Row>
        <Button content="getExpense" onClick={getExpense} color="teal" />
      </Grid.Row>
    </Grid>
  );
};

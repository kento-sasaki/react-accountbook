import React, { FC, useEffect } from "react";
import { Header, Button, Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../firebase/auth";
import { increment, decrement, reset } from "../stores/counter";
import { Store } from "../interfaces";

export const Counter: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const count = useSelector((store: Store) => store.counter.count);

  const handleClick = () => {
    logout();
  };

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
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "40vh" }}>
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
        <Grid.Column>
          <Button color="black" content="Log out" onClick={handleClick} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

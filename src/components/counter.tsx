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

  const count = useSelector((state: Store) => state.counter.count);

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
          <Header as="h3" textAlign="center">
            <div data-testid="result">Count: {count}</div>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button color="blue" content=" + " onClick={clickIncrement} />
        <Button color="grey" content=" - " onClick={clickDecrement} />
        <Button color="red" content="reset" onClick={clickReset} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button color="black" content="Log out" onClick={handleClick} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

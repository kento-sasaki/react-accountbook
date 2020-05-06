import React, { FC } from "react";
import { Header, Button, Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../firebase/auth";
import { increment, decrement } from "../stores/conter";
import { Store } from "../interfaces";

export const Home: FC = () => {
  const handleClick = () => {
    logout();
  };

  const count = useSelector((state: Store) => state.counter.count);

  const dispatch = useDispatch();
  const clickIncrement = () => {
    dispatch(increment());
  };
  const clickDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "40vh" }}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" textAlign="center" content="Counter" />
          <Header as="h3" textAlign="center">
            Count: {count}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button color="blue" content=" + " onClick={clickIncrement} />
        <Button color="grey" content=" - " onClick={clickDecrement} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button color="black" content="Log out" onClick={handleClick} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

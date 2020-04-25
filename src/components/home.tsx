import React, { FC } from "react";
import { Header, Button, Grid } from "semantic-ui-react";
import { logout } from "../firebase/auth";

export const Home: FC = () => {
  const handleClick = () => {
    logout();
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "90vh" }}>
      <Grid.Column>
        <Header as="h1" textAlign="center" content="Welcome" />
        <Button color="black" content="Log out" onClick={handleClick} />
      </Grid.Column>
    </Grid>
  );
};

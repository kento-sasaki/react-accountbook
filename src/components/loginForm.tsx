import React, { FC } from "react";
import { Button, Form, Grid, Header, Message, Segment, Icon } from "semantic-ui-react";

export const LoginForm: FC = () => (
  <Grid textAlign="center" style={{ height: "90vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 500 }}>
      <Header as="h1" color="blue" textAlign="center">
        Login
      </Header>
      <Form size="large">
        <Segment basic>
          <Form.Field required>
            <Form.Input fluid icon="at" iconPosition="left" placeholder="E-mail address" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Form.Field>
        </Segment>
        <Button color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
          <Icon name="twitter" /> Twitter
        </Button>
        <Button color="google plus">
          <Icon name="google" /> Google
        </Button>
        <Button color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
      </Form>

      <Message>New to us? Sign Up</Message>
    </Grid.Column>
  </Grid>
);

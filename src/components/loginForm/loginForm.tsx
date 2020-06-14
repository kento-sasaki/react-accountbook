/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { Button, Form, Grid, Header, Message, Segment, Icon, Divider } from 'semantic-ui-react';

export interface InputData {
  value: string | null;
}

export interface LoginFormProps {
  handleClick?: () => Promise<void>;
  handleChangeEmail?: (event: FormEvent, { value }: InputData) => void;
  handleChangePassword?: (event: FormEvent, { value }: InputData) => void;
  handleGoogleClick?: () => void;
  handleFacebookClick?: () => void;
  handleTwitterClick?: () => void;
  handleAnonymouslyClick?: () => void;
}

export const LoginFormComponent: FC<LoginFormProps> = ({
  handleClick = () => {},
  handleChangeEmail = () => {},
  handleChangePassword = () => {},
  handleGoogleClick = () => {},
  handleFacebookClick = () => {},
  handleTwitterClick = () => {},
  handleAnonymouslyClick = () => {},
}) => {
  return (
    <Segment basic>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h1" color="blue" textAlign="center" content="Log in" />
            <Form size="large">
              <Form.Field required>
                <Form.Input
                  fluid
                  onChange={handleChangeEmail}
                  icon="at"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  onChange={handleChangePassword}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Button
                  color="blue"
                  fluid
                  size="large"
                  onClick={handleClick}
                  content="Log in"
                />
              </Form.Field>
              <Divider horizontal content="or" />
              <Header as="h3">Log in with ...</Header>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 800 }}>
            <Button color="google plus" onClick={handleGoogleClick}>
              <Icon name="google" />
              Google
            </Button>
            <Button color="facebook" onClick={handleFacebookClick}>
              <Icon name="facebook" />
              Facebook
            </Button>
            <Button color="twitter" onClick={handleTwitterClick}>
              <Icon name="twitter" />
              Twitter
            </Button>
            <Button color="grey" onClick={handleAnonymouslyClick} data-testid="loginAnonymously">
              <Icon name="user" />
              Anonymously
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column style={{ maxWidth: 400 }}>
            <Message>New to us? Sign Up</Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

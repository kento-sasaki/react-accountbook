/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { Button, Form, Grid, Header, Icon, Divider } from 'semantic-ui-react';

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
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 400 }}>
          <Header as="h2" color="teal" textAlign="center" content="Log in" />
          <Form>
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
              <Form.Button color="teal" fluid onClick={handleClick} content="Log in" />
            </Form.Field>
            <Divider horizontal content="or" />
            <Header as="h4">Log in with ...</Header>
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 800 }}>
          <Button size="small" color="google plus" onClick={handleGoogleClick}>
            <Icon name="google" />
            Google
          </Button>
          <Button size="small" color="facebook" onClick={handleFacebookClick}>
            <Icon name="facebook" />
            Facebook
          </Button>
          <Button size="small" color="twitter" onClick={handleTwitterClick}>
            <Icon name="twitter" />
            Twitter
          </Button>
          <Button
            size="small"
            color="grey"
            onClick={handleAnonymouslyClick}
            data-testid="loginAnonymously"
          >
            <Icon name="user" />
            Guest
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

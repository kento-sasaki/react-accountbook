/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Button, Form, Grid, Header, Icon, Divider } from 'semantic-ui-react';

const marginBottom = css`
  margin-bottom: 1rem !important;
`;
export interface InputData {
  value: string | null;
}

export interface LoginFormProps {
  handleClick?: () => Promise<void>;
  handleChangeEmail?: (event: FormEvent, { value }: InputData) => void;
  handleChangePassword?: (event: FormEvent, { value }: InputData) => void;
  handleGoogleClick?: () => void;
  handleFacebookClick?: () => void;
  handleAnonymouslyClick?: () => void;
}

export const LoginFormComponent: FC<LoginFormProps> = ({
  handleClick = () => {},
  handleChangeEmail = () => {},
  handleChangePassword = () => {},
  handleGoogleClick = () => {},
  handleFacebookClick = () => {},
  handleAnonymouslyClick = () => {},
}) => {
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ minWidth: 350 }} width="4">
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
            <Button circular color="teal" fluid onClick={handleClick} content="Log in" />
          </Form.Field>
        </Form>
        <Divider horizontal content="or" />
        <Button circular css={marginBottom} color="google plus" fluid onClick={handleGoogleClick}>
          <Icon name="google" />
          Google でログイン
        </Button>
        <Button circular css={marginBottom} color="facebook" fluid onClick={handleFacebookClick}>
          <Icon name="facebook" />
          Facebook でログイン
        </Button>
        <Button
          circular
          css={marginBottom}
          color="grey"
          fluid
          onClick={handleAnonymouslyClick}
          data-testid="loginAnonymously"
        >
          <Icon name="user" />
          Guest でログイン
        </Button>
      </Grid.Column>
    </Grid>
  );
};

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

interface Props {
  handleClick?: () => Promise<void>;
  handleChangeEmail?: (event: FormEvent, { value }: InputData) => void;
  handleChangePassword?: (event: FormEvent, { value }: InputData) => void;
  handleGoogleClick?: () => void;
  handleTwitterClick?: () => void;
  loginAnonymously?: () => void;
}

export const LoginFormComponent: FC<Props> = ({
  handleClick = () => {},
  handleChangeEmail = () => {},
  handleChangePassword = () => {},
  handleGoogleClick = () => {},
  handleTwitterClick = () => {},
  loginAnonymously = () => {},
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
            <Button
              circular
              color="teal"
              fluid
              onClick={handleClick}
              content="Log in"
              disabled={process.env.NODE_ENV === 'production'}
            />
          </Form.Field>
        </Form>
        <Divider horizontal content="or" section />
        <Button circular css={marginBottom} color="google plus" fluid onClick={handleGoogleClick}>
          <Icon name="google" />
          Google でログイン
        </Button>
        <Button circular css={marginBottom} color="twitter" fluid onClick={handleTwitterClick}>
          <Icon name="twitter" />
          Twitter でログイン
        </Button>
        <Button circular css={marginBottom} color="grey" fluid onClick={loginAnonymously}>
          <Icon name="user" />
          ゲスト でログイン
        </Button>
      </Grid.Column>
    </Grid>
  );
};

import React, { FC, useState, FormEvent } from "react";
import { Button, Form, Grid, Header, Message, Segment, Icon } from "semantic-ui-react";
import { authentication } from "../firebase/index";
import { login, signUp, createUser, loginWithSocialAccount } from "../firebase/auth";
import { InputData } from "../interfaces";

if (authentication().isSignInWithEmailLink(window.location.href)) {
  createUser();
}

export const LoginForm: FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleClick = async () => {
    if (email && password) {
      const methods = await authentication().fetchSignInMethodsForEmail(email);
      if (methods[0]) {
        login(email, password);
      } else {
        signUp(email, password);
      }
    }
  };

  const handleChangeEmail = (event: FormEvent, { value }: InputData) => {
    setEmail(value);
  };

  const handleChangePassword = (event: FormEvent, { value }: InputData) => {
    setPassword(value);
  };

  const loginWithFacebook = () => {
    loginWithSocialAccount(new authentication.FacebookAuthProvider());
  };

  const loginWithTwitter = () => {
    loginWithSocialAccount(new authentication.TwitterAuthProvider());
  };

  const loginWithGoogle = () => {
    loginWithSocialAccount(new authentication.GoogleAuthProvider());
  };

  return (
    <Grid textAlign="center" style={{ height: "90vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as="h1" color="blue" textAlign="center" content="Log in" />
        <Form size="large">
          <Segment basic>
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
              <Form.Button color="blue" fluid size="large" onClick={handleClick} content="Log in" />
            </Form.Field>
          </Segment>
          <Header as="h3">Log in with social accounts</Header>
          <Button color="google plus" onClick={loginWithGoogle}>
            <Icon name="google" />
            Google
          </Button>
          <Button color="facebook" onClick={loginWithFacebook}>
            <Icon name="facebook" />
            Facebook
          </Button>
          <Button color="twitter" onClick={loginWithTwitter}>
            <Icon name="twitter" />
            Twitter
          </Button>
        </Form>

        <Message>New to us? Sign Up</Message>
      </Grid.Column>
    </Grid>
  );
};

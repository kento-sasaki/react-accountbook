/** @jsx jsx */
import React, { FC, useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { jsx } from "@emotion/core";
import { authentication } from "../firebase/index";
import {
  login,
  signUp,
  createUser,
  loginWithSocialAccount,
  loginAnonymously,
} from "../firebase/auth";
import { LoginFormComponent, InputData } from "../components/loginForm";

if (authentication().isSignInWithEmailLink(window.location.href)) {
  createUser();
}

export const LoginForm: FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const history = useHistory();

  const handleClick = async () => {
    if (email && password) {
      const methods = await authentication().fetchSignInMethodsForEmail(email);
      if (methods[0]) {
        await login(email, password);
        history.push("/");
      } else {
        await signUp(email, password);
        history.push("/");
      }
    }
  };

  const handleChangeEmail = (event: FormEvent, { value }: InputData) => {
    setEmail(value);
  };

  const handleChangePassword = (event: FormEvent, { value }: InputData) => {
    setPassword(value);
  };

  const handleGoogleClick = async () => {
    await loginWithSocialAccount(new authentication.GoogleAuthProvider());
    history.push("/");
  };

  const handleFacebookClick = async () => {
    await loginWithSocialAccount(new authentication.FacebookAuthProvider());
    history.push("/");
  };

  const handleTwitterClick = async () => {
    await loginWithSocialAccount(new authentication.TwitterAuthProvider());
    history.push("/");
  };

  const handleAnonymouslyClick = async () => {
    await loginAnonymously();
    history.push("/");
  };

  return (
    <LoginFormComponent
      handleClick={handleClick}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleGoogleClick={handleGoogleClick}
      handleFacebookClick={handleFacebookClick}
      handleTwitterClick={handleTwitterClick}
      handleAnonymouslyClick={handleAnonymouslyClick}
    />
  );
};

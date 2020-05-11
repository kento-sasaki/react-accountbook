/** @jsx jsx */
import React, { FC, useState, FormEvent } from "react";
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

  const handleGoogleClick = () => {
    loginWithSocialAccount(new authentication.GoogleAuthProvider());
  };

  const handleFacebookClick = () => {
    loginWithSocialAccount(new authentication.FacebookAuthProvider());
  };

  const handleTwitterClick = () => {
    loginWithSocialAccount(new authentication.TwitterAuthProvider());
  };

  return (
    <LoginFormComponent
      handleClick={handleClick}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleGoogleClick={handleGoogleClick}
      handleFacebookClick={handleFacebookClick}
      handleTwitterClick={handleTwitterClick}
      loginAnonymously={loginAnonymously}
    />
  );
};

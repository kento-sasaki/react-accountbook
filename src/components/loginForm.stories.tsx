import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { LoginForm } from "./loginForm";
import { store } from "../stores/index";

export default {
  component: LoginForm,
  title: "LoginForm",
};

export const loginForm = () => {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
};

import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { Counter } from "./counter";
import { store } from "../stores/index";

export default {
  component: Counter,
  title: "Counter",
};

export const counter = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

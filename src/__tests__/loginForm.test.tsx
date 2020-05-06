import React from "react";
import userEvent from "@testing-library/user-event";
import { render, cleanup, fireEvent } from "../utils/test-utils";
import { LoginForm } from "../components/loginForm";
import "@testing-library/jest-dom";

// setup
afterEach(cleanup);

describe("LoginForm", () => {
  it.todo("メールアドレスは必須");
  it.todo("パスワードは必須");
  it.todo("");
  it.todo("ログインしたらcurrentUserが更新される", async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginForm />);
    await userEvent.type(getByPlaceholderText("E-mail address"), "username@example.com");
  });
});

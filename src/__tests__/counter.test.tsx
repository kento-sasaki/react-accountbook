import React from "react";
import { render, cleanup, fireEvent } from "../utils/test-utils";
import { Counter } from "../components/counter";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("Counter", () => {
  it("初期状態は0", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("result")).toHaveTextContent("0");
  });

  it("increment", () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText("+"));
    expect(getByTestId("result")).toHaveTextContent("1");
  });

  it("decrement", () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText("-"));
    expect(getByTestId("result")).toHaveTextContent("-1");
  });

  it("reset", () => {
    const { getByTestId, getByText } = render(<Counter />);
    fireEvent.click(getByText("reset"));
    expect(getByTestId("result")).toHaveTextContent("0");
  });
});

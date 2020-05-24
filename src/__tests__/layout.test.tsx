import React from "react";
import { render, cleanup, fireEvent } from "../utils/test-utils";
import { Layout } from "../components/layout/layout";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("Layout", () => {
  it("AppBar", () => {
    const { getByText } = render(<Layout />);
    fireEvent.click(getByText("About"));
    expect(getByText("About")).toHaveClass("active item");

    fireEvent.click(getByText("Home"));
    expect(getByText("Home")).toHaveClass("active item");

    fireEvent.click(getByText("Contact"));
    expect(getByText("Contact")).toHaveClass("active item");
  });
});

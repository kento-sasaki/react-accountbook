/** @jsx jsx */
import React, { FC } from "react";
import { jsx, css } from "@emotion/core";
import { AppBar } from "./appBar";
import { Footer } from "./footer";
import { User } from "../../interfaces";

interface LayoutProps {
  currentUser?: User | null;
}

export const Layout: FC<LayoutProps> = ({ currentUser, children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <AppBar currentUser={currentUser} />
      {children}
      <Footer />
    </div>
  );
};

/** @jsx jsx */
import React, { FC } from "react";
import { jsx, css } from "@emotion/core";
import { Container } from "semantic-ui-react";

const wrapper = css`
  margin-top: 5rem;
`;

export const Contact: FC = () => {
  return (
    <div css={wrapper}>
      <Container>
        <h1>Contact</h1>
      </Container>
    </div>
  );
};

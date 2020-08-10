/** @jsx jsx */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { Divider } from 'semantic-ui-react';

export const Footer: FC = () => {
  return (
    <div
      css={css`
        margin-top: auto;
        text-align: center;
        padding: 1.5rem 0;
      `}
    >
      <Divider />
      <h4>Copyright © 2020 kozukata1993 All Rights Reserved.</h4>
      <Link to="/terms">利用規約</Link>
      {' / '}
      <Link to="/policy">プライバシーポリシー</Link>
    </div>
  );
};

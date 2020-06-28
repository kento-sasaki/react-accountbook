/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Container, Button } from 'semantic-ui-react';

export const Contact: FC = () => {
  const handleClick = async () => {
    console.log('hello');
  };

  return (
    <Container>
      <h1>Contact</h1>
      <Button content="call" onClick={handleClick} />
    </Container>
  );
};

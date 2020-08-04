/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Container, Header, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { loading, loaded } from '../stores/loading';

export const Contact: FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>Contact</Header>
      <Button
        content="Start Loading"
        onClick={() => {
          dispatch(loading());
        }}
      />
      <Button
        content="Stop Loading"
        onClick={() => {
          dispatch(loaded());
        }}
      />
    </Container>
  );
};

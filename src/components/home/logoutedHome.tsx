/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Segment, Grid, Image, Container, Button } from 'semantic-ui-react';
import topImage from '../../images/top.svg';

export const LogoutedHome: FC = () => {
  return (
    <Container>
      <Grid centered columns="equal">
        <Grid.Row>
          <Grid.Column width={8} verticalAlign="middle">
            <Segment basic textAlign="left" vertical>
              <h1
                css={css`
                  font-size: 2.5rem;
                  color: #2f2e41;
                `}
              >
                <span
                  css={css`
                    font-family: 'Lexend Peta', sans-serif;
                  `}
                >
                  VisiBO
                </span>
                で<p>あなたの支出を可視化しよう</p>
              </h1>
              <Grid.Row columns="equal">
                <Button
                  onClick={() => {
                    console.log('Hello');
                  }}
                  content="アカウント登録して使ってみる"
                  color="teal"
                />
                <Button
                  onClick={() => {
                    console.log('Hello');
                  }}
                  content="ゲストとして使ってみる"
                  color="teal"
                  basic
                />
              </Grid.Row>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={topImage} fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

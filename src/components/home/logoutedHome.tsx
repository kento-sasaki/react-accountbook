/** @jsx jsx */
import React, { FC, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Segment, Grid, Image, Button, TransitionablePortal, Header } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../../containers/loginForm';
import { loginAnonymously } from '../../firebase/auth';
import topImage from '../../images/top.svg';

const fontColor = css`
  color: #2f2e41 !important;
`;

const fontFamily = css`
  font-family: 'Lexend Peta', sans-serif;
`;

const margin = (top = 0, bottom = 0) => css`
  margin-top: ${top}rem;
  margin-bottom: ${bottom}rem;
`;

export const LogoutedHome: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const handleGuestClick = async () => {
    await loginAnonymously();
    history.push('/');
  };

  const visiboLogo = <span css={fontFamily}>VisiBO</span>;

  return (
    <div>
      <Grid centered columns="equal" container>
        <Grid.Row css={margin(3, 5)}>
          <Grid.Column width={9} verticalAlign="middle">
            <Segment basic textAlign="left" vertical>
              <Header as="h2" css={fontColor}>
                {visiboLogo}が<p>あなたの支出を見やすくします。</p>
              </Header>
              <Header css={fontColor}>
                {visiboLogo}は支出を登録して見やすく整理する家計簿アプリです
              </Header>
              <Grid.Row columns="equal">
                <Button
                  circular
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  content="アカウント登録して使ってみる"
                  color="teal"
                />
                <TransitionablePortal
                  onClose={() => {
                    setIsOpen(false);
                  }}
                  open={isOpen}
                >
                  <Segment
                    compact
                    css={css`
                      position: absolute !important;
                      right: 0%;
                      top: 5%;
                      z-index: 1000;
                    `}
                  >
                    <LoginForm />
                  </Segment>
                </TransitionablePortal>
                <Button
                  circular
                  onClick={handleGuestClick}
                  content="ゲストとして使ってみる"
                  color="teal"
                  basic
                />
              </Grid.Row>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src={topImage} fluid />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <div
        // #00b5ad teal #95e5cd
        css={css`
          background: #00b5ad;
          padding: 2rem;
        `}
      >
        <Header as="h1" inverted textAlign="center">
          {visiboLogo}
          の特徴
        </Header>
        <Grid centered columns="equal">
          <Grid.Column css={margin(1, 1)}>
            <Segment>
              <Header css={fontColor} textAlign="center" content="様々なチャートで整理" />
            </Segment>
          </Grid.Column>
          <Grid.Column css={margin(1, 1)}>
            <Segment>
              <Header css={fontColor} textAlign="center" content="レシートから支出を登録" />
            </Segment>
          </Grid.Column>
          <Grid.Column css={margin(1, 1)}>
            <Segment>
              <Header css={fontColor} textAlign="center" content="" />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

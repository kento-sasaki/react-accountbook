/** @jsx jsx */
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { jsx, css } from '@emotion/core';
import { Segment, Grid, Image, Button, TransitionablePortal, Header } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../../containers/loginForm';
import { loginAnonymously } from '../../firebase/auth';
import { Store } from '../../interfaces';
import topImage from '../../images/top.svg';

const fontColor = css`
  color: #2f2e41 !important;
`;

const fontFamily = css`
  font-family: 'Lexend Peta', sans-serif;
`;

const margin = (top = 0, bottom = 0) => css`
  margin-top: ${top}rem !important;
  margin-bottom: ${bottom}rem !important;
`;

const loginForm = css`
  position: absolute !important;
  right: 0%;
  top: 5%;
  z-index: 1000;
`;

const background = css`
  background: #00b5ad;
  padding: 2rem;
`;

const displayNone = css`
  display: none !important;
`;

export const LogoutedHome: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const device = useSelector((store: Store) => store.device);

  const handleGuestClick = () => {
    loginAnonymously();
    history.push('/');
  };

  const visiboLogo = <span css={fontFamily}>VisiBO</span>;

  const columns = device === 'mobile' || device === 'tablet' ? 1 : 'equal';
  const columnwidth = device === 'mobile' ? 16 : 10;
  const buttonSize = device === 'mobile' || device === 'tablet' ? 'small' : 'medium';

  const headerSize = (
    mobileSize: 'small' | 'large' | 'medium' | 'tiny' | 'huge',
    computerSize: 'small' | 'large' | 'medium' | 'tiny' | 'huge',
  ) => (device === 'mobile' || device === 'tablet' ? mobileSize : computerSize);

  return (
    <div>
      <Grid centered columns="equal" container>
        <Grid.Row css={margin(0, 5)}>
          <Grid.Column width={columnwidth} verticalAlign="middle">
            <Segment textAlign="left" vertical>
              <Header size={headerSize('medium', 'large')} css={fontColor}>
                {visiboLogo}が<p>あなたの支出を見やすくします。</p>
              </Header>
              <Header size={headerSize('small', 'medium')} css={fontColor}>
                {visiboLogo}は支出を登録して見やすく整理する家計簿アプリです
              </Header>
              <Grid.Row columns="equal">
                <Button
                  css={margin(0.2, 0.2)}
                  circular
                  size={buttonSize}
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
                  <Segment compact css={loginForm}>
                    <LoginForm />
                  </Segment>
                </TransitionablePortal>
                <Button
                  css={margin(0.2, 0.2)}
                  circular
                  size={buttonSize}
                  onClick={handleGuestClick}
                  content="ゲストとして使ってみる"
                  color="teal"
                  basic
                />
              </Grid.Row>
            </Segment>
          </Grid.Column>
          <Grid.Column css={device === 'mobile' && displayNone} width={5}>
            <Image src={topImage} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <div css={background}>
        <Header as="h1" inverted textAlign="center">
          {visiboLogo}
          の特徴
        </Header>
        <Grid centered columns={columns}>
          <Grid.Column css={margin(1, 1)}>
            <Segment>
              <Header as="h2" css={fontColor} textAlign="center" content="様々なチャートで整理" />
              <Header
                as="h4"
                textAlign="center"
                content="棒グラフ、円グラフであなたの支出を見やすく描きます。"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column css={margin(1, 1)}>
            <Segment>
              <Header as="h2" css={fontColor} textAlign="center" content="レシートから支出を登録" />
              <Header
                as="h4"
                textAlign="center"
                content="レシートの画像から、支出額を抽出して記録します。"
              />
            </Segment>
          </Grid.Column>
          <Grid.Column css={margin(1, 1)}>
            <Segment>
              <Header as="h2" css={fontColor} textAlign="center" content="タグで支出を分類" />
              <Header
                as="h4"
                textAlign="center"
                content="支出ごとにタグをつけ、整理することができます。"
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

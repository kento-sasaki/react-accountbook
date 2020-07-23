/** @jsx jsx */
import React, { FC, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Menu, Segment, MenuItemProps, Container, Responsive, Icon } from 'semantic-ui-react';
import { Page } from '../../pages';
import { User } from '../../interfaces';

interface AppBarProps {
  currentUser?: User | null;
  activeItem?: Page;
  handleItemClick?: (e: SyntheticEvent, { name }: MenuItemProps) => void;
  handleSidebarClick?: () => void;
  handleLogoutClick?: () => void;
  handleLoginClick?: () => void;
}

export const AppBar: FC<AppBarProps> = ({
  currentUser = null,
  activeItem = 'home',
  handleItemClick = () => {},
  handleSidebarClick = () => {},
  handleLogoutClick = () => {},
  handleLoginClick = () => {},
}) => {
  const topLogo = (
    <Segment
      basic
      css={css`
        font-family: 'Lexend Peta', sans-serif;
        font-size: 2rem !important;
        color: #fff;
        padding: 0 !important;
        margin: 0.5rem 1.5rem !important;
      `}
    >
      VisiBO
    </Segment>
  );

  return (
    <Container>
      <Menu inverted fixed="top" color="teal" secondary>
        <Menu.Item
          onClick={handleItemClick}
          name="home"
          css={css`
            padding: 0.1rem !important;
          `}
        >
          {topLogo}
        </Menu.Item>
        <Responsive
          as={Menu.Item}
          minWidth={Responsive.onlyMobile.maxWidth}
          onClick={handleItemClick}
          name="home"
          active={activeItem === 'home'}
        >
          Home
        </Responsive>
        <Responsive
          as={Menu.Item}
          minWidth={Responsive.onlyMobile.maxWidth}
          onClick={handleItemClick}
          name="contact"
          active={activeItem === 'contact'}
        >
          Contact
        </Responsive>
        <Responsive
          as={Menu.Item}
          minWidth={Responsive.onlyMobile.maxWidth}
          onClick={currentUser ? handleLogoutClick : handleLoginClick}
          name={currentUser ? 'logout' : 'login'}
          active={activeItem === 'login' || activeItem === 'logout'}
          position="right"
        >
          {currentUser ? 'Log out' : 'Log in'}
        </Responsive>
        <Responsive
          as={Menu.Item}
          maxWidth={Responsive.onlyMobile.maxWidth}
          onClick={handleSidebarClick}
          position="right"
        >
          <Icon name="sidebar" />
        </Responsive>
      </Menu>
    </Container>
  );
};

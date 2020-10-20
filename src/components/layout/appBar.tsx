/** @jsx jsx */
import React, { FC, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import {
  Menu,
  Segment,
  MenuItemProps,
  Container,
  Responsive,
  Icon,
  Dropdown,
  Confirm,
} from 'semantic-ui-react';
import { Page } from '../../pages';
import { User } from '../../interfaces';

interface Props {
  currentUser?: User | null;
  activeItem?: Page;
  isConfirmOpen?: boolean;
  handleItemClick?: (e: SyntheticEvent, { name }: MenuItemProps) => void;
  handleSidebarClick?: () => void;
  handleLogoutClick?: () => void;
  handleLoginClick?: () => void;
  handleConfirmClick?: () => void;
  openConfirm?: () => void;
  closeConfirm?: () => void;
}

const padding = (x: number, y: number) =>
  css`
    padding: ${y}rem ${x}rem !important;
  `;
export const AppBar: FC<Props> = ({
  currentUser = null,
  activeItem = 'home',
  isConfirmOpen = false,
  handleItemClick = () => {},
  handleSidebarClick = () => {},
  handleLogoutClick = () => {},
  handleLoginClick = () => {},
  handleConfirmClick = () => {},
  openConfirm = () => {},
  closeConfirm = () => {},
}) => {
  const UserDropdownMenu: FC = () => {
    return (
      <div>
        <Dropdown item text="User Menu">
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogoutClick}>Log out</Dropdown.Item>
            <Dropdown.Item onClick={openConfirm}>Delete Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Confirm
          open={isConfirmOpen}
          onCancel={closeConfirm}
          onConfirm={handleConfirmClick}
          content="アカウントを削除してよろしいですか？"
          cancelButton="Cancel"
          confirmButton="Delete"
          size="mini"
        />
      </div>
    );
  };

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
          onClick={currentUser ? () => {} : handleLoginClick}
          name={currentUser ? 'logout' : 'login'}
          active={activeItem === 'login' || activeItem === 'logout'}
          position="right"
          css={padding(0, 0)}
        >
          {currentUser ? <UserDropdownMenu /> : <Segment basic>Log in</Segment>}
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

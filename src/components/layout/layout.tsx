/** @jsx jsx */
import React, { FC, useState, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import {
  Sidebar,
  Menu,
  Icon,
  Segment,
  TransitionablePortal,
  MenuItemProps,
  Message,
  Transition,
  Button,
  Header,
} from 'semantic-ui-react';
import { AppBar } from './appBar';
import { Footer } from './footer';
import { User, StoreDevice } from '../../interfaces';
import { LoginForm } from '../../containers/loginForm';
import { AddExpenseForm } from '../../containers/addExpenseForm';
import { Page } from '../../pages';

const wrapper = css`
  margin-top: 3rem !important;
`;

const paddingTop = css`
  padding-top: 0.5rem;
`;

const modalPosition = css`
  position: absolute !important;
  right: 0.5rem;
  top: 2.5rem;
  z-index: 1000 !important;
`;

const messagePosition = css`
  ${modalPosition};
  top: 1rem;
`;

interface Props {
  currentUser?: User | null;
  sidebarVisible?: boolean;
  activeItem?: Page;
  isConfirmOpen?: boolean;
  messageVisible?: boolean;
  isLoginFormOpen?: boolean;
  isLoading?: boolean;
  device?: StoreDevice;
  handleItemClick?: (e: SyntheticEvent, { name }: MenuItemProps) => void;
  handleLogoutClick?: () => void;
  handleLoginClick?: () => void;
  handleConfirmClick?: () => void;
  handleSidebarClick?: () => void;
  openConfirm?: () => void;
  closeConfirm?: () => void;
  closeLoginForm?: () => void;
}

export const LayoutComponent: FC<Props> = ({
  children,
  currentUser,
  sidebarVisible,
  activeItem,
  isConfirmOpen,
  messageVisible,
  isLoginFormOpen,
  isLoading,
  device,
  handleItemClick = () => {},
  handleLogoutClick = () => {},
  handleLoginClick = () => {},
  handleConfirmClick = () => {},
  handleSidebarClick = () => {},
  openConfirm = () => {},
  closeConfirm = () => {},
  closeLoginForm = () => {},
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <AppBar
        currentUser={currentUser}
        activeItem={activeItem}
        isConfirmOpen={isConfirmOpen}
        handleItemClick={handleItemClick}
        handleSidebarClick={handleSidebarClick}
        handleLogoutClick={handleLogoutClick}
        handleLoginClick={handleLoginClick}
        openConfirm={openConfirm}
        closeConfirm={closeConfirm}
        handleConfirmClick={handleConfirmClick}
      />
      <Sidebar.Pushable as={Segment} basic css={wrapper}>
        <Sidebar
          as={Menu}
          animation="overlay"
          vertical
          visible={sidebarVisible}
          width="thin"
          direction="right"
        >
          <Menu.Item onClick={handleItemClick} name="home" active={activeItem === 'home'}>
            Home
            <Icon name="home" />
          </Menu.Item>
          <Menu.Item onClick={handleItemClick} name="contact" active={activeItem === 'contact'}>
            Contact
            <Icon name="gamepad" />
          </Menu.Item>
          <Menu.Item
            onClick={currentUser ? handleLogoutClick : handleLoginClick}
            name={currentUser ? 'logout' : 'login'}
            active={activeItem === 'login' || activeItem === 'logout'}
            position="right"
          >
            {currentUser ? 'Log out' : 'Log in'}
            <Icon name="user" />
          </Menu.Item>
        </Sidebar>
        <TransitionablePortal onClose={closeLoginForm} open={isLoginFormOpen}>
          <Segment compact css={modalPosition}>
            <LoginForm />
          </Segment>
        </TransitionablePortal>

        <Sidebar.Pusher
          dimmed={sidebarVisible}
          css={css`
            ${paddingTop};
            display: flex !important;
            flex-direction: column !important;
            min-height: 100vh !important;
          `}
        >
          <Segment basic vertical loading={isLoading}>
            <Transition visible={messageVisible} animation="scale" duration={500}>
              <Message
                css={messagePosition}
                info
                header="Welcome!"
                content="You've logged in successfully."
              />
            </Transition>
            {children}
          </Segment>
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      {device === 'mobile' && currentUser && (
        <Button
          css={css`
            position: fixed !important;
            bottom: 1rem;
            right: 1rem;
          `}
          size="big"
          circular
          color="teal"
          icon="plus"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      )}
      <TransitionablePortal
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
      >
        <Segment
          compact
          css={css`
            position: fixed !important;
            bottom: 5rem;
            right: 1rem;
          `}
        >
          <Header as="h4" content="支出を登録" />
          <AddExpenseForm />
        </Segment>
      </TransitionablePortal>
    </div>
  );
};

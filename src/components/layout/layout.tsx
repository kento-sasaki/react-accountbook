/** @jsx jsx */
import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import {
  Sidebar,
  Menu,
  Icon,
  Segment,
  TransitionablePortal,
  MenuItemProps,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { AppBar } from './appBar';
import { Footer } from './footer';
import { User } from '../../interfaces';
import { pages, Page } from '../../pages';
import { LoginForm } from '../../containers/loginForm';
import { logout } from '../../firebase/auth';

const wrapper = css`
  margin-top: 3rem !important;
`;

const paddingTop = css`
  padding-top: 1.5rem;
`;

interface LayoutProps {
  currentUser?: User | null;
}

export const Layout: FC<LayoutProps> = ({ currentUser, children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<Page>('home');
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsOpen(false);
    setVisible(false);
  }, [currentUser]);

  const handleItemClick = (e: SyntheticEvent, { name }: MenuItemProps) => {
    if (name) {
      const pageName = name as Page;
      setActiveItem(pageName);
      history.push(pages[pageName].path);
      setVisible(false);
    }
  };

  const handleLogoutClick = async () => {
    await logout();
    setVisible(false);
    history.push('/');
  };

  const handleLoginClick = () => {
    setIsOpen(!isOpen);
    setVisible(false);
  };

  return (
    <div>
      <AppBar
        currentUser={currentUser}
        activeItem={activeItem}
        handleItemClick={handleItemClick}
        handleSidebarClick={() => setVisible(!visible)}
        handleLogoutClick={handleLogoutClick}
        handleLoginClick={handleLoginClick}
      />
      <Sidebar.Pushable as={Segment} basic css={wrapper}>
        <Sidebar
          as={Menu}
          animation="overlay"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
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

        <Sidebar.Pusher
          dimmed={visible}
          css={css`
            ${paddingTop};
            display: flex !important;
            flex-direction: column !important;
            min-height: 100vh !important;
          `}
        >
          {children}
          <Footer />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

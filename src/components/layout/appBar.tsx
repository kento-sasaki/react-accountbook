/** @jsx jsx */
import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Menu, TransitionablePortal, Segment, MenuItemProps } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../../containers/loginForm';
import { logout } from '../../firebase/auth';
import { pages, Page } from '../../pages';
import { User } from '../../interfaces';

interface AppBarProps {
  currentUser?: User | null;
}

export const AppBar: FC<AppBarProps> = ({ currentUser }) => {
  const [activeItem, setActiveItem] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsOpen(false);
  }, [currentUser]);

  const handleItemClick = (e: SyntheticEvent, { name }: MenuItemProps) => {
    if (name) {
      setActiveItem(name);
      const pageName = name as Page;
      history.push(pages[pageName].path);
    }
  };

  const handleLogoutClick = async () => {
    await logout();
    history.push('/');
  };

  const handleLoginClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Menu inverted fixed="top" color="teal" secondary>
        <Menu.Item
          onClick={handleItemClick}
          name="home"
          css={css`
            padding: 0.1rem !important;
          `}
        >
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
        </Menu.Item>
        <Menu.Item onClick={handleItemClick} name="home" active={activeItem === 'home'}>
          Home
        </Menu.Item>
        <Menu.Item onClick={handleItemClick} name="about" active={activeItem === 'about'}>
          About
        </Menu.Item>
        <Menu.Item onClick={handleItemClick} name="contact" active={activeItem === 'contact'}>
          Contact
        </Menu.Item>
        <Menu.Item
          onClick={currentUser ? handleLogoutClick : handleLoginClick}
          name={currentUser ? 'logout' : 'login'}
          active={activeItem === 'login' || activeItem === 'logout'}
          position="right"
        >
          {currentUser ? 'Log out' : 'Log in'}
        </Menu.Item>
      </Menu>
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
    </div>
  );
};

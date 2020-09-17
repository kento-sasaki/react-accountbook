/** @jsx jsx */
import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { MenuItemProps } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { User, Store } from '../interfaces';
import { pages, Page } from '../pages';
import { logout, deleteUser } from '../firebase/auth';
import { auth } from '../firebase/index';
import { LayoutComponent } from '../components/layout/layout';

interface LayoutProps {
  currentUser?: User | null;
}

export const Layout: FC<LayoutProps> = ({ currentUser, children }) => {
  const [activeItem, setActiveItem] = useState<Page>('home');
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [messageVisible, setMessageVisible] = useState<boolean>(false);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState<boolean>(false);

  const history = useHistory();
  const isLoading = useSelector((store: Store) => store.isLoading.isLoading);

  useEffect(() => {
    setIsLoginFormOpen(false);
    setSidebarVisible(false);
    auth().onAuthStateChanged((user) => {
      if (user) {
        setTimeout(() => {
          setMessageVisible(true);
        }, 500);
        setTimeout(() => {
          setMessageVisible(false);
        }, 5000);
      }
    });
  }, [currentUser]);

  const handleItemClick = (e: SyntheticEvent, { name }: MenuItemProps) => {
    if (name) {
      const pageName = name as Page;
      setActiveItem(pageName);
      history.push(pages[pageName].path);
      setSidebarVisible(false);
    }
  };

  const handleLogoutClick = async () => {
    await logout();
    setSidebarVisible(false);
    history.push('/');
  };

  const handleLoginClick = () => {
    console.log('handleLoginClick', isLoginFormOpen);
    setIsLoginFormOpen(!isLoginFormOpen);
    setSidebarVisible(false);
  };

  const handleConfirmClick = () => {
    deleteUser();
    setIsConfirmOpen(false);
  };

  const handleSidebarClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const openConfirm = () => {
    setIsConfirmOpen(true);
  };

  const closeConfirm = () => {
    setIsConfirmOpen(false);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  return (
    <LayoutComponent
      currentUser={currentUser}
      sidebarVisible={sidebarVisible}
      activeItem={activeItem}
      isConfirmOpen={isConfirmOpen}
      messageVisible={messageVisible}
      isLoading={isLoading}
      isLoginFormOpen={isLoginFormOpen}
      handleItemClick={handleItemClick}
      handleLogoutClick={handleLogoutClick}
      handleLoginClick={handleLoginClick}
      handleConfirmClick={handleConfirmClick}
      handleSidebarClick={handleSidebarClick}
      openConfirm={openConfirm}
      closeConfirm={closeConfirm}
      closeLoginForm={closeLoginForm}
    >
      {children}
    </LayoutComponent>
  );
};

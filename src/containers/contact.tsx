/** @jsx jsx */
import React, { FC, useState } from 'react';
import { jsx } from '@emotion/core';
import { ContactComponent } from '../components/contact/contact';

export const Contact: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openConfirm = () => {
    setIsOpen(true);
  };

  const closeConfirm = () => {
    setIsOpen(false);
  };

  const handleConfirmClick = () => {
    console.log('Hello');
    setIsOpen(false);
  };

  return (
    <ContactComponent
      isOpen={isOpen}
      openConfirm={openConfirm}
      closeConfirm={closeConfirm}
      handleConfirmClick={handleConfirmClick}
    />
  );
};

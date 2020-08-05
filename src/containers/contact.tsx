/** @jsx jsx */
import React, { FC, useState, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { TextAreaProps } from 'semantic-ui-react';
import axios from 'axios';
import { ContactComponent } from '../components/contact/contact';

export const Contact: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const url = process.env.REACT_APP_SLACK_WEBHOOK;

  const openConfirm = () => {
    setIsOpen(true);
  };

  const closeConfirm = () => {
    setIsOpen(false);
  };

  const handleConfirmClick = async () => {
    setIsOpen(false);
    if (url) {
      await axios.post(url, JSON.stringify({ text })).catch((error) => {
        console.log(error);
      });
      setText('');
    }
  };

  const handleChangeText = (e: FormEvent, { value }: TextAreaProps) => {
    if (typeof value === 'string') {
      setText(value);
    }
  };

  return (
    <ContactComponent
      isOpen={isOpen}
      text={text}
      openConfirm={openConfirm}
      closeConfirm={closeConfirm}
      handleChangeText={handleChangeText}
      handleConfirmClick={handleConfirmClick}
    />
  );
};

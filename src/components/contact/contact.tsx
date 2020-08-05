/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx } from '@emotion/core';
import { Container, Header, Form, Confirm, TextAreaProps } from 'semantic-ui-react';

interface ContactProps {
  isOpen?: boolean;
  text?: string;
  openConfirm?: () => void;
  closeConfirm?: () => void;
  handleChangeText?: (e: FormEvent, { value }: TextAreaProps) => void;
  handleConfirmClick?: () => void;
}

export const ContactComponent: FC<ContactProps> = ({
  isOpen = false,
  text = '',
  openConfirm = () => {},
  closeConfirm = () => {},
  handleChangeText = () => {},
  handleConfirmClick = () => {},
}) => {
  return (
    <Container>
      <Header>ぜひご意見をお寄せください。</Header>
      <Form>
        <Form.TextArea
          placeholder="Please give me your feedback."
          rows={9}
          onChange={handleChangeText}
          value={text}
        />
        <Form.Button content="送信" onClick={openConfirm} color="teal" circular />
      </Form>
      <Confirm
        content="送信してよろしいですか?"
        open={isOpen}
        onCancel={closeConfirm}
        onConfirm={handleConfirmClick}
        cancelButton="Cancel"
        confirmButton="OK"
        size="mini"
      />
    </Container>
  );
};

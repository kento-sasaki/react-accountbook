/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Container, Header, Form, Confirm } from 'semantic-ui-react';

interface ContactProps {
  isOpen?: boolean;
  openConfirm?: () => void;
  closeConfirm?: () => void;
  handleConfirmClick?: () => void;
}

export const ContactComponent: FC<ContactProps> = ({
  isOpen = false,
  openConfirm = () => {},
  closeConfirm = () => {},
  handleConfirmClick = () => {},
}) => {
  return (
    <Container>
      <Header as="h2">Contact</Header>
      <Form>
        <Form.TextArea placeholder="Tell me" rows={8} />
        <Form.Button content="Submit" onClick={openConfirm} />
      </Form>
      <Confirm
        content="Are you sure?"
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

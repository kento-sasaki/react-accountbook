/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Table, Button, Confirm } from 'semantic-ui-react';

interface ActionsCellProps {
  isEditable?: boolean;
  isOpen?: boolean;
  handleEditClick?: () => void;
  handleEditCancelClick?: () => void;
  openConfirm?: () => void;
  closeConfirm?: () => void;
  handleSaveClick?: () => void;
  handleDeleteClick?: () => void;
}

export const ActionsCellComponent: FC<ActionsCellProps> = ({
  isEditable = false,
  isOpen = false,
  handleEditClick = () => {},
  handleEditCancelClick = () => {},
  openConfirm = () => {},
  closeConfirm = () => {},
  handleSaveClick = () => {},
  handleDeleteClick = () => {},
}) => {
  if (isEditable) {
    return (
      <Table.Cell>
        <Button content="Save" icon="save" color="teal" onClick={handleSaveClick} />
        <Button basic content="Cancel" icon="cancel" color="grey" onClick={handleEditCancelClick} />
      </Table.Cell>
    );
  }

  return (
    <Table.Cell>
      <Button basic content="Edit" icon="edit" color="teal" onClick={handleEditClick} />
      <Button basic content="Delete" icon="trash" color="red" onClick={openConfirm} />
      <Confirm
        open={isOpen}
        onCancel={closeConfirm}
        onConfirm={handleDeleteClick}
        content="削除してよろしいですか？"
        cancelButton="Cancel"
        confirmButton="OK"
        size="mini"
      />
    </Table.Cell>
  );
};

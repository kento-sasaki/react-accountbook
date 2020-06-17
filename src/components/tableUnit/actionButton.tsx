/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Button } from 'semantic-ui-react';
import { Expense } from '../../interfaces';

interface ActionButtonProps {
  expense: Expense;
}

export const ActionButton: FC<ActionButtonProps> = ({ expense }) => {
  return (
    <div>
      <Button
        basic
        content="Edit"
        icon="edit"
        color="teal"
        onClick={() => {
          console.log(expense);
        }}
      />
      <Button basic content="Delete" icon="trash" color="red" />
    </div>
  );
};

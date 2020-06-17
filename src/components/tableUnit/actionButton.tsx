/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Button } from 'semantic-ui-react';

export const ActionButton: FC = () => {
  return (
    <div>
      <Button basic content="Edit" icon="edit" />
      <Button basic content="Delete" icon="trash" />
    </div>
  );
};

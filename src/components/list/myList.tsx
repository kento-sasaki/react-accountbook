/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { List, Button, Confirm } from 'semantic-ui-react';
import { StoreExpense } from '../../interfaces';
import { getColorLabel } from '../../utils/utils';

interface Props {
  expense: StoreExpense[];
}

export const MyList: FC<Props> = ({ expense }) => (
  <List divided relaxed>
    {expense.map((exp) => {
      const tagColorlabel = getColorLabel(exp.tagIcon);

      return (
        <List.Item key={exp.id}>
          <List.Icon name={exp.tagIcon} size="large" verticalAlign="middle" color={tagColorlabel} />
          <List.Content>
            <List.Header>¥{exp.amount}</List.Header>
            <List.Description>{exp.formatedDate}</List.Description>
            <List.Description>
              <Button
                size="tiny"
                circular
                basic
                content="Edit"
                icon="edit"
                color="teal"
                // onClick={handleEditClick}
                data-testid="edit-button"
              />
              <Button
                size="tiny"
                circular
                basic
                content="Delete"
                icon="trash"
                color="red"
                // onClick={openConfirm}
              />
              <Confirm
                // open={isOpen}
                // onCancel={closeConfirm}
                // onConfirm={handleDeleteClick}
                content="削除してよろしいですか？"
                cancelButton="Cancel"
                confirmButton="OK"
                size="mini"
              />
            </List.Description>
          </List.Content>
        </List.Item>
      );
    })}
  </List>
);

/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Button, Input, Grid, Modal, Header } from 'semantic-ui-react';
import { AddExpenseForm } from '../../containers/addExpenseForm';

const label = css`
  display: flex;
  padding: 0.9rem 1rem;
  :hover {
    cursor: pointer;
  }
`;

const displayFlex = css`
  display: flex;
`;

const padding = (x: number, y: number) => css`
  padding: ${y}rem ${x}rem !important;
`;

const margin = (top: number, right: number, bottom: number, left: number) => css`
  margin: ${top}rem ${right}rem ${bottom}rem ${left}rem !important;
`;

interface Props {
  selectFile?: (e: FormEvent) => void;
  handleAnalyzeClick?: () => void;
  openModal?: () => void;
  closeModal?: () => void;
  id?: string;
  amountByVision?: number;
  file?: {
    data: File | undefined;
    displayName: string;
  };
  isDisabled?: boolean;
  isOpen?: boolean;
}

export const InputFileComponent: FC<Props> = React.memo(
  ({
    selectFile = () => {},
    handleAnalyzeClick = () => {},
    openModal = () => {},
    closeModal = () => {},
    id = 'selectFile',
    amountByVision,
    file = undefined,
    isDisabled = true,
    isOpen = false,
  }) => {
    const MyInput = () => (
      <label css={label} htmlFor={id}>
        Select
        <input
          id={id}
          type="file"
          accept="image/*"
          onChange={selectFile}
          css={css`
            display: none;
          `}
        />
      </label>
    );

    return (
      <Grid columns="equal">
        <Grid.Row stretched>
          <Grid.Column
            width={12}
            css={css`
              ${padding(0, 0)}
              ${margin(0, 0.2, 0, 1)}
            `}
          >
            <div css={displayFlex}>
              <Input
                css={css`
                  ${margin(0.1, 0.1, 0.1, 0.1)}
                  min-width: 19rem;
                `}
                icon="file image outline"
                iconPosition="left"
                value={file?.data ? file.displayName : 'File name'}
              />
              <Button
                css={css`
                  ${padding(0, 0)}
                  ${margin(0.1, 0.1, 0.1, 0.1)}
                `}
                icon="file image outline"
                basic
                color="teal"
                fluid
              >
                <MyInput />
              </Button>
            </div>
          </Grid.Column>
          <Grid.Column
            css={css`
              ${padding(0, 0)}
              ${margin(0, 1, 0, 0.2)}
            `}
          >
            <Button
              onClick={handleAnalyzeClick}
              content="Analyze"
              color="teal"
              disabled={isDisabled}
            />
          </Grid.Column>
        </Grid.Row>
        <Modal onClose={closeModal} onOpen={openModal} open={isOpen}>
          <Header>Register your expenses from the receipts</Header>
          <Modal.Content>
            <AddExpenseForm initialAmount={amountByVision} optionFunction={closeModal} />
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="grey" content="Cancel" onClick={closeModal} />
          </Modal.Actions>
        </Modal>
      </Grid>
    );
  },
);

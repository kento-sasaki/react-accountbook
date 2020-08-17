/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Button, Input, Grid } from 'semantic-ui-react';

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

interface InputFileProps {
  selectFile?: (e: FormEvent) => void;
  handleUploadClick?: () => void;
  id?: string;
  file?: {
    data: File | undefined;
    displayName: string;
  };
  isDisabled?: boolean;
}

export const InputFileComponent: FC<InputFileProps> = ({
  selectFile = () => {},
  handleUploadClick = () => {},
  id = 'selectFile',
  file = undefined,
  isDisabled = true,
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
          <Button onClick={handleUploadClick} content="Submit" color="teal" disabled={isDisabled} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

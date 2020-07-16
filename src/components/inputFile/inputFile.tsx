/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Button, Label } from 'semantic-ui-react';

const margin = css`
  margin: 0.5rem;
  display: flex;
`;

interface InputFileProps {
  selectFile?: (e: any) => void;
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
  const Input = () => (
    <label
      css={css`
        display: flex;
        padding: 0.9rem 1rem;
        :hover {
          cursor: pointer;
        }
      `}
      htmlFor={id}
    >
      Select File
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
    <div css={margin}>
      <Button.Group>
        <Button
          as="div"
          labelPosition="left"
          css={css`
            :hover {
              cursor: text;
            }
          `}
        >
          <Label
            as="p"
            basic
            css={css`
              min-width: 15rem;
            `}
          >
            {file?.data ? file.displayName : 'File name'}
          </Label>
        </Button>
        <Button
          css={css`
            padding: 0 !important;
          `}
          basic
          color="teal"
        >
          <Input />
        </Button>
        <Button onClick={handleUploadClick} content="Submit" color="teal" disabled={isDisabled} />
      </Button.Group>
    </div>
  );
};

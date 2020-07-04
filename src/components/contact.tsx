/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Container, Button } from 'semantic-ui-react';
import { uploadFile } from '../firebase/storage';

interface InputFilesProps {
  id?: string;
  handleFiles?: (e: any) => void;
}

const InputFiles: FC<InputFilesProps> = ({ id = 'inputFiles', handleFiles = () => {} }) => {
  return (
    <div>
      <Button content="Input file" />
      <input type="file" onChange={handleFiles} id={id} />
    </div>
  );
};

const handleFiles = (e: any) => {
  const file: File = e.target.files[0];
  console.log(file);
  uploadFile(file);
};

export const Contact: FC = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <InputFiles handleFiles={handleFiles} />
    </Container>
  );
};

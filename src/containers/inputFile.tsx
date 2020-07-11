/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { uploadFile } from '../firebase/storage';
import { InputFileComponent } from '../components/inputFile/inputputFile';

export const InputFile: FC = () => {
  const id = 'inputFile';

  const handleFile = async (e: any) => {
    const file: File = e.target.files[0];
    console.log(file);
    await uploadFile(file);
  };

  return <InputFileComponent id={id} handleFile={handleFile} />;
};

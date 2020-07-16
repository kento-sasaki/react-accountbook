/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { uploadFile } from '../firebase/storage';
import { InputFileComponent } from '../components/inputFile/inputFile';

export const InputFile: FC = () => {
  const [fileData, setFileData] = useState<File | undefined>();
  const [displayName, setDisplayName] = useState<string>('File name');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (fileData) {
      const tempDisplayName =
        fileData.name.length > 25
          ? `${fileData.name.substr(0, 10)}...${fileData.name.substr(-10)}`
          : fileData.name;
      setDisplayName(tempDisplayName);
      setIsDisabled(false);
    }
  }, [displayName, fileData]);

  const selectFile = async (e: any) => {
    setFileData(e.target.files[0]);
  };

  const handleUploadClick = () => {
    if (fileData) {
      uploadFile(fileData);
    }
  };

  return (
    <InputFileComponent
      selectFile={selectFile}
      handleUploadClick={handleUploadClick}
      file={{ data: fileData, displayName }}
      isDisabled={isDisabled}
    />
  );
};

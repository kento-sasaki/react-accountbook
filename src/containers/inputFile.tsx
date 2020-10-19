/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { InputFileComponent } from '../components/inputFile/inputFile';
import { useVision } from '../customHooks/useVision';

export const InputFile: FC = () => {
  const [fileData, setFileData] = useState<File | undefined>(undefined);
  const [selectedFileData, setSelectedFileData] = useState<File | undefined>(undefined);
  const [displayName, setDisplayName] = useState<string>('File name');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { amountByVision, resetAmountByVision } = useVision(fileData);

  useEffect(() => {
    if (!fileData) {
      resetAmountByVision();
    }
    if (fileData && amountByVision) {
      setIsOpen(true);
    }
  }, [amountByVision, fileData, resetAmountByVision]);

  const selectFile = async (e: any) => {
    const tempFileData = e.target.files[0];
    setSelectedFileData(tempFileData);
    const tempDisplayName =
      tempFileData.name.length > 25
        ? `${tempFileData.name.substr(0, 10)}...${tempFileData.name.substr(-10)}`
        : tempFileData.name;
    setDisplayName(tempDisplayName);
    setIsDisabled(false);
  };

  const handleAnalyzeClick = () => {
    setFileData(selectedFileData);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setFileData(undefined);
    setIsOpen(false);
  };

  return (
    <InputFileComponent
      selectFile={selectFile}
      handleAnalyzeClick={handleAnalyzeClick}
      openModal={openModal}
      closeModal={closeModal}
      amountByVision={amountByVision}
      file={{ data: selectedFileData, displayName }}
      isDisabled={isDisabled}
      isOpen={isOpen}
    />
  );
};

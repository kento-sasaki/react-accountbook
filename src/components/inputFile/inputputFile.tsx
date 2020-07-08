/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { fetchExpense } from '../../stores/expense';

interface InputFileProps {
  id?: string;
  handleFile?: (e: any) => void;
}

export const InputFileComponent: FC<InputFileProps> = ({
  id = 'inputFile',
  handleFile = () => {},
}) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(fetchExpense());
  };

  return (
    <div>
      <Button content="Input file" onClick={handleClick} />
      <input type="file" onChange={handleFile} id={id} />
    </div>
  );
};

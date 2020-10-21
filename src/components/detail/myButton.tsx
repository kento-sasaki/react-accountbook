/** @jsx jsx */
import React, { FC, useState } from 'react';
import { jsx, css } from '@emotion/core';
import { Button, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';
import { TagLabel } from '../../interfaces';

const label = css`
  margin: 0.2rem 0.2rem !important;
`;

interface Props {
  detail: {
    label: TagLabel;
    amount: number;
    icon: SemanticICONS;
    color: SemanticCOLORS;
  };
  handleRequireClick: (requirement: { tagLabel: TagLabel; require: boolean }) => void;
}

export const MyButton: FC<Props> = ({ detail, handleRequireClick }) => {
  const [basic, setBasic] = useState<boolean>(true);

  const handleClick = () => {
    setBasic(!basic);
    handleRequireClick({ tagLabel: detail.label, require: basic });
  };

  return (
    <Button
      css={label}
      size="large"
      color={detail.color}
      icon={detail.icon}
      content={`¥ ${detail.amount}`}
      basic={basic}
      fluid
      onClick={handleClick}
      data-testid={detail.icon}
    />
  );
};

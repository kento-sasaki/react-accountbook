/** @jsx jsx */
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { denormalize, schema } from 'normalizr';
import { LoginedHomeComponent } from '../components/home/loginedHome';
import { Store, TagLabel } from '../interfaces';

export const LoginedHome: FC = () => {
  const normalizedExpense = useSelector((store: Store) => store.expense);
  const expense = denormalize(
    { expenses: normalizedExpense.ids },
    { expenses: [new schema.Entity('expenses')] },
    { expenses: normalizedExpense.entities },
  ).expenses;

  const [requireTags, setRequireTags] = useState<TagLabel[]>([]);

  const handleRequireClick = ({ tagLabel, require }: { tagLabel: TagLabel; require: boolean }) => {
    if (require) {
      setRequireTags([...requireTags, tagLabel]);
    }
    if (!require) {
      setRequireTags(requireTags.filter((tag) => tag !== tagLabel));
    }
  };

  const displayExpense =
    requireTags.length === 0
      ? expense
      : expense.filter((exp: any) => requireTags.includes(exp.tagLabel));

  return (
    <LoginedHomeComponent
      expense={expense}
      displayExpense={displayExpense}
      handleRequireClick={handleRequireClick}
    />
  );
};

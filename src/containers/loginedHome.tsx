/** @jsx jsx */
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { jsx } from '@emotion/core';
import { denormalize, schema } from 'normalizr';
import { ComputerHomeComponent } from '../components/home/computerHome';
import { Store, TagLabel, StoreExpense } from '../interfaces';
import { MobileHomeComponent } from '../components/home/mobileHome';

export const LoginedHome: FC = () => {
  const { ids, entities } = useSelector((store: Store) => store.expense);
  const expense = denormalize(
    { expenses: ids },
    { expenses: [new schema.Entity('expenses')] },
    { expenses: entities },
  ).expenses as StoreExpense[];
  const device = useSelector((store: Store) => store.device);

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
      : expense.filter((exp) => requireTags.includes(exp.tagLabel));

  return device !== 'mobile' ? (
    <ComputerHomeComponent
      expense={expense}
      displayExpense={displayExpense}
      handleRequireClick={handleRequireClick}
    />
  ) : (
    <MobileHomeComponent
      expense={expense}
      displayExpense={displayExpense}
      handleRequireClick={handleRequireClick}
    />
  );
};

import { StoreExpense } from '../interfaces';

export const createDatilyExpense = (allExpense: StoreExpense[]) => {
  const formatedDateArray = [...allExpense]
    .reverse()
    .map((exp) => exp.formatedDate)
    .filter((formatedDate, i, self) => self.indexOf(formatedDate) === i);

  const dailyExpense = formatedDateArray.map((formatedDate) => {
    const amounts = allExpense
      .filter((exp1) => exp1.formatedDate === formatedDate)
      .map((exp2) => exp2.amount);

    return { formatedDate, amounts };
  });

  return dailyExpense;
};

export const createTagExpense = (allExpense: StoreExpense[]) => {
  const tagLabelArray = [...allExpense]
    .map((exp) => exp.tagLabel)
    .filter((tagLabel, i, self) => self.indexOf(tagLabel) === i);

  const tagExpense = tagLabelArray.map((tagLabel) => {
    const amounts = allExpense
      .filter((exp1) => exp1.tagLabel === tagLabel)
      .map((exp2) => exp2.amount);

    return { tagLabel, amounts };
  });

  return tagExpense;
};

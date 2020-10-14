import dayjs from 'dayjs';
import { StoreExpense } from '../interfaces';

export const createDailyExpense = (allExpense: StoreExpense[]) => {
  const formatedDateArray = [...allExpense]
    .reverse()
    .map((exp) => exp.formatedDate)
    .filter((formatedDate, i, self) => self.indexOf(formatedDate) === i);

  const dailyExpense = formatedDateArray.map((formatedDate) => {
    const amounts = allExpense
      .filter((exp1) => exp1.formatedDate === formatedDate)
      .map((exp2) => exp2.amount);

    return { formatedDate, amounts, mmdd: dayjs(formatedDate).format('M/D') };
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

export const createDateOptions = (limit: number) => {
  return [...Array(limit).keys()].map((n) => {
    return {
      key: n,
      text: `${dayjs().subtract(n, 'day').format('YYYY/M/D')}`,
      value: n,
    };
  });
};

export const tagOptions = [
  { key: 0, text: 'その他', value: 'その他', icon: 'tag', color: '#838383', colorlabel: 'grey' },
  { key: 1, text: '食費', value: '食費', icon: 'food', color: '#049C94', colorlabel: 'teal' },
  { key: 2, text: '家賃', value: '家賃', icon: 'home', color: '#5929BB', colorlabel: 'violet' },
  {
    key: 3,
    text: '電気代',
    value: '電気代',
    icon: 'power cord',
    color: '#EBAE00',
    colorlabel: 'yellow',
  },
  { key: 4, text: '水道代', value: '水道代', icon: 'bath', color: '#1778C1', colorlabel: 'blue' },
  { key: 5, text: 'ガス代', value: 'ガス代', icon: 'fire', color: '#D11A1A', colorlabel: 'red' },
  { key: 6, text: '電話', value: '電話', icon: 'phone', color: '#F36203', colorlabel: 'orange' },
  {
    key: 7,
    text: '交通費',
    value: '交通費',
    icon: 'subway',
    color: '#13AB38',
    colorlabel: 'green',
  },
];

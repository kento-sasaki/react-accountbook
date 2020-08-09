import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { Detail } from './detail';
import { store } from '../../stores/index';

export default {
  component: Detail,
  title: 'Detail',
};

const tagExpenses = [
  { tagLabel: 'その他', amount: 1000 },
  { tagLabel: '食費', amount: 2000 },
  { tagLabel: '家賃', amount: 3000 },
  { tagLabel: '電気代', amount: 1000 },
  { tagLabel: '水道代', amount: 2000 },
  { tagLabel: 'ガス代', amount: 3000 },
  { tagLabel: '電話', amount: 1000 },
  { tagLabel: '交通費', amount: 2000 },
];

export const detail = () => {
  return (
    <Provider store={store}>
      <Detail tagExpenses={tagExpenses} />
    </Provider>
  );
};

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { ContactComponent } from './contact';
import { store } from '../../stores/index';

export default {
  component: ContactComponent,
  title: 'Contact',
};

export const addExpense = () => {
  return (
    <Provider store={store}>
      <ContactComponent />
    </Provider>
  );
};

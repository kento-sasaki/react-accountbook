import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { InputFileComponent } from './inputFile';
import { store } from '../../stores/index';

export default {
  component: InputFileComponent,
  title: 'InputFile',
};

export const inputFile = () => {
  return (
    <Provider store={store}>
      <InputFileComponent />
    </Provider>
  );
};

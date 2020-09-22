import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { LogoutedHome } from './logoutedHome';
import { store } from '../../stores/index';

export default {
  component: LogoutedHome,
  title: 'InputFile',
};

export const inputFile = () => {
  return (
    <Provider store={store}>
      <LogoutedHome />
    </Provider>
  );
};

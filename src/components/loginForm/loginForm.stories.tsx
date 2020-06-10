import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { LoginFormComponent } from './loginForm';
import { store } from '../../stores/index';

export default {
  component: LoginFormComponent,
  title: 'LoginForm',
};

export const loginForm = () => {
  return (
    <Provider store={store}>
      <LoginFormComponent />
    </Provider>
  );
};

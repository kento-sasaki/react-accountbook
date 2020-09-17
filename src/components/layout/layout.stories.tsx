import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LayoutComponent } from './layout';
import { store } from '../../stores/index';

export default {
  component: LayoutComponent,
  title: 'Layout',
};

export const layout = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
    </Provider>
  );
};

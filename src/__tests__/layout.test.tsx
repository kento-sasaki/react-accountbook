import React from 'react';
import { render, cleanup, fireEvent } from '../utils/test-utils';
import { AppBar } from '../components/layout/appBar';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Layout', () => {
  it('AppBar', () => {
    const { getByText } = render(<AppBar />);

    fireEvent.click(getByText('Home'));
    expect(getByText('Home')).toHaveClass('active item');
  });
});

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from '../utils/test-utils';
import { AddIncomeForm } from '../containers/addIncomeForm';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('AddIncomeForm', () => {
  it('数字だけではボタンがアクティブ', async () => {
    const { getByRole } = render(<AddIncomeForm />);
    await userEvent.type(screen.getByPlaceholderText('Income'), '1000');
    expect(getByRole('button')).toBeEnabled();
  });
  it('文字だけではボタンが非アクティブ', async () => {
    const { getByRole } = render(<AddIncomeForm />);
    await userEvent.type(screen.getByPlaceholderText('Income'), 'foo');
    expect(getByRole('button')).toHaveClass('disabled');
  });
  it('数字と文字ではボタンが非アクティブ', async () => {
    const { getByRole } = render(<AddIncomeForm />);
    await userEvent.type(screen.getByPlaceholderText('Income'), '100foo');
    expect(getByRole('button')).toHaveClass('disabled');
  });
});

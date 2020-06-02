import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from '../utils/test-utils';
import { AddExpenseForm } from '../containers/addExpenseForm';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('AddExpenseForm', () => {
  it('数字だけではボタンがアクティブ', async () => {
    const { getByRole } = render(<AddExpenseForm />);
    await userEvent.type(screen.getByPlaceholderText('Expense'), '1000');
    expect(getByRole('button')).toBeEnabled();
  });
  it('文字だけではボタンが非アクティブ', async () => {
    const { getByRole } = render(<AddExpenseForm />);
    await userEvent.type(screen.getByPlaceholderText('Expense'), 'foo');
    expect(getByRole('button')).toHaveClass('disabled');
  });
  it('数字と文字ではボタンが非アクティブ', async () => {
    const { getByRole } = render(<AddExpenseForm />);
    await userEvent.type(screen.getByPlaceholderText('Expense'), '100foo');
    expect(getByRole('button')).toHaveClass('disabled');
  });
});

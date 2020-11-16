import React from 'react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { render, cleanup, screen } from '../utils/test-utils';
import { MyTableUnit } from '../containers/myTableUnit';
import { StoreExpense } from '../interfaces';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('MyTableUnit', () => {
  const expense: StoreExpense = {
    id: '1',
    date: new Date(),
    formatedDate: dayjs(new Date()).format('YYYY/M/D'),
    amount: 5000,
    tagLabel: '家賃',
    tagIcon: 'home',
  };

  it('Editボタンで表示が切り替わる', () => {
    render(<MyTableUnit expense={expense} />);
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.queryByText('Save')).toBeNull();
    expect(screen.queryByText('Cancel')).toBeNull();

    userEvent.click(screen.getByText('Edit'));

    expect(screen.queryByText('Edit')).toBeNull();
    expect(screen.queryByText('Delete')).toBeNull();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();

    userEvent.click(screen.getByText('Cancel'));

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.queryByText('Save')).toBeNull();
    expect(screen.queryByText('Cancel')).toBeNull();
  });
  it('Dropdownの数', () => {
    render(<MyTableUnit expense={expense} />);
    userEvent.click(screen.getByText('Edit'));
    expect(screen.getAllByRole('option').length).toEqual(39);
  });
  it('amountが空だと非アクティブ', () => {
    render(<MyTableUnit expense={expense} />);
    userEvent.click(screen.getByText('Edit'));
    userEvent.clear(screen.getByRole('textbox'));
    expect(screen.getByText('Save')).toHaveClass('disabled');
  });
  it('数字だけではボタンがアクティブ', async () => {
    render(<MyTableUnit expense={expense} />);
    userEvent.click(screen.getByText('Edit'));
    userEvent.clear(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), '1000');
    expect(screen.getByText('Save')).toBeEnabled();
  });
  it('文字だけではボタンが非アクティブ', async () => {
    render(<MyTableUnit expense={expense} />);
    userEvent.click(screen.getByText('Edit'));
    userEvent.clear(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'foo');
    expect(screen.getByText('Save')).toHaveClass('disabled');
  });
  it('数字と文字ではボタンが非アクティブ', async () => {
    render(<MyTableUnit expense={expense} />);
    userEvent.click(screen.getByText('Edit'));
    userEvent.clear(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'foo1000');
    expect(screen.getByText('Save')).toHaveClass('disabled');
  });
});

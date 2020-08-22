/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { createDatilyExpense } from '../../utils/utils';
import { StoreExpense, Store } from '../../interfaces';

interface ExpenseBarChartProps {
  expense: StoreExpense[];
}

export const ExpenseBarChart: FC<ExpenseBarChartProps> = ({ expense }) => {
  const device = useSelector((store: Store) => store.device.device);
  const height = device === 'widescreen' || device === 'largeScreen' ? 300 : 187;

  const data = createDatilyExpense(expense).map((exp) => {
    return {
      formatedDate: exp.formatedDate,
      amount: exp.amounts.reduce((previous, current) => {
        return previous + current;
      }),
    };
  });

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <Bar dataKey="amount" fill="#00b5ad" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="formatedDate" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
};

/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { createDatilyExpense } from '../../utils/utils';
import { StoreExpense } from '../../interfaces';

interface ExpenseBarChartProps {
  expense: StoreExpense[];
}

export const ExpenseBarChart: FC<ExpenseBarChartProps> = ({ expense }) => {
  const data = createDatilyExpense(expense).map((exp) => {
    return {
      formatedDate: exp.formatedDate,
      amount: exp.amounts.reduce((previous, current) => {
        return previous + current;
      }),
    };
  });

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
          <Bar dataKey="amount" fill="#00b5ad" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="formatedDate" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

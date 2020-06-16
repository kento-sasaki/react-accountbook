/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { createDatilyExpense } from '../../firebase/firestore';
import { Expense } from '../../interfaces';

interface ExpenseChartProps {
  expense: Expense[];
}

export const ExpenseChart: FC<ExpenseChartProps> = ({ expense }) => {
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
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="formatedDate" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
          <Bar dataKey="amount" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="formatedDate" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

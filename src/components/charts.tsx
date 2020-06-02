import React, { FC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Expense, createDatilyExpense } from '../firebase/firestore';

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
    <LineChart
      width={900}
      height={400}
      data={data}
      margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="formatedDate" />
      <YAxis />
    </LineChart>
  );
};

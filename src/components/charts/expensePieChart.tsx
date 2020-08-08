/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { StoreExpense } from '../../interfaces';
import { createTagExpense } from '../../utils/utils';
import { tagOptions } from '../table/tagCell';

interface ExpensePieChartProps {
  expense: StoreExpense[];
}

export const ExpensePieChart: FC<ExpensePieChartProps> = ({ expense }) => {
  const data = createTagExpense(expense).map((exp) => {
    return {
      tagLabel: exp.tagLabel,
      amount: exp.amounts.reduce((previous, current) => {
        return previous + current;
      }),
    };
  });
  console.log(data);

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="tagLabel"
            fill="#00b5ad"
            paddingAngle={1}
            innerRadius={60}
            outerRadius={90}
          >
            {data.map((elemnt, i, self) => (
              <Cell
                key={self.indexOf(elemnt)}
                fill={tagOptions[tagOptions.map((tag) => tag.text).indexOf(elemnt.tagLabel)].color}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

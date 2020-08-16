/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { tagOptions } from '../../utils/utils';

interface ExpensePieChartProps {
  tagExpenses: {
    tagLabel: string;
    amount: number;
  }[];
}

export const ExpensePieChart: FC<ExpensePieChartProps> = ({ tagExpenses }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={tagExpenses}
            dataKey="amount"
            nameKey="tagLabel"
            fill="#00b5ad"
            paddingAngle={1}
            innerRadius={50}
            outerRadius={90}
          >
            {tagExpenses.map((elemnt, i, self) => (
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

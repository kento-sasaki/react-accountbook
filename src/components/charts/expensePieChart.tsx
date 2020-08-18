/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { useSelector } from 'react-redux';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Store } from '../../interfaces';
import { tagOptions } from '../../utils/utils';

interface ExpensePieChartProps {
  tagExpenses: {
    tagLabel: string;
    amount: number;
  }[];
}

export const ExpensePieChart: FC<ExpensePieChartProps> = ({ tagExpenses }) => {
  const device = useSelector((store: Store) => store.device.device);

  const height = device === 'widescreen' || device === 'largeScreen' ? 300 : 187;
  const innerRadius = device === 'widescreen' || device === 'largeScreen' ? 60 : 30;
  const outerRadius = device === 'widescreen' || device === 'largeScreen' ? 120 : 75;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={tagExpenses}
          dataKey="amount"
          nameKey="tagLabel"
          fill="#00b5ad"
          paddingAngle={1}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
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
  );
};

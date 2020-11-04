/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { ResponsiveBar } from '@nivo/bar';
import { useSelector } from 'react-redux';
import { StoreExpense, Store } from '../../interfaces';
import { createDailyExpense } from '../../utils/utils';

interface Props {
  expense: StoreExpense[];
}

export const ExpenseBarChart: FC<Props> = ({ expense }) => {
  const data = createDailyExpense(expense).map((exp) => {
    return {
      formatedDate: exp.formatedDate,
      amount: exp.amounts.reduce((previous, current) => {
        return previous + current;
      }),
      mmdd: exp.mmdd,
    };
  });

  const device = useSelector((store: Store) => store.device);
  const height = device === 'widescreen' || device === 'largeScreen' ? 300 : 230;

  return (
    <div
      css={css`
        height: ${height}px;
      `}
      data-testid="expense-bar-chart"
    >
      <ResponsiveBar
        data={data}
        keys={['amount']}
        indexBy="mmdd"
        margin={{ top: 20, right: 0, bottom: 45, left: 70 }}
        colors="#00b5ad"
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '日付',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '支出額',
          legendPosition: 'middle',
          legendOffset: -65,
        }}
        labelSkipWidth={30}
        labelSkipHeight={12}
        labelTextColor="white"
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        borderRadius={7}
        animate
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

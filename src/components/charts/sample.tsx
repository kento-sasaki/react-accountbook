/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { useSelector } from 'react-redux';
import { ResponsivePie } from '@nivo/pie';
import { Store, StoreExpense } from '../../interfaces';
import { createPieData, tagOptions } from '../../utils/utils';

interface Props {
  expense: StoreExpense[];
}

export const ExpensePieChart: FC<Props> = ({ expense }) => {
  const device = useSelector((store: Store) => store.device.device);

  const height = device === 'widescreen' || device === 'largeScreen' ? 300 : 230;
  // const innerRadius = device === 'widescreen' || device === 'largeScreen' ? 60 : 30;
  // const outerRadius = device === 'widescreen' || device === 'largeScreen' ? 120 : 75;

  const tagExpense = createPieData(expense);

  return (
    <div
      css={css`
        height: ${height}px;
      `}
    >
      <ResponsivePie
        data={tagExpense}
        margin={{ top: 20, right: 5, bottom: 60, left: 5 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        sortByValue
        colors={tagOptions.map((tag) => tag.color)}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

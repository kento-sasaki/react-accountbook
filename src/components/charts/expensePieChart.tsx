/** @jsx jsx */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { useSelector } from 'react-redux';
import { ResponsivePie } from '@nivo/pie';
import { Store, StoreExpense } from '../../interfaces';
import { createPieData } from '../../utils/utils';

interface Props {
  expense: StoreExpense[];
}

export const ExpensePieChart: FC<Props> = ({ expense }) => {
  const device = useSelector((store: Store) => store.device.device);
  const height = device === 'widescreen' || device === 'largeScreen' ? 300 : 230;
  const margin =
    device === 'widescreen' || device === 'largeScreen'
      ? { top: 50, right: 55, bottom: 35, left: 55 }
      : { top: 10, right: 5, bottom: 15, left: 5 };
  const sliceLabel = device === 'widescreen' || device === 'largeScreen' ? 'value' : 'id';
  const enableRadialLabels = !!(device === 'widescreen' || device === 'largeScreen');
  const data = createPieData(expense);
  const colors = data.map((element) => element.color);

  return (
    <div
      css={css`
        height: ${height}px;
      `}
      data-testid="expense-pie-chart"
    >
      <ResponsivePie
        data={data}
        margin={margin}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        sortByValue
        colors={colors}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={enableRadialLabels}
        sliceLabel={sliceLabel}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={2}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={10}
        radialLabelsLinkHorizontalLength={10}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="white"
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

import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';
import { ReactElement } from 'react';
import serializer from 'jest-emotion';

function createNodeMock(element: ReactElement<HTMLElement>) {
  if (element.type === 'div') {
    return {
      scrollWidth: 111,
      scrollHeight: 222,
      offsetWidth: 333,
      offsetHeight: 444,
      parentElement: {
        scrollWidth: 555,
        scrollHeight: 666,
        offsetWidth: 777,
        offsetHeight: 888,
        currentStyle: {
          position: 'relative',
        },
      },
    };
  }

  return null;
}

initStoryshots({
  snapshotSerializers: [serializer],
  test: snapshotWithOptions({
    createNodeMock,
  }),
});

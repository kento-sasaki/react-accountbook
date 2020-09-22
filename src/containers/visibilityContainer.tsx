import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Visibility, VisibilityEventData } from 'semantic-ui-react';
import { StoreDevice } from '../interfaces';
import { whichDevice } from '../stores/device';

export const VisibilityContainer: FC = ({ children }) => {
  const [device, setDevice] = useState<StoreDevice>('largeScreen');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(whichDevice(device));
  }, [device, dispatch]);

  const handleUpdate = (e: null, { calculations }: VisibilityEventData) => {
    if (calculations.width >= 1920) {
      setDevice('widescreen');

      return;
    }
    if (calculations.width >= 1200) {
      setDevice('largeScreen');

      return;
    }
    if (calculations.width >= 992) {
      setDevice('computer');

      return;
    }
    if (calculations.width >= 768) {
      setDevice('tablet');

      return;
    }
    setDevice('mobile');
  };

  return (
    <Visibility onUpdate={handleUpdate} fireOnMount>
      {children}
    </Visibility>
  );
};

import React, { useCallback } from 'react';
import { actions as valueSlidersActions } from '../features/valueSliders';
import { useAppDispatch } from '../hooks/reduxHooks';
import { PriceSlider } from './PriceSlider';

export const Sliders: React.FC = () => {
  const dispatch = useAppDispatch();

  const changeStorageSlider = useCallback((number: number) => {
    dispatch(valueSlidersActions.setStorage(number));
  }, []);

  const changeTransferSlider = useCallback((number: number) => {
    dispatch(valueSlidersActions.setTransfer(number));
  }, []);

  return (
    <div className="price-sliders">
      <PriceSlider name="Storage" fn={changeStorageSlider} />
      <PriceSlider name="Transfer" fn={changeTransferSlider} />
    </div>
  );
};

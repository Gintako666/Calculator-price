/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeSliders: [0, 0, 0, 0],
  price: [0, 0, 0, 0],
};

const activeBarSlice = createSlice({
  name: 'activeBar',
  initialState,
  reducers: {
    setActiveBar: (value, action: PayloadAction<{number: number, value: number}>) => {
      value.price[action.payload.number] = action.payload.value;
      const minValueIndex = value.price.findIndex(item => item === Math.min(...value.price));

      value.activeSliders = value.activeSliders.map(() => 0);
      value.activeSliders[minValueIndex] = 1;
    },
  },
});

export const { actions } = activeBarSlice;
export default activeBarSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const valueSlidersSlice = createSlice({
  name: 'valueSliders',
  initialState: {
    storage: 0,
    transfer: 0,
  },
  reducers: {
    setStorage: (value, action: PayloadAction<number>) => {
      value.storage = action.payload;
    },
    setTransfer: (value, action: PayloadAction<number>) => {
      value.transfer = action.payload;
    },
  },
});

export const { actions } = valueSlidersSlice;
export default valueSlidersSlice.reducer;

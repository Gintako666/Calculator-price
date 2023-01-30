/* eslint-disable import/no-extraneous-dependencies */
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import valueSlidersReduser from '../features/valueSliders';
import activeBarSliceReduser from '../features/activeBar';

const store = configureStore({
  reducer: {
    valueSliders: valueSlidersReduser,
    activeBarSlice: activeBarSliceReduser,
  },
});

composeWithDevTools();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

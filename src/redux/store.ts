import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import moviesReducer from './movies';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  devTools: true,
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);

import type { Store } from '@reduxjs/toolkit';
import type { RootState } from 'src/state/rootReducer';

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from 'src/state/rootReducer';

const store = configureStore({ reducer: rootReducer });
export const makeStore = () => store;

export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper<Store<RootState>>(makeStore);

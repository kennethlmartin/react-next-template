import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'src/state/rootReducer';

export const makeStore = () => configureStore({ reducer: rootReducer });

export const wrapper = createWrapper(makeStore);

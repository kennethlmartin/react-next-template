import type { RootState } from 'src/state/rootReducer';

import { createSelector } from '@reduxjs/toolkit';

const selectState = (state: RootState) => state;

export const selectApp = createSelector(selectState, (state) => state.app);
export const selectTheme = createSelector(selectApp, (app) => app.theme);

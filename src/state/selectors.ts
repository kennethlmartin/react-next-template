import type { RootState } from 'src/state/rootReducer';

import * as R from 'ramda';
import { createSelector } from '@reduxjs/toolkit';

const selectState = (state: RootState) => state;

export const selectApp = createSelector(selectState, R.prop('app'));
export const selectTheme = createSelector(selectApp, R.prop('theme'));

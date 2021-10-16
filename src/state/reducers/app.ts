import type { ThemeMode } from 'src/themes';

import { createReducer } from '@reduxjs/toolkit';

import * as actions from 'src/state/actions';

interface AppState {
  theme: ThemeMode;
}

export const INITIAL_STATE: AppState = {
  theme: 'light',
};

export const setTheme = (state: AppState, { payload }) => ({
  ...state,
  theme: payload,
});

const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(actions.themeSelected, setTheme);
});

export default reducer;

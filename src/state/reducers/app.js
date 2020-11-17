import { createReducer } from '@reduxjs/toolkit';
import * as actions from 'src/state/actions';

const INITIAL_STATE = {
  theme: 'light',
};

const setTheme = (state, { payload }) => ({
  ...state,
  theme: payload,
});

const reducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(actions.themeUpdated, setTheme);
});

export default reducer;

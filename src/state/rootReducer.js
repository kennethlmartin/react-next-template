import { combineReducers } from '@reduxjs/toolkit';

import app from 'src/state/reducers/app';

export const rootReducer = combineReducers({
  app,
});

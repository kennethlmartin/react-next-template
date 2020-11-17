import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import app from 'src/state/reducers/app';

const combinedReducer = combineReducers({
  app,
});

export const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combinedReducer(state, action);
};

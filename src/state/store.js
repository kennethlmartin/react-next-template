import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootReducer } from 'src/state/rootReducer';
import { rootSaga } from 'src/state/rootSaga';

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    middleware: [
      ...getDefaultMiddleware({
        thunk: false,
      }),
      sagaMiddleware,
    ],
    reducer: rootReducer,
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore);

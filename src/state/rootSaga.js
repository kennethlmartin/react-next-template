import { all, fork } from 'redux-saga/effects';
import { watchTestSaga } from './sagas/watchTestSaga';

export const rootSaga = function* rootSaga() {
  yield all([fork(watchTestSaga)]);
};

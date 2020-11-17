import { takeEvery } from 'redux-saga/effects';
import { themeUpdated } from '../actions';

function* testSaga() {
  yield console.log('testSaga');
}

export function* watchTestSaga() {
  yield takeEvery(themeUpdated, testSaga);
}

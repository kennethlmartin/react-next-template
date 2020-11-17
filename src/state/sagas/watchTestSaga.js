import { takeEvery } from 'redux-saga/effects';
import { themeUpdated } from 'src/state/actions';

function* testSaga() {
  // eslint-disable-next-line no-console
  yield console.log('testSaga');
}

export function* watchTestSaga() {
  yield takeEvery(themeUpdated, testSaga);
}

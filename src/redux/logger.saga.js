import { select, takeEvery } from 'redux-saga/effects'

// eslint-disable-next-line import/prefer-default-export
export function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  });
}

export default watchAndLog;

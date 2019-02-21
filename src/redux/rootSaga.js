/* eslint-disable import/prefer-default-export */
import { all, fork } from 'redux-saga/effects';

import { watchAndLog } from './logger.saga';
import { authSagas } from '../sagas/authSagas';

export function* rootSaga() {
    return yield all([
        ...authSagas.map(m => fork(m)),
        fork(watchAndLog),
    ]);
}

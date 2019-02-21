/* eslint-disable import/prefer-default-export */
import { all, fork, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { watchAndLog } from './logger.saga';
import { authSagas } from '../sagas/authSagas';
import * as types from '../actions/actionTypes';

function* authCheck() {
    
    if (localStorage.bw_jwt) {
        
        const user = {token: localStorage.bw_jwt};
        yield put({type: types.LOGIN_FINISHED, payload: user});
        yield put(push('/'));
    }else{
        yield put(push('/login'));
    }
}

export function* rootSaga() {
    return yield all([
        fork(authCheck),
        ...authSagas.map(m => fork(m)),
        fork(watchAndLog),
    ]);
}

import { takeLatest, call, fork, takeEvery, put, delay } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { push } from 'connected-react-router';

import { login } from '../services/apiService';


export function* handleLogin(){
	yield takeLatest(types.LOGIN_BEGIN, handleLoginSaga);
}

export function* handleLoginSaga(action) {
    try {
        const { payload } = action
        yield delay(1000);
        const response = yield call(login, payload);
        yield put({type: types.LOGIN_FINISHED, payload: response});
        yield put(push('/home'));
    } catch (error) {
        yield put({type: types.LOGIN_ERROR, payload: error});
    }
}

export const authSagas = [
    handleLogin,
];

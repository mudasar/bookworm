import { takeLatest, call, fork, takeEvery, put, delay } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { push } from 'connected-react-router';


export function* handleLogin(){
	yield takeLatest(types.LOGIN_BEGIN, handleLoginSaga);
}

export function* handleLoginSaga(action) {
    try {
        const { payload } = action
        yield delay(3000);
        yield put({type: types.LOGIN_FINISHED, payload: {name: 'Mudasar'}});
        yield put(push('/home'));
    } catch (error) {
        yield put({type: types.LOGIN_ERROR, payload: {msg: 'error occurred'}});
    }
}

export const authSagas = [
    handleLogin,
];

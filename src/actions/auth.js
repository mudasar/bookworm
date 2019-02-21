import * as types from './actionTypes';

const login = credentials => ({ type: types.LOGIN_BEGIN, payload: credentials });

export default { login };

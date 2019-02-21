import * as types from './actionTypes';

const login = credentials => ({ type: types.LOGIN_BEGIN, payload: credentials });

const logout = () => ({type: types.LOGOUT});

export default { login, logout };

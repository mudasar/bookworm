import * as types from '../actions/actionTypes';

const INITIAL_STATE = {};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOGIN_BEGIN:
            return {...state, loading:true};
        case types.LOGIN_FINISHED: {
           return {...state, loading: false, ...action.payload};
        }
        case types.LOGIN_ERROR:{
            return {...state, loading: false, error: action.payload};
        }
        default:
            return state
    }
}
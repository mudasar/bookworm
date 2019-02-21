import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import {authReducer} from '../reducers';

export const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    user: authReducer,
  
  });
} 



import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'


import {createRootReducer} from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middleWares = [sagaMiddleware];

export const history = createBrowserHistory();

console.log(history);

export const configureStore = (oldState) => {

const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), ...middleWares),
  ),
);


sagaMiddleware.run(rootSaga);
return store;
};
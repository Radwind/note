import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

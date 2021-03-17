import { applyMiddleware, combineReducers, createStore } from 'redux';
import { carBuilderReducer } from './reducers/carBuilderReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({
	carBuilder: carBuilderReducer,
});

const middleware = [thunk, logger];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;

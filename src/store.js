import { combineReducers, createStore } from 'redux';
import { carBuilderReducer } from './reducers/carBuilderReducer';

const reducer = combineReducers({
	carBuilder: carBuilderReducer,
});

const store = createStore(reducer);

export default store;

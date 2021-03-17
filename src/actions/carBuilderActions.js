import { ADD_FEATURE, ADD_PRICE } from '../constants';

export const addFeature = (feature) => {
	console.log(feature);
	return { type: ADD_FEATURE, payload: feature };
};

export const addPrice = (price) => {
	console.log(price);
	return { type: ADD_PRICE, payload: price };
};

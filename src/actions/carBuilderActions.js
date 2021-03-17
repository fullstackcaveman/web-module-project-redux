import { ADD_FEATURE, ADD_PRICE, REMOVE_FEATURE } from '../constants';

export const addFeature = (feature) => {
	console.log(feature);
	return { type: ADD_FEATURE, payload: feature };
};

export const addPrice = (price) => {
	console.log(price);
	return { type: ADD_PRICE, payload: price };
};

export const removeFeature = (feature) => {
	console.log(feature);
	return { type: REMOVE_FEATURE, payload: feature };
};

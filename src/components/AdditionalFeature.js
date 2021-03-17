import React from 'react';
import { connect } from 'react-redux';
import { addFeature, addPrice } from '../actions/carBuilderActions';

const AdditionalFeature = (props) => {
	const addFeatureHandler = () => {
		props.dispatch(addFeature(props.feature));
		props.dispatch(addPrice(props.feature.price));
	};

	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button className='button' onClick={addFeatureHandler}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default connect()(AdditionalFeature);

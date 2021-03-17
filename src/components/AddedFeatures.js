import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carBuilderActions';

import AddedFeature from './AddedFeature';

const AddedFeatures = (props) => {
	const removeFeatureHandler = (feature) => {
		props.dispatch(removeFeature(feature));
	};

	return (
		<div className='content'>
			<h6>Added features:</h6>
			{props.car.features.length ? (
				<ol type='1'>
					{props.car.features.map((feature) => (
						<AddedFeature
							key={feature.id}
							feature={feature}
							removeFeature={removeFeatureHandler}
						/>
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};

export default connect()(AddedFeatures);

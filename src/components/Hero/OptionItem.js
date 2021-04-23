import React from "react";

import ReactCountryFlag from "react-country-flag";

const OptionItem = props => {
	return (
		<div className='flex flex-row items-center space-x-2'>
			<ReactCountryFlag
				countryCode={props.countryCode}
				svg
				style={{ width: "2em", height: "2em" }}
				title='US'
			/>
			<p>{props.currency}</p>
		</div>
	);
};

export default OptionItem;

import React from "react";

import ReactCountryFlag from "react-country-flag";

const OptionItem = props => {
	return (
		<div className='flex flex-row items-center space-x-2'>
			<p className='text-2xl font-normal'>{props.currency}</p>

			<ReactCountryFlag
				countryCode={props.countryCode}
				svg
				style={{ width: "3.8em", height: "3.8em", borderRadius: "5px" }}
				title='US'
			/>
		</div>
	);
};

export default OptionItem;

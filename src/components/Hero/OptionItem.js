import React from "react";

const OptionItem = props => {
	return (
		<div className='flex flex-end items-center space-x-2'>
			<p
				className='text-2xl font-normal'
				style={{ fontFamily: "Montserrat", color: "#636363" }}
			>
				{props.currency}
			</p>

			<img src={props.icon} />

			{/* <ReactCountryFlag
				countryCode={props.countryCode}
				svg
				style={{ width: "3.8em", height: "3.8em", borderRadius: "5px" }}
				title='US'
			/> */}
		</div>
	);
};

export default OptionItem;

import React from "react";
import { IoChevronDown } from "react-icons/io5";

const CollapseHeader = props => {
	return (
		<div>
			<div className='flex justify-between'>
				<h1 className='text-4xl text-black'>{props.name}</h1>
				<IoChevronDown size='2.5em' />
			</div>
		</div>
	);
};

export default CollapseHeader;

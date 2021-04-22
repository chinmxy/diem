import React from "react";
import { IoChevronUp } from "react-icons/io5";

const CollapseCloseHeader = props => {
	return (
		<div>
			<div className='flex justify-between'>
				<h1 className='text-4xl text-black'>{props.name}</h1>
				<IoChevronUp size='2.5em' />
			</div>
		</div>
	);
};

export default CollapseCloseHeader;

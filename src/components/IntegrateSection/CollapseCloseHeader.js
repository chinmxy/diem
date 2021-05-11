import React from "react";
import { IoChevronUp } from "react-icons/io5";

const CollapseCloseHeader = props => {
	return (
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='text-xl lg:text-4xl text-black'>{props.name}</h1>
				<div className='h-2'>
					{/* <IoChevronDown /> */}
					<svg
						height='100%'
						viewBox='0 0 28 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 12.707C0 12.0792 0.243476 11.5742 0.730433 11.1374L11.9 0.859873C12.5543 0.286624 13.1935 0.0136488 14 0C14.7913 0 15.4609 0.272976 16.1 0.859873L27.2848 11.1374C27.7565 11.5742 28 12.0928 28 12.707C28 13.9763 26.8739 15 25.4739 15C24.7739 15 24.1348 14.7407 23.6022 14.263L13.9848 5.36397L4.39783 14.263C3.86522 14.7407 3.22609 15 2.52609 15C1.1413 15 0 13.9763 0 12.707Z'
							fill='black'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default CollapseCloseHeader;

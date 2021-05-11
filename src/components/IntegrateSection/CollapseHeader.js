import React from "react";
import { IoChevronDown } from "react-icons/io5";

const CollapseHeader = props => {
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
							d='M0 2.29299C0 2.92084 0.243476 3.42584 0.730433 3.8626L11.9 14.1401C12.5543 14.7134 13.1935 14.9864 14 15C14.7913 15 15.4609 14.727 16.1 14.1401L27.2848 3.8626C27.7565 3.42584 28 2.90719 28 2.29299C28 1.02366 26.8739 0 25.4739 0C24.7739 0 24.1348 0.259327 23.6022 0.737034L13.9848 9.63603L4.39783 0.737034C3.86522 0.259327 3.22609 0 2.52609 0C1.1413 0 0 1.02366 0 2.29299Z'
							fill='black'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default CollapseHeader;

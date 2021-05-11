import React from "react";
import StepsContainer from "./StepsContainer";

import PinkButton from "../../img/images/pink-play-button.svg";

const StepsSection = () => {
	return (
		<div className='pt-24 lg:py-24 bg-white lg:mx-auto lg:mx-8 lg:max-w-7xl'>
			<div className='grid grid-cols-12'>
				<div className='col-span-12 lg:col-span-4'>
					<div className='flex flex-col ml-6 sm:ml-8 lg:ml-0 lg:items-center'>
						<h1 className='lg:mb-1 text-2xl sm:text-3xl lg:text-5xl font-bold'>
							Buy Crypto in
						</h1>
						<h1
							className='lg:mt-1 text-2xl sm:text-3xl lg:text-5xl font-bold'
							style={{ color: "#A960EE" }}
						>
							4 Easy Steps
						</h1>
					</div>
					<div className='hidden lg:block'>
						<img src={PinkButton} />
					</div>
				</div>
				<div className='col-span-12 lg:col-span-8'>
					<StepsContainer />
				</div>
			</div>
		</div>
	);
};

export default StepsSection;

import React from "react";

import "./Features.css";

const Features = () => {
	return (
		<div className='mx-auto lg:max-w-7xl'>
			<div className='grid grid-cols-3 md:mx-6'>
				<div className='col-span-3 py-10 px-6 space-y-5 m-3 md:col-span-1 flex flex-col lg:items-center lg:py-24 lg:px-16 feature-box rounded-md'>
					<h1
						className='text-2xl lg:text-5xl font-bold'
						style={{ color: "#EE755C" }}
					>
						Faster
					</h1>
					<h3 className='text-base lg:text-2xl lg:text-center'>
						Lightning fast verification and settlement to get cryptocurrency to
						you in minutes, not days.
					</h3>
				</div>
				<div className='col-span-3 py-10 px-6 space-y-5 m-3 md:col-span-1 flex flex-col lg:items-center lg:py-24 lg:px-16 feature-box rounded-md'>
					<h1
						className='text-2xl lg:text-5xl font-bold'
						style={{ color: "#EE755C" }}
					>
						Better
					</h1>
					<h3 className='text-base lg:text-2xl lg:text-center'>
						Available with multiple payments types to lower cost and increase
						your checkout conversion.
					</h3>
				</div>
				<div className='col-span-3 py-10 px-6 space-y-5 m-3 md:col-span-1 flex flex-col lg:items-center lg:py-24 lg:px-16 feature-box rounded-md'>
					<h1
						className='text-2xl lg:text-5xl font-bold'
						style={{ color: "#EE755C" }}
					>
						Cheaper
					</h1>
					<div className='text-base lg:text-2xl lg:text-center'>
						<h3>
							Transparent, low fees that help democratise crypto buying for all.
						</h3>
						<h3>Whats not to love?</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;

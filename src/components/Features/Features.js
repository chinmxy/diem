import React from "react";

import "./Features.css";

const Features = () => {
	return (
		<div className=''>
			<div className='grid grid-cols-3 lg:mx-16'>
				<div className='flex flex-col m-3 items-center py-24 px-16 feature-box rounded-md'>
					<h1 className='text-5xl font-bold' style={{ color: "#EE755C" }}>
						Faster
					</h1>
					<h3 className='text-2xl mt-10 text-center'>
						Lightning fast verification and settlement to get cryptocurrency to
						you in minutes, not days.
					</h3>
				</div>
				<div className='flex flex-col m-3 items-center py-24 px-16 feature-box rounded-md'>
					<h1 className='text-5xl font-bold' style={{ color: "#EE755C" }}>
						Better
					</h1>
					<h3 className='text-2xl mt-10 text-center'>
						Available with multiple payments types to lower cost and increase
						your checkout conversion.
					</h3>
				</div>
				<div className='flex flex-col m-3 items-center py-24 px-16 feature-box rounded-md'>
					<h1 className='text-5xl font-bold' style={{ color: "#EE755C" }}>
						Cheaper
					</h1>
					<div className='text-2xl mt-10 text-center'>
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

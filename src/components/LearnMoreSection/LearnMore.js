import React from "react";

import rightPointingFinger from "../../img/images/right-pointing-finger.svg";

const LearnMore = () => {
	return (
		<div className='relative'>
			<div className='z-10 absolute bottom-0' style={{ width: "100%" }}>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 1436 752'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0 76.8595C127.667 18.8595 445.4 -62.3405 695 76.8595C716.167 86.5262 782.9 133.16 880.5 242.359C978.1 351.56 1110.5 434.859 1164.5 462.859C1209.33 488.026 1326.3 540.959 1435.5 551.359V649.859V752H0V649.859V76.8595Z'
						fill='white'
					/>
				</svg>
			</div>

			<div className='py-24'>
				<div className='overflow-hidden grid grid-cols-2'>
					<div className='z-20 flex flex-col items-center justify-center text-4xl font-extrabold'>
						<h3 style={{ color: "#333333" }}>Get in touch to learn more:</h3>
						<h3 style={{ color: "#6ce0c4" }}>readyto@mergenow.com</h3>
					</div>
					<div
						className=' z-20 relative'
						style={{ right: "-70px", top: "25px" }}
					>
						<img src={rightPointingFinger} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LearnMore;

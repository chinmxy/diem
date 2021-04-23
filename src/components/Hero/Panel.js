import React from "react";

import InputField from "./InputField";
import { GoChevronDown } from "react-icons/go";

import "../Contact/Contact.css";

const Panel = () => {
	return (
		<div
			className='flex flex-col justify-center items-center bg-white bg-opacity-60'
			style={{ width: "480px", borderRadius: "40px" }}
		>
			<div>
				<h1 className='mt-14 mb-10 text-2xl font-bold'>
					Buy crypto to your wallet
				</h1>
			</div>

			{/* <div>
				<InputField />
			</div> */}

			<div
				className='bg-white mb-8'
				style={{ width: "418px", height: "84px", borderRadius: "20px" }}
			></div>
			<div
				className='bg-white mb-8'
				style={{ width: "418px", height: "84px", borderRadius: "20px" }}
			></div>

			<div className='flex flex-row space-x-4 mb-7'>
				<div
					className='bg-white'
					style={{ width: "201px", height: "84px", borderRadius: "20px" }}
				>
					<div className='mt-3 ml-6 mb-5 space-y-2'>
						<h1 className='font-normal text-sm'>Payment Method</h1>
						<h3 className='font-bold text-sm'>Bank Transfer</h3>
					</div>
				</div>
				<div
					className='bg-white'
					style={{ width: "201px", height: "84px", borderRadius: "20px" }}
				>
					<div className='mt-3 ml-6 mb-5 space-y-2'>
						<h1 className='font-normal text-sm'>Rate</h1>
						<h3 className='font-bold text-sm'>46503.23GBP = 1 BTC</h3>
					</div>
				</div>
			</div>

			<div className='self-end pr-14 flex flex-row items-center'>
				<h3 className='text-sm font-normal' style={{ marginRight: "223px" }}>
					See Calculation
				</h3>
				<GoChevronDown />
			</div>

			<div>
				<button
					id='submit-btn'
					className='mt-14 mb-9 bg-red-300'
					style={{ width: "418px", height: "81px", borderRadius: "60px" }}
				>
					<p className='font-bold text-2xl text-white'>Continue</p>
				</button>
			</div>
		</div>
	);
};

export default Panel;

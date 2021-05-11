import React from "react";

import { Link } from "react-router-dom";

import InputField from "./InputField";
import InputField2 from "./InputField2";
import CollapseField from "./CollapseField/CollapseField";

import "../Contact/Contact.css";

const Panel = () => {
	return (
		<div
			className='m-4 p-4 max-w-lg shadow shadow-lg flex flex-col justify-center items-center bg-white bg-opacity-60'
			style={{ borderRadius: "40px" }}
		>
			<div>
				<h1
					className='text-lg mt-14 mb-10 lg:text-2xl font-bold'
					style={{ fontFamily: "Montserrat", fontWeight: "bold" }}
				>
					Buy crypto to your wallet
				</h1>
			</div>

			<div></div>

			<div
				className='bg-white p-2 pl-4 lg:pl-4 lg:mx-4 mb-8 flex items-center justify-center'
				style={{ borderRadius: "20px" }}
			>
				<InputField />
			</div>
			<div
				className='bg-white p-2 pl-4 lg:pl-4 lg:mx-4 mb-8 flex items-center justify-center'
				style={{ borderRadius: "20px" }}
			>
				<InputField2 />
			</div>

			<div className='flex flex-row w-full lg:px-4 space-x-4 lg:mb-7'>
				<div className='bg-white w-full' style={{ borderRadius: "20px" }}>
					<div className='mt-3 ml-6 mb-5 space-y-2'>
						<h1
							className='font-normal text-xs lg:text-sm'
							style={{ fontFamily: "Montserrat" }}
						>
							Payment Method
						</h1>
						<h3
							className='font-bold text-xs lg:text-sm'
							style={{ fontFamily: "Montserrat" }}
						>
							Bank Transfer
						</h3>
					</div>
				</div>
				<div className='bg-white w-full' style={{ borderRadius: "20px" }}>
					<div className='mt-3 ml-6 mb-5 space-y-2'>
						<h1
							className='font-normal text-xs lg:text-sm'
							style={{ fontFamily: "Montserrat" }}
						>
							Rate
						</h1>
						<h3
							className='font-bold text-xs lg:text-sm'
							style={{ fontFamily: "Montserrat" }}
						>
							46503.23GBP = 1 BTC
						</h3>
					</div>
				</div>
			</div>

			<div>
				<CollapseField />
			</div>

			<div className='w-full'>
				<a href='#contact-us'>
					<div
						id='submit-btn'
						className='lg:mt-8 mb-9 p-2 lg:py-4 outline-none flex items-center justify-center'
						style={{ borderRadius: "60px" }}
					>
						<p
							className='font-bold text-lg lg:text-2xl text-white'
							style={{ fontFamily: "Montserrat" }}
						>
							Contact Us
						</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Panel;

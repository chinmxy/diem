import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import handEmoji from "./hand-emoji.svg";

import "./Offer.css";

const Offer = () => {
	return (
		<div className='py-24 bg-white'>
			<div className='grid grid-cols-12'>
				<div className='col-span-4'>
					<div className='flex flex-col items-center'>
						<h1 className='text-5xl font-bold'>What do</h1>
						<h1 className='text-5xl font-bold'>we offer?</h1>
					</div>
					<img id='hand-emoji' src={handEmoji} />
				</div>
				<div className='col-span-8 pr-12'>
					<div className='flex flex-row justify-end space-x-3.5'>
						<div className='m-4 p-3 pr-5 w-auto inline-block shadow shadow-lg  rounded-full bg-white'>
							<div className='flex items-center flex-row'>
								<IoIosCheckmarkCircle color='#4dbf31' size='4.75rem' />
								<h1 className='ml-2 text-lg font-semibold'>
									Protected by world class security
								</h1>
							</div>
						</div>
						<div className='m-4 p-3 pr-5 w-auto inline-block shadow shadow-lg  rounded-full bg-white'>
							<div className='flex items-center flex-row'>
								<IoIosCheckmarkCircle color='#4dbf31' size='4.75rem' />
								<h1 className='ml-2 text-lg font-semibold'>
									Low cost and transport
								</h1>
							</div>
						</div>
					</div>
					<div className='flex flex-row justify-end space-x-3.5'>
						<div className='m-4 p-3 pr-5 w-auto inline-block shadow shadow-lg  rounded-full bg-white'>
							<div className='flex items-center flex-row'>
								<IoIosCheckmarkCircle color='#4dbf31' size='4.75rem' />
								<h1 className='ml-2 text-lg font-semibold'>
									Multiple cryptocurrencies to choose from
								</h1>
							</div>
						</div>
						<div className='m-4 p-3 pr-5 w-auto inline-block shadow shadow-lg  rounded-full bg-white'>
							<div className='flex items-center flex-row'>
								<IoIosCheckmarkCircle color='#4dbf31' size='4.75rem' />
								<h1 className='ml-2 text-lg font-semibold'>
									Approved licensing for UK and Europe
								</h1>
							</div>
						</div>
					</div>
					<div className='flex flex-row justify-end space-x-3.5'>
						<div className='m-4 p-3 pr-5 w-auto inline-block shadow shadow-lg  rounded-full bg-white'>
							<div className='flex items-center flex-row'>
								<IoIosCheckmarkCircle color='#4dbf31' size='4.75rem' />
								<h1 className='ml-2 text-lg font-semibold'>
									Multiple payment types to purchase with
								</h1>
							</div>
						</div>
						<div className='m-4 p-3 pr-5 w-auto inline-block shadow shadow-lg  rounded-full bg-white'>
							<div className='flex items-center flex-row'>
								<IoIosCheckmarkCircle color='#4dbf31' size='4.75rem' />
								<h1 className='ml-2 text-lg font-semibold'>
									24/7 Customer support
								</h1>
							</div>
						</div>
					</div>
					<div className='flex flex-row justify-end space-x-3.5'>
						<div className='m-4 p-3 pr-5 w-auto inline-block shadow shadow-lg  rounded-full bg-white'>
							<div className='flex items-center flex-row'>
								<IoIosCheckmarkCircle color='#4dbf31' size='4.75rem' />
								<h1 className='ml-2 text-lg font-semibold'>
									AI driven security and risk management
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer;

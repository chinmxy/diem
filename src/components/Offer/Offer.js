import React from "react";

import { IoIosCheckmarkCircle } from "react-icons/io";

import ManWithPhone from "../../img/images/man-with-phone.svg";

const Offer = () => {
	return (
		<div className='relative'>
			<div className='relative py-12 lg:py-24 bg-white'>
				<div className='hidden lg:block absolute' style={{}}>
					<img src={ManWithPhone} />
				</div>
				<div className='grid grid-cols-12'>
					<div className='col-span-12 pb-6 lg:col-span-4'>
						<div className='flex flex-col pl-10 lg-pl-0 lg:items-center'>
							<h1 className='text-2xl lg:text-5xl font-bold'>What do</h1>
							<h1 className='text-2xl lg:text-5xl font-bold'>we offer?</h1>
						</div>
					</div>
					<div className='col-span-12 lg:col-span-8 lg:pr-12'>
						<div className='mt-4 mx-4 flex flex-row justify-end space-x-3.5'>
							<div className='pr-2 lg:m-4 lg:p-3 lg:pr-5 lg:w-auto lg:inline-block shadow shadow-lg  rounded-full bg-white'>
								<div className='flex items-center flex-row'>
									<div className='flex-shrink-0 w-10 h-10 lg:w-20 lg:h-20'>
										<IoIosCheckmarkCircle
											color='#5FDDBF'
											style={{ height: "100%", width: "100%" }}
										/>
									</div>
									<h1 className='ml-2 text-xxs lg:text-lg font-semibold'>
										Protected by world class security
									</h1>
								</div>
							</div>
							<div className='pr-2 lg:m-4 lg:p-3 lg:pr-5 lg:w-auto lg:inline-block shadow shadow-lg  rounded-full bg-white'>
								<div className='flex items-center flex-row'>
									<div className='flex-shrink-0 w-10 h-10 lg:w-20 lg:h-20'>
										<IoIosCheckmarkCircle
											color='#5FDDBF'
											style={{ height: "100%", width: "100%" }}
										/>
									</div>
									<h1 className='ml-2 text-xxs lg:text-lg font-semibold'>
										Low cost and transparent
									</h1>
								</div>
							</div>
						</div>
						<div className='mt-4 mx-4 flex flex-row justify-end space-x-3.5'>
							<div className='pr-2 lg:m-4 lg:p-3 lg:pr-5 lg:w-auto lg:inline-block shadow shadow-lg  rounded-full bg-white'>
								<div className='flex items-center flex-row'>
									<div className='flex-shrink-0 w-10 h-10 lg:w-20 lg:h-20'>
										<IoIosCheckmarkCircle
											color='#5FDDBF'
											style={{ height: "100%", width: "100%" }}
										/>
									</div>
									<h1 className='ml-2 text-xxs lg:text-lg font-semibold'>
										Multiple cryptocurrencies to choose from
									</h1>
								</div>
							</div>
							<div className='pr-2 lg:m-4 lg:p-3 lg:pr-5 lg:w-auto lg:inline-block shadow shadow-lg  rounded-full bg-white'>
								<div className='flex items-center flex-row'>
									<div className='flex-shrink-0 w-10 h-10 lg:w-20 lg:h-20'>
										<IoIosCheckmarkCircle
											color='#5FDDBF'
											style={{ height: "100%", width: "100%" }}
										/>
									</div>
									<h1 className='ml-2 text-xxs lg:text-lg font-semibold'>
										Approved regulatory licensing
									</h1>
								</div>
							</div>
						</div>
						<div className='mt-4 mx-4 flex flex-row justify-end space-x-3.5'>
							<div className='pr-2 lg:m-4 lg:p-3 lg:pr-5 lg:w-auto lg:inline-block shadow shadow-lg  rounded-full bg-white'>
								<div className='flex items-center flex-row'>
									<div className='flex-shrink-0 w-10 h-10 lg:w-20 lg:h-20'>
										<IoIosCheckmarkCircle
											color='#5FDDBF'
											style={{ height: "100%", width: "100%" }}
										/>
									</div>
									<h1 className='ml-2 text-xxs lg:text-lg font-semibold'>
										Multiple payment types to purchase with
									</h1>
								</div>
							</div>
							<div className='pr-2 lg:m-4 lg:p-3 lg:pr-5 lg:w-auto lg:inline-block shadow shadow-lg  rounded-full bg-white'>
								<div className='flex items-center flex-row'>
									<div className='flex-shrink-0 w-10 h-10 lg:w-20 lg:h-20'>
										<IoIosCheckmarkCircle
											color='#5FDDBF'
											style={{ height: "100%", width: "100%" }}
										/>
									</div>
									<h1 className='ml-2 text-xxs lg:text-lg font-semibold'>
										24/7 customer support
									</h1>
								</div>
							</div>
						</div>
						<div className='mt-4 mx-4 flex flex-row justify-end space-x-3.5'>
							<div className='pr-2 lg:m-4 lg:p-3 lg:pr-5 lg:w-auto lg:inline-block shadow shadow-lg  rounded-full bg-white'>
								<div className='flex items-center flex-row'>
									<div className='flex-shrink-0 w-10 h-10 lg:w-20 lg:h-20'>
										<IoIosCheckmarkCircle
											color='#5FDDBF'
											style={{ height: "100%", width: "100%" }}
										/>
									</div>
									<h1 className='ml-2 text-xxs lg:text-lg font-semibold'>
										AI driven security and risk management
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer;

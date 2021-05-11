import React from "react";

import "./Contact.css";
import YoFinger from "../../img/images/yo-finger.svg";
import YoFingerBig from "../../img/images/yo-finger-big.svg";

const Contact = () => {
	return (
		<div className='relative'>
			<div
				className='absolute hidden lg:block lg:z-20'
				style={{ top: "450px" }}
			>
				<img src={YoFingerBig} />
			</div>
			<div id='contact-us' className='lg:pt-12'>
				<div className='relative bg-white'>
					<div className='absolute inset-0'>
						<div className='absolute inset-y-0 left-0 w-1/2 bg-white'></div>
					</div>
					<div className='relative max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
						<div className='bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pr-12'>
							<div className='relative overflow-hidden max-w-lg mx-auto'>
								<div className='flex flex-col lg:pl-0'>
									<h1 className='text-2xl font-normal lg:text-5xl text-black'>
										Integrate Merge
									</h1>
									<hr
										className='mt-6 h-1 lg:h-0.5 lg:mt-8'
										style={{ color: "#C4C4C4" }}
									/>
								</div>

								<h1 className='hidden lg:block lg:text-5xl font-bold mt-11'>
									Better, faster, cheaper fiat to crypto payments infrastructure
								</h1>
								<div className='lg:hidden flex flex-row relative overflow-hidden text-2xl font-bold mt-11'>
									<div>
										<h1>Better, faster, cheaper</h1>
										<h1>fiat-to-crypto</h1>
										<h1>payments</h1>
										<h1>infrastructure</h1>
									</div>
								</div>
								<div
									className='lg:hidden'
									style={{
										position: "absolute",
										right: "-50px",
										top: "105px",
									}}
								>
									<img src={YoFinger} />
								</div>
							</div>
						</div>
						<div className='bg-white py-16 px-6 sm:px-6 lg:col-span-2 lg:py-24 lg:px-8 xl:pl-12'>
							<div className='max-w-lg mx-auto lg:max-w-none'>
								<h1 className='text-lg lg:text-3xl font-bold'>Contact Us</h1>
								<h3
									className='text-sm lg:text-lg lg:mt-6'
									style={{ color: "#8692A6" }}
								>
									Integrate Merge within minutes
								</h3>
								<hr className='my-7' />

								<form
									action='#'
									method='POST'
									className='grid grid-cols-1 gap-y-6'
								>
									<div>
										<label
											htmlFor='first_name'
											className='block text-base font-medium mb-3.5'
											style={{ color: "#696F79" }}
										>
											Name*
										</label>

										<input
											type='text'
											name='full_name'
											id='full_name'
											autoComplete='name'
											className='outline-none block w-full py-6 px-7 placeholder-text-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-dough-grey rounded-md'
											placeholder='Enter Full Name'
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='block text-base font-medium mb-3.5'
											style={{ color: "#696F79" }}
										>
											Email address*
										</label>

										<input
											type='text'
											name='email'
											id='email'
											autoComplete='email'
											className='outline-none block w-full py-6 px-7 placeholder-text-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-dough-grey rounded-md'
											placeholder='Enter email address'
										/>
									</div>

									<div>
										<label
											htmlFor='email'
											className='block text-base font-medium mb-3.5'
											style={{ color: "#696F79" }}
										>
											Message*
										</label>
										<textarea
											id='message'
											name='message'
											rows='4'
											className='outline-none block w-full py-6 px-7 placeholder-text-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-dough-grey rounded-md'
											placeholder='Enter your Message'
										></textarea>
									</div>
									<div>
										<button
											type='submit'
											className='justify-center w-full bg-gray-400'
											id='submit-btn'
											// className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
										>
											<p className='text-white font-bold text-base my-6'>
												Contact Us
											</p>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;

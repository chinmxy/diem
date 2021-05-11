import React from "react";

import Panel from "./Panel";

import "./Hero.css";

const Hero = () => {
	return (
		<div className=''>
			<div className='relative overflow-hidden'>
				<div className='absolute -bottom-0.5 w-screen'>
					<svg
						width='100%'
						height='100%'
						viewBox='0 0 1440 488'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M494 0.347184C236.091 7.20107 65 168.014 0 246.847V487.847H1439.5C944 370.847 1002 -13.1528 494 0.347184Z'
							fill='white'
						/>
					</svg>
				</div>

				<div className='z-20'>
					<div>
						<div className='mx-auto max-w-7xl'>
							<div className='lg:grid lg:grid-cols-12 lg:gap-8 '>
								<div className='z-20 pt-32 text-lg px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
									<div className='lg:pb-40'>
										<h1 className='mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl'>
											<span className='md:block'>The safest & </span>
											<span className='md:block'>easiest way to buy </span>

											<span className='md:block'>cryptocurrencies.</span>
										</h1>

										<a
											href='/'
											className='mt-6 start-now-btn inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base'
										>
											<span className='ml-4 text-sm'>Start now</span>
											<svg
												className='ml-2 w-5 h-5 text-white'
												data-todo-x-description='Heroicon name: solid/chevron-right'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												fill='currentColor'
												aria-hidden='true'
											>
												<path
													fillRule='evenodd'
													d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
													clipRule='evenodd'
												></path>
											</svg>
										</a>
										<a
											href='/'
											className='mt-6 ml-2 inline-flex items-center text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base'
										>
											<span className='ml-4 text-sm'>Contact sales</span>
											<svg
												className='ml-2 w-5 h-5 text-gray-500'
												data-todo-x-description='Heroicon name: solid/chevron-right'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												fill='currentColor'
												aria-hidden='true'
											>
												<path
													fillRule='evenodd'
													d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
													clipRule='evenodd'
												></path>
											</svg>
										</a>
									</div>
								</div>
								<div className='p-6 z-20 flex justify-center sm:z-20 lg:z-20 md:z-20 mt-16 sm:mt-24 lg:ml-24 lg:col-span-6'>
									<div
										className='mt-10 -mx-4 relative lg:mt-0'
										aria-hidden='true'
									>
										<Panel />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

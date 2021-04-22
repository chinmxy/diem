import React from "react";
import Navbar from "../Navbar/Navbar";
import Panel from "./Panel";

const Hero = () => {
	return (
		<div className=''>
			<Navbar />
			{/* <div className='absolute left-0 bottom-0 z-10'>
				 <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#fff'
						fill-opacity='1'
						d='M0,0L60,48C120,96,240,192,360,213.3C480,235,600,181,720,154.7C840,128,960,128,1080,154.7C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
					></path>
				</svg>

				<svg
					width='100vw'
					height='512'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M927.517 151.306C549.768 -143.51 75.4327 59.1076 -46 199.897V512H1567V316.235C1379.81 446.589 1138.84 316.235 927.517 151.306Z'
						fill='white'
					/>
				</svg>
			</div> */}
			<div className='relative overflow-hidden'>
				<div className='z-20'>
					<div className='mt-8 sm:mt-12'>
						<div className='mx-auto max-w-7xl'>
							<div className='lg:grid lg:grid-cols-12 lg:gap-8 '>
								<div className='z-20 px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
									<div>
										<h1 className='mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl'>
											<span className='md:block'>The safest & </span>
											<span className='md:block'>easiest way to buy </span>

											<span className='md:block'>cryptocurrencies.</span>
										</h1>

										<a
											href='/'
											className='mt-6 inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
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
											className='mt-6 ml-2 inline-flex items-center text-black bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
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
								<div className='z-20 sm:z-20 lg:z-20 md:z-20 mt-16 sm:mt-24 lg:mt-0 lg:col-span-6'>
									<div
										className='mt-10 -mx-4 relative lg:mt-0'
										aria-hidden='true'
									>
										<Panel />
										{/* <img
											className='relative mx-auto'
											width='490'
											src='https://tailwindui.com/img/features/feature-example-1.png'
											alt=''
										/> */}
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

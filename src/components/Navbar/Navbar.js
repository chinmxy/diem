import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import companyLogo from "../../img/logo/company-logo.svg";

function Navbar2() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const _fnEmptyFunctionPointer = () => {};

	const handleScroll = () => {
		if (window.pageYOffset > 40) {
			if (!isScroll) {
				setIsScroll(true);
			}
		} else {
			setIsScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", _fnEmptyFunctionPointer);
		};
	}, []);

	// useEffect(() => {
	// 	window.removeEventListener("scroll");
	// }, []);

	return (
		<div>
			<nav
				className={`lg:py-6 w-full z-30 fixed ${
					isScroll ? "bg-white" : "text-white"
				} ${isOpen ? "bg-white" : ""}`}
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<div className='flex items-center'>
							<div className='hidden md:block flex-shrink-0'>
								<img
									src={companyLogo}
									className='m-6'
									style={{ height: "70px", width: "70px" }}
								/>
							</div>
							<div className='-mr-2 flex md:hidden'>
								<button
									className='focus:outline-none'
									onClick={() => setIsOpen(!isOpen)}
									type='button'
									className=''
									aria-controls='mobile-menu'
									aria-expanded='false'
								>
									<span className='sr-only'>Open main menu</span>
									{!isOpen ? (
										<svg
											className='block h-6 w-6'
											viewBox='0 0 16 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<rect
												width='16'
												height='2'
												rx='1'
												fill={`${isScroll ? "black" : "white"}`}
											/>
											<rect
												y='6'
												width='12'
												height='2'
												rx='1'
												fill={`${isScroll ? "black" : "white"}`}
											/>
										</svg>
									) : (
										<svg
											className='block h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
						<div>
							<div className='hidden md:block'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<a
										href='#'
										className=' font-bold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										Buy cryptocurrency
									</a>

									<a
										href='#integrate'
										className=' hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										Integrate
									</a>

									<a
										href='#blogs'
										className=' hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
									>
										Blogs
									</a>

									<a
										href='#contact-us'
										className=' hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium'
									>
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					{ref => (
						<div className='md:hidden' id='mobile-menu'>
							<div
								ref={ref}
								className='bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3'
							>
								<a
									href='#'
									className='text-gray-900 font-bold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
								>
									Buy Crypto
								</a>

								<a
									href='#integrate'
									className='text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
								>
									Integrate
								</a>

								<a
									href='#blogs'
									className='text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
								>
									Blogs
								</a>

								<a
									href='#contact-us'
									className='text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
								>
									Contact Us
								</a>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar2;

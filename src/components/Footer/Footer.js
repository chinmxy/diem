import React from "react";

import location from "./location-icon.svg";
import mail from "./mail-icon.svg";

import facebook from "./social-icons/facebook.svg";
import twitter from "./social-icons/twitter.svg";
import linkedin from "./social-icons/linkedin.svg";
import telegram from "./social-icons/telegram.svg";

const Footer = () => {
	return (
		<div className='grid grid-cols-12 pb-24 pt-14'>
			<div className='hidden xl:block col-span-12 lg:flex lg:justify-center lg:col-span-4 my-7'>
				<p className='lg:text-center text-xs text-black'>
					© Merge 2021 | All rights reserved
				</p>
			</div>
			<div className='hidden lg:block xl:block col-span-12 lg:col-span-2 lg:col-start-6'>
				<div className='flex flex-col'>
					<div className='w-full'>
						<div className='flex flex-row space-x-8 my-7'>
							<img src={location} alt='' />
							<div className='text-xs text-black font-normal'>
								<h3>7 Bell Yard, London,</h3>
								<h3>United Kingdom, WC2A 2JR</h3>
							</div>
						</div>
					</div>
					<div className='w-full'>
						<div className='flex flex-row space-x-8 my-7'>
							<img src={mail} alt='' />
							<div className='text-xs text-black font-normal'>
								<a href='mailto:hello@mergedup.com'>hello@mergedup.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-span-12 lg:col-span-5 flex flex-row justify-center space-x-8 my-7'>
				<div className='w-8 h-8 lg:w-16 lg:h-16'>
					<a href=''>
						<img src={facebook} alt='' />
					</a>
				</div>
				<div className='w-8 h-8 lg:w-16 lg:h-16'>
					<a href=''>
						<img src={twitter} alt='' />
					</a>
				</div>
				<div className='w-8 h-8 lg:w-16 lg:h-16'>
					<a href=''>
						<img src={linkedin} alt='' />
					</a>
				</div>
				<div className='w-8 h-8 lg:w-16 lg:h-16'>
					<a href=''>
						<img src={telegram} alt='' />
					</a>
				</div>
			</div>
			<div className='pt-8 lg:hidden xl:hidden flex flex-col justify-center space-y-10 col-span-12'>
				<div className='flex flex-row justify-center items-center space-x-4'>
					<div className='w-8 h-8'>
						<img src={location} alt='' />
					</div>
					<div className='text-xs text-black font-normal'>
						<h3>7 Bell Yard, London,</h3>
						<h3>United Kingdom, WC2A 2JR</h3>
					</div>
				</div>

				<div className='flex flex-row justify-center items-center space-x-4'>
					<div className='w-8 h-8'>
						<img src={mail} alt='' />
					</div>
					<div className='text-xs text-black font-normal'>
						<a href='mailto:hello@mergedup.com'>hello@mergedup.com</a>
					</div>
				</div>
			</div>
			<div className='pt-8 lg:hidden md:hidden col-span-12 flex justify-center lg:col-span-4 mt-7'>
				<p className='text-xs text-black'>© Merge 2021 | All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;

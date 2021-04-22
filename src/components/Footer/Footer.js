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
			<div className='flex justify-center col-span-4 my-7'>
				<p className='text-xs text-black'>Dough 2021 | All rights reserved</p>
			</div>
			<div className='col-span-2 col-start-5'>
				{/* <div className='flex flex-row space-x-8 my-7'>
					<img src={location} />
					<div className='text-xs text-black font-normal'>
						<h3>405 St John Street</h3>
						<h3>London EC1V 4AB, UK</h3>
					</div>
				</div>
				<div className='flex flex-row space-x-8 my-7'>
					<img src={mail} />
					<div className='text-xs text-black font-normal'>
						<a href='mailto:hello@diem.com'>hello@diem.com</a>
					</div>
				</div> */}
				<div className='flex flex-col'>
					<div className='w-full'>
						<div className='flex flex-row space-x-8 my-7'>
							<img src={location} />
							<div className='text-xs text-black font-normal'>
								<h3>405 St John Street</h3>
								<h3>London EC1V 4AB, UK</h3>
							</div>
						</div>
					</div>
					<div className='w-full'>
						<div className='flex flex-row space-x-8 my-7'>
							<img src={mail} />
							<div className='text-xs text-black font-normal'>
								<a href='mailto:hello@diem.com'>hello@diem.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-span-5 flex flex-row justify-around my-7'>
				<a href=''>
					<img src={facebook} />
				</a>
				<a href=''>
					<img src={twitter} />
				</a>
				<a href=''>
					<img src={linkedin} />
				</a>
				<a href=''>
					<img src={telegram} />
				</a>
			</div>
		</div>
	);
};

export default Footer;

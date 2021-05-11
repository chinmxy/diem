import React from "react";

import "../../css/style.css";

const Newsletter = () => {
	return (
		<div
			className='m-4 py-8 px-4 sm:mx-auto max-w-lg lg:max-w-7xl lg:grid lg:grid-cols-2 lg:mt-32 lg:py-16 lg:px-12 lg:p-8 bg-white bg-opacity-60 shadow shadow-lg'
			style={{ borderRadius: "40px" }}
		>
			<div className='flex flex-col justify-center items-center space-y-3 lg:justify-start lg:items-start lg:pr-6'>
				<h1 className='text-lg lg:text-3xl text-black font-bold'>
					Sign Up for updates
				</h1>
				<h4
					className='text-center lg:text-left text-xs lg:text-lg lg:mt-5'
					style={{ color: "#8692A6" }}
				>
					{" "}
					Receive News related to Merge and the cryptocurrency industry
				</h4>
			</div>
			<div className='mt-6 lg:mt-0 lg:w-full'>
				<form className='lg:max-w-426'>
					<label
						htmlFor='email'
						className='block text-xs lg:text-base font-medium mb-3.5'
						style={{ color: "#696F79" }}
					>
						Email address*
					</label>

					<input
						type='text'
						name='email'
						id='email'
						autoComplete='email'
						className='h-10 lg:h-16 block w-full py-6 px-7 outline-none placeholder-gray-500 rounded-2xl lg:rounded-3xl'
						placeholder='Enter email address'
					/>

					<button
						type='submit'
						className='h-14 lg:h-16 w-full mt-10'
						id='submit-btn'
					>
						<div className='text-white font-bold text-base'>Subscribe</div>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;

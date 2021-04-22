import React from "react";

import "../Contact/Contact.css";

const Newsletter = () => {
	return (
		<div
			className='grid grid-cols-2 lg:mt-56 lg:mx-28 lg:py-16 lg:px-40 lg:p-8 bg-white bg-opacity-60 shadow shadow-lg'
			style={{ borderRadius: "40px" }}
		>
			<div>
				<div>
					<h1 className='text-3xl text-black font-bold'>Sign Up for updates</h1>
					<h4 className='text-xl lg:mt-5' style={{ color: "#8692A6" }}>
						{" "}
						Receive news related to Diem and the cryptocurrency industry
					</h4>
				</div>
			</div>
			<div>
				<form>
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
						autocomplete='email'
						className='block w-full py-6 px-7 outline-none placeholder-gray-500 rounded-3xl'
						placeholder='Enter email address'
					/>

					<button
						type='submit'
						className='justify-center w-full mt-10'
						id='submit-btn'
					>
						<p className='text-white font-bold text-base my-6'>Subscribe</p>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;

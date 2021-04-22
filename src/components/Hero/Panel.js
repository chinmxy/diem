import React, { useState } from "react";
import Select from "./Select";

const Panel = () => {
	return (
		<div
			className='flex flex-col justify-center items-center bg-red-200 rounded-lg'
			style={{ width: "480px", height: "500px" }}
		>
			<div>
				<h1 className='p-14 text-2xl font-bold'>Buy crypto to your wallet</h1>
			</div>

			<div>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<span className='text-gray-500 sm:text-sm'>$</span>
					</div>
					<input
						type='text'
						name='price'
						id='price'
						className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
						placeholder='0.00'
					/>
					<div className='absolute inset-y-0 right-0 flex items-center'>
						<label htmlFor='currency' className='sr-only'>
							Currency
						</label>
						<Select />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Panel;

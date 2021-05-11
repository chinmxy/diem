import React from "react";

const StepsContainer = () => {
	return (
		<div className='mt-10 lg:mt-0 mx-6'>
			<div className='grid grid-cols-12 xl:flex xl:justify-end'>
				<div className='col-span-12 min-h-135 rounded rounded-md shadow shadow-lg p-4 my-2 sm:col-span-6 sm:mx-2 sm:p-4 lg:p-8 lg:min-h-305 lg:max-w-305 xl:min-w-375 xl:p-10 xl:pt-14'>
					<h1
						className='font-bold mb-4 sm:text-lg lg:text-2xl xl:text-3xl'
						style={{ color: "#F6921E" }}
					>
						Step 1
					</h1>
					<div className='font-semibold text-xs sm:text-base lg:text-lg mt-4'>
						<p>Choose fiat and cryptocurrency.</p>
						<p>
							Select the currency, amount and cryptocurrency you wish to buy.
						</p>
						<p>Click Buy Now.</p>
					</div>
				</div>
				<div className='col-span-12 min-h-135 rounded rounded-md shadow shadow-lg p-4 my-2 sm:col-span-6 sm:mx-2 sm:p-4 lg:p-8 lg:min-h-305 lg:max-w-305 xl:min-w-375 xl:p-10 xl:pt-14'>
					<h1
						className='font-bold mb-4 sm:text-lg lg:text-2xl xl:text-3xl'
						style={{ color: "#F6921E" }}
					>
						Step 2
					</h1>
					<div className='font-semibold text-xs sm:text-base lg:text-lg mt-4'>
						<p>Add wallet details.</p>
						<p>Add the address of your crypto wallet.</p>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-12 xl:flex xl:justify-end'>
				<div className='col-span-12 min-h-135 rounded rounded-md shadow shadow-lg p-4 my-2 sm:col-span-6 sm:mx-2 sm:p-4 lg:p-8 lg:min-h-305 lg:max-w-305 xl:min-w-375 xl:p-10 xl:pt-14'>
					<h1
						className='font-bold mb-4 sm:text-lg lg:text-2xl xl:text-3xl'
						style={{ color: "#F6921E" }}
					>
						Step 3
					</h1>
					<div className='font-semibold text-xs sm:text-base lg:text-lg mt-4'>
						<p>Verify yourself.</p>
						<p>Take a selfie.</p>
						<p>Upload a photo ID.</p>
						<p>&nbsp;</p>
					</div>
				</div>
				<div className='col-span-12 min-h-135 rounded rounded-md shadow shadow-lg p-4 my-2 sm:col-span-6 sm:mx-2 sm:p-4 lg:p-8 lg:min-h-305 lg:max-w-305 xl:min-w-375 xl:p-10 xl:pt-14'>
					<h1
						className='font-bold mb-4 sm:text-lg lg:text-2xl xl:text-3xl'
						style={{ color: "#F6921E" }}
					>
						Step 4
					</h1>
					<div className='font-semibold text-xs sm:text-base lg:text-lg mt-4'>
						<p>Make payment.</p>
						<p>Pay using your debit card, credit card or a bank transfer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsContainer;

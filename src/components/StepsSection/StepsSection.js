import React from "react";

const StepsSection = () => {
	return (
		<div className='py-24 bg-white lg:mx-8'>
			<div className='grid grid-cols-12'>
				<div className='col-span-4'>
					<div className='flex flex-col items-center'>
						<h1 className='mb-1 text-5xl font-bold'>Buy Crypto in</h1>
						<h1
							className='mt-1 text-5xl font-bold'
							style={{ color: "#A960EE" }}
						>
							4 Easy Steps
						</h1>
					</div>
				</div>
				<div className='col-span-8'>
					<div className='flex flex-row'>
						<div class='w-full col-span-4 rounded-md shadow shadow-lg p-12 m-4'>
							<h1
								className='font-bold mb-4'
								style={{ color: "#F6921E", fontSize: "32px" }}
							>
								Step 1
							</h1>
							<div className='font-semibold text-lg mt-4'>
								<p>Choose fiat and cryptocurrency.</p>
								<p>
									Select the currency, amount and cryptocurrency you wish to
									buy.
								</p>
								<p>Click Buy Now.</p>
							</div>
						</div>
						<div class='w-full col-span-4 rounded-md shadow shadow-lg p-12 m-4'>
							<h1
								className='font-bold mb-4'
								style={{ color: "#F6921E", fontSize: "32px" }}
							>
								Step 2
							</h1>
							<div className='font-semibold text-lg mt-4'>
								<p>Add wallet details.</p>
								<p>Add the address of your crypto wallet.</p>
							</div>
						</div>
					</div>
					<div className='flex flex-row'>
						<div class='w-full col-span-4 rounded-md shadow shadow-lg p-12 m-4'>
							<h1
								className='font-bold mb-4'
								style={{ color: "#F6921E", fontSize: "32px" }}
							>
								Step 3
							</h1>
							<div className='font-semibold text-lg mt-4'>
								<p>Verify yourself.</p>
								<p>Take a selfie.</p>
								<p>Upload a photo ID.</p>
								<p>&nbsp;</p>
							</div>
						</div>
						<div class='w-full col-span-4 rounded-md shadow shadow-lg p-12 m-4'>
							<h1
								className='font-bold mb-4'
								style={{ color: "#F6921E", fontSize: "32px" }}
							>
								Step 4
							</h1>
							<div className='font-semibold text-lg mt-4'>
								<p>Make payment.</p>
								<p>Pay using your debit card, credit card or a bank transfer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepsSection;

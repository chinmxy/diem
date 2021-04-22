import React from "react";

const Features2 = () => {
	return (
		<>
			<div className='bg-gray-50'>
				<div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-4xl font-extrabold text-gray-900'>
							Why Dough?
						</h2>
						<p className='mt-4 text-lg text-gray-500'>
							Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
							Malesuada adipiscing sagittis vel nulla nec.
						</p>
					</div>
					<dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8'>
						<div className='flex'>
							<svg
								className='flex-shrink-0 h-6 w-6 text-green-500'
								data-todo-x-description='Heroicon name: outline/check'
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
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							<div className='ml-3'>
								<dt className='text-lg leading-6 font-medium text-gray-900'>
									Faster
								</dt>
								<dd className='mt-2 text-base text-gray-500'>
									Lightning-fast verification and settlement to get
									cryptocurrency to you in minutes, not days.
								</dd>
							</div>
						</div>

						<div className='flex'>
							<svg
								className='flex-shrink-0 h-6 w-6 text-green-500'
								data-todo-x-description='Heroicon name: outline/check'
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
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							<div className='ml-3'>
								<dt className='text-lg leading-6 font-medium text-gray-900'>
									Better
								</dt>
								<dd className='mt-2 text-base text-gray-500'>
									Available with multiple payments types to lower cost and
									increase your checkout conversion. Not just on cards AI driven
									security and risk management and 24/7 customer support. We’re
									up all night so that you don’t need to be
								</dd>
							</div>
						</div>

						<div className='flex'>
							<svg
								className='flex-shrink-0 h-6 w-6 text-green-500'
								data-todo-x-description='Heroicon name: outline/check'
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
									d='M5 13l4 4L19 7'
								></path>
							</svg>
							<div className='ml-3'>
								<dt className='text-lg leading-6 font-medium text-gray-900'>
									Cheaper
								</dt>
								<dd className='mt-2 text-base text-gray-500'>
									Transparent, low fees that help democratise crypto buying for
									all. What’s not to love?
								</dd>
							</div>
						</div>
					</dl>
				</div>
			</div>
		</>
	);
};

export default Features2;

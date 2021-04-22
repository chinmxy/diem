import React from "react";

import CodepenEmbed from "./CodepenEmbed";
import Collapse from "./Collapse";

const IntegrateSection = () => {
	return (
		<>
			<div className='py-16 overflow-hidden lg:py-24' id='integrate'>
				<div className='relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
					<div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-12 lg:space-x-12 lg:items-start'>
						<div className='relative col-span-5 m-8'>
							<h3 className='text-5xl font-bold text-gray-900 lg:mb-36'>
								How to integrate the Diem widget
							</h3>
							<Collapse />
						</div>

						<div
							className='mt-10 -mx-4 relative col-span-7 lg:mt-0'
							aria-hidden='true'
						>
							<svg
								className='absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden'
								width='784'
								height='404'
								fill='none'
								viewBox='0 0 784 404'
							>
								<defs>
									<pattern
										id='ca9667ae-9f92-4be7-abcb-9e3d727f2941'
										x='0'
										y='0'
										width='20'
										height='20'
										patternUnits='userSpaceOnUse'
									>
										<rect
											x='0'
											y='0'
											width='4'
											height='4'
											className='text-gray-200'
											fill='currentColor'
										></rect>
									</pattern>
								</defs>
							</svg>
							<div class='z-10 rounded-lg'>
								<CodepenEmbed />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default IntegrateSection;

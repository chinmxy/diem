import React from "react";

import CodepenEmbed from "./CodepenEmbed";
import CodeBlock from "./CodeBlock";
import Collapse from "./Collapse";

const IntegrateSection = () => {
	return (
		<>
			<div className='py-16 overflow-hidden lg:py-24' id='integrate'>
				<div className='relative max-w-xl mx-auto px-4 sm:px-6 lg:px-2 lg:max-w-7xl'>
					<div className='relative mt-12 items-center lg:mt-24 lg:grid lg:grid-cols-12 lg:space-x-12 lg:items-start'>
						<div className='relative col-span-5 m-8'>
							<h3 className='text-2xl lg:text-5xl font-bold text-gray-900 lg:mb-36'>
								How to Integrate the Merge widget
							</h3>
							<Collapse />
						</div>

						<div
							className='hidden lg:flex lg:justify-center lg:items-center mt-10 -mx-4 relative col-span-7 w-full w-full h-full'
							aria-hidden='true'
						>
							{/* <CodepenEmbed /> */}
							<div className='z-10 rounded-lg flex justify-center items-center'>
								<div
									className='p-2 rounded-lg m-2'
									style={{ backgroundColor: "#1c1b1b" }}
								>
									<CodeBlock />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default IntegrateSection;

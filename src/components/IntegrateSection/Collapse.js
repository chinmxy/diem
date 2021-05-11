import React from "react";
import Collapsible from "react-collapsible";

import CollapseHeader from "./CollapseHeader";
import CollapseCloseHeader from "./CollapseCloseHeader";

import "./Collapse.css";

const Collapse = () => {
	return (
		<div className='lg:pr-12'>
			<Collapsible
				trigger={<CollapseHeader name='Apply' />}
				triggerWhenOpen={<CollapseCloseHeader name='Apply' />}
			>
				<h3 className='text-base lg:text-lg mt-4'>
					Merge's API service is provided to a selected number of partners.
					Contact us to request an API key.
				</h3>
			</Collapsible>
			<hr
				style={{ border: "none", height: "0.5px", backgroundColor: "#000" }}
			/>
			<Collapsible
				trigger={<CollapseHeader name='Authenticate' />}
				triggerWhenOpen={<CollapseCloseHeader name='Authenticate' />}
			>
				<h3 className='text-base lg:text-lg mt-4'>
					Verify your business using Token Based Authentication.
				</h3>
			</Collapsible>
			<hr
				style={{ border: "none", height: "0.5px", backgroundColor: "#000" }}
			/>
			<Collapsible
				trigger={<CollapseHeader name='Ready to use' />}
				triggerWhenOpen={<CollapseCloseHeader name='Ready to use' />}
			>
				<h3 className='text-base lg:text-lg mt-4'>
					Merge's widget is extremely user-friendly; designed to work smoothly
					with all devices.
				</h3>
			</Collapsible>
		</div>
	);
};

export default Collapse;

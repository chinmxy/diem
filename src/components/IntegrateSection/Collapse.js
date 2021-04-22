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
				<h3 className='text-lg mt-4'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</h3>
			</Collapsible>
			<hr
				style={{ border: "none", height: "0.5px", backgroundColor: "#000" }}
			/>
			<Collapsible
				trigger={<CollapseHeader name='Authenticate' />}
				triggerWhenOpen={<CollapseCloseHeader name='Authenticate' />}
			>
				<h3 className='text-lg mt-4'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</h3>
			</Collapsible>
			<hr
				style={{ border: "none", height: "0.5px", backgroundColor: "#000" }}
			/>
			<Collapsible
				trigger={<CollapseHeader name='Ready to use' />}
				triggerWhenOpen={<CollapseCloseHeader name='Ready to use' />}
			>
				<h3 className='text-lg mt-4'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</h3>
			</Collapsible>
		</div>
	);
};

export default Collapse;

import React from "react";
import Collapsible from "react-collapsible";

import CollapseHeader from "./CollapseHeader";
import CollapseHeaderOpen from "./CollapseHeaderOpen";

const CollapseField = () => {
	return (
		<div>
			<Collapsible
				trigger={<CollapseHeader />}
				triggerWhenOpen={<CollapseHeaderOpen />}
			>
				<div
					className='text-xs lg:text-base mt-3'
					style={{ fontFamily: "Montserrat", fontWeight: 400 }}
				>
					<p>
						3.09 GBP{" "}
						<span style={{ fontWeight: 700 }}>Network/Exchange Fee</span>
					</p>
					<p>
						5.00 GBP <span style={{ fontWeight: 700 }}>Fee</span>
					</p>
				</div>
			</Collapsible>
		</div>
	);
};

export default CollapseField;

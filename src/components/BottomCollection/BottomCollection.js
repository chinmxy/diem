import React from "react";

import IntegrateSection from "../IntegrateSection/IntegrateSection";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

import backgroundMask from "./background-mask.svg";

const BottomCollection = () => {
	return (
		<>
			<div className='z-20'>
				<IntegrateSection />
			</div>
			<div className='absolute' style={{ zIndex: "-99999", top: "4250px" }}>
				<img src={backgroundMask} style={{ width: "100vw" }} />
			</div>
			<div className='z-20'>
				<Newsletter />
				<Footer />
			</div>
		</>
	);
};

export default BottomCollection;

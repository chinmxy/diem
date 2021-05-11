import React from "react";
import "./Background.css";
import bgImg from "./bg.svg";
// import Mask1 from "../../img/bg-masks/mask-1";

const Background = () => {
	return (
		<div>
			<div className='hidden lg:block' id='background'></div>

			<div className='lg:hidden absolute'>{/* <img src={Mask1} /> */}</div>
		</div>
	);
};

export default Background;

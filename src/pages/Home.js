import React, { useEffect } from "react";

import Hero from "../components/Hero/Hero";

import BlogSection from "../components/BlogSection/BlogSection";
import Newsletter from "../components/Newsletter/Newsletter";
import Features from "../components/Features/Features";
import Features2 from "../components/Features2/Features2";
import StepsSection from "../components/StepsSection/StepsSection";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import IntegrateSection from "../components/IntegrateSection/IntegrateSection";

import Offer from "../components/Offer/Offer";
import Background from "../components/Background/Background";

import BottomCollection from "../components/BottomCollection/BottomCollection";

const Home = () => {
	return (
		<>
			<Background />
			<Hero />
			<Offer />
			<StepsSection />
			<Contact />
			<Features />
			<BottomCollection />
			{/* <IntegrateSection />
			<Newsletter />
			<Footer /> */}
			{/* <Features />
			<Features2 />
			
			<IntegrateSection />
			<BlogSection />
			<Newsletter />
			
			 */}
		</>
	);
};

export default Home;

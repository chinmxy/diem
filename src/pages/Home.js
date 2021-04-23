import React from "react";

import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import StepsSection from "../components/StepsSection/StepsSection";
import Contact from "../components/Contact/Contact";
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
		</>
	);
};

export default Home;

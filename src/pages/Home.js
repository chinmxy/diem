import React from "react";

import Background from "../components/Background/Background";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

import Features from "../components/Features/Features";
import StepsSection from "../components/StepsSection/StepsSection";
import Contact from "../components/Contact/Contact";
import Offer from "../components/Offer/Offer";

import BottomCollection from "../components/BottomCollection/BottomCollection";

const Home = () => {
	return (
		<>
			<Background />
			<Navbar />
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

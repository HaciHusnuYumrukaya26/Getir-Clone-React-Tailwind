import React from "react";
import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";

const App = () => {
  


	return (
		<>
			<Header />
			<HeroSection />
			<Categories />
			<div className="grid gap-y-6 py-6 pb-14 container mx-auto">
				 <Campaigns />
				<Favorites />
				<MobileApp />
				<Cards />
			</div>
			<Footer />
		</>
	);
};

export default App;

import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import WhatIBuild from "@components/WhatIBuild";
import Portfolio from "@components/Portfolio";
import BuildInPublic from "@components/BuildInPublic";
import Contact from "@components/Contact";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<Hero />
			<WhatIBuild />
			<Portfolio />
			<BuildInPublic />
			<Contact />
		</main>
	);
}

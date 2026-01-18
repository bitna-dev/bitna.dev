"use client";

import { motion } from "framer-motion";

const projects = [
	{
		title: "ExtHub",
		category: "Developer Platform",
		description:
			'A community-driven platform where developers share and discover curated IDE extension collections. Browse setups like "React Developer 2024" to quickly build your perfect development environment.',
		tech: ["React.js", "NestJS", "GraphQL", "TypeScript", "Prisma", "PostgreSQL"],
		color: "purple",
		year: "2026",
		status: "In Progress",
		github: "https://github.com/bitna-dev/exthub-client",
	},
	{
		title: "Clario",
		category: "SaaS Platform",
		description:
			"Contract management web app for freelancers and contractors. Features AI-powered contract analysis and project tracking.",
		tech: ["React.js", "TypeScript", "Node.js", "Express", "JWT"],
		color: "orange",
		year: "2025",
		github: "https://github.com/yourusername/clario",
		demo: "https://clario-demo.com",
	},
	{
		title: "Skinu",
		category: "E-Commerce Web App",
		description:
			"Personalized cosmetics recommendation platform based on skin type analysis. Similar to Hwahae (Korea), helping users find and purchase the right products.",
		tech: ["HTML", "CSS", "JavaScript", "Firebase"],
		color: "blue",
		year: "2025",
		github: "https://github.com/langara-wmd/skinu",
		demo: "https://skinu-danielvelasteguis-projects.vercel.app",
	},
];
const Portfolio = () => {
	const colorMap: Record<string, string> = {
		blue: "from-blue-500 to-blue-600",
		purple: "from-purple-500 to-purple-600",
		green: "from-green-500 to-green-600",
		orange: "from-orange-500 to-orange-600",
	};
	return (
		<section
			id="portfolio"
			className="py-20 px-10 bg-white dark:bg-slate-950 transition-colors duration-300 max-w-7xl mx-auto"
		>
			<div className="mb-16">
				<h2 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">Projects</h2>
				<p className="text-slate-500 dark:text-slate-400 text-lg">Real-world applications I&apos;ve built</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, i) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 20,
							delay: i * 0.1,
						}}
						className="group relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer overflow-hidden"
						style={{ willChange: "transform, opacity" }}
					>
						<div
							className={`absolute inset-0 bg-gradient-to-br ${colorMap[project.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
						/>

						<div className="relative z-10">
							<div className="flex items-center gap-2 mb-4 flex-wrap">
								<span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
									{project.category}
								</span>
								<span className="text-xs font-semibold text-slate-400 dark:text-slate-600">{project.year}</span>
								{project.status && (
									<span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full animate-pulse">
										{project.status}
									</span>
								)}
							</div>

							<h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
								{project.title}
							</h3>

							<p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{project.description}</p>

							<div className="flex flex-wrap gap-2 mb-10">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-3">
								{project.demo && (
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all"
										onClick={(e) => e.stopPropagation()}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
											<polyline points="15 3 21 3 21 9"></polyline>
											<line x1="10" y1="14" x2="21" y2="3"></line>
										</svg>
										Live Demo
									</a>
								)}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
									onClick={(e) => e.stopPropagation()}
								>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									GitHub
								</a>
							</div>
						</div>

						{/* <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="text-blue-600 dark:text-blue-400"
							>
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</div> */}
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Portfolio;

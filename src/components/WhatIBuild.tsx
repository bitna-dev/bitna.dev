"use client";

import { motion } from "framer-motion";

const WhatIBuild = () => {
	return (
		<section className="py-20 px-10 mx-auto bg-white dark:bg-slate-950 transition-colors duration-300 max-w-7xl">
			<h2 className="text-4xl font-black mb-16 text-slate-900 dark:text-white">What I Build</h2>

			<div className="grid grid-cols-1 md:grid-cols-3  gap-6 ">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 20,
						delay: 0.1,
					}}
					className="md:col-span-2 p-10 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 group"
					style={{ willChange: "transform, opacity" }}
				>
					<h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Web Solutions</h3>
					<p className="text-slate-500 dark:text-slate-400 mb-8">
						Lightning-fast performance and SEO optimization with Next.js. <br />
						Build high-performance websites that become the face of your business.
					</p>
					<div className="flex gap-2 flex-wrap">
						{["Next.js", "React.js", "Nest.js", "Node.js", "SEO"].map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-semibold border border-slate-200 dark:border-slate-700"
							>
								{tech}
							</span>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 20,
						delay: 0.2,
					}}
					className="p-10 bg-blue-600 text-white rounded-[3rem] shadow-2xl shadow-blue-500/30 relative overflow-hidden group hover:shadow-blue-500/50"
					style={{ willChange: "transform, opacity" }}
				>
					<h3 className="text-3xl font-bold mb-4">Mobile Apps</h3>
					<p className="opacity-90">
						React Native for simultaneous <br />
						iOS & Android launches.
					</p>
					<div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
						<svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
							<path d="M17 2.5v7h-2V4.695c-3.946 1.773-7.003 5.549-8.5 10.305h4V17h-7v-2h4.699c1.596-5.556 5.282-10.048 10.301-12.249V2.5h2z" />
						</svg>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 20,
						delay: 0.3,
					}}
					className="md:col-span-3 p-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[3rem] flex flex-col md:flex-row justify-between sm:items-start items-center gap-8 transition-colors duration-300"
					style={{ willChange: "transform, opacity" }}
				>
					<div>
						<h3 className="text-3xl font-bold mb-4">Backend & Cloud Setup</h3>
						<p className="opacity-80 dark:opacity-70 max-w-md">
							Scalable Nest.js architecture and AWS/Vercel infrastructure. <br />
							From database design to security, fully covered.
						</p>
					</div>
					<button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shrink-0 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
						Learn More
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default WhatIBuild;

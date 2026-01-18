"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const BuildInPublic = () => {
	const [activeDay] = useState(1);
	return (
		<section className="py-20 px-10 bg-white dark:bg-slate-950 transition-colors duration-300 max-w-7xl mx-auto">
			<div className="border-2 border-slate-100 dark:border-slate-800 rounded-[3.5rem] p-12 relative overflow-hidden">
				<div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
					<div>
						<h2 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">Build In Public</h2>
						<p className="text-slate-500 dark:text-slate-400 italic">
							&quot;30 React/React Native apps in 30 days&quot;
						</p>
					</div>
					<div className="text-right">
						<div className="text-6xl font-black text-blue-600">
							{activeDay}
							<span className="text-2xl text-slate-300 dark:text-slate-700">/30</span>
						</div>
						<p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-600">
							Current Progress
						</p>
					</div>
				</div>

				<div className="grid grid-cols-6 md:grid-cols-10 gap-2 relative z-10">
					{Array.from({ length: 30 }).map((_, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 20,
								delay: i * 0.02,
							}}
							whileHover={{ scale: 1.1 }}
							className={`aspect-square rounded-xl flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer
                ${
									i < activeDay
										? "bg-blue-600 text-white shadow-lg shadow-blue-500/40"
										: "bg-slate-100 dark:bg-slate-800 text-slate-400 opacity-40"
								}`}
						>
							{i < activeDay ? (
								// Checkmark
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
									<polyline points="20 6 9 17 4 12"></polyline>
								</svg>
							) : (
								i + 1
							)}
						</motion.div>
					))}
				</div>

				<div className="mt-12 flex gap-4 justify-center relative z-10">
					<a
						href="https://instagram.com/bitna.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
					>
						Follow on Instagram
					</a>
					<a
						href="https://github.com/bitna-dev/30-days-react-challenge"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
					>
						Follow on Github
					</a>
				</div>

				<div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full" />
			</div>
		</section>
	);
};
export default BuildInPublic;

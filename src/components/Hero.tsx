"use client";

import { motion } from "framer-motion";
import FloatingAvatar from "./FloatingAvatar";

const Hero = () => {
	return (
		<header className="relative flex flex-col md:flex-row items-center justify-center px-10 overflow-hidden transition-colors duration-300 max-w-7xl mx-auto">
			<div className=" mx-auto pt-32 pb-20 flex flex-col md:flex-row items-center justify-center">
				{/* Left */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="flex-1 z-10 space-y-6 max-w-2xl"
				>
					{/* Greeting */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-blue-600 dark:text-blue-400 font-bold text-lg"
					>
						👋 Hi, I&apos;m
					</motion.div>

					{/* Name */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-6xl md:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white"
					>
						Bitna Lee
					</motion.h1>

					{/* Role */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-400"
					>
						Full-Stack Developer
					</motion.div>

					{/* Bio */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
					>
						I build web and mobile applications from idea to deployment. Passionate about creating elegant solutions
						with modern tech stacks. Currently working on{" "}
						<span className="text-blue-600 dark:text-blue-400 font-semibold">ExtHub</span> and building{" "}
						<span className="text-blue-600 dark:text-blue-400 font-semibold">30 apps in 30 days</span>.
					</motion.p>

					{/* Status Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-bold border border-green-100 dark:border-green-800"
					>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						Available for freelance projects
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className="flex gap-4 pt-4"
					>
						<a
							href="#portfolio"
							className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
						>
							View Projects
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="group-hover:translate-x-1 transition-transform"
							>
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</a>
						<a
							href="#contact"
							className="px-8 py-4 rounded-2xl font-bold border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
						>
							Get in Touch
						</a>
					</motion.div>
				</motion.div>
			</div>
			<div className="flex-1 mt-10 md:mt-0">
				<FloatingAvatar />
			</div>
		</header>
	);
};

export default Hero;

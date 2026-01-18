"use client";

import { motion } from "framer-motion";

const Contact = () => {
	return (
		<footer
			id="contact"
			className="py-20 px-10 bg-white dark:bg-slate-950 transition-colors duration-300 max-w-7xl mx-auto text-center"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="inline-block"
			>
				<h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight text-slate-900 dark:text-white">
					Have an idea? <br />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
						Let&apos;s build it.
					</span>
				</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="flex flex-col items-center gap-6 mt-10"
			>
				<a
					href="mailto:bitna.dev@gmail.com"
					className="flex items-center gap-3 text-2xl font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
				>
					<svg
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="group-hover:scale-110 transition-transform"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
					bitna.dev@gmail.com
				</a>

				{/* Social Links */}
				<div className="flex gap-4 mt-8">
					{[
						{ name: "Instagram", url: "https://instagram.com/bitna.dev" },
						{ name: "Github", url: "https://github.com/bitna-dev" },
						{ name: "LinkedIn", url: "https://linkedin.com/in/bitna-dev" },
					].map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-sm font-bold text-slate-700 dark:text-slate-300"
						>
							{link.name}
						</a>
					))}
				</div>
			</motion.div>

			<p className="mt-24 text-slate-400 dark:text-slate-600 text-xs">
				© {new Date().getFullYear()} Bitna Dev. All rights reserved.
			</p>
		</footer>
	);
};

export default Contact;

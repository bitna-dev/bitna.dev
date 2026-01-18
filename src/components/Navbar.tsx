"use client";

import { useDarkMode } from "@/contexts/DarkModeContext";

const Navbar = () => {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-100 dark:border-slate-900">
			<div className="font-extrabold text-2xl tracking-tighter text-blue-600">
				<a href="#hero">BITNA</a>
			</div>

			<div className="flex items-center gap-6">
				<button
					onClick={toggleDarkMode}
					className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition-all hover:scale-110"
					aria-label="Toggle dark mode"
					suppressHydrationWarning
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="hidden dark:block text-yellow-400"
					>
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
						<line x1="1" y1="12" x2="3" y2="12"></line>
						<line x1="21" y1="12" x2="23" y2="12"></line>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
					</svg>

					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="block dark:hidden text-slate-600"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				</button>

				<a
					href="mailto:bitna.dev@gmail.com"
					className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all"
				>
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;

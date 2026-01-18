"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type DarkModeContextType = {
	darkMode: boolean;
	toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window === "undefined") return false;
		const savedMode = localStorage.getItem("darkMode") === "true";
		return savedMode;
	});

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newMode = !prev;
			localStorage.setItem("darkMode", String(newMode));
			return newMode;
		});
	};

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
};

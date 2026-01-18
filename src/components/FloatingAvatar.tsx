"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingAvatar() {
	return (
		<div className="relative h-[400px] px-10 w-full flex items-center justify-center overflow-hidden">
			<motion.div
				animate={{
					y: [0, -20, 0],
					rotate: [0, 1, -1, 0],
				}}
				transition={{
					y: {
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					},
					rotate: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					},
				}}
				className="relative z-10"
			>
				<div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 ">
					<Image src="/bitna.jpg" alt="Bitna Lee" fill className="object-cover" priority />
				</div>
			</motion.div>
		</div>
	);
}

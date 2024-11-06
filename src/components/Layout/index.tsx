"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import { Header } from "@components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
interface LayoutProps {
	children: React.ReactNode;
}

const SkipLink = dynamic(() => import("@components/SkipLink"), { ssr: true });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

const animationVariants = {
	in: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.2,
		},
	},
	out: {
		opacity: 0,
		y: 40,
		transition: {
			duration: 0.5,
		},
	},
};

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const pathname = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				animate="in"
				exit="out"
				initial="out"
				key={pathname}
				variants={animationVariants}
			>
				<SkipLink />
				<Header />
				<main id="main-content">{children}</main>
				<Footer />
			</motion.div>
		</AnimatePresence>
	);
};

"use client";

import { FC, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
	children: ReactNode;
	className?: string;
}

export const FadeIn: FC<FadeInProps> = ({
	children,
	className,
}): React.JSX.Element => {
	const reduceMotion = useReducedMotion();

	return (
		<motion.section
			className={className}
			initial={reduceMotion ? false : { opacity: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.1 }}
			whileInView={{ opacity: 1 }}
		>
			{children}
		</motion.section>
	);
};

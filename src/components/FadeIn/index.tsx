"use client";

import { FC, ReactNode, useRef } from "react";
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";

interface FadeInProps {
	children: ReactNode;
	className?: string;
}

export const FadeIn: FC<FadeInProps> = ({
	children,
	className,
}): React.JSX.Element => {
	const reduceMotion = useReducedMotion();
	const ref = useRef<HTMLElement>(null);

	// 0 when the section's top enters the viewport, 1 when its bottom leaves it.
	const { scrollYProgress } = useScroll({
		offset: ["start end", "end start"],
		target: ref,
	});

	// Fades in and slides up into place as it enters, holds through the
	// middle, then dims (not hidden) as it leaves.
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.25, 0.75, 1],
		[0, 1, 1, 0.25],
	);
	const y = useTransform(scrollYProgress, [0, 0.25], [64, 0]);

	// Reduced motion keeps the fade but drops the slide.
	return (
		<motion.section
			className={className}
			ref={ref}
			style={reduceMotion ? { opacity } : { opacity, y }}
		>
			{children}
		</motion.section>
	);
};

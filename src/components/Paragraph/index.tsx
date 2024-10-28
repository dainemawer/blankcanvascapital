"use client";

import { FC } from "react";
import { ParagraphProps } from "./Paragraph.types";

export const Paragraph: FC<ParagraphProps> = ({
	children,
	color,
	lead,
	maxWidth,
}): JSX.Element => {
	if (lead) {
		return (
			<p
				className={`${
					color === "gold" ? "text-gold" : "text-dove"
				} font-secondary text-eyebrow font-normal leading-8 mb-7 relative ${
					maxWidth ? `max-w-${maxWidth}` : "max-w-[970px]"
				}`}
			>
				{children}
			</p>
		);
	}

	return (
		<p className="text-mineShaft font-secondary text-eyebrow font-normal leading-8 mb-5 max-w-[1024px] md:mb-7">
			{children}
		</p>
	);
};

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
				} font-secondary text-base font-normal leading-7 mb-7 relative ${
					maxWidth ? `max-w-${maxWidth}` : "max-w-[970px]"
				} ${lead ? "pb-8 md:pb-16" : ""} ${
					lead
						? "after:content-[''] after:block after:absolute after:h-[6px] after:w-[104px] after:left-0 after:bottom-0 after:bg-gold"
						: ""
				}`}
			>
				{children}
			</p>
		);
	}

	return (
		<p className="text-mineShaft font-secondary text-base font-normal leading-7 mb-5 max-w-[1024px] md:mb-7">
			{children}
		</p>
	);
};

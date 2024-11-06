"use client";

import { FC } from "react";
import { QuoteProps } from "./Quote.types";

export const Quote: FC<QuoteProps> = ({ cite, quote }): JSX.Element => {
	return (
		<blockquote
			cite={cite}
			className="relative ml-6 max-w-[520px] pl-8 md:ml-12 md:pl-9"
		>
			<span className="absolute top-1/2 left-0 h-[100px] w-[3px] bg-copper transform -translate-y-1/2 md:h-[160px]"></span>
			<p className="font-secondary text-lg italic font-bold tracking-[-0.03em] leading-tight">
				{quote}
			</p>
			<cite className="text-black font-primary text-md font-medium">
				~ {cite}
			</cite>
		</blockquote>
	);
};

export default Quote;

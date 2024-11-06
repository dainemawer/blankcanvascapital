"use client";

import { FC } from "react";
import { SubHeadingProps } from "./SubHeading.types";

const SubHeading: FC<SubHeadingProps> = ({ heading }): JSX.Element => {
	return (
		<div>
			<h2 className="relative text-black font-primary text-subheading font-semibold leading-relaxed uppercase my-6 sm:my-14">
				<span className="relative z-10 bg-white pr-6">{heading}</span>
				<span className="absolute inset-0 h-[2px] top-1/2 transform -translate-y-1/2 bg-copper z-[-1]"></span>
			</h2>
		</div>
	);
};

export default SubHeading;

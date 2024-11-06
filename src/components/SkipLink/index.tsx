"use client";

import { FC } from "react";
import { SkipLinkProps } from "./SkipLink.types";

const SkipLink: FC<SkipLinkProps> = (): JSX.Element => {
	return (
		<a
			className="absolute clip-path-[inset(50%)] h-[1px] w-[1px] overflow-hidden whitespace-nowrap focus:clip-auto focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal"
			href="#main-content"
		>
			Skip to main content
		</a>
	);
};

export default SkipLink;

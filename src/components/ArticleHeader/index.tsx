"use client";

import { FC } from "react";
import { ArticleHeaderProps } from "./ArticleHeader.types";

const ArticleHeader: FC<ArticleHeaderProps> = ({
	eyebrow,
	title,
}): JSX.Element => {
	return (
		<header>
			<p className="text-base font-semibold leading-6 uppercase text-gold text-eyebrow font-primary">
				{eyebrow}
			</p>
			<h1 className="mt-0 mb-5 font-bold leading-tight text-grey text-heading font-primary text-xxl md:mb-8">
				{title}
			</h1>
		</header>
	);
};

export default ArticleHeader;

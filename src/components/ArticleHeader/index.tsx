"use client";

import { FC } from "react";
import { ArticleHeaderProps } from "./ArticleHeader.types";

const ArticleHeader: FC<ArticleHeaderProps> = ({
	eyebrow,
	title,
}): JSX.Element => {
	return (
		<header className="mt-10 md:mt-16">
			<p className="text-gold font-primary text-base font-semibold leading-6 uppercase">
				{eyebrow}
			</p>
			<h1 className="text-grey font-primary text-xxl font-bold leading-tight mt-0 mb-5 md:mb-8">
				{title}
			</h1>
		</header>
	);
};

export default ArticleHeader;

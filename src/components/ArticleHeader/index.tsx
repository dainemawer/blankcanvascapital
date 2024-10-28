"use client";

import { FC } from "react";
import { ArticleHeaderProps } from "./ArticleHeader.types";
import { Paragraph } from "@components/Paragraph";

const ArticleHeader: FC<ArticleHeaderProps> = ({
	eyebrow,
	title,
}): JSX.Element => {
	return (
		<header>
			<Paragraph>{eyebrow}</Paragraph>
			<h1 className="mt-0 mb-5 font-bold leading-tight text-grey text-heading font-primary text-xxl md:mb-8">
				{title}
			</h1>
		</header>
	);
};

export default ArticleHeader;

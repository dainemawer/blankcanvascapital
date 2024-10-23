"use client";

import { FC } from "react";
import { StyledParagraph, StyledLead } from "./Paragraph.styled";
import { ParagraphProps } from "./Paragraph.types";

export const Paragraph: FC<ParagraphProps> = ({
	children,
	color,
	lead,
	maxWidth,
}): JSX.Element => {
	if (lead) {
		return (
			<StyledLead color={color} maxWidth={maxWidth}>
				{children}
			</StyledLead>
		);
	}

	return <StyledParagraph>{children}</StyledParagraph>;
};

"use client";

import { FC } from "react";
import {
	StyledBlockQuote,
	StyledBlockQuoteText,
	StyledCite,
} from "./Quote.styled";
import { QuoteProps } from "./Quote.types";

export const Quote: FC<QuoteProps> = ({ cite, quote }): JSX.Element => {
	return (
		<StyledBlockQuote cite={cite}>
			<StyledBlockQuoteText>{quote}</StyledBlockQuoteText>
			<StyledCite>~ {cite}</StyledCite>
		</StyledBlockQuote>
	);
};

/*
 * Error
 *
 * Error Component
 *
 * @returns {JSX.Element}
 */

import { FC } from "react";
import { Button } from "@components/Button";
import {
	StyledWrap,
	StyledTextWrap,
	StyledH1,
	StyledEyebrow,
	StyledParagraph,
} from "./ErrorLayout.styled";
import { ErrorProps } from "./ErrorLayout.types";

export const ErrorLayout: FC<ErrorProps> = ({
	eyebrow = "",
	lead = "",
	permalink = "",
	title = "",
}): JSX.Element => {
	return (
		<StyledWrap>
			<StyledTextWrap>
				{title && (
					<StyledH1>
						{eyebrow && <StyledEyebrow>{eyebrow}</StyledEyebrow>}
						{title}
					</StyledH1>
				)}
				{lead && <StyledParagraph>{lead}</StyledParagraph>}
				{permalink && <Button href="/">{permalink}</Button>}
			</StyledTextWrap>
		</StyledWrap>
	);
};

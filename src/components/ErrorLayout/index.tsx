/*
 * Error
 *
 * Error Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Link from 'next/link'
import { Button } from '@components/Button';
import { StyledWrap, StyledTextWrap, StyledH1, StyledEyebrow, StyledSpan, StyledParagraph } from './ErrorLayout.styled'

interface ErrorProps {
	eyebrow: string;
	title: string;
	lead: string;
	permalink: string;
}

export const ErrorLayout: FC<ErrorProps> = ({ eyebrow = '', title = '', lead = '', permalink = '' }): JSX.Element => {
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
}

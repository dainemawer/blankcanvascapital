/*
 * Paragraph
 *
 * Paragraph Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { StyledParagraph, StyledLead } from './Paragraph.styled';
import { ParagraphProps } from './Paragraph.types';

export const Paragraph: FC<ParagraphProps> = ({ children, lead }): JSX.Element => {

	if(lead) {
		return (
			<StyledLead>{children}</StyledLead>
		)
	}

	return (
		<StyledParagraph>{children}</StyledParagraph>
	)
}

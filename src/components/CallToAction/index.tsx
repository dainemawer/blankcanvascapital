/*
 * Call To Action
 *
 *  Call To Action Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { Button } from '@components/Button';
import {
	StyledSection,
	StyledSectionContainer,
	StyledEyebrow,
	StyledCTATitle,
	StyledDescription
} from './CallToAction.styled';
import { CallToActionProps } from './CallToAction.types';

export const CallToAction: FC<CallToActionProps> = ({
	buttonLink,
	buttonText,
	description,
	eyebrow,
	title
}): JSX.Element => {
	return (
		<StyledSection>
			<StyledSectionContainer>
				{eyebrow && <StyledEyebrow>{eyebrow}</StyledEyebrow>}
				{title && <StyledCTATitle>{title}</StyledCTATitle>}
				{description && <StyledDescription>{description}</StyledDescription>}
				{buttonLink && <Button href={buttonLink}>{buttonText}</Button>}
			</StyledSectionContainer>
		</StyledSection>
	);
}

/*
 * Complex Section
 *
 * Renders complex sections on the home page.
 *
 * @returns {JSX.Element}
*/

import type { FC } from 'react';
import type { ComplexSectionProps } from './Section.types';
import { Container } from '@components/Container';
import { Button } from '@components/Button';
import {
	StyledSection,
	StyledSectionGrid,
	StyledMiniSidebar,
	StyledIndex,
	StyledEyebrow,
	StyledContent,
	StyledHeader,
	StyledTitle,
	StyledWrap,
	StyledCardContent,
	StyledSubTitle,
	StyledExcerpt,
	StyledCTA
} from './Section.styled';

const ComplexSection: FC<ComplexSectionProps> = ({
	children, ctaLabel, ctaLink, excerpt, eyebrow, id, image, index, subTitle, title, variant
}) => {

	if (variant === 'our-team') {
		return (
			<StyledSection align="left" id={id}>
				<Container size='1290px'>
					<StyledSectionGrid align="left">
						<StyledMiniSidebar align="left">
							<StyledIndex align="left">{index}</StyledIndex>
							<StyledEyebrow align="left">{eyebrow}</StyledEyebrow>
						</StyledMiniSidebar>
						<StyledContent>
							<StyledHeader align="left">
								<StyledTitle>{title}</StyledTitle>
							</StyledHeader>
							<StyledWrap align="noalign">
								{children}
							</StyledWrap>
							<StyledCardContent>
								<StyledExcerpt>{excerpt}</StyledExcerpt>
								<StyledCTA>
									<Button href={ctaLink}>{ctaLabel}</Button>
								</StyledCTA>
							</StyledCardContent>
						</StyledContent>
					</StyledSectionGrid>
				</Container>
			</StyledSection>
		)
	}

	if (variant === 'investment-portfolio') {
		return (
			<StyledSection align="center" backgroundColor="rgba(230,230,230, 0.3)" id={id}>
				<Container size='1290px'>
					<StyledHeader align="center">
						<StyledTitle align="center">
							<StyledEyebrow align="center" underline>
								<StyledIndex align="center">{index}</StyledIndex>
								{eyebrow}
							</StyledEyebrow>
							{title}
						</StyledTitle>
					</StyledHeader>
				</Container>
				<StyledContent>
					<StyledWrap align="center">
						<StyledCardContent align="left">
							<StyledSubTitle align="center">{subTitle}</StyledSubTitle>
							<StyledExcerpt align="center">{excerpt}</StyledExcerpt>
							<StyledCTA>
								<Button href={ctaLink}>{ctaLabel}</Button>
							</StyledCTA>
						</StyledCardContent>
						{children}
					</StyledWrap>
				</StyledContent>
			</StyledSection>
		)
	}

	return null;
}

export default ComplexSection;

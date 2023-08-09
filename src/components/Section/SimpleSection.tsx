/*
 * Simple Section
 *
 * Renders simple sections on the home page.
 *
 * @returns {JSX.Element}
*/

import type { FC } from 'react';
import Image from 'next/image';
import type { SimpleSectionProps } from './Section.types';
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
	StyledFigure,
	StyledCardContent,
	StyledSubTitle,
	StyledExcerpt,
	StyledCTA
} from './Section.styled';

const SimpleSection: FC<SimpleSectionProps> = ({
	align,
	backgroundColor,
	ctaLabel,
	ctaLink,
	excerpt,
	eyebrow,
	id,
	image,
	index,
	subTitle,
	title,
}) => {
	return (
		<StyledSection align={align} backgroundColor={backgroundColor} className="simple" id={id}>
			<Container size='1290px'>
				{align === 'left' ? (
					<StyledSectionGrid align={align}>
						<StyledMiniSidebar align={align}>
							<StyledIndex align={align}>{index}</StyledIndex>
							<StyledEyebrow align={align}>{eyebrow}</StyledEyebrow>
						</StyledMiniSidebar>
						<StyledContent>
							<StyledHeader align={align}>
								<StyledTitle>{title}</StyledTitle>
							</StyledHeader>
							<StyledWrap align={align}>
								<StyledFigure>
									<Image alt="" height={501} src={image} width={450} />
								</StyledFigure>
								<StyledCardContent align={align}>
									<StyledSubTitle maxWidth="500px">{subTitle}</StyledSubTitle>
									<StyledExcerpt>{excerpt}</StyledExcerpt>
									<StyledCTA>
										<Button href={ctaLink}>{ctaLabel}</Button>
									</StyledCTA>
								</StyledCardContent>
							</StyledWrap>
						</StyledContent>
					</StyledSectionGrid>
				) : (
					<StyledSectionGrid align={align}>
						<StyledContent align={align}>
							<StyledHeader align={align}>
								<StyledTitle>{title}</StyledTitle>
							</StyledHeader>
							<StyledWrap align={align}>
								<StyledCardContent align={align}>
									<StyledSubTitle maxWidth="720px">{subTitle}</StyledSubTitle>
									<StyledExcerpt>{excerpt}</StyledExcerpt>
									<StyledCTA>
										<Button href={ctaLink}>{ctaLabel}</Button>
									</StyledCTA>
								</StyledCardContent>
								<StyledFigure>
									<Image alt="" height={600} src={image} width={400} />
								</StyledFigure>
							</StyledWrap>
						</StyledContent>
						<StyledMiniSidebar align={align}>
							<StyledIndex align={align}>{index}</StyledIndex>
							<StyledEyebrow align={align}>{eyebrow}</StyledEyebrow>
						</StyledMiniSidebar>
					</StyledSectionGrid>
				)}
			</Container>
		</StyledSection>
	);
};

export default SimpleSection;

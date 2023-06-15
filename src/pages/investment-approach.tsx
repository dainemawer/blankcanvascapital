/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import { TeamGrid } from '@components/TeamGrid';
import {
	StyledGrid,
	StyledAside,
	StyledLine,
	StyledArticle,
	StyledHeader,
	StyledEyebrow,
	StyledHeading,
	StyledLead
} from '../shared/content.styled';

export default function InvestmentApproach(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Investment Approach"
			/>
			<Hero image="/hero-investment-portfolio.jpg" label="Three Men Walking Up Stairs" />
			<Container size="1650px">
				<StyledGrid>

					<StyledAside>
						<StyledLine />
					</StyledAside>

					<StyledArticle>

						<StyledHeader>
							<StyledEyebrow>The people behind the investments</StyledEyebrow>
							<StyledHeading>Investment Portfolio</StyledHeading>
						</StyledHeader>

						<StyledLead>
							Welcome to Blank Canvas Capital, where we fuel innovation and
							empower entrepreneurs to turn their visions into reality.
							As a leading venture capitalist firm, we specialize in identifying
							promising startups with exceptional potential and providing
							them with the necessary resources to flourish.
						</StyledLead>

					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}

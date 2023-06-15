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
	StyledLead,
	StyledParagraph,
	StyledSubHeading,
	StyledSubHeadingSpan
} from '../shared/content.styled';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { SingleTeamProps } from '@components/TeamGrid/TeamGrid.types';

export default function Team(): JSX.Element {
	const { data, error } = useSWR('/api/team', fetcher);
	const team = data as SingleTeamProps[];

	if (error) return <div>Failed to load...</div>

	return (
		<>
			<NextSeo
				title="Team"
			/>
			<Hero image="/hero-team-formatted-optimised.jpg" label="Three Men Walking Up Stairs" />
			<Container size="1620px">
				<StyledGrid>

					<StyledAside>
						<StyledLine />
					</StyledAside>

					<StyledArticle>

						<StyledHeader>
							<StyledEyebrow>The people behind the investments</StyledEyebrow>
							<StyledHeading>Our Team</StyledHeading>
						</StyledHeader>

						<StyledLead>
							Welcome to Blank Canvas Capital, where we fuel innovation and empower
							entrepreneurs to turn their visions into reality. As a leading venture
							capitalist firm, we specialize in identifying promising startups with
							exceptional potential and providing them with the
							necessary resources to flourish.
						</StyledLead>

						<StyledParagraph>
							At <strong>Blank Canvas Capital</strong>, our mission is to drive
							positive change by investing in groundbreaking ideas and visionary
							entrepreneurs. We believe in the power of innovation to transform
							industries and create a better future. We strive to support and
							guide entrepreneurs through their journey, offering not only
							financial backing but also strategic guidance and a
							vast network of industry connections.
						</StyledParagraph>

						<StyledParagraph>
							Our portfolio comprises a diverse range of companies,
							<Link href="/portfolio">each with a unique vision</Link>
							and disruptive potential.
							From early-stage startups to established enterprises,
							we invest in companies at various growth stages.
							We take pride in the success stories of our portfolio
							companies and the value they create in their respective industries.
						</StyledParagraph>

						<div>
							<StyledSubHeading>
								<StyledSubHeadingSpan>Investment Team</StyledSubHeadingSpan>
							</StyledSubHeading>
						</div>

						{team && <TeamGrid team={team} />}

					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}

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
import { Button } from '@components/Button';

import { StyledGrid, StyledAside, StyledLine, StyledArticle, StyledHeader, StyledEyebrow, StyledHeading, StyledLead, StyledParagraph, StyledSubHeading, StyledSubHeadingSpan, StyledBlockQuote, StyledBlockQuoteText, StyledCite } from '../shared/content.styled';

export default function AboutUs(): JSX.Element {
	return (
		<>
			<NextSeo
				title="About Us"
			/>
			<Hero label="Elevator in Department Store" image="/hero-about-formatted-optimized.jpg" />
			<Container size="1620px">
				<StyledGrid>

					<StyledAside>
						<StyledLine />
					</StyledAside>

					<StyledArticle>

						<StyledHeader>
							<StyledEyebrow>Incredible investments, incredible people</StyledEyebrow>
							<StyledHeading>Our Investment Mission</StyledHeading>
						</StyledHeader>

						<StyledLead>Welcome to Blank Canvas Capital, where we fuel innovation and empower entrepreneurs to turn their visions into reality. As a leading venture capitalist firm, we specialize in identifying promising startups with exceptional potential and providing them with the necessary resources to flourish.</StyledLead>

						<StyledParagraph>At <strong>Blank Canvas Capital</strong>, our mission is to drive positive change by investing in groundbreaking ideas and visionary entrepreneurs. We believe in the power of innovation to transform industries and create a better future. We strive to support and guide entrepreneurs through their journey, offering not only financial backing but also strategic guidance and a vast network of industry connections.</StyledParagraph>

						<StyledParagraph>Our portfolio comprises a diverse range of companies, <Link href="/portfolio">each with a unique vision</Link> and disruptive potential. From early-stage startups to established enterprises, we invest in companies at various growth stages. We take pride in the success stories of our portfolio companies and the value they create in their respective industries.</StyledParagraph>

						<StyledParagraph>Whether you&apos;re an entrepreneur seeking investment or an industry expert interested in collaboration, we welcome the opportunity to connect. Feel free to reach out to our team to explore how we can work together to unlock opportunities and drive innovation.</StyledParagraph>

						<div>
							<StyledSubHeading>
								<StyledSubHeadingSpan>What Sets Us Apart</StyledSubHeadingSpan>
							</StyledSubHeading>
						</div>

						<StyledParagraph>Our portfolio comprises a diverse range of companies, each with a unique vision and disruptive potential. From early-stage startups to established enterprises, we invest in companies at various growth stages. We take pride in the success stories of <Link href="/portfolio">our portfolio</Link> companies and the value they create in their respective industries. Whether you&apos;re an entrepreneur seeking investment or an industry expert interested in collaboration, we welcome the opportunity to connect.</StyledParagraph>

						<StyledBlockQuote cite="Warren Buffet, The Warren Buffet Way">
							<StyledBlockQuoteText>I don&apos;t look to jump over seven-foot bars; I look around for one-foot bars that I can step over.</StyledBlockQuoteText>
							<StyledCite>~ Warren Buffet, <em>The Warren Buffet Way</em></StyledCite>
						</StyledBlockQuote>

						<StyledParagraph>Feel free to reach out to our team to explore how we can work together to unlock opportunities and drive innovation.</StyledParagraph>
						<Button href="/investment-approach">Our Investment Approach</Button>
					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}

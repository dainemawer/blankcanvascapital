/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import { Button } from '@components/Button';
import { Paragraph } from '@components/Paragraph';
import { Quote } from '@components/Quote';

import {
	StyledGrid,
	StyledArticle,
	StyledBox,
} from '../shared/content.styled';

const ArticleHeader = dynamic(() => import('@components/ArticleHeader'), { ssr: false });
const Aside = dynamic(() => import('@components/Aside'), { ssr: false });
const SubHeading = dynamic(() => import('@components/SubHeading'), { ssr: false });

export default function AboutUs(): JSX.Element {
	return (
		<>
			<NextSeo
				title="About Us"
			/>
			<Hero image="/hero-about-formatted-optimized.jpg" label="Elevator in Department Store"/>
			<Container size="1440px">
				<StyledGrid>
					<Aside />
					<StyledArticle>
						<ArticleHeader
							eyebrow="Incredible investments, incredible people"
							title="Our Investment Mission"
						/>
						<Paragraph lead>
							Welcome to Blank Canvas Capital, where we fuel innovation
							and empower entrepreneurs to turn their visions into reality.
							As a leading venture capitalist firm, we specialize in identifying
							promising startups with exceptional
							potential and providing them with the necessary resources to flourish.
						</Paragraph>
						<Paragraph>
							At <strong>Blank Canvas Capital</strong>, our mission is to
							drive positive change by investing in groundbreaking ideas
							and visionary entrepreneurs. We believe in the power of
							innovation to transform industries and create a better future.
							We strive to support and guide entrepreneurs through their journey,
							offering not only financial backing but also strategic
							guidance and a vast network of industry connections.
						</Paragraph>
						<Paragraph>
							Our portfolio comprises a diverse range of companies,
							<Link href="/portfolio">each with a unique vision</Link> and
							disruptive potential.From early-stage startups to established
							enterprises, we invest in companies at various growth stages.
							We take pride in the success stories of our portfolio companies
							and the value they create in their respective industries.
						</Paragraph>
						<Paragraph>
							Whether you&apos;re an entrepreneur seeking investment or an
							industry expert interested in collaboration, we welcome
							the opportunity to connect. Feel free to reach out to our
							team to explore how we can work together to
							unlock opportunities and drive innovation.
						</Paragraph>
						<SubHeading heading="What Sets Us Apart" />
						<Paragraph>
							Our portfolio comprises a diverse range of companies, each with a unique
							vision and disruptive potential. From early-stage startups
							to established enterprises, we invest in companies at
							various growth stages. We take pride in the success stories of
							<Link href="/portfolio">our portfolio</Link> companies and the
							value they create in their respective industries.
							Whether you&apos;re an entrepreneur seeking investment or
							an industry expert interested in collaboration,
							we welcome the opportunity to connect.
						</Paragraph>
						<Quote
							quote="I don&apos;t look to jump over seven-foot bars;
							I look around for one-foot bars that I can step over."
							cite="Warren Buffet, The Warren Buffet Way"
						/>
						<Paragraph>
							Feel free to reach out to our team to explore
							how we can work together to unlock opportunities and drive innovation.
						</Paragraph>
						<StyledBox align="flex-start">
							<Button href="/investment-approach">Our Investment Approach</Button>
						</StyledBox>
					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}

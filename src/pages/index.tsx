/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { Hero } from '@components/Hero';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { SingleTeamProps } from '@components/TeamGrid/TeamGrid.types';
import { PortfolioProps } from '../pages/portfolio';

const TeamSection = dynamic(() => import('@components/Section/TeamSection'));
const PortfolioSection = dynamic(() => import('@components/Section/PortfolioSection'));
const SimpleSection = dynamic(() => import('@components/Section/SimpleSection'));
const ComplexSection = dynamic(() => import('@components/Section/ComplexSection'));

export default function Home(): JSX.Element {
	const { data: teamData } = useSWR('/api/team', fetcher);
	const { data: portfolioData } = useSWR('/api/portfolio', fetcher);
	const team = teamData as SingleTeamProps[];
	const portfolio = portfolioData as PortfolioProps[];

	return (
		<>
			<NextSeo
				title="Home"
			/>
			<Hero
				subtitle="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way
				forward across the South African financial landscape."
				image="/hero-home.jpg"
				label="Aeroplane flying over buildings"
				logo="/bcc-logo.png"
				title="Every investment starts with an idea."
			/>
			<SimpleSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				align="left"
				ctaLabel="Our Business"
				ctaLink="/about-us"
				eyebrow="Our investments, Your business"
				id="about-us"
				image="/about-us.jpg"
				index="01"
				subTitle="Remarkable businesses through great management."
				title="About Us"
			/>
			<ComplexSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="View Investments"
				ctaLink="/portfolio"
				eyebrow="02 Our latest investments"
				id="investment-portfolio"
				subTitle="Discover more of our investments..."
				title="Investment Portfolio"
				variant="investment-portfolio"
			>
				{portfolio && portfolio.length > 0 ? (
					<PortfolioSection portfolio={portfolio} />
				) : (
					<p>There are no investments to display.</p>
				)}
			</ComplexSection>
			<ComplexSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="Get To Know Us"
				ctaLink="/team"
				eyebrow="Our investments, Your business"
				id="our-team"
				index="03"
				title="Our Team"
				variant="our-team"
			>
				{team && team.length > 0 ? (
					<TeamSection team={team} />
				) : (
					<p>There are no team members to display.</p>
				)}
			</ComplexSection>
			<SimpleSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				align="right"
				ctaLabel="Our Business"
				ctaLink="/investment-approach"
				eyebrow="Our investment approach"
				id="our-approach"
				image="/approach.jpg"
				index="04"
				subTitle="Our take on business is as unique as your investment"
				title="Our Approach"
			/>
			<SimpleSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				align="left"
				ctaLabel="Contact Us"
				ctaLink="/contact"
				eyebrow="Our investments, Your business"
				id="get-in-touch"
				image="/contact.jpg"
				index="05"
				subTitle="Have an idea? Want to talk about investments?"
				title="Get in Touch"
			/>
		</>
	)
}

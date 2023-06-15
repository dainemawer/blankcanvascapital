/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { Hero } from '@components/Hero';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { SingleTeamProps } from '@components/TeamGrid/TeamGrid.types';

const SectionLeft = dynamic(() => import('@components/Section/SectionLeft'));
const SectionRight = dynamic(() => import('@components/Section/SectionRight'));
const SectionFullWidth = dynamic(() => import('@components/Section/SectionFullWidth'));
const SectionScroller = dynamic(() => import('@components/Section/SectionScroller'));

export default function Home(): JSX.Element {
	const { data, error } = useSWR('/api/team', fetcher);
	const team = data as SingleTeamProps[];

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
				title="Every investment starts with an idea."
			/>
			<SectionLeft
				lead="Blank Canvas Capital is an experienced group of talented
					entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="Our Business"
				ctaLink="/about-us"
				eyebrow="Our investments, Your business"
				id="about-us"
				image="/about-us.jpg"
				label="About Us Section"
				order="01"
				subtitle="Remarkable businesses through great management."
				title="About Us"
			/>
			<SectionScroller
				lead="Blank Canvas Capital is an experienced group of talented
					entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="View Investments"
				ctaLink="/investment-portfolio"
				eyebrow="Our Latest Investments"
				id="investment-portfolio"
				image="/about-us.jpg"
				label="Investment Portfolio"
				order="02"
				subtitle="Discover more of our investments..."
				title="Investment Portfolio"
				background
			/>
			<SectionFullWidth
				lead="Blank Canvas Capital is an experienced group of talented
					entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="Get To Know Us"
				ctaLink="/team"
				id="our-team"
				image="/about-us.jpg"
				label="Our Team"
				order="03"
				team={team}
				title="Our Team"
			/>
			<SectionRight
				lead="Blank Canvas Capital is an experienced group of talented
					entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="Our Approach"
				ctaLink="/our-approach"
				eyebrow="Our Investment Approach"
				id="our-approach"
				image="/approach.jpg"
				label="Our Approach Section"
				order="02"
				subtitle="Our take on business is as unique as your investment"
				title="Our Approach"
			/>
			<SectionLeft
				lead="Blank Canvas Capital is an experienced group of talented
					entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="Contact Us"
				ctaLink="/contact-us"
				eyebrow="Our investments, Your business"
				id="get-in-touch"
				image="/contact.jpg"
				label="Get In Touch"
				order="05"
				subtitle="Have an idea? Want to talk about investments?"
				title="Get In Touch"
			/>
		</>
	)
}

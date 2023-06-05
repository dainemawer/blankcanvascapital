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

const SectionLeft = dynamic(() => import('@components/Section/SectionLeft'));
const SectionRight = dynamic(() => import('@components/Section/SectionRight'));
const SectionFullWidth = dynamic(() => import('@components/Section/SectionFullWidth'));
const SectionScroller = dynamic(() => import('@components/Section/SectionScroller'));

const TEAM = [
	{
		id: 0,
		image: '/team-member-1.jpg',
		name: 'Neil Freeman',
		position: 'Partner',
	},
	{
		id: 1,
		image: '/team-member-2.jpg',
		name: 'JD De Villiers',
		position: 'Partner',
	},
	{
		id: 2,
		image: '/team-member-3.jpg',
		name: 'Darren Roy',
		position: 'Partner',
	}
]

export default function Home(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Home"
			/>
			<Hero
				image="/hero-home.jpg"
				title="Every investment starts with an idea."
				subtitle="Blank Canvas Capital is an experienced group of talented entrepreneurs pioneering the way forward across the South African financial landscape."
			/>
			<SectionLeft
				id="about-us"
				label="About Us Section"
				eyebrow="Our investments, Your business"
				title="About Us"
				image="/about-us.jpg"
				subtitle="Remarkable businesses through great management."
				lead="Blank Canvas Capital is an experienced group of talented entrepreneurs pioneering the way forward across the South African financial."
				ctaLink="/about-us"
				ctaLabel="Our Business"
				order="01"
			/>
			<SectionScroller
				background
				id="investment-portfolio"
				label="Investment Portfolio"
				eyebrow="Our Latest Investments"
				title="Investment Portfolio"
				image="/about-us.jpg"
				subtitle="Discover more of our investments..."
				lead="Blank Canvas Capital is an experienced group of talented entrepreneurs pioneering the way forward across the South African financial."
				ctaLink="/investment-portfolio"
				ctaLabel="View Investments"
				order="02"
			/>
			<SectionFullWidth
				team={TEAM}
				id="our-team"
				label="Our Team"
				title="Our Team"
				image="/about-us.jpg"
				lead="Blank Canvas Capital is an experienced group of talented entrepreneurs pioneering the way forward across the South African financial."
				ctaLink="/team"
				ctaLabel="Get To Know Us"
				order="03"
			/>
			<SectionRight
				id="our-approach"
				label="Our Approach Section"
				eyebrow="Our Investment Approach"
				image="/approach.jpg"
				title="Our Approach"
				subtitle="Our take on business is as unique as your investment"
				lead="Blank Canvas Capital is an experienced group of talented entrepreneurs pioneering the way forward across the South African financial."
				ctaLink="/our-approach"
				ctaLabel="Our Approach"
				order="02"
			/>
			<SectionLeft
				id="get-in-touch"
				label="Get In Touch"
				eyebrow="Our investments, Your business"
				title="Get In Touch"
				image="/contact.jpg"
				subtitle="Have an idea? Want to talk about investments?"
				lead="Blank Canvas Capital is an experienced group of talented entrepreneurs pioneering the way forward across the South African financial."
				ctaLink="/contact-us"
				ctaLabel="Contact Us"
				order="05"
			/>
		</>
	)
}

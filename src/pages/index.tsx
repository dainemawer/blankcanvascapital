/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
 */

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Hero } from "@components/Hero";
import useSWR from "swr";
import fetcher from "@lib/fetcher";
import { SingleTeamProps } from "@components/TeamGrid/TeamGrid.types";

const TeamSection = dynamic(() => import("@components/Section/TeamSection"));
const PortfolioSection = dynamic(
	() => import("@components/Section/PortfolioSection")
);
const SimpleSection = dynamic(
	() => import("@components/Section/SimpleSection")
);
const ComplexSection = dynamic(
	() => import("@components/Section/ComplexSection")
);

export default function Home(): JSX.Element {
	const { data: teamData } = useSWR("/api/team", fetcher);
	const team = teamData as SingleTeamProps[];

	const subTitle = (
		<>
			<span style={{ display: "block" }}>Unleashing Potential</span>
			<span style={{ display: "block" }}>Creating Value</span>
			<span style={{ display: "block" }}>
				Partnering for Exceptional Returns
			</span>
		</>
	);

	const splitParagraph = (
		<>
			<span style={{ display: "block" }}>
				With a flexible investment approach across investment size, industry
				type and capital structure, we seek scalable businesses that can deliver
				superior returns on capital.
			</span>
			<br />
			<span style={{ display: "block" }}>
				Partner selection is key, and we prioritise backing strong entrepreneurs
				and business owners who share our vision and commitment to success. We
				engage fully in each opportunity, from initial investment to exit, and
				prioritize long-term partnerships with our investee businesses.
			</span>
		</>
	);

	return (
		<>
			<NextSeo title="Home" />
			<Hero
				subtitle="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way
				forward across the South African financial landscape."
				image="/bw-home.png"
				label="Aeroplane flying over buildings"
				logo="/bcc-logo.png"
				title="Every investment starts with an idea."
				variation="bw"
			/>
			<SimpleSection
				excerpt="Blank Canvas Capital is a value-adding investment firm dedicated
				to supporting outstanding entrepreneurs and business owners in growing successful
				businesses. We provide capital, expertise, deep strategic insights, and a
				vast network of industry connections, coupled with a different way of
				thinking, to help our investee businesses achieve their full
				potential and achieve exceptional returns for our investors."
				align="left"
				ctaLabel="Our Business"
				ctaLink="/about-us"
				eyebrow="Our Investments, Your Business"
				id="about-us"
				image="/about-us.jpg"
				index="01"
				subTitle={subTitle}
				title="About Us"
			/>
			<ComplexSection
				excerpt="A dynamic and collaborative team with a track record of delivering
				exceptional returns through extensive investment expertise and a partnership-oriented culture"
				backgroundColor="rgba(230,230,230, 0.3)"
				contentClassName="our-team"
				ctaLabel="Get To Know Us"
				ctaLink="/team"
				eyebrow="The People Behind The Investments"
				id="our-team"
				index="02"
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
				align="right"
				ctaLabel="Investment Approach"
				ctaLink="/investment-approach"
				excerpt={splitParagraph}
				eyebrow="Our Investment Approach"
				id="our-approach"
				image="/approach.jpg"
				index="03"
				subTitle="Incredible Investments | Incredible People"
				title="Our Approach"
			/>
			<PortfolioSection
				align="center"
				backgroundImage="/portfolio-bg.jpg"
				ctaLabel="Portfolio"
				ctaLink="/portfolio"
				excerpt="Discover our full investment portfolio of private equity and property investments."
				id="portfolio"
				index="04"
				subTitle="Our Investments"
				title="Investment Portfolio"
			/>
			<SimpleSection
				align="left"
				ctaLabel="Contact Us"
				ctaLink="/contact"
				eyebrow="Our Investments, Your Business"
				id="get-in-touch"
				image="/contact.jpg"
				index="05"
				subTitle="Have an idea? Want to talk about investments?"
				title="Get in Touch"
			/>
		</>
	);
}

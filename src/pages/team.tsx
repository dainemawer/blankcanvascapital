/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
 */

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Container } from "@components/Container";
import { Hero } from "@components/Hero";
import { Paragraph } from "@components/Paragraph";
import { StyledGrid, StyledArticle } from "../shared/content.styled";
import { UnorderedList } from "@components/Investments/Investments.styled";
import useSWR from "swr";
import fetcher from "@lib/fetcher";
import { SingleTeamProps } from "@components/TeamGrid/TeamGrid.types";

const Aside = dynamic(() => import("@components/Aside"), { ssr: false });
const ArticleHeader = dynamic(() => import("@components/ArticleHeader"), {
	ssr: false,
});
const TeamGrid = dynamic(() => import("@components/TeamGrid"), { ssr: false });
const SubHeading = dynamic(() => import("@components/SubHeading"), {
	ssr: false,
});

export default function Team(): JSX.Element {
	const { data, error } = useSWR("/api/team", fetcher);
	const team = data as SingleTeamProps[];

	if (error) return <div>Failed to load...</div>;

	return (
		<>
			<NextSeo title="Our Team" />
			<Hero
				image="/hero-team-formatted-optimised.jpg"
				label="Three Men Walking Up Stairs"
			/>
			<Container size="1440px">
				<StyledGrid>
					<Aside />
					<StyledArticle>
						<ArticleHeader
							eyebrow="The People Behind The Investments"
							title="Our Team"
						/>
						<Paragraph lead>
							Dynamic, collaborative, and results-driven team with a history of
							delivering exceptional returns
						</Paragraph>
						<Paragraph>
							Our team is comprised of a well networked group of individuals who
							bring a range of investment expertise and experience to the table.
							We pride ourselves on our collaborative and partnership-oriented
							culture, which is reflected in the way we work with each other and
							with our portfolio companies. With our extensive deal-making and
							deal running experience across various sectors, we are confident
							that we have the knowledge and expertise to identify and execute
							on high-value investment opportunities.
						</Paragraph>
						<SubHeading heading="What We Do" />
						<UnorderedList>
							<li>Origination of new investment opportunities</li>
							<li>
								Conducting financial, taxation and commercial due diligence
							</li>
							<li>Structuring of transactions</li>
							<li>Financial analysis of portfolio companies</li>
							<li>Investor relations with debt and equity funders</li>
							<li>Fund raising activities</li>
							<li>Serving as directors on portfolio companies’ boards</li>
							<li>
								Assisting with strategic opportunities and corporate finance
								activity
							</li>
						</UnorderedList>
						<SubHeading heading="Investment Team" />
						{team && <TeamGrid team={team} />}
					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	);
}

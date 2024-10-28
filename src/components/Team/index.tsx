"use client";

import dynamic from "next/dynamic";
import { Container } from "@components/Container";
import { Hero } from "@components/Hero";
import { Paragraph } from "@components/Paragraph";
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

export default function Team() {
	const { data, error } = useSWR("/api/team", fetcher);
	const team = data as SingleTeamProps[];

	if (error) return <div>Failed to load...</div>;

	return (
		<>
			<Hero
				image="/hero-team-formatted-optimised.jpg"
				label="Three Men Walking Up Stairs"
				logo={""}
				subtitle={""}
				title={""}
				variation={""}
			/>
			<Container size="1440px">
				<div className="grid md:grid-cols-[minmax(50px,150px)_minmax(min-content,1024px)] xl:grid-cols-[minmax(min-content,150px)_minmax(min-content,1024px)]">
					<Aside />
					<article className="mt-16 mb-8 md:col-span-1 md:mb-20">
						<ArticleHeader
							eyebrow="The People Behind The Investments"
							title="Our Team"
						/>
						<Paragraph lead>
							Dynamic, collaborative, and results-driven team with a history of
							delivering exceptional returns.
						</Paragraph>
						<Paragraph>
							Our team is comprised of a well-networked group of individuals who
							bring a range of investment expertise and experience to the table.
							We pride ourselves on our collaborative and partnership-oriented
							culture, which is reflected in the way we work with each other and
							with our portfolio companies. With our extensive deal-making and
							deal-running experience across various sectors, we are confident
							that we have the knowledge and expertise to identify and execute
							on high-value investment opportunities.
						</Paragraph>
						<SubHeading heading="What We Do" />
						<ul className="pl-4 space-y-2 list-none list-inside text-eyebrow">
							<li>Origination of new investment opportunities</li>
							<li>
								Conducting financial, taxation, and commercial due diligence
							</li>
							<li>Structuring of transactions</li>
							<li>Financial analysis of portfolio companies</li>
							<li>Investor relations with debt and equity funders</li>
							<li>Fundraising activities</li>
							<li>Serving as directors on portfolio companies’ boards</li>
							<li>
								Assisting with strategic opportunities and corporate finance
								activity
							</li>
						</ul>
						<SubHeading heading="Investment Team" />
						{team && <TeamGrid team={team} />}
					</article>
				</div>
			</Container>
		</>
	);
}

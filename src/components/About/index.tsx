"use client";

import dynamic from "next/dynamic";
import { Container } from "@components/Container";
import { Hero } from "@components/Hero";
import { Button } from "@components/Button";
import { Paragraph } from "@components/Paragraph";
import { Heading } from "@components/Heading";

const ArticleHeader = dynamic(() => import("@components/ArticleHeader"), {
	ssr: false,
});
const Aside = dynamic(() => import("@components/Aside"), { ssr: false });
const SubHeading = dynamic(() => import("@components/SubHeading"), {
	ssr: false,
});

export default function About() {
	return (
		<>
			<Hero
				image="/hero-about-optimized.jpg"
				label="Elevator in Department Store"
				logo={""}
				subtitle={""}
				title={""}
				variation={""}
			/>
			<Container size="1440px">
				<div className="grid md:grid-cols-[minmax(50px,150px)_minmax(min-content,1024px)] xl:grid-cols-[minmax(min-content,150px)_minmax(min-content,1024px)]">
					<Aside />
					<article className="mb-8 md:col-span-1 md:mb-20">
						<ArticleHeader
							eyebrow="Unleashing Potential | Creating Value | Partnering for Exceptional Returns"
							title="Our Investment Mission"
						/>
						<Paragraph color="gold" maxWidth="100%" lead>
							Welcome to Blank Canvas Capital, a value-adding investment firm...
						</Paragraph>
						<Paragraph>
							Blank Canvas Capital is a forward-thinking investment firm...
						</Paragraph>
						<Paragraph>
							Our investors represent some of the most respected pools of
							capital...
						</Paragraph>
						<SubHeading heading="What Sets Us Apart" />
						<Heading as="h4">Value-Driven Partnerships</Heading>
						<Paragraph>
							We prioritize backing entrepreneurs who share our core values...
						</Paragraph>
						<Heading as="h4">Flexible Investment Approach</Heading>
						<Paragraph>We offer a flexible investment approach...</Paragraph>
						<Heading as="h4">Value-Adding Support</Heading>
						<Paragraph>
							Our partnership extends beyond providing capital...
						</Paragraph>
						<div className="flex flex-col justify-start items-start">
							<Button href="/investment-approach">
								Our Investment Approach
							</Button>
						</div>
					</article>
				</div>
			</Container>
		</>
	);
}

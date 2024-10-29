import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Container } from "@components/Container";
import { Hero } from "@components/Hero";

export type PortfolioProps = {
	category?: string;
	date?: string;
	description?: string;
	hero?: string;
	id: string;
	logo?: string;
	position?: string;
	region?: string;
	sector?: string;
	status?: string;
	title?: string;
	url?: string;
};

const Aside = dynamic(() => import("@components/Aside"), { ssr: true });
const Portfolio = dynamic(() => import("@components/Portfolio"), { ssr: true });
const ArticleHeader = dynamic(() => import("@components/ArticleHeader"), {
	ssr: true,
});

export const metadata: Metadata = {
	title: "Portfolio",
	description:
		"Explore Blank Canvas Capital’s diverse investment portfolio, showcasing successful partnerships and growth across various industries. Discover our value-driven investments",
};

export default function Page() {
	return (
		<>
			<Hero
				image="/hero-portfolio.jpg"
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
							eyebrow="Our Investments | Our Passion"
							title="Investment Portfolio"
						/>
						<Portfolio />
					</article>
				</div>
			</Container>
		</>
	);
}

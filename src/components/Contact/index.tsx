"use client";

import dynamic from "next/dynamic";
import { Container } from "@components/Container";
import { Hero } from "@components/Hero";

const Aside = dynamic(() => import("@components/Aside"), { ssr: false });
const ArticleHeader = dynamic(() => import("@components/ArticleHeader"), {
	ssr: false,
});
const Form = dynamic(() => import("@components/Form"), { ssr: false });
const Sidebar = dynamic(() => import("@components/Sidebar"), { ssr: false });

export default function Contact() {
	return (
		<>
			<Hero
				image="/contact-us-hero.jpg"
				label="Elevator in Department Store"
				logo={""}
				subtitle={""}
				title={""}
				variation={""}
			/>
			<Container size="1440px">
				<div className="grid gap-10 md:grid-cols-contactMedium lg:grid-cols-contactLarge">
					<Aside />
					<article className="mt-16 mb-8 lg:col-start-2 lg:col-end-3 md:mb-20">
						<ArticleHeader
							eyebrow="Let's Talk About Investments"
							title="Get in Touch"
						/>
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_minmax(400px,1fr)]">
							<Form />
							<Sidebar />
						</div>
					</article>
				</div>
			</Container>
		</>
	);
}

"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Container } from "@components/Container";
import { Hero } from "@components/Hero";
import { useDisclosure } from "@mantine/hooks";
import fetcher from "@lib/fetcher";
import useSWR from "swr";

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

const ArticleHeader = dynamic(() => import("@components/ArticleHeader"), {
	ssr: false,
});
const Aside = dynamic(() => import("@components/Aside"), { ssr: false });
const Filters = dynamic(() => import("@components/Portfolio/Filters"), {
	ssr: false,
});
const Grid = dynamic(() => import("@components/Portfolio/Grid"), {
	ssr: false,
});
const PortfolioModal = dynamic(() => import("@components/Portfolio/Modal"), {
	ssr: false,
});

export default function PortfolioPage() {
	const { data, error } = useSWR("/api/portfolio", fetcher);
	const portfolio = data as PortfolioProps[];
	const [items, setItems] = useState<PortfolioProps[]>([]);
	const [active, setActive] = useState("Private Equity");
	const [mounted, setMounted] = useState(false);

	const [opened, { close, open }] = useDisclosure(false);
	const [modalContent, setModalContent] = useState<PortfolioProps>({
		id: "0",
		title: "",
		hero: "",
		logo: "",
		description: "",
		region: "",
		sector: "",
		date: "",
		status: "",
	});

	useEffect(() => {
		setMounted(true);
		portfolio &&
			setItems(portfolio.filter((item) => item.category === "Private Equity"));
	}, [portfolio]);

	const filterPrivateEquity = () => {
		setItems(portfolio.filter((item) => item.category === "Private Equity"));
		setActive("Private Equity");
	};

	const filterRealEstate = () => {
		setItems(portfolio.filter((item) => item.category === "Real Estate"));
		setActive("Real Estate");
	};

	const handleClick = (item: PortfolioProps) => {
		open();
		setModalContent(item);
	};

	if (error) return <div>Failed to load...</div>;

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
					<article className="mb-8 md:col-span-1 md:mb-20">
						<ArticleHeader
							eyebrow="Our Investments | Our Passion"
							title="Investment Portfolio"
						/>
						<Filters
							active={active}
							filterPrivateEquity={filterPrivateEquity}
							filterRealEstate={filterRealEstate}
						/>
						{items && (
							<Grid
								handleClick={handleClick}
								items={items.filter((item) => item.status === "current")}
								label="Current"
							/>
						)}
						{items && (
							<Grid
								handleClick={handleClick}
								items={items.filter((item) => item.status === "realised")}
								label="Realised"
							/>
						)}
					</article>
				</div>
			</Container>
			<PortfolioModal
				close={close}
				modalContent={modalContent}
				opened={opened}
			/>
		</>
	);
}

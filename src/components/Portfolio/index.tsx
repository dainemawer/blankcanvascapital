"use client";

import { FC } from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import fetcher from "@lib/fetcher";
import useSWR from "swr";
import { PortfolioProps } from "@components/Portfolio/Portfolio.types";

const Filters = dynamic(() => import("@components/Portfolio/Filters"), {
	ssr: false,
});
const Grid = dynamic(() => import("@components/Portfolio/Grid"), {
	ssr: false,
});

const Portfolio: FC = (): JSX.Element => {
	const { data, error } = useSWR("/api/portfolio", fetcher);
	const portfolio = data as PortfolioProps[];
	const [items, setItems] = useState<PortfolioProps[]>([]);
	const [active, setActive] = useState("Private Equity");
	const [mounted, setMounted] = useState(false);

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
	};

	if (error) return <div>Failed to load...</div>;

	return (
		<>
			<Filters
				active={active}
				filterPrivateEquity={filterPrivateEquity}
				filterRealEstate={filterRealEstate}
			/>
			<Grid
				handleClick={handleClick}
				items={items.filter((item) => item.status === "current")}
				label="Current"
			/>
			<Grid
				handleClick={handleClick}
				items={items.filter((item) => item.status === "realised")}
				label="Realised"
			/>
		</>
	);
};

export default Portfolio;

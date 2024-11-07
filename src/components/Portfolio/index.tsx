"use client";

import { FC } from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import fetcher from "@lib/fetcher";
import useSWR from "swr";
import { PortfolioProps } from "@components/Portfolio/Portfolio.types";
import { useDialog } from "@hooks/useDialog";
import { Dialog, DialogContent, DialogClose } from "@components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const Filters = dynamic(() => import("@components/Portfolio/Filters"), {
	ssr: true,
});
const Grid = dynamic(() => import("@components/Portfolio/Grid"), {
	ssr: false,
});

const Portfolio: FC = (): JSX.Element => {
	const { data, error } = useSWR("/api/portfolio", fetcher);
	const portfolio = data as PortfolioProps[];
	const [items, setItems] = useState<PortfolioProps[]>([]);
	const [active, setActive] = useState("Private Equity");

	const dialog = useDialog();
	const [selectedCard, setSelectedCard] = useState<PortfolioProps | null>(null);

	const isRealEstate = selectedCard?.category === "Real Estate";

	useEffect(() => {
		portfolio &&
			setItems(portfolio.filter((item) => item.category === "Private Equity"));
	}, [portfolio]);

	const handleCardClick = (item: PortfolioProps) => {
		setSelectedCard(item); // Set the clicked card’s content
		dialog.trigger(); // Open the dialog
	};

	const filterPrivateEquity = () => {
		setItems(portfolio.filter((item) => item.category === "Private Equity"));
		setActive("Private Equity");
	};

	const filterRealEstate = () => {
		setItems(portfolio.filter((item) => item.category === "Real Estate"));
		setActive("Real Estate");
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
				items={items.filter((item) => item.status === "current")}
				label="Current"
				onCardClick={handleCardClick}
			/>
			<Grid
				items={items.filter((item) => item.status === "realised")}
				label="Realised"
				onCardClick={handleCardClick}
			/>
			<Dialog {...dialog.props}>
				{selectedCard && (
					<DialogContent className="w-full max-w-[90%] max-h-[80%] overflow-y-scroll md:max-h-none md:max-w-[80%] lg:max-w-4xl p-0 border-0">
						<div className="sr-only">
							<DialogTitle>{selectedCard.title}</DialogTitle>
							<DialogDescription>{selectedCard.description}</DialogDescription>
						</div>
						<DialogClose asChild>
							<button
								aria-label="Close Dialog"
								className="absolute z-50 flex items-center justify-center w-10 h-10 rounded-full bg-gold top-4 right-4"
								type="button"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 8V2m0 6H2m6 0L1 1m7 15v6m0-6H2m6 0-7 7M16 8h6m-6 0V2m0 6 7-7m-7 15h6m-6 0v6m0-6 7 7"
										stroke="#fff"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
									/>
								</svg>
							</button>
						</DialogClose>
						{!isRealEstate && (
							<figure>
								<Image
									alt={selectedCard.title || "Dialog Hero Image"}
									className="object-cover object-bottom w-full h-52 sm:h-96"
									decoding="async"
									height="350"
									loading="lazy"
									src={selectedCard.hero || "/default-image.jpg"}
									width="980"
								/>
							</figure>
						)}

						<div className="flex flex-col items-center gap-4 px-6 pt-6 pb-8 md:pt-0 md:px-8 lg:p-8 sm:items-start lg:gap-16 lg:flex-row">
							<div className="relative w-full md:w-auto flex flex-col items-center justify-center lg:shrink-0 lg:after:content-[''] lg:after:block lg:after:h-full lg:after:w-[2px] lg:after:bg-gold lg:after:absolute lg:after:top-0 lg:after:-right-8">
								<Image
									className={`object-cover w-full lg:mb-4 ${
										isRealEstate
											? "w-full aspect-square h-[296px] md:w-[214px] md:h-[214px]"
											: "h-36 min-w-[214px]"
									}`}
									alt={selectedCard.title || "Dialog Logo"}
									decoding="async"
									height={137}
									loading="lazy"
									src={selectedCard.logo || "/default-image.jpg"}
									width={214}
								/>
								<p className="hidden text-center lg:block">
									<a
										className="button"
										href={selectedCard.url}
										rel="noopener noreferrer"
										target="_blank"
									>
										Visit Website
									</a>
								</p>
							</div>
							<div>
								<h3 className="mb-4 font-bold text-sectionHeading font-primary">
									{selectedCard.title}
								</h3>
								<p className="mb-4 text-address">{selectedCard.description}</p>
								<ul className="text-address">
									{selectedCard.region && (
										<li className="leading-loose">
											<strong>Region:</strong> {selectedCard.region}
										</li>
									)}
									{selectedCard.sector && (
										<li className="leading-loose">
											<strong>Sector:</strong> {selectedCard.sector}
										</li>
									)}
									{selectedCard.date && (
										<li className="leading-loose">
											<strong>Date:</strong> {selectedCard.date}
										</li>
									)}
									{selectedCard.status && (
										<li className="leading-loose capitalize">
											<strong>Status:</strong> {selectedCard.status}
										</li>
									)}
								</ul>
								<p className="flex items-start mt-4 text-center lg:hidden">
									<a
										className="button"
										href={selectedCard.url}
										rel="noopener noreferrer"
										target="_blank"
									>
										Visit Website
									</a>
								</p>
							</div>
						</div>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
};

export default Portfolio;

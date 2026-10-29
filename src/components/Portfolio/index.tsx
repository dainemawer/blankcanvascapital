"use client";

import { FC, SyntheticEvent } from "react";
import { useState } from "react";
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

const Portfolio: FC = (): React.JSX.Element => {
	const { data, error } = useSWR("/api/portfolio", fetcher);
	const portfolio = data as PortfolioProps[];
	const [active, setActive] = useState("Private Equity");
	const items = (portfolio ?? []).filter((item) => item.category === active);

	const dialog = useDialog();
	const [selectedCard, setSelectedCard] = useState<PortfolioProps | null>(null);
	// Frame follows the picture's own ratio, clamped so odd exports stay sane.
	const [heroRatio, setHeroRatio] = useState(2);

	const isRealEstate = selectedCard?.category === "Real Estate";
	const isRealisedRealEstate =
		selectedCard?.status === "realised" &&
		selectedCard?.title === "Ngoya Data Centers";

	const handleCardClick = (item: PortfolioProps) => {
		setSelectedCard(item); // Set the clicked card’s content
		setHeroRatio(2);
		dialog.trigger(); // Open the dialog
	};

	const handleHeroLoad = (event: SyntheticEvent<HTMLImageElement>) => {
		const { naturalHeight, naturalWidth } = event.currentTarget;
		if (naturalHeight) {
			setHeroRatio(Math.min(Math.max(naturalWidth / naturalHeight, 1.6), 2.4));
		}
	};

	const filterPrivateEquity = () => {
		setActive("Private Equity");
	};

	const filterRealEstate = () => {
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
					<DialogContent className="w-full max-w-[90%] max-h-[80%] overflow-y-auto no-scrollbar md:max-h-[85%] md:max-w-[80%] lg:max-w-4xl p-0 border-0">
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

						{!isRealEstate && !isRealisedRealEstate && (
							<figure
								className="relative w-full"
								style={{ aspectRatio: heroRatio }}
							>
								<Image
									alt={selectedCard.title || "Dialog Hero Image"}
									className="object-cover"
									decoding="async"
									onLoad={handleHeroLoad}
									sizes="(min-width: 1024px) 896px, 90vw"
									src={selectedCard.hero || "/default-image.jpg"}
									style={{ objectPosition: selectedCard.position || "center" }}
									fill
									priority
								/>
							</figure>
						)}

						<div className="flex flex-col items-center gap-4 px-6 pt-5 pb-6 md:px-8 md:py-6 sm:items-start md:gap-12 md:flex-row">
							<div className="relative w-full md:w-auto flex flex-col items-center justify-center md:shrink-0 md:after:content-[''] md:after:block md:after:h-full md:after:w-[2px] md:after:bg-gold md:after:absolute md:after:top-0 md:after:-right-6">
								{selectedCard.brands?.length ? (
									<ul className="flex flex-row justify-center gap-6 md:flex-col md:gap-8">
										{selectedCard.brands.map((brand) => (
											<li className="flex flex-col items-center" key={brand.title}>
												<Image
													alt={brand.title}
													className="object-cover w-[130px] h-[32px] md:w-[160px] md:h-[44px]"
													decoding="async"
													height={102}
													loading="lazy"
													src={brand.logo}
													width={160}
												/>
												<a
													className="mt-3 button"
													href={brand.url}
													rel="noopener noreferrer"
													target="_blank"
												>
													Visit Website
												</a>
											</li>
										))}
									</ul>
								) : (
									<>
										<Image
											className={`object-cover ${
												isRealEstate
													? "w-full md:mb-4 aspect-square h-[296px] md:w-[214px] md:h-[214px]"
													: "w-[214px] h-24 md:mb-1"
											}`}
											alt={selectedCard.title || "Dialog Logo"}
											decoding="async"
											height={137}
											loading="lazy"
											src={selectedCard.logo || "/default-image.jpg"}
											width={214}
										/>
										{!isRealEstate && selectedCard && selectedCard?.url && (
											<p className="hidden text-center md:block">
												<a
													className="button"
													href={selectedCard.url}
													rel="noopener noreferrer"
													target="_blank"
												>
													Visit Website
												</a>
											</p>
										)}
									</>
								)}
							</div>
							<div>
								<h3 className="mb-2 font-bold text-sectionHeading font-primary">
									{selectedCard.title}
								</h3>
								<p className="mb-3 whitespace-pre-line text-address">{selectedCard.description}</p>
								<ul className="flex flex-wrap text-address gap-x-6 gap-y-1">
									{selectedCard.region && (
										<li>
											<strong>Region:</strong> {selectedCard.region}
										</li>
									)}
									{selectedCard.sector && (
										<li>
											<strong>Sector:</strong> {selectedCard.sector}
										</li>
									)}
									{selectedCard.date && selectedCard.status !== "realised" && (
										<li>
											<strong>Date:</strong> {selectedCard.date}
										</li>
									)}
									{selectedCard.status && (
										<li className="capitalize">
											<strong>Status:</strong> {selectedCard.status}
										</li>
									)}
								</ul>
								{!selectedCard.brands?.length && (
									<p className="flex items-start mt-3 text-center md:hidden">
										<a
											className="button"
											href={selectedCard.url}
											rel="noopener noreferrer"
											target="_blank"
										>
											Visit Website
										</a>
									</p>
								)}
							</div>
						</div>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
};

export default Portfolio;

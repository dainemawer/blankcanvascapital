"use client";

import { FC } from "react";
import Image from "next/image";
import { Modal } from "@mantine/core";
import type { PortfolioModalProps } from "./Portfolio.types";

const PortfolioModal: FC<PortfolioModalProps> = ({
	close,
	modalContent,
	opened,
}): JSX.Element => {
	const isRealEstate: Boolean = modalContent.category === "Real Estate";

	return (
		<Modal.Root
			className="portfolio-modal"
			onClose={close}
			opened={opened}
			size="980px"
		>
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Body>
					<div className={`flex flex-col ${isRealEstate ? "pt-6" : ""}`}>
						<div>
							{isRealEstate ? (
								<>
									<button
										className="absolute top-4 right-4 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center"
										onClick={() => close()}
									>
										<svg
											fill="none"
											height="18"
											viewBox="0 0 24 24"
											width="18"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8 8V2M8 8H2M8 8L1 1M8 16V22M8 16H2M8 16L1 23M16 8H22M16 8V2M16 8L23 1M16 16H22M16 16V22M16 16L23 23"
												stroke="white"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
											/>
										</svg>
									</button>
									<div
										className={`flex flex-col p-6 md:flex-row ${
											isRealEstate ? "pt-6" : ""
										}`}
									>
										<figure className="flex-shrink-0 flex flex-col justify-center items-center md:pr-8 md:items-start">
											{modalContent.logo && (
												<Image
													alt={modalContent.title || "Default Alt Text"}
													decoding="async"
													height={137}
													loading="eager"
													src={modalContent.logo}
													width={214}
												/>
											)}
											{modalContent.url && (
												<p className="hidden md:flex">
													<a
														className="bg-white border border-gold text-gold py-2 px-4 uppercase font-semibold transition hover:bg-gold hover:text-white"
														href={modalContent.url}
														rel="noreferrer"
														target="_blank"
													>
														Visit Website
													</a>
												</p>
											)}
										</figure>
										<section className="flex-grow border-t border-copper pt-6 md:pt-0 md:border-l md:pl-8 md:border-t-0">
											<header className="mb-4">
												{modalContent.title && (
													<h3 className="text-lg font-bold">
														{modalContent.title}
													</h3>
												)}
											</header>
											{modalContent.description && (
												<p className="text-mineShaft text-sm leading-snug mb-4">
													{modalContent.description}
												</p>
											)}
											<ul className="list-none text-secondary text-sm space-y-2">
												{modalContent.region && (
													<li>
														<strong>Region: </strong>
														{modalContent.region}
													</li>
												)}
												{modalContent.sector && (
													<li>
														<strong>Sector: </strong>
														{modalContent.sector}
													</li>
												)}
												{modalContent.date && (
													<li>
														<strong>Date: </strong>
														{modalContent.date}
													</li>
												)}
												{modalContent.status && (
													<li style={{ textTransform: "capitalize" }}>
														<strong>Status: </strong>
														{modalContent.status}
													</li>
												)}
											</ul>
										</section>
									</div>
								</>
							) : (
								<>
									<figure className="relative">
										{modalContent.hero && (
											<Image
												alt={modalContent.title || "Default Alt Text"}
												className="w-full object-cover object-bottom"
												decoding="async"
												height={300}
												loading="lazy"
												src={modalContent.hero}
												style={{ objectPosition: modalContent.position }}
												width={1140}
											/>
										)}
										<button
											className="absolute top-4 right-4 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center"
											onClick={() => close()}
										>
											<svg
												fill="none"
												height="18"
												viewBox="0 0 24 24"
												width="18"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M8 8V2M8 8H2M8 8L1 1M8 16V22M8 16H2M8 16L1 23M16 8H22M16 8V2M16 8L23 1M16 16H22M16 16V22M16 16L23 23"
													stroke="white"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
												/>
											</svg>
										</button>
									</figure>
									<div className="p-6">
										<figure className="flex-shrink-0 flex flex-col justify-center items-center md:pr-8 md:items-start">
											{modalContent.logo && (
												<Image
													alt={modalContent.title || "Default Alt Text"}
													decoding="async"
													height={137}
													loading="eager"
													src={modalContent.logo}
													width={214}
												/>
											)}
											{modalContent.url && (
												<p className="hidden md:flex">
													<a
														className="bg-white border border-gold text-gold py-2 px-4 uppercase font-semibold transition hover:bg-gold hover:text-white"
														href={modalContent.url}
														rel="noreferrer"
														target="_blank"
													>
														Visit Website
													</a>
												</p>
											)}
										</figure>
										<section className="flex-grow border-t border-copper pt-6 md:pt-0 md:border-l md:pl-8 md:border-t-0">
											<header className="mb-4">
												{modalContent.title && (
													<h3 className="text-lg font-bold">
														{modalContent.title}
													</h3>
												)}
											</header>
											{modalContent.description && (
												<p className="text-mineShaft text-sm leading-snug mb-4">
													{modalContent.description}
												</p>
											)}
											<ul className="list-none text-secondary text-sm space-y-2">
												{modalContent.region && (
													<li>
														<strong>Region: </strong>
														{modalContent.region}
													</li>
												)}
												{modalContent.sector && (
													<li>
														<strong>Sector: </strong>
														{modalContent.sector}
													</li>
												)}
												{modalContent.date && (
													<li>
														<strong>Date: </strong>
														{modalContent.date}
													</li>
												)}
												{modalContent.status && (
													<li style={{ textTransform: "capitalize" }}>
														<strong>Status: </strong>
														{modalContent.status}
													</li>
												)}
											</ul>
										</section>
									</div>
								</>
							)}
						</div>
					</div>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	);
};

export default PortfolioModal;

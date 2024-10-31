"use client";

import { FC } from "react";
import Image from "next/image";
import type { PortfolioModalProps } from "./Portfolio.types";

const PortfolioModal: FC<PortfolioModalProps> = ({
	modalContent,
}): JSX.Element => {
	const isRealEstate: Boolean = modalContent.category === "Real Estate";

	return (
		<div className={`flex flex-col ${isRealEstate ? "pt-6" : ""}`}>
			<div>
				{isRealEstate ? (
					<>
						<button
							aria-label="Close Modal"
							className="absolute flex items-center justify-center w-10 h-10 text-white rounded-full top-4 right-4 bg-gold"
							onClick={() => close()}
							type="button"
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
							<figure className="flex flex-col items-center justify-center flex-shrink-0 md:pr-8 md:items-start">
								{modalContent.logo && (
									<Image
										alt={modalContent.title || "Default Alt Text"}
										className="w-full"
										decoding="async"
										height={137}
										loading="eager"
										src={modalContent.logo}
										width={214}
									/>
								)}
								{modalContent.url && (
									<p className="hidden w-full md:flex">
										<a
											className="px-4 py-2 font-semibold uppercase transition bg-white border rounded text-eyebrow border-gold text-gold hover:bg-gold hover:text-white"
											href={modalContent.url}
											rel="noreferrer"
											target="_blank"
										>
											Visit Website
										</a>
									</p>
								)}
							</figure>
							<section className="flex-grow pt-6 border-t border-copper md:pt-0 md:border-l md:pl-8 md:border-t-0">
								<header className="mb-4">
									{modalContent.title && (
										<h3 className="text-lg font-bold">{modalContent.title}</h3>
									)}
								</header>
								{modalContent.description && (
									<p className="mb-4 text-sm leading-snug text-mineShaft">
										{modalContent.description}
									</p>
								)}
								<ul className="space-y-2 text-sm list-none text-secondary">
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
									className="object-cover object-bottom w-full"
									decoding="async"
									height={300}
									loading="lazy"
									src={modalContent.hero}
									style={{ objectPosition: modalContent.position }}
									width={1140}
								/>
							)}
							<button
								aria-label="Close Modal"
								className="absolute flex items-center justify-center w-10 h-10 text-white rounded-full top-4 right-4 bg-gold"
								onClick={() => close()}
								type="button"
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
						<div className="flex flex-col justify-center p-6 lg:flex-row">
							<figure className="flex flex-col items-center justify-center flex-shrink-0 md:pr-8 md:items-start">
								{modalContent.logo && (
									<Image
										alt={modalContent.title || "Default Alt Text"}
										className="w-full"
										decoding="async"
										height={137}
										loading="eager"
										src={modalContent.logo}
										width={214}
									/>
								)}
								{modalContent.url && (
									<p className="items-center justify-center hidden w-full md:flex">
										<a
											className="px-4 py-2 font-semibold uppercase transition bg-white border rounded text-eyebrow border-gold text-gold hover:bg-gold hover:text-white"
											href={modalContent.url}
											rel="noreferrer"
											target="_blank"
										>
											Visit Website
										</a>
									</p>
								)}
							</figure>
							<section className="flex-grow pt-6 border-t border-copper md:pt-0 md:border-l md:pl-8 md:border-t-0">
								<header className="mb-4">
									{modalContent.title && (
										<h3 className="font-bold text-sectionHeading font-primary">
											{modalContent.title}
										</h3>
									)}
								</header>
								{modalContent.description && (
									<p className="mb-4 text-sm leading-snug text-mineShaft">
										{modalContent.description}
									</p>
								)}
								<ul className="space-y-2 text-sm list-none text-secondary">
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
	);
};

export default PortfolioModal;

"use client";

import { FC } from "react";
import Image from "next/image";
import { PortfolioProps } from "../../app/portfolio/page";

type PortfolioCardProps = {
	handleClick: (item: PortfolioProps) => void;
	item: PortfolioProps;
};

export const PortfolioCard: FC<PortfolioCardProps> = ({
	handleClick,
	item,
}): JSX.Element => {
	const isRealEstate = item.category === "Real Estate";

	return (
		<article
			className={`flex justify-center items-start bg-white border-b-10 border-gold shadow-lg box-border relative p-4 z-10 ${
				isRealEstate ? "h-[250px] md:h-[270px]" : "h-[210px] md:h-[270px]"
			}`}
			id={item.id}
		>
			{item.title && (
				<figure className="flex flex-1 m-0">
					<button
						className="bg-transparent border-none cursor-pointer block flex-1 p-0 grayscale transition-all duration-300 ease-in-out hover:grayscale-0 focus:grayscale-0"
						onClick={() => handleClick(item)}
					>
						<Image
							alt={item.title}
							className="w-full h-[168px] object-cover pointer-events-none"
							decoding="async"
							height={164}
							loading="lazy"
							src={item.logo || "/path/to/default/logo.png"}
							width={256}
						/>
						{isRealEstate && (
							<h4 className="text-gold font-primary font-semibold mt-3">
								{item.title}
							</h4>
						)}
					</button>
				</figure>
			)}
		</article>
	);
};

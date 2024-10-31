"use client";

import { FC } from "react";
import { PortfolioCard } from "@components/Cards/PortfolioCard";
import type { PortfolioGridProps } from "./Portfolio.types";

const Grid: FC<PortfolioGridProps> = ({
	items,
	label,
	onCardClick,
}): JSX.Element => {
	return (
		<section className="relative pb-8 mt-20 lg:mt-20 lg:pb-16 before:content-[''] after:content-[''] after:bg-gold after:block after:bottom-0 after:h-[2px] after:absolute after:left-[-3rem] before:bg-gold before:block before:h-full before:absolute before:w-[2px] before:top-0 before:left-[-3rem] after:w-grid-after after:max-w-grid-after">
			<h4 className="absolute text-eyebrow left-0 top-[-44px] uppercase font-bold text-base lg:left-[-6.5rem] lg:bg-white lg:px-4 lg:py-2 lg:rotate-[-90deg] lg:top-6">
				{label}
			</h4>
			<div className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 lg:gap-9">
				{items.map((item) => (
					<div key={item.id}>
						<PortfolioCard
							handleClick={onCardClick}
							item={item}
							key={item.id}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Grid;

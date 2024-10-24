"use client";

import { FC } from "react";
import type { PortfolioFilterProps } from "./Portfolio.types";

const Filters: FC<PortfolioFilterProps> = ({
	active,
	filterPrivateEquity,
	filterRealEstate,
}): JSX.Element => {
	return (
		<div className="flex flex-wrap items-center mt-12 lg:mt-12">
			<span className="block w-full mb-2 text-base font-semibold uppercase lg:w-auto lg:inline-block lg:mb-0">
				Filter:
			</span>
			<a
				className={`block bg-white border border-gold text-gold font-semibold uppercase py-3 px-4 rounded transition hover:bg-gold hover:text-white cursor-pointer ${
					active === "Private Equity" ? "bg-gold text-white" : ""
				}`}
				onClick={filterPrivateEquity}
			>
				Private Equity
			</a>
			<a
				className={`block ml-4 bg-white border border-gold text-gold font-semibold uppercase py-3 px-4 rounded transition hover:bg-gold hover:text-white cursor-pointer ${
					active === "Real Estate" ? "bg-gold text-white" : ""
				}`}
				onClick={filterRealEstate}
			>
				Real Estate
			</a>
		</div>
	);
};

export default Filters;

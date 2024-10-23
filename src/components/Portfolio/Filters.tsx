"use client";

import { FC } from "react";
import {
	StyledPortfolioFilters,
	StyledPortfolioLabel,
	StyledButton,
} from "./Portfolio.styled";
import type { PortfolioFilterProps } from "./Portfolio.types";

const Filters: FC<PortfolioFilterProps> = ({
	active,
	filterPrivateEquity,
	filterRealEstate,
}): JSX.Element => {
	return (
		<StyledPortfolioFilters>
			<StyledPortfolioLabel>Filter:</StyledPortfolioLabel>
			<StyledButton
				className={active === "Private Equity" ? "active" : ""}
				onClick={filterPrivateEquity}
			>
				Private Equity
			</StyledButton>
			<StyledButton
				className={active === "Real Estate" ? "active" : ""}
				onClick={filterRealEstate}
			>
				Real Estate
			</StyledButton>
		</StyledPortfolioFilters>
	);
};

export default Filters;

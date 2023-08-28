import { PortfolioProps } from '../../pages/portfolio';

export type PortfolioModalProps = {
	close: () => void,
	modalContent: PortfolioProps,
	opened: boolean
}

export type PortfolioFilterProps = {
	active: string,
	filterPrivateEquity: () => void,
	filterRealEstate: () => void,
}

export type PortfolioGridProps = {
	handleClick: (item: PortfolioProps) => void,
	items: PortfolioProps[],
	label: string
}

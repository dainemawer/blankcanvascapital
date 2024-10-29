export type PortfolioProps = {
  category?: string;
  date?: string;
  description?: string;
  hero?: string;
  id: string;
  logo?: string;
  position?: string;
  region?: string;
  sector?: string;
  status?: string;
  title?: string;
  url?: string;
};

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

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
	modalContent: PortfolioProps,
}

export type PortfolioFilterProps = {
	active: string,
	filterPrivateEquity: () => void,
	filterRealEstate: () => void,
}

export type PortfolioGridProps = {
	onCardClick: (item: PortfolioProps) => void,
	items: PortfolioProps[],
	label: string
}

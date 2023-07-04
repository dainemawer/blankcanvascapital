/*
 * Quote
 *
 * Quote Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { StyledPortfolioGrid, StyledPortfolioGridHeading } from './Portfolio.styled';
import { PortfolioCard } from '@components/Cards/PortfolioCard';
import type { PortfolioGridProps } from './Portfolio.types';

const Grid: FC<PortfolioGridProps> = ({ handleClick, items, label }): JSX.Element => {

	if (items.length === 0) {
		return null;
	}

	return (
		<StyledPortfolioGrid>
			<StyledPortfolioGridHeading>{label}</StyledPortfolioGridHeading>
			{items.map((item) => (
				<PortfolioCard
					handleClick={handleClick}
					item={item}
					key={item.id}
				/>
			))}
		</StyledPortfolioGrid>
	);
}

export default Grid;

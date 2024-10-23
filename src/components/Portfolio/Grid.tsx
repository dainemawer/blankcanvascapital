/*
 * Quote
 *
 * Quote Component
 *
 * @returns {JSX.Element}
 */

import { FC } from "react";
import {
	StyledPortfolioGrid,
	StyledPortfolioGridHeading,
	StyledPortfolioGridWrap,
} from "./Portfolio.styled";
import { PortfolioCard } from "@components/Cards/PortfolioCard";
import type { PortfolioGridProps } from "./Portfolio.types";
import { AnimatePresence, motion } from "framer-motion";

const Grid: FC<PortfolioGridProps> = ({
	handleClick,
	items,
	label,
}): JSX.Element => {
	return (
		<StyledPortfolioGrid>
			<StyledPortfolioGridHeading>{label}</StyledPortfolioGridHeading>
			<StyledPortfolioGridWrap>
				<AnimatePresence mode="sync">
					{items.map((item, i) => (
						<motion.div
							initial={{ opacity: 0 }}
							key={item.id}
							transition={{ duration: 0.1, delay: i * 0.1 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1 }}
						>
							<PortfolioCard
								handleClick={handleClick}
								item={item}
								key={item.id}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</StyledPortfolioGridWrap>
		</StyledPortfolioGrid>
	);
};

export default Grid;

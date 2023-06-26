/*
 * Portfolio Card
 *
 * Portfolio Card Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image';
import { PortfolioProps } from '../../pages/portfolio';

import styled from '@emotion/styled';
import { colors } from '@theme/colors'
import { breakpoints } from '@theme/breakpoints'

type PortfolioCard = {
	handleClick: (item: PortfolioProps) => void;
	item: PortfolioProps;
}

const StyledArticle = styled.article`
	align-items: center;
	background-color: ${colors.white};
	border-bottom: 10px solid ${colors.gold};
	box-shadow: 0px 4px 68px 7px rgba(0, 0, 0, 0.07);
	box-sizing: border-box;
	display: flex;
	height: 210px;
	justify-content: center;
	padding: 2rem;
	position: relative;
	z-index: 10;

	${breakpoints.md} {
		height: 270px;
	}
`;

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: block;
	height: 100%;
	padding: 0;
	transition: opacity 0.3s ease-in-out;
	width: 100%;

	&:hover,
	&:focus {
		opacity: 0.4;
	}
`;

const StyledFigure = styled.figure`
	margin: 0;
`

export const PortfolioCard: FC<PortfolioCard> = ({
	handleClick,
	item,
}): JSX.Element => {
	return (
		<StyledArticle id={item.id} >
			{item.title && (
				<StyledFigure>
					<StyledButton onClick={() => handleClick(item)}>
						<Image
							alt={item.title}
							decoding="async"
							height={137}
							loading="lazy"
							src={item.logo}
							width={214}
						/>
					</StyledButton>
				</StyledFigure>
			)}
		</StyledArticle>
	);
}

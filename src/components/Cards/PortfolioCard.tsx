"use client";

import { FC } from "react";
import Image from "next/image";
import { PortfolioProps } from "../../pages/portfolio";

import styled from "@emotion/styled";
import { fonts } from "@theme/fonts";
import { colors } from "@theme/colors";
import { breakpoints } from "@theme/breakpoints";

type PortfolioCard = {
	handleClick: (item: PortfolioProps) => void;
	item: PortfolioProps;
};

const StyledArticle = styled.article`
	align-items: flex-start;
	background-color: ${colors.white};
	border-bottom: 10px solid ${colors.gold};
	box-shadow: 0px 4px 68px 7px rgba(0, 0, 0, 0.07);
	box-sizing: border-box;
	display: flex;
	height: 210px;
	justify-content: center;
	padding: 1rem;
	position: relative;
	z-index: 10;

	&.is-real-estate {
		height: 250px;

		${breakpoints.md} {
			height: 270px;
		}
	}

	${breakpoints.md} {
		align-items: center;
		height: 270px;
	}
`;

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: block;
	filter: grayscale(100%);
	flex: 1;
	padding: 0;
	transition: filter 0.3s ease-in-out;

	&:hover,
	&:focus {
		filter: grayscale(0);
	}

	& img {
		height: 168px;
		object-fit: cover;
		pointer-events: none;
		width: 100%;
	}
`;

const StyledFigure = styled.figure`
	display: flex;
	flex: 1;
	margin: 0;
`;

const StyledTitle = styled.h4`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-weight: 600;
	margin: 0.875rem 0 0 0;
`;

export const PortfolioCard: FC<PortfolioCard> = ({
	handleClick,
	item,
}): JSX.Element => {
	const isRealEstate = item.category === "Real Estate";

	return (
		<StyledArticle className={isRealEstate && "is-real-estate"} id={item.id}>
			{item.title && (
				<StyledFigure>
					<StyledButton onClick={() => handleClick(item)}>
						<Image
							alt={item.title}
							decoding="async"
							height={164}
							loading="lazy"
							src={item.logo}
							width={256}
						/>
						{isRealEstate && <StyledTitle>{item.title}</StyledTitle>}
					</StyledButton>
				</StyledFigure>
			)}
		</StyledArticle>
	);
};

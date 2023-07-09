import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';
import { motion } from 'framer-motion';

const StyledPortfolioFilters = styled.div`
	align-items: center;
	display: flex;
	margin-top: 3.125rem;
`;

const StyledPortfolioLabel = styled.span`
	font-family: ${fonts.primary};
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.7;
	margin-right: 1rem;
	text-transform: uppercase;
`;

const StyledButton = styled.button`
	background-color: ${colors.white};
	border: 1px solid ${colors.gold};
	border-radius: 5px;
	color: ${colors.gold};
	cursor: pointer;
	display: block;
	font-family: ${fonts.primary};
	font-size: 1rem;
	font-weight: 600;
	padding: 0.75rem 1.125rem;
	text-transform: uppercase;
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

	&:hover,
	&:focus {
		background-color: ${colors.gold};
		color: ${colors.white};
	}

	&.active {
		background-color: ${colors.gold};
		color: ${colors.white};
	}

	& + button {
		margin-left: 1rem;
	}
`;

const StyledPortfolioGridHeading = styled.h4`
	font-family: ${fonts.primary};
	font-weight: 600;
	font-size: 1.125rem;
	left: 0;
	margin: 0;
	position: absolute;
	top: -44px;
	text-transform: uppercase;

	${breakpoints.lg} {
		background-color: ${colors.white};
		left: -6.5rem;
		padding: 0.5rem 1rem;
		top: 1.5rem;
		transform: rotate(-90deg);
		transform-origin: center;
		text-transform: uppercase;
	}
`;

const StyledPortfolioGridWrap = styled(motion.div)`
	display: grid;
	grid-gap: 1.625rem;
	grid-template-columns: 1fr;

	${breakpoints.xs} {
		grid-template-columns: repeat(2, 1fr);
	}

	${breakpoints.lg} {
		grid-gap: 2.25rem;
		grid-template-columns: repeat(3, 270px);
	}
`;

const StyledPortfolioGrid = styled.section`
	margin-top: 4.875rem;
	padding-bottom: 2rem;
	position: relative;

	${breakpoints.xs} {
		grid-template-columns: repeat(2, 1fr);
	}

	${breakpoints.lg} {
		margin-top: 4.875rem;
		padding-bottom: 4rem;
	}

	&::before {
		background-color: ${colors.copper};
		display: block;
		height: 100%;
		left: -3rem;
		position: absolute;
		top: 0;
		width: 2px;

		${breakpoints.lg} {
			content: '';
		}
	}

	&:last-of-type::before {
		left: unset;
		right: 0;
	}

	&::after {
		background-color: ${colors.copper};
		bottom: 0;
		display: block;
		height: 2px;
		left: -3rem;
		max-width: calc(1206px + 3rem);
		position: absolute;
		width: calc(100% + 3rem);

		${breakpoints.lg} {
			content: '';
		}
	}

	&:last-of-type ${StyledPortfolioGridHeading} {
		left: 0;

		${breakpoints.lg} {
			left: unset;
			right: -3.75rem;
		}
	}
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1.5rem 2rem 1.5rem;

	${breakpoints.md} {
		flex-direction: row;
		padding: 0 2rem 3rem 2rem;
	}
`;

const StyledModalFigure = styled.figure`
	display: none;

	${breakpoints.md} {
		display: block;
		flex-shrink: 0;
		margin: 0;
	}
`
const StyledModalSection = styled.section`

	${breakpoints.md} {
		border-left: 2px solid ${colors.copper};
		padding-left: 3rem;
	}
`;

const StyledModalList = styled.ul`
	font-family: ${fonts.secondary};
	font-size: 0.875rem;
	line-height: 2;
	list-style-type: none;
	margin: 0 0 2rem 0;
	padding: 0;
`;

const StyledModalDescription = styled.p`
	color: ${colors.mineShaft};
	font-size: 1rem;
	font-family: ${fonts.secondary};
	line-height: 1.5;
	margin: 0 0 2rem 0;
`;

const StyledModalContent = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledCoverImage = styled.figure`
	margin: 0;

	& > img {
		height: 200px;
		object-fit: cover;
		width: 1140px;

		${breakpoints.md} {
			height: 400px;
		}
	}
`

const StyledModalContentHeader = styled.header`
	display: block;
	padding: 0 1.25rem;

	${breakpoints.md} {
		margin-left: calc(90px - 1.25rem);
	}

	& h3 {
		font-family: ${fonts.primary};
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.25;
		margin: 2rem 0;
	}
`;

const StyledCloseButton = styled.button`
	align-items: center;
	background-color: ${colors.gold};
	border: 0;
	border-radius: 50%;
	color: ${colors.white};
	cursor: pointer;
	display: flex;
	height: 50px;
	justify-content: center;
	position: absolute;
	right: 1rem;
	top: 1rem;
	width: 50px;
`;


export {
	StyledPortfolioFilters,
	StyledPortfolioLabel,
	StyledButton,
	StyledPortfolioGrid,
	StyledPortfolioGridHeading,
	StyledContent,
	StyledCloseButton,
	StyledModalContentHeader,
	StyledCoverImage,
	StyledModalContent,
	StyledModalDescription,
	StyledModalList,
	StyledModalSection,
	StyledModalFigure,
	StyledPortfolioGridWrap
};

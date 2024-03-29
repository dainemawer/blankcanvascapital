import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';
import { motion } from 'framer-motion';

const StyledPortfolioFilters = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: wrap;

	${breakpoints.lg} {
		margin-top: 3.125rem;
	}
`;

const StyledPortfolioLabel = styled.span`
	display: block;
	font-family: ${fonts.primary};
	font-size: var(--font-size-base);
	font-style: normal;
	font-weight: 600;
	line-height: 1.7;
	margin: 0 1rem 0.5rem 0;
	text-transform: uppercase;
	width: 100%;

	${breakpoints.lg} {
		display: inline-block;
		margin-bottom: 0;
		width: auto;
	}
`;

const StyledButton = styled.a`
	background-color: ${colors.white};
	border: 1px solid ${colors.gold};
	border-radius: 5px;
	color: ${colors.gold};
	cursor: pointer;
	display: block;
	font-family: ${fonts.primary};
	font-size: var(--font-size-base);
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

	& + a {
		margin-left: 1rem;
	}
`;

const StyledPortfolioGridHeading = styled.h4`
	font-family: ${fonts.primary};
	font-weight: 600;
	font-size: var(--font-size-base);
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



const StyledModalFigure = styled.figure`
	display: flex;
	justify-content: center;
	margin: 0;

	&:not(.private-equity) {
		align-items: center;
		display: flex;
	}

	&.real-estate {
		flex-shrink: 0;

		& img {
			width: 100%;

			${breakpoints.sm} {
				width: auto;
			}
		}
	}

	${breakpoints.sm} {
		justify-content: flex-start;
	}

	${breakpoints.md} {
		align-items: center;
		flex-direction: column;
		flex-shrink: 0;
		margin: 0;
		padding-right: 2rem;
	}
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1.5rem 2rem 1.5rem;

	&.real-estate {
		flex-direction: column;

		${breakpoints.sm} {
			flex-direction: row;
		}
	}

	${breakpoints.md} {
		flex-direction: row;
		padding: 2rem 2rem 3rem 2rem;
	}
`;

const StyledModalSection = styled.section`

	& a {
		display: block;

		${breakpoints.md} {
			display: none;
		}
	}

	${breakpoints.sm} {
		padding-left: 1.6rem;
	}

	${breakpoints.md} {
		border-left: 2px solid ${colors.copper};
		padding-left: 2rem;
	}
`;

const StyledModalList = styled.ul`
	font-family: ${fonts.secondary};
	font-size: var(--font-size-sm);
	line-height: 2;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const StyledModalDescription = styled.p`
	color: ${colors.mineShaft};
	font-size: var(--font-size-sm);
	font-family: ${fonts.secondary};
	line-height: 1.5;
	margin: 0 0 1rem 0;
`;

const StyledModalContent = styled.div`
	display: flex;
	flex-direction: column;

	&.real-estate {
		padding-top: 1.5rem;
	}
`;

const StyledCoverImage = styled.figure`
	margin: 0;

	& > img {
		height: 200px;
		object-fit: cover;
		object-position: bottom;
		width: 1140px;

		${breakpoints.sm} {
			height: 350px;
		}
	}
`

const StyledModalContentHeader = styled.header`
	display: block;

	& h3 {
		font-family: ${fonts.primary};
		font-size: var(--font-size-lg);
		font-weight: 700;
		line-height: 1.25;
		margin: 1rem 0;

		${breakpoints.sm} {
			margin: 0 0 1rem 0;
		}
	}
`;

const StyledButtonContainerDesktop = styled.p`
	display: flex;

	${breakpoints.md} {
		display: none;
	}
`;

const StyledButtonContainerMobile = styled.p`
	display: none;

	${breakpoints.md} {
		display: flex;
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
	height: 40px;
	justify-content: center;
	position: absolute;
	right: 1rem;
	top: 1rem;
	width: 40px;
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
	StyledPortfolioGridWrap,
	StyledButtonContainerDesktop,
	StyledButtonContainerMobile
};

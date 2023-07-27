import styled from '@emotion/styled';
import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';

import type {
	StyledContentProps,
	StyledIconProps,
	StyledHeaderProps,
	StyledIconContainerProps,
	StyledContainerProps,
	StyledSectionProps,
	StyledParagraphProps
} from './Investments.types';

const Header = styled.header<StyledHeaderProps>`
	text-align: ${props => props.textAlign === 'center' ? 'center' : 'left'};

	${breakpoints.md} {
		text-align: ${props => props.textAlign || 'left'};
	}
`;

const Content = styled.div<StyledContentProps>`
	${props => props.align === 'right' && `
		display: flex;
		justify-content: flex-start;

		${breakpoints.md} {
			justify-content: flex-end;
		}
	`}
`;

const Eyebrow = styled.p`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: 1rem;
	font-weight: 600;
	margin: 0 0 0.875rem 0;
	text-transform: uppercase;

	${breakpoints.md} {
		font-size: 1.125rem;
		margin: 0;
	}
`;

const Title = styled.h3`
	font-family: ${fonts.primary};
	font-weight: 700;
	font-size: 2.5rem;
	line-height: 1.2;
	margin: 0 0 1.25rem 0;

	${breakpoints.md} {
		font-size: 4rem;
		margin: 2rem 0 2rem 0;
	}
`;

const IconElement = styled.span<StyledIconProps>`
	align-items: center;
	background-color: ${props => props.bgColor || '#424242'};
	border-radius: 50%;
	display: flex;
	height: 3.5rem;
	justify-content: center;
	position: static;
	top: -1.55rem;
	width: 3.5rem;
	z-index: 99;

	${props => props.align === 'left' && `
		left: 0;
	`}

	${props => props.align === 'right' && `
		right:0;
	`}

	${breakpoints.md} {
		position: absolute;
	}
`;

const Section = styled.section<StyledSectionProps>`
	color: ${props => props.bgColor === '#292929' ? colors.white : 'inherit'};
	background-color: ${props => props.bgColor || colors.white};
	padding: ${props => props.bgColor ? '4rem' : '2.5rem'} 0;
	position: relative;

	&:nth-child(2) {
		padding-bottom: 0;

		${breakpoints.md} {
			padding-bottom: 2rem;
		}
	}

	& p:not(.eyebrow):not(.intro):not(.conclusion):not(.figure), & h3, & ul {
		color: ${props => props.bgColor === '#424242' ? colors.white : 'inherit'};
	}

	${breakpoints.md} {
		padding: ${props => props.bgColor ? '10rem' : '6.5rem'} 0;
	}

`;

const IconContainer = styled.div<StyledIconContainerProps>`
	margin-bottom: 1.75rem;
	position: relative;

	${breakpoints.md} {
		margin-bottom: 0;
	}

	${props => props.align === 'left' && `

		${breakpoints.md} {
			border-right: 2px solid ${colors.gold};
			margin-right: 1.75rem;
		}
	`}

	${props => props.align === 'right' && `

		${breakpoints.md} {
			border-left: 2px solid ${colors.gold};
			margin-left: 1.75rem;
		}
	`}

	&::after {
		background-color: ${colors.gold};
		border-radius: 50%;
		display: block;
		height: 1rem;
		top: 0;
		position: absolute;
		width: 1rem;

		${props => props.align === 'left' && `
			right: -9px;
		`}

		${props => props.align === 'right' && `
			left: -9px;
		`}

		${breakpoints.md} {
			content: '';
		}
	}
`;

const Container = styled.div<StyledContainerProps>`
	margin: 0 auto;
	max-width: ${props => props.maxWidth || '1140px'};
	padding: 0 1.5rem;

	${props => props.grid && props.align === 'left' && `
		display: grid;
		grid-template-columns: 1fr;

		${breakpoints.md} {
			grid-template-columns: 110px 1fr;
		}
	`}

	${props => props.grid && props.align === 'right' && `
		display: grid;
		grid-template-columns: 1fr;

		${breakpoints.md} {
			grid-template-columns: 1fr 110px;
		}
	`}

	&.with-bg {
		display: flex;
		flex-direction: column-reverse;

		${props => props.grid && props.align === 'center' && `
			& p {
				margin: 0 auto;
				text-align: center;
			}
		`}

		${breakpoints.md} {
			${props => props.grid && props.align === 'center' ? `
				display: flex;
			` : `
				display: grid;
			`};
		}

		${IconContainer} {
			${props => props.grid && props.align === 'center' && `
				display: flex;
				min-height: 3.5rem;
				justify-content: center;
			`}
		}
	}
`;

const SubGrid = styled.div`
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: 1fr;

	${breakpoints.md} {
		grid-template-columns: repeat(4, minmax(150px, 195px));
	}

	${breakpoints.lg} {
		grid-gap: 1.75rem;
		grid-template-columns: repeat(4, 1fr);
	}
`;

const SubGridItem = styled.article`
	border-bottom: 3px solid ${colors.gold};
	box-sizing: border-box;
	padding-top: 4rem;
	position: relative;

	&:nth-of-type(1) {
		margin-top: 1.5rem;

		${breakpoints.md} {
			margin-top: 0;
		}
	}

	& span {
		position: absolute;
		top: 0;
	}

	& h5 {
		font-family: ${fonts.primary};
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0;
	}

	& p {
		color: ${colors.tin};
		font-family: ${fonts.secondary};
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.7;
	}
`;

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;

	& p:first-child {

		${breakpoints.md} {
			margin-right: 4rem;
		}
	}

	${breakpoints.sm} {
		flex-direction: row;
		justify-content: space-between;
		max-width: 1060px;
	}
`;

const StyledParagraph = styled.p<StyledParagraphProps>`
	color: ${props => props.color || colors.black};
	font-family: ${props => props.font || fonts.secondary};
	font-size: 1rem;
	font-weight: ${props => props.weight || '400'};
	line-height: 1.7;
	margin-top: 0;
	max-width: 100%;
	text-align: left;

	&.figure {
		font-size: 3rem;
	}

	&:not(:last-of-type) {
		margin-bottom: 1.75rem;
	}

	& > a[href] {
		display: inline-block;

		${breakpoints.md} {
			margin-top: 2rem;
		}
	}

	${breakpoints.lg} {
		font-size: ${props => props.size || '1.125rem'};
		text-align: ${props => props.align || 'left'};
	}

	${breakpoints.md} {
		max-width: ${props => props.maxWidth || '100%'};
	}
`

const UnorderedList = styled.ul<StyledContentProps>`
	font-family: ${fonts.secondary};
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 2;
	margin: 0;
	padding-left: 1rem;

	${breakpoints.md} {
		${props => props.align === 'right' && `
			direction: rtl;
			padding-right: 1rem;
			text-align: right;
		`}
	}

	& li {
		margin-bottom: 0.5rem;

		${breakpoints.md} {
			margin-bottom: 0;
		}
	}

	${breakpoints.md} {
		line-height: 2;
	}
`;

const UnorderedListBlock = styled.ul`
	font-family: ${fonts.secondary};
	padding-left: 1rem;

	& li {
		color: ${colors.gold};
		font-size: 0.875rem;
		font-weight: 700;
		line-height: 2.5;
		text-align: left;
	}

	${breakpoints.md} {
		max-width: 776px;
		padding-right: 0;
	}
`;

export {
	Header,
	Container,
	Content,
	Eyebrow,
	Title,
	IconElement,
	IconContainer,
	Section,
	SubGrid,
	SubGridItem,
	StyledParagraph,
	UnorderedList,
	UnorderedListBlock,
	Wrap,
};

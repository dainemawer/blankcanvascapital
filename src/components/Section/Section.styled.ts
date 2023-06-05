import styled from '@emotion/styled';
import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';
import { StyledProps } from './Section.types';

const StyledSection = styled.section<StyledProps>`
	background-color: ${props => props.background && 'rgba(230, 230, 230, 0.35)'};
`

const StyledArticle = styled.article<StyledProps>`
	display: grid;
	grid-template-areas: "${props => props.align === 'left' ? "divider heading" : "heading divider"}"
						 "${props => props.align === 'left' ? "divider content" : "content divider"}";
	grid-template-columns:
						${props => props.align === 'left' ? '64px 1fr' : '1fr 64px'};
	max-width: 1280px;
	margin: 0 auto;
	padding: 7rem 1.25rem;
	position: relative;
`;

const StyledHeading = styled.h2<StyledProps>`
	grid-area: heading;
	grid-row: 1;
	font-family: ${fonts.primary};
	font-size: 4rem;
	font-weight: 800;
	line-height: 1;
	margin-top: 0;
	text-align: ${props => props.align};
`;

const StyledSubHeading = styled.h3`
	font-family: ${fonts.primary};
	font-size: 2rem;
	font-weight: 700;
	line-height: 1.2;
	margin-bottom: 1.375rem;
`;

const StyledLead = styled.p`
	color: #777777;
	font-family: ${fonts.secondary};
	font-size: 1.125rem;
	font-weight: 300;
	line-height: 1.5;
	margin-bottom: 2.5rem;
`;

const StyledFigure = styled.figure`
	margin: 0;

	& img {
		display: block;
		object-fit: cover;
		height: 582px;
		width: 522px;
	}
`;

const StyledWrap = styled.div<StyledProps>`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: ${props => props.align === 'left' ? 'flex-start' : 'flex-end'};
	text-align: ${props => props.align};
`;

const StyledContent = styled.div<StyledProps>`
	grid-area: content;
	grid-row: 2;
	max-width: 500px;
	margin-left: ${props => props.align === 'left' ? '6rem' : '0'};
	margin-right: ${props => props.align === 'right' ? '6rem' : '0'};
`;

const StyledDivider = styled.div`
	grid-area: divider;
	position: relative;

	&::after {
		content: "";
		background-color: ${colors.gold};
		display: block;
		height: 80%;
		width: 2px;
		position: absolute;
		right: 27px;
	}
`;

const StyledEyebrow = styled.span<StyledProps>`
	display: block;
	bottom: 19%;
	color: ${colors.gold};
	font-family: ${fonts.primary};
	${props => props.align === 'left' ? 'left: 8px;' : 'right: 8px;'};
    transform: ${props => props.align === 'left' ? ' rotate(270deg)' : 'rotate(90deg)'};
    transform-origin:  ${props => props.align};
	text-transform: uppercase;
	position: absolute;
	white-space: nowrap;
`;

const StyledOrder = styled.span<StyledProps>`
	display: block;
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: 1.25rem;
	font-weight: 700;
	${props => props.align === 'left' ? 'left: 0;' : 'right: -8px;'};
	line-height: 1;
	text-transform: uppercase;
	position: absolute;
`;

export { StyledArticle, StyledSection, StyledHeading, StyledSubHeading, StyledLead, StyledFigure, StyledWrap, StyledContent, StyledDivider, StyledEyebrow, StyledOrder}

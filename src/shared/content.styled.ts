import styled from '@emotion/styled';
import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { StyledGridProps } from './styles.types';

const StyledHeader = styled.header`
	margin-top: 2.5rem;

	${breakpoints.md} {
		margin-top: 4rem;
	}
`;

const StyledHeading = styled.h1`
	color: ${colors.grey};
	font-family: ${fonts.primary};
	font-size: 3rem;
	font-weight: 700;
	line-height: 1.2;
	margin: 0 0 32px;

	${breakpoints.md} {
		font-size: 4rem;
	}
`;

const StyledEyebrow = styled.p`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.5;
	text-transform: uppercase;

	${breakpoints.md} {
		font-size: 1.125rem;
	}
`;

const StyledArticle = styled.article`
	margin-bottom: 4rem;

	${breakpoints.md} {
		grid-column: 2 / 3;
		margin-bottom: 5.625rem;
	}
`;

const StyledParagraph = styled.p`
	color: #2b2b2b;
	font-family: ${fonts.secondary};
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.7;
	margin-bottom: 1.25rem;
	max-width: 1024px;

	${breakpoints.md} {
		font-size: 1.25rem;
		margin-bottom: 1.75rem;
	}

	& a {
		color: ${colors.gold};
		font-weight: 700;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
		transition: color 0.3s ease-in-out;

		&:hover,
		&:focus {
			color: ${colors.black};
		}
	}
`;

const StyledLead = styled.p`
	color: ${colors.dove};
	font-family: ${fonts.secondary};
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.7;
	margin-bottom: 1.75rem;
	max-width: 920px;
	padding-bottom: 2rem;
	position: relative;

	${breakpoints.md} {
		font-size: 1.25rem;
		padding-bottom: 4rem;
	}

	&::after {
		background-color: ${colors.gold};
		bottom: 0;
		content: "";
		display: block;
		height: 6px;
		left: 0;
		position: absolute;
		width: 104px;
	}
`;

const StyledSubHeading = styled.h2`
	color: ${colors.black};
	font-family: ${fonts.primary};
	font-size: 1.25rem;
	font-weight: 600;
	line-height: 1.7;
	margin: 1.5rem 0;
	position: relative;
	text-transform: uppercase;

	${breakpoints.md} {
		margin: 2rem 0;
	}

	&::after {
		background-color: ${colors.copper};
		content: "";
		display: block;
		height: 2px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		z-index: -1;

		${breakpoints.md} {
			width: 100%;
		}
	}
`;

const StyledSubHeadingSpan = styled.span`
	background-color: ${colors.white};
	padding-right: 1.5rem;
	z-index: 1;
`;

const StyledBlockQuote = styled.blockquote`
	margin-left: 1.5rem;
	max-width: 520px;
	padding-left: 2rem;
	position: relative;

	${breakpoints.md} {
		margin-left: 3rem;
		padding-left: 2.25rem;
	}

	&::before {
		background-color: ${colors.copper};
		content: "";
		height: 100px;
		left: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 3px;

		${breakpoints.md} {
			height: 160px;
		}
	}
`;

const StyledBlockQuoteText = styled.p`
	font-family: ${fonts.secondary};
	font-size: 1.25rem;
	font-style: italic;
	font-weight: 700;
	letter-spacing: -0.03em;
	line-height: 1.4;

	${breakpoints.md} {
		font-size: 2rem;
	}
`;

const StyledGrid = styled.div<StyledGridProps>`
	display: grid;

	${breakpoints.md} {
		grid-template-columns:
			minmax(50px, 150px) minmax(min-content,
				${props => props.maxWidth || "1024px"});
	}

	@media (min-width: 1280px) {
		grid-template-columns: minmax(min-content, 150px)
		minmax(min-content, ${props => props.maxWidth || "1024px"});
	}
`;

const StyledCite = styled.cite`
	color: ${colors.black};
	font-family: ${fonts.primary};
	font-size: 1rem;
	font-weight: 500;

	${breakpoints.md} {
		font-size: 1.25rem;
	}
`;

const StyledAside = styled.aside`
	position: relative;

	${breakpoints.md} {
		padding: 0 3rem 0 0;
	}
`;

const StyledLine = styled.div`
	background-color: ${colors.copper};
	display: block;
	height: 2px;
	left: 0;
	position: relative;
	top: 1.5rem;
	width: 140px;

	${breakpoints.md} {
		left: 50%;
		top: 175px;
		transform: translateX(-50%);
		width: 100%;
	}
`;

export {
	StyledHeader,
	StyledHeading,
	StyledEyebrow,
	StyledArticle,
	StyledParagraph,
	StyledLead,
	StyledSubHeading,
	StyledSubHeadingSpan,
	StyledBlockQuote,
	StyledBlockQuoteText,
	StyledGrid,
	StyledCite,
	StyledAside,
	StyledLine
}

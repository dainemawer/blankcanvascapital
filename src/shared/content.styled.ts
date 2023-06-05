import styled from '@emotion/styled';
import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';

const StyledHeader = styled.header`
	margin-top: 5.625rem;
`;

const StyledHeading = styled.h1`
	color: #424242;
	font-family: ${fonts.primary};
	font-size: 64px;
	font-weight: 700;
	line-height: 1.2;
	margin: 0 0 32px 0;
`;

const StyledEyebrow = styled.p`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: 18px;
	font-weight: 600;
	line-height: 1.5;
	text-transform: uppercase;
`;

const StyledArticle = styled.article`
	grid-column: 2 / 3;
	margin-bottom: 5.625rem;
`;

const StyledParagraph = styled.p`
	color: #2b2b2b;
	font-family: ${fonts.secondary};
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.7;
	margin-bottom: 1.75rem;
	max-width: 1024px;

	& a {
		color: ${colors.gold};
		font-weight: 700;
		text-decoration-thickness: 2px;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color 0.3s ease-in-out;

		&:hover,
		&:focus {
			color: ${colors.black};
		}
	}
`;

const StyledLead = styled.p`
	color: #777777;
	font-family: ${fonts.secondary};
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.7;
	margin-bottom: 1.75rem;
	max-width: 920px;
	position: relative;
	padding-bottom: 60px;

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
	color: #000000;
	font-family: ${fonts.primary};
	font-size: 1.25rem;
	font-weight: 600;
	line-height: 1.7;
	margin: 2rem 0;
	position: relative;
	text-transform: uppercase;

	&::after {
		background-color: ${colors.copper};
		content: "";
		height: 2px;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
		z-index: -1;
	}
`;

const StyledSubHeadingSpan = styled.span`
	background-color: ${colors.white};
	padding-right: 1.5rem;
	z-index: 1;
`;

const StyledBlockQuote = styled.blockquote`
	max-width: 520px;
	padding-left: 2.25rem;
	position: relative;

	&::before {
		background-color: ${colors.copper};
		content: "";
		height: 160px;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 3px;
		position: absolute;
	}
`;

const StyledBlockQuoteText = styled.p`
	font-family: ${fonts.secondary};
	font-size: 2rem;
	font-style: italic;
	font-weight: 700;
	letter-spacing: -0.03em;
	line-height: 1.4;
`;

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: minmax(min-content, 193px) minmax(min-content, 1024px);
`;

const StyledCite = styled.cite`
	color: #000000;
	font-family: ${fonts.primary};
	font-size: 1.25rem;
	font-weight: 500;
`;

const StyledAside = styled.aside`
	position: relative;
	padding: 0 3rem;
`;

const StyledLine = styled.div`
	background-color: ${colors.copper};
	height: 2px;
	left: 50%;
	transform: translateX(-50%);
	top: 175px;
	width: 140px;
	position: relative;
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

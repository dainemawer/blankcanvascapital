import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';

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

const StyledCite = styled.cite`
	color: ${colors.black};
	font-family: ${fonts.primary};
	font-size: 1rem;
	font-weight: 500;

	${breakpoints.md} {
		font-size: 1.25rem;
	}
`;

export { StyledBlockQuote, StyledBlockQuoteText, StyledCite };

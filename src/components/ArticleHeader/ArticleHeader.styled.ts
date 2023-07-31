import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';

const StyledHeader = styled.header`
	margin-top: 2.5rem;

	${breakpoints.md} {
		margin-top: 4rem;
	}
`;

const StyledHeading = styled.h1`
	color: ${colors.grey};
	font-family: ${fonts.primary};
	font-size: var(--font-size-xxl);
	font-weight: 700;
	line-height: 1.2;
	margin: 0 0 1.25rem;

	${breakpoints.md} {
		margin: 0 0 2rem;
	}
`;

const StyledEyebrow = styled.p`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: var(--font-size-base);
	font-weight: 600;
	line-height: 1.5;
	text-transform: uppercase;
`;

export { StyledHeader, StyledHeading, StyledEyebrow };

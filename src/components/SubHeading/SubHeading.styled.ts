import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';

const StyledSubHeading = styled.h2`
	color: ${colors.black};
	font-family: ${fonts.primary};
	font-size: var(--font-size-md);
	font-weight: 600;
	line-height: 1.7;
	margin: 1.5rem 0;
	position: relative;
	text-transform: uppercase;

	${breakpoints.sm} {
		margin: 3.5rem 0;
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

export { StyledSubHeading, StyledSubHeadingSpan };

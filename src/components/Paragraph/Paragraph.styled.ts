import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';

type StyledLeadProps = {
	hasLine?: boolean;
}

const StyledLead = styled.p<StyledLeadProps>`
	color: ${colors.dove};
	font-family: ${fonts.secondary};
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.7;
	margin-bottom: 1.75rem;
	max-width: 920px;
	${props => props.hasLine && `padding-bottom: 2rem;`}
	position: relative;

	${breakpoints.md} {
		font-size: 1.25rem;
		${props => props.hasLine && `padding-bottom: 4rem;`}
	}

	&::after {
		background-color: ${colors.gold};
		bottom: 0;
		${props => props.hasLine && `content: ""`}
		display: block;
		height: 6px;
		left: 0;
		position: absolute;
		width: 104px;
	}
`;

const StyledParagraph = styled.p`
	color: ${colors.mineShaft};
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

export { StyledParagraph, StyledLead };

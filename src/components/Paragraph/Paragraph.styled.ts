import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';

type StyledLeadProps = {
	color?: string;
	hasLine?: boolean;
	maxWidth?: string;
}

const StyledLead = styled.p<StyledLeadProps>`
	color: ${props => props.color === 'gold' ? colors.gold : colors.dove};
	font-family: ${fonts.secondary};
	font-size: var(--font-size-base);
	font-weight: 400;
	line-height: 1.7;
	margin-bottom: 1.75rem;
	${props => props.maxWidth ? props.maxWidth : '970px'};
	${props => props.hasLine && `padding-bottom: 2rem;`}
	position: relative;

	${breakpoints.md} {
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
	font-size: var(--font-size-base);
	font-weight: 400;
	line-height: 1.7;
	margin-bottom: 1.25rem;
	max-width: 1024px;

	${breakpoints.md} {
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

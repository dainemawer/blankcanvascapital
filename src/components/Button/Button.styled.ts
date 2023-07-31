import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';

const StyledButton = styled.button`
	align-self: flex-start;
	background-color: ${colors.white};
	border: 2px solid ${colors.gold};
	border-radius: 5px;
	color: ${colors.gold};
	cursor: pointer;
	display: inline-block;
	font-family: ${fonts.primary};
	font-size: var(--font-size-base);
	font-weight: 600;
	padding: 0.875rem 1.55rem;
	text-transform: uppercase;
	transition: all 0.3s ease-in-out;

	&:hover,
	&:focus {
		background-color: ${colors.gold};
		color: ${colors.white};
	}
`;

export { StyledButton }

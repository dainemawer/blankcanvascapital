import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';

const StyledButton = styled.button`
	align-self: flex-start;
	background-color: ${colors.white};
	border: 1px solid ${colors.gold};
	border-radius: 5px;
	color: ${colors.gold};
	display: inline-block;
	font-family: ${fonts.primary};
	font-size: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	transition: all 0.3s ease-in-out;
	padding: 0.875rem 1.55rem;

	&:hover,
	&:focus {
		background-color: ${colors.gold};
		color: ${colors.white};
	}
`;

export { StyledButton }

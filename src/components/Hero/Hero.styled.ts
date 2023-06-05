import styled from '@emotion/styled';
import { colors } from '@theme/colors';

const StyledHero = styled.section`
	max-height: 668px;
	margin-top: 3.75rem;
`;

const StyledImage = styled.figure`
	margin: 0;
	position: relative;

	@media (min-width: 1500px) {
		padding: 0 1.25rem;
	}

	& img {
		height: 668px;
		border-radius: 20px 0px;
		max-width: 100%;
		object-fit: cover;
	}

	&::after {
		background-color: ${colors.copper};
		content: "";
		height: 140px;
		position: absolute;
		right: -0.5rem;
		top: 0;
		width: 2px;
	}
`;

export { StyledHero, StyledImage }

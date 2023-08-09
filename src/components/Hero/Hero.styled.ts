import styled from '@emotion/styled';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';

type StyledHeroProps = {
	natural: boolean;
}

const StyledHero = styled.section`
	margin-top: 1rem;
`;

const StyledImage = styled.figure<StyledHeroProps>`
	margin: 0;
	position: relative;

	& img {
		border-radius: 20px 0;
		max-width: 100%;
		object-fit: cover;
		object-position: right;

		${breakpoints.sm} {
			object-position: initial;
		}
	}

	&::after {
		@media (min-width: 1440px) {
			background-color: ${colors.copper};
			content: "";
			height: 140px;
			position: absolute;
			right: -10px;
			top: 0;
			width: 2px;
		}
	}
`;

export { StyledHero, StyledImage }

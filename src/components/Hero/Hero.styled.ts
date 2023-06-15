import styled from '@emotion/styled';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';

const StyledHero = styled.section`
	margin-top: 2rem;

	${breakpoints.md} {
		max-height: 668px;
	}
`;

const StyledImage = styled.figure`
	margin: 0;
	position: relative;

	& img {
		border-radius: 20px 0;
		height: 334px;
		max-width: 100%;
		object-fit: cover;

		${breakpoints.md} {
			height: 480px;
		}

		@media (min-width: 1440px) {
			height: 668px;
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

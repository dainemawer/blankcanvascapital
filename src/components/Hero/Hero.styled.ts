import styled from '@emotion/styled';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';

type StyledHeroProps = {
	natural: boolean;
}

const StyledHero = styled.section`
	margin-top: 1rem;

	${breakpoints.md} {
		max-height: 600px;
	}
`;

const StyledImage = styled.figure<StyledHeroProps>`
	margin: 0;
	position: relative;

	& img {
		border-radius: 20px 0;
		height: ${props => props.natural ? '470px' : '334px'};
		max-width: 100%;
		object-fit: cover;

		${breakpoints.sm} {
			height: ${props => props.natural ? '375px' : '334px'};
		}

		${breakpoints.md} {
			height: ${props => props.natural ? 'auto' : '480px'};
		}

		@media (min-width: 1440px) {
			height: ${props => props.natural ? 'auto' : '600px'};
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

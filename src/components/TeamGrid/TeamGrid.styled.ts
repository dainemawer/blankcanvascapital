import styled from '@emotion/styled';
import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';

const StyledFigure = styled.figure`
	margin: 0;

	& img {
		border-radius: 30px;
		height: auto;
		object-fit: cover;
		width: 100%;

		${breakpoints.md} {
			height: 300px;
			width: 300px;
		}
	}
`;

const StyledArticle = styled.article`
	box-sizing: border-box;
`;

const StyledTeamMember = styled.h3`
	color: ${colors.black};
	font-family: ${fonts.primary};
	font-size: 1.1rem;
	font-weight: 600;
	line-height: 1;
	margin: 1rem 0 0;
	text-transform: uppercase;

	${breakpoints.lg} {
		font-size: 1.25rem;
	}
`;

const StyledTitle = styled.h4`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.7;
	margin: 0;
	text-transform: uppercase;

	${breakpoints.lg} {
		font-size: 1.125rem;
	}
`;

const StyledHeader = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

const StyledSection = styled.section`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	margin: 2.5rem 0 0;

	@media (min-width: 660px) {
		grid-template-columns: repeat(3, 1fr);
	}

	${breakpoints.lg} {
		grid-gap: 4rem;
		margin: 4.5rem 0 0;
	}
`;

export { StyledArticle, StyledFigure, StyledHeader, StyledTeamMember, StyledTitle, StyledSection }

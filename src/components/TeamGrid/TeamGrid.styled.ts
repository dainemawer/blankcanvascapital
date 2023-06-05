import styled from '@emotion/styled';
import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';

const StyledFigure = styled.figure`
	margin: 0;

	& img {
		border-radius: 30px;
		height: 296px;
		object-fit: cover;
		width: 296px;
	}
`;

const StyledTeamMember = styled.h4`
	color: #000000;
	font-family: ${fonts.primary};
	font-size: 1.25rem;
	font-weight: 600;
	line-height: 1;
	margin: 1rem 0 0 0;
	text-transform: uppercase;
`;

const StyledTitle = styled.h5`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.7;
	margin: 0;
	text-transform: uppercase;
`;

const StyledHeader = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

const StyledSection = styled.section`
	display: grid;
	grid-gap: 4rem;
	grid-template-columns: repeat(3, 1fr);
	margin: 4.5rem 0 0 0;
`;

export { StyledFigure, StyledHeader, StyledTeamMember, StyledTitle, StyledSection }

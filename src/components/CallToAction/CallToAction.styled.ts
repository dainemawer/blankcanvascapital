import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';

const StyledSection = styled.section`
	background-color: ${colors.grey};
	padding: 8rem 0;
`

const StyledSectionContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	max-width: 1024px;
	padding: 0 1.25rem;
`

const StyledEyebrow = styled.p`
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-weight: 600;
	font-size: var(--font-size-md);
	line-height: 1.5;
	margin: 0;
	text-align: center;
	text-transform: uppercase;
`;

const StyledCTATitle = styled.h3`
	color: ${colors.white};
	font-family: ${fonts.primary};
	font-weight: 700;
	font-size: var(--font-size-xl);
	line-height: 1.2;
	margin: 1rem 0 1.25rem 0;
	text-align: center;
`

const StyledDescription = styled.p`
	color: ${colors.silverChalice};
	font-family: ${fonts.secondary};
	font-weight: 400;
	font-size: var(--font-size-md);
	line-height: 1.5;
	margin: 0 0 3rem 0;
	text-align: center;
`

export { StyledSection, StyledSectionContainer, StyledEyebrow, StyledCTATitle, StyledDescription}

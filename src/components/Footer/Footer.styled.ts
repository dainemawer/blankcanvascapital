import styled from '@emotion/styled';
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { breakpoints } from '@theme/breakpoints';

const StyledFooter = styled.div`
	background-color: ${colors.aluminum};
	padding: 2.5rem 0;

	${breakpoints.md} {
		padding: 3.75rem 0;
	}
`;

const StyledAddress = styled.address`
	font-family: ${fonts.primary};
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5;
	margin-left: 1.8rem;
	text-transform: uppercase;
`;

const StyledFooterCard = styled.div`
	align-items: flex-start;
	display: flex;
	justify-content: flex-start;
`;

export { StyledFooter, StyledAddress, StyledFooterCard };

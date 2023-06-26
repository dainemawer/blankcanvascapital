import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';

const StyledAddress = styled.address`
	border-top: 2px solid ${colors.copper};
	margin-bottom: 1.25rem;
	padding-top: 1.5rem;

	&:not(:last-child) {
		margin-top: 3rem;
	}
`;

const StyledAddressHeading = styled.h2`
	font-family: ${fonts.primary};
	font-style: normal;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.7;
	margin: 0;
	text-transform: uppercase;
`

const StyledAddressLocation = styled.p`
	font-family: ${fonts.primary};
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2;
	margin-bottom: 2rem;
`;

const StyledAddressDetail = styled.p`
	font-family: ${fonts.primary};
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
`;

const StyledSidebar = styled.aside`
	display: flex;
	flex-direction: column;
	margin-top: 0;

	& img {
		display: none;

		@media (min-width: 1120px) {
			display: block;
		}
	}

	@media (min-width: 1120px) {
		border-left: 2px solid ${colors.copper};
		padding-left: 2.5rem;
	}
`;

export {
	StyledAddress,
	StyledAddressHeading,
	StyledAddressLocation,
	StyledAddressDetail,
	StyledSidebar
}

import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';

const StyledAside = styled.aside`
	position: relative;

	${breakpoints.md} {
		padding: 0 2rem 0 0;
	}
`;

const StyledLine = styled.div`
	background-color: ${colors.copper};
	display: block;
	height: 2px;
	left: 0;
	position: relative;
	top: 1.5rem;
	width: 140px;

	${breakpoints.md} {
		left: 50%;
		top: 150px;
		transform: translateX(-50%);
		width: 100%;
	}
`;

export { StyledAside, StyledLine };

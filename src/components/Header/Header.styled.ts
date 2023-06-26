import styled from '@emotion/styled'
import { breakpoints } from '@theme/breakpoints';

const StyledHeader = styled.header`
	padding: 1rem 0;

	${breakpoints.md} {
		padding: 1.25rem 0;
	}

	& a {
		line-height: 0;
	}
`;

const StyledHeaderWrap = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-start;

	& button {
		margin-right: 0.5rem;

		${breakpoints.md} {
			display: none;
		}
	}

	${breakpoints.md} {
		justify-content: space-between;
	}
`;

export { StyledHeader, StyledHeaderWrap };

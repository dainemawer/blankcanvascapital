import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';

type StyledHeaderProps = {
	sticky: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
	background-color: rgba(255, 255, 255, 0.90);
	padding: 1rem 0;
	position: sticky;
	top: 0;
	transition: all 0.5s ease-in-out;
	z-index: 100;

	${breakpoints.md} {
		padding: 1.25rem 0;
	}

	${props => props.sticky && `
		backdrop-filter: blur(8px);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		padding: 0.5rem 0;

		${breakpoints.md} {
			padding: 0.5rem 0;
		}
	`}

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

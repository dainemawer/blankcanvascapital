import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';
import styled from '@emotion/styled'

const StyledList = styled.ul`
	display: flex;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const StyledListItem = styled.li`
	line-height: 1.5;

	&:not(:last-child) {
		margin-right: 1.5rem;
	}

	& a {
		color: ${colors.black};
		font-family: ${fonts.primary};
		font-weight: 500;
		font-size: 0.875rem;
		position: relative;
	}

	& a::before {
		content: '';
		background: ${colors.gold};
		display: block;
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 3px;
		transition: all 0.3s ease-in-out;
	}

	& a:hover,
	& a:focus {
		background-position: 0;
	}

	& a:hover::before,
	& a:focus::before,
	& a.active::before {
		width: 100%;
	}
`;

export { StyledList, StyledListItem }

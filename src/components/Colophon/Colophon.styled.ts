
import styled from '@emotion/styled';
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { breakpoints } from '@theme/breakpoints';

const StyledColophon = styled.div`
	background-color: ${colors.grey};
	border-bottom: 4px solid  ${colors.gold};
	color: ${colors.white};
	font-family: ${fonts.primary};
	padding: 1.25rem 0;
`;

const StyledCopyright = styled.p`
	font-size: var(--font-size-sm);
	line-height: 1.5;
	margin: 0 0 0.5rem 0;

	${breakpoints.md} {
		margin: 0;
	}
`;

const StyledWrapper = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${breakpoints.md} {
		flex-direction: row;
	}
`;

const StyledList = styled.ul`
	display: flex;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const StyledListItem = styled.li`
	line-height: 1.5;

	& a {
		color: ${colors.white};
		font-size: var(--font-size-sm);
		position: relative;
	}

	& a::before {
		background: ${colors.gold};
		bottom: -4px;
		content: '';
		display: block;
		height: 2px;
		left: 0;
		position: absolute;
		transition: all 0.3s ease-in-out;
		width: 0;
	}

	& a:hover,
	& a:focus {
		background-position: 0;
	}

	& a:hover::before,
	& a:focus::before {
		width: 100%;
	}

	&:first-of-type::after {
		content: '|';
		padding: 0 0.5rem;
	}
`;

export {
	StyledColophon,
	StyledWrapper,
	StyledList,
	StyledListItem,
	StyledCopyright
}

import { fonts } from '@theme/fonts';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const StyledList = styled.ul`
	display: none;
	list-style-type: none;
	margin: 0;
	padding: 0;

	${breakpoints.md} {
		display: flex;
	}
`;

const StyledDrawerList = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const StyledListItemDesktop = styled.li`
	line-height: 1.5;

	&:not(:last-child) {
		margin-right: 1.5rem;
	}

	& a {
		color: ${colors.black};
		font-family: ${fonts.primary};
		font-size: var(--font-size-sm);
		font-weight: 500;
		position: relative;
	}

	& a::before {
		background: ${colors.gold};
		bottom: -4px;
		content: '';
		display: block;
		height: 3px;
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
	& a:focus::before,
	& a.active::before {
		width: 100%;
	}
`;

const StyledListItem = styled(motion.li)`
	line-height: 2;
	text-align: center;

	& a {
		color: ${colors.black};
		font-family: ${fonts.primary};
		font-size: var(--font-size-md);
		font-weight: 500;
		position: relative;
	}

	& a::before {
		background: ${colors.gold};
		bottom: -4px;
		content: '';
		display: block;
		height: 3px;
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
	& a:focus::before,
	& a.active::before {
		width: 100%;
	}
`;

export { StyledList, StyledListItem, StyledListItemDesktop, StyledDrawerList }

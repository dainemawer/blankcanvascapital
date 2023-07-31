import styled from '@emotion/styled';
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { breakpoints } from '@theme/breakpoints';
import { StyledLabelProps } from '../../shared/styles.types';

const StyledLabel = styled.label<StyledLabelProps>`
	align-items: ${props => props.vertical ? 'column' : 'center'};
	display: flex;
	flex-direction: ${props => props.vertical ? 'column' : 'row'};
	font-family: ${fonts.primary};
	font-style: normal;
	width: 100%;

	${breakpoints.md} {
		width: 80%;
	}

	& > span {
		${props => props.vertical ?
		`border-bottom: 2px solid ${colors.copper};` :
		`border-right: 2px solid ${colors.copper};`
	};
		display: inline-block;
		font-size: var(--font-size-base);
		font-weight: 600;
		min-width: 70px;
		${props => props.vertical ?
		`padding-bottom: 1rem` : `padding-right: 1rem`};
		${props => props.vertical ? `margin: 0` : `margin-right: 1rem;`};
		text-transform: uppercase;

		${breakpoints.md} {
			min-width: 80px;
			${props => props.vertical ? `margin: 0` : `margin-right: 1.5rem;`};
			${props => props.vertical ?
		`padding-bottom: 1rem` : `padding-right: 1.5rem`};
		}
	}
`;

const StyledInput = styled.input`
	border: 0;
	display: inline-block;
	font-family: ${fonts.secondary};
	font-size: var(--font-size-base);;
	font-weight: 500;
	line-height: 1.7;
	width: 100%;

	&:focus {
		outline: 0;
	}

	&:focus::placeholder {
		color: ${colors.black};
	}

	&::placeholder {
		color: ${colors.silverChalice};
		transition: color 0.3s ease-in-out;
	}
`;

const StyledTextarea = styled.textarea`
	border: 0;
	font-family: ${fonts.secondary};
	font-size: var(--font-size-base);
	font-weight: 500;
	line-height: 1.7;
	margin-top: 1rem;
	padding: 0;
	resize: none;

	${breakpoints.md} {
		margin-top: 1.5rem;
	}

	&:focus {
		outline: 0;
	}

	&:focus::placeholder {
		color: ${colors.black};
	}

	&::placeholder {
		color: ${colors.silverChalice};
	}
`;

const StyledErrorMessage = styled.small`
	color: red;
	font-family: ${fonts.primary};
	font-size: 0.75rem;
`;

const StyledInputGroup = styled.div`
	align-items: center;
	border: 2px solid ${colors.copper};
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	padding: 0.875rem 1.25rem;

	&.input-error {
		position: relative;

		${StyledErrorMessage} {
			bottom: -1.5rem;
			left: 0;
			position: absolute;
		}
	}

	${breakpoints.md} {
		padding: 1rem 1.5rem;
	}

	&:not(:last-child) {
		margin-bottom: 2.5rem;
	}
`;

export { StyledInputGroup, StyledLabel, StyledInput, StyledTextarea, StyledErrorMessage };

import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { breakpoints } from '@theme/breakpoints';
import styled from '@emotion/styled';
import { AlignProps, StyledSectionProps, SubTitleProps, EyebrowProps } from './Section.types';

const StyledMiniSidebar = styled.div<AlignProps>`
	height: auto;
	padding-bottom: 1rem;
	position: relative;
	${props => props.align === 'right' && `grid-row-start: 1`};

	${breakpoints.md} {
		height: 519px;
		padding-bottom: 0;
		${props => props.align === 'right' && `grid-row-start: unset`};
	}

	&::before {
		background-color: ${colors.copper};
		bottom: 0;
		content: '';
		display: block;
		height: 2px;
		position: absolute;
		${props => props.align === 'right' && `left: 0;`};
		${props => props.align === 'left' && `right: 0;`};
		width: 100%;

		${breakpoints.md} {
			bottom: unset;
			height: 100%;
			width: 2px;
		}
	}
`;

const StyledContent = styled.div<AlignProps>`
	${props => props.align === 'right' && `grid-row-start: 2`};

	${breakpoints.md} {
		${props => props.align === 'right' && `grid-row-start: 1`};
	}

	&.our-team {
		align-items: flex-start;
		display: flex;
		flex-wrap: wrap;
		flex-direction: columns;

		& > header {
			flex: 0 1 100%;
		}

		& > header h2 {
			margin-bottom: 0;
		}

		& > div:first-of-type {
			flex: 0 1 100%;

			${breakpoints.sm} {
				flex: 0 1 70%;
			}
		}

		& > div:last-of-type {
			box-sizing: border-box;
			flex: 0 1 100%;

			${breakpoints.sm} {
				flex: 0 1 30%;
				padding: 1rem;
			}
		}
	}
`;

const StyledHeader = styled.header<AlignProps>`
	text-align: left;

	${breakpoints.md} {
		text-align: ${props => props.align};
	}
`;

const StyledWrap = styled.div<AlignProps>`
	align-items: center;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: 1fr;
	${props => props.align === 'center' && `padding: 0 1.5rem;`};

	${breakpoints.md} {
		grid-gap: 5rem;
		${props => props.align === 'left' && `grid-template-columns: 450px 1fr`};
		${props => props.align === 'right' && `grid-template-columns: 1fr 450px`};
		${props => props.align === 'noalign' && `grid-template-columns: 1fr`};
		${props => props.align === 'center' && `grid-template-columns: 1fr 5fr`};
		${props => props.align === 'center' && `margin-left: 9rem;`};
		${props => props.align === 'center' && `padding: 0`};
	}
`;

const StyledFigure = styled.figure`
	margin: 0;

	& img {
		border-radius: 0px 20px;
		height: calc(501px / 1.5);
		object-fit: cover;
		width: 500px;

		${breakpoints.sm} {
			height: 250px;
			width: 250px;
		}

		${breakpoints.md} {
			height: 501px;
			width: 450px;
		}
	}
`;

const StyledCardContent = styled.div<AlignProps>`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	text-align: left;
	${props => props.align === 'right' && `grid-row-start: 2`};

	${breakpoints.md} {
		align-items: ${props => props.align === 'left' ? 'flex-start' : 'flex-end'};
		text-align: ${props => props.align === 'left' ? 'left' : 'right'};
		${props => props.align === 'right' && `grid-row-start: 1`};
	}
`;

const StyledTitle = styled.h2<AlignProps>`
	color: ${props => props.color ? props.color : colors.black};
	${props => props.align === 'center' && `display: inline-block`};
	font-size: var(--font-size-xxl);
	font-family: ${fonts.primary};
	font-weight: 700;
	line-height: 1;
	margin: 0 0 1.25rem 0;
	${props => props.align === 'center' && `position: relative`};
	width: 100%;

	${breakpoints.sm} {
		margin: 0 0 2.5rem 0;
		width: auto;
	}
`;

const StyledSubTitle = styled.h3<SubTitleProps>`
	color: ${colors.black};
	font-size: var(--font-size-lg);
	font-family: ${fonts.primary};
	font-weight: 700;
	line-height: 1.2;
	margin: 0;
	max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
`;

const StyledExcerpt = styled.p<SubTitleProps>`
	color: ${props => props.color ? props.color : '#777777'};
	font-size: var(--font-size-base);
	font-family: ${fonts.secondary};
	line-height: 1.5;
	max-width: ${props => props.maxWidth ? props.maxWidth : '650px'};
	text-align: ${props => props.align === 'center' ? `center` : `inherit`};
`;

const StyledCTA = styled.p`
	margin: 0;

	& a {
		display: inline-block;
	}
`;

const StyledIndex = styled.span<AlignProps>`
	color: var(--gold, #C5A880);
	display: block;
	font-size: var(--font-size-md);
	font-family: ${fonts.primary};
	font-weight: 700;
	margin-bottom: 0.5rem;
	text-align: left;

	${breakpoints.md} {
		margin-bottom: 0;
		text-align: ${props => props.align};
	}
`;

const StyledEyebrow = styled.span<EyebrowProps>`
	bottom: 0.5rem;
	${props => props.underline && `border-bottom: 2px solid ${colors.gold}`};
	${props => props.underline && `margin-bottom: 1rem`};
	${props => props.underline && `padding-bottom: 1rem`};
	color: ${colors.gold};
	display: block;
	font-size: var(--font-size-base);
	font-family: ${fonts.primary};
	font-weight: 600;
	line-height: 1.5;
	position: static;
	right: ${props => props.align === 'left' ? `16px` : `-16px`};
	text-transform: uppercase;
	white-space: nowrap;
	width: 100%;

	${breakpoints.md} {
		position: ${props => props.align === 'center' ? `static` : `absolute`};
		${props => props.align === 'left' && `transform: rotate(-90deg)`};
		${props => props.align === 'right' && `transform: rotate(-90deg)`};

		${props => props.align === 'center' && `
			transform: none;
			top: -18px;
			left: 0;
			text-align: center;
		`};
	}
`;

const StyledSectionGrid = styled.div<AlignProps>`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr;

	${breakpoints.md} {
		grid-gap: 2rem;
		grid-template-columns: ${props => props.align === 'left' ? '43px 1fr' : '1fr 43px'};
	}
`;

const StyledTeamGrid = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(3, 210px);
	margin-bottom: 0;

	-ms-overflow-style: none;
		overflow-x: auto;
		overflow-y: hidden;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}

		${breakpoints.sm} {
			margin-bottom: 2rem;
		}

		${breakpoints.md} {
			grid-template-columns: repeat(3, 255px);
		}
`;

const StyledTeamMember = styled.div``;

const StyledTeamMemberName = styled.h3`
	color: ${colors.black};
	font-size: var(--font-size-base);
	font-family: ${fonts.primary};
	font-weight: 600;
	line-height: 1;
	margin: 0;
	text-transform: uppercase;
`;

const StyledTeamMemberTitle = styled.p`
	color: ${colors.gold};
	font-size: var(--font-size-base);
	font-family: ${fonts.primary};
	font-weight: 600;
	line-height: 1;
	margin: 0.5rem 0 0 0;
	text-transform: uppercase;
`;

const StyledTeamMemberImage = styled.figure`
	flex: 0 1 200px;
	margin: 0 0 1rem 0;

	${breakpoints.md} {
		flex: 0 1 230px;
	}

	& img {
		border-radius: 0px 20px;
		height: 223px;
		object-fit: cover;
		width: 200px;

		${breakpoints.md} {
			height: 257px;
			width: 230px;
		}
	}
`;

const StyledBox = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledSection = styled.section<StyledSectionProps>`
	background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.white};
	${props => props.backgroundImage && `background-image: url(${props.backgroundImage})`};
	${props => props.backgroundImage && `background-position: center center`};
	${props => props.backgroundImage && `background-repeat: no-repeat`};
	${props => props.backgroundImage && `background-size: cover`};
	margin: 3rem 0;
	padding:  ${props => props.backgroundColor ? '3rem' : '0'} 0;
	${props => props.backgroundImage && `padding: 6rem 0`};

	${breakpoints.md} {
		margin: 8rem 0;
		padding:  ${props => props.backgroundColor ? '8rem' : '0'} 0;
		${props => props.backgroundImage && `padding: 12rem 0`};
	}

	&.simple ${StyledWrap} {

		${breakpoints.sm} {
			align-items: flex-start;
			grid-template-columns: 1fr 2fr;
		}

		${breakpoints.md} {
			align-items: center;
			grid-template-columns: 450px 1fr;
		}
	}

	&.simple[id="our-approach"] ${StyledWrap} {

		${breakpoints.md} {
			grid-template-columns: 1fr 450px;
		}
	}

	&.simple[id="our-approach"] ${StyledWrap} ${StyledCardContent} {

		${breakpoints.sm} {
			grid-column-start: 2;
			grid-row-start: 1;
		}

		${breakpoints.md} {
			grid-column-start: 1;
			grid-row-start: 1;
		}
	}

	&.portfolio ${StyledExcerpt} {
		margin-bottom: 1.5rem;

		${breakpoints.md} {
			margin-bottom: 2.5rem;
		}
	}

	&.portfolio ${StyledHeader} {
		text-align: center;
		justify-content: center;
	}

	&.portfolio ${StyledTitle} {
		margin: 1.5rem 0 1rem 0;

		${breakpoints.md} {
			margin: 2.5rem 0 2rem 0;
		}
	}

	&.portfolio ${StyledEyebrow} {
		text-align: center;
	}
`;

export {
	StyledBox,
	StyledMiniSidebar,
	StyledContent,
	StyledSection,
	StyledHeader,
	StyledWrap,
	StyledTitle,
	StyledFigure,
	StyledCardContent,
	StyledSubTitle,
	StyledExcerpt,
	StyledCTA,
	StyledIndex,
	StyledEyebrow,
	StyledSectionGrid,
	StyledTeamGrid,
	StyledTeamMember,
	StyledTeamMemberName,
	StyledTeamMemberTitle,
	StyledTeamMemberImage,
}

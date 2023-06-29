/*
 * Hero
 *
 * Hero Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image';
import { fonts } from '@theme/fonts';
import { breakpoints } from '@theme/breakpoints';
import styled from '@emotion/styled';

const StyledContent = styled.div`
	bottom: 0;
	box-sizing: border-box;
	align-items: flex-start;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	left: 0;
	right: 0;
	padding: 4rem;
	position: absolute;
	top: 0;
	z-index: 50;

	${breakpoints.sm} {
		align-items: center;
		padding: 3rem;
	}

	${breakpoints.lg} {
		padding: 2rem;
	}

	& img {
		height: 111px;
		object-fit: contain;
		width: 102px;

		${breakpoints.sm} {
			height: 222px;
			width: 204px;
		}

		${breakpoints.lg} {
			height: 333px;
			width: 307px;
		}
	}

	${breakpoints.sm} {
		flex-direction: row;
	}
`;

const StyledContentWrap = styled.div`

	${breakpoints.sm} {
		margin-left: 40px;
	}

	${breakpoints.lg} {
		margin-left: 105px;
		max-width: 650px;
	}
`;

const StyledHeroTitle = styled.h1`
	font-size: 1.5rem;
	font-family: ${fonts.primary};
	font-weight: 700;
	line-height: 1.2;
	text-align: left;

	${breakpoints.sm} {
		font-size: 2rem;
	}

	${breakpoints.lg} {
		font-size: 3rem;
	}
`;

const StyledHeroSubtitle = styled.p`
	font-size: 1.125rem;
	font-family: ${fonts.secondary};
	font-weight: 400;
	line-height: 1.5;
	text-align: left;

	${breakpoints.sm} {
		font-size: 1.25rem;
	}
`;

interface ContentProps {
	logo: string;
	subtitle: string;
	title: string;
}

export const Content: FC<ContentProps> = ({ logo, subtitle, title }): JSX.Element => {
	return (
		<StyledContent>
			{logo && <Image alt="Blank Canvas CapitalLogo" height={333} src={logo} width={307} />}
			<StyledContentWrap>
				{title && <StyledHeroTitle>{title}</StyledHeroTitle>}
				{subtitle && <StyledHeroSubtitle>{subtitle}</StyledHeroSubtitle>}
			</StyledContentWrap>
		</StyledContent>
	)
}

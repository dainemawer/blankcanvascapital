/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import { Hero } from '@components/Hero';
import { Container } from '@components/Container';
import { Button } from '@components/Button';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { breakpoints } from '@theme/breakpoints';
import { SingleTeamProps } from '@components/TeamGrid/TeamGrid.types';
import { PortfolioProps } from '../pages/portfolio';

type HomeSimpleSectionProps = {
	align: 'left' | 'right' | 'center';
	ctaLabel: string;
	ctaLink: string;
	excerpt: string;
	eyebrow: string;
	id: string;
	image: string;
	index: string;
	subTitle: string;
	title: string;
}

type HomeComplexSectionProps = {
	children: JSX.Element;
	ctaLabel: string,
	ctaLink: string,
	excerpt: string,
	eyebrow?: string;
	id: string;
	image?: string;
	index?: string;
	subTitle?: string;
	title: string;
	variant: 'our-team' | 'investment-portfolio';
}

type AlignProps = {
	align?: 'left' | 'right' | 'center' | 'noalign';
}

type SubTitleProps = {
	align?: 'left' | 'right' | 'center' | 'noalign',
	maxWidth?: string;
}

type StyledSectionProps = {
	align?: 'left' | 'right' | 'center' | 'noalign';
	backgroundColor?: string;
}

const StyledSection = styled.section<StyledSectionProps>`
	background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.white};
	margin: 4rem 0;
	padding:  ${props => props.backgroundColor ? '4rem' : '0'} 0;

	${breakpoints.md} {
		margin: 8rem 0;
	}
`;

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
`;

const StyledHeader = styled.header<AlignProps>`
	text-align: left;

	${breakpoints.md} {
		text-align: ${props => props.align === 'left' ? 'left' : 'right'};
	}
`;

const StyledWrap = styled.div<AlignProps>`
	align-items: center;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: 1fr;
	${props => props.align === 'center' && `padding: 0 1.25rem;`};

	${breakpoints.md} {
		grid-gap: 5rem;
		${props => props.align === 'left' && `grid-template-columns: 450px 1fr`};
		${props => props.align === 'right' && `grid-template-columns: 1fr 450px`};
		${props => props.align === 'noalign' && `grid-template-columns: 1fr`};
		${props => props.align === 'center' && `grid-template-columns: 1fr 2fr`};
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
	color: ${colors.black};
	${props => props.align === 'center' && `display: inline-block`};
	font-size: 2.5rem;
	font-family: ${fonts.primary};
	font-weight: 800;
	line-height: 1;
	margin: 0 0 2.5rem 0;
	${props => props.align === 'center' && `position: relative`};

	${breakpoints.md} {
		font-size: 4.5rem;
	}
`;

const StyledSubTitle = styled.h3<SubTitleProps>`
	color: ${colors.black};
	font-size: 1.5rem;
	font-family: ${fonts.primary};
	font-weight: 700;
	line-height: 1.2;
	margin: 0;
	max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};

	${breakpoints.md} {
		font-size: ${props => props.align === 'center' ? '2rem' : '2.5rem'};
	}

	${breakpoints.lg} {
		font-size: 2.5rem;
	}
`;

const StyledExcerpt = styled.p<SubTitleProps>`
	color: #777777;
	font-size: 1rem;
	font-family: ${fonts.secondary};
	line-height: 1.5;
	max-width: 650px;

	${breakpoints.md} {
		font-size: ${props => props.align === 'center' ? '1.125rem' : '1.25rem'};
	}

	${breakpoints.lg} {
		font-size: 1.25rem;
	}
`;

const StyledCTA = styled.p`

	& a {
		display: inline-block;
	}
`;

const StyledIndex = styled.span<AlignProps>`
	color: var(--gold, #C5A880);
	display: block;
	font-size: 1.125rem;
	font-family: ${fonts.primary};
	font-weight: 700;
	margin-bottom: 0.5rem;
	text-align: left;

	${breakpoints.md} {
		margin-bottom: 0;
		text-align: ${props => props.align === 'left' ? `left` : `right`};
	}
`;

const StyledEyebrow = styled.span<AlignProps>`
	bottom: 0.5rem;
	color: ${colors.gold};
	display: block;
	font-size: 1rem;
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
			text-align: left;
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
	grid-gap: 1.75rem;
	grid-auto-flow: column;
	grid-auto-columns: 280px;
	margin-bottom: 2rem;
	-ms-overflow-style: none;
	overflow-x: auto;
	overflow-y: hidden;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	${breakpoints.md} {
		grid-template-columns: repeat(3, 1fr);
		margin-bottom: 4rem;
	}
`;

const StyledTeamMember = styled.div``;

const StyledTeamMemberName = styled.h3`
	color: ${colors.black};
	font-size: 1.125rem;
	font-family: ${fonts.primary};
	font-weight: 600;
	line-height: 1;
	margin: 1.5rem 0 0 0;
	text-transform: uppercase;
`;

const StyledTeamMemberTitle = styled.p`
	color: ${colors.gold};
	font-size: 1rem;
	font-family: ${fonts.primary};
	font-weight: 600;
	line-height: 1;
	margin: 0.5rem 0 0 0;
	text-transform: uppercase;
`;

const StyledTeamMemberImage = styled.figure`
	margin: 0;

	& img {
		border-radius: 0px 20px;
		height: auto;
		object-fit: cover;
		width: 447px;

		${breakpoints.md} {
			height: 500px;
		}
	}
`;

const StyledPortfolioOverflowGridWrap = styled.div`
	box-shadow: 0px 4px 68px 7px rgba(0, 0, 0, 0.07);
	position: relative;
	overflow-x: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const StyledPortfolioOverflowGrid = styled.div`
	position: relative;
	white-space: nowrap;
`;

const StyledPortfolioOverflowCard = styled.article`
	align-items: center;
	background: ${colors.white};
	border-bottom: 14px solid ${colors.gold};
	box-sizing: border-box;
	box-shadow: 0px 4px 68px 7px rgba(0, 0, 0, 0.07);
	display: inline-flex;
	justify-content: center;
	margin-right: 1.75rem;
	max-width: 207px;
	min-height: 260px;
	padding: 2rem;
	text-align: center;

	&:last-child {
		margin-right: 0;
	}

	${breakpoints.sm} {
		min-width: 276px;
		min-height: 346px;
	}

	${breakpoints.lg} {
		min-width: 415px;
		min-height: 520px;
	}
`

const HomeComplexSection: FC<HomeComplexSectionProps> = ({
	children, ctaLabel, ctaLink, excerpt, eyebrow, id, image, index, subTitle, title, variant
}) => {

	if(variant === 'our-team' ) {
		return (
			<StyledSection align="left" id={id}>
				<Container size='1290px'>
					<StyledSectionGrid align="left">
						<StyledMiniSidebar align="left">
							<StyledIndex align="left">{index}</StyledIndex>
							<StyledEyebrow align="left">{eyebrow}</StyledEyebrow>
						</StyledMiniSidebar>
						<StyledContent>
							<StyledHeader align="left">
								<StyledTitle>{title}</StyledTitle>
							</StyledHeader>
							<StyledWrap align="noalign">
								{children}
							</StyledWrap>
							<StyledCardContent>
								<StyledExcerpt>{excerpt}</StyledExcerpt>
								<StyledCTA>
									<Button href={ctaLink}>{ctaLabel}</Button>
								</StyledCTA>
							</StyledCardContent>
						</StyledContent>
					</StyledSectionGrid>
				</Container>
			</StyledSection>
		)
	}

	if( variant === 'investment-portfolio' ) {
		return (
			<StyledSection align="center" backgroundColor="rgba(230,230,230, 0.3)" id={id}>
				<Container size='1290px'>
					<StyledHeader>
						<StyledTitle align="center">
							<StyledEyebrow align="center">
								<StyledIndex align="center">{index}</StyledIndex>
								{eyebrow}
							</StyledEyebrow>
							{title}
						</StyledTitle>
					</StyledHeader>
				</Container>
				<StyledContent>
					<StyledWrap align="center">
						<StyledCardContent align="left">
							<StyledSubTitle align="center">{subTitle}</StyledSubTitle>
							<StyledExcerpt align="center">{excerpt}</StyledExcerpt>
							<StyledCTA>
								<Button href={ctaLink}>{ctaLabel}</Button>
							</StyledCTA>
						</StyledCardContent>
						{children}
					</StyledWrap>
				</StyledContent>
			</StyledSection>
		)
	}

	return null;
}

const HomeSimpleSection: FC<HomeSimpleSectionProps> = ({
	align,
	ctaLabel,
	ctaLink,
	excerpt,
	eyebrow,
	id,
	image,
	index,
	subTitle,
	title,
}) => {
	return (
		<StyledSection align={align} id={id}>
			<Container size='1290px'>
				{align === 'left' ? (
					<StyledSectionGrid align={align}>
						<StyledMiniSidebar align={align}>
							<StyledIndex align={align}>{index}</StyledIndex>
							<StyledEyebrow align={align}>{eyebrow}</StyledEyebrow>
						</StyledMiniSidebar>
						<StyledContent>
							<StyledHeader align={align}>
								<StyledTitle>{title}</StyledTitle>
							</StyledHeader>
							<StyledWrap align={align}>
								<StyledFigure>
									<Image alt="" height={501} src={image} width={450} />
								</StyledFigure>
								<StyledCardContent align={align}>
									<StyledSubTitle maxWidth="655px">{subTitle}</StyledSubTitle>
									<StyledExcerpt>{excerpt}</StyledExcerpt>
									<StyledCTA>
										<Button href={ctaLink}>{ctaLabel}</Button>
									</StyledCTA>
								</StyledCardContent>
							</StyledWrap>
						</StyledContent>
					</StyledSectionGrid>
				): (
					<StyledSectionGrid align={align}>
							<StyledContent align={align}>
								<StyledHeader align={align}>
										<StyledTitle>{title}</StyledTitle>
								</StyledHeader>
								<StyledWrap align={align}>
									<StyledCardContent align={align}>
										<StyledSubTitle maxWidth="655px">{subTitle}</StyledSubTitle>
										<StyledExcerpt>{excerpt}</StyledExcerpt>
										<StyledCTA>
											<Button href={ctaLink}>{ctaLabel}</Button>
										</StyledCTA>
									</StyledCardContent>
									<StyledFigure>
										<Image alt="" height={600} src={image} width={400} />
									</StyledFigure>
								</StyledWrap>
						</StyledContent>
						<StyledMiniSidebar align={align}>
							<StyledIndex align={align}>{index}</StyledIndex>
							<StyledEyebrow align={align}>{eyebrow}</StyledEyebrow>
						</StyledMiniSidebar>
					</StyledSectionGrid>
				)}
			</Container>
		</StyledSection>
	);
};

export default function Home(): JSX.Element {
	const { data: teamData, error: teamError } = useSWR('/api/team', fetcher);
	const { data: portfolioData, error: portfolioError } = useSWR('/api/portfolio', fetcher);
	const team = teamData as SingleTeamProps[];
	const portfolio = portfolioData as PortfolioProps[];

	return (
		<>
			<NextSeo
				title="Home"
			/>
			<Hero
				subtitle="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way
				forward across the South African financial landscape."
				image="/hero-home.jpg"
				label="Aeroplane flying over buildings"
				logo="/bcc-logo.png"
				title="Every investment starts with an idea."
			/>
			<HomeSimpleSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				align="left"
				ctaLabel="Our Business"
				ctaLink="/about"
				eyebrow="Our investments, Your business"
				id="about-us"
				image="/about-us.jpg"
				index="01"
				subTitle="Remarkable businesses through great management."
				title="About Us"
			/>
			<HomeComplexSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="View Investments"
				ctaLink="/investment-portfolio"
				eyebrow="02 Our latest investments"
				id="investment-portfolio"
				subTitle="Discover more of our investments..."
				title="Investment Portfolio"
				variant="investment-portfolio"
			>
				<StyledPortfolioOverflowGridWrap>
					<StyledPortfolioOverflowGrid>
						{portfolio?.map((investment) => (
							<StyledPortfolioOverflowCard key={investment.id}>
								<Image
									alt=""
									decoding="async"
									height={137}
									loading="lazy"
									src={investment.logo}
									width={214}
								/>
							</StyledPortfolioOverflowCard>
						))}
					</StyledPortfolioOverflowGrid>
				</StyledPortfolioOverflowGridWrap>

			</HomeComplexSection>
			<HomeComplexSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				ctaLabel="Get To Know Us"
				ctaLink="/our-team"
				eyebrow="Our investments, Your business"
				id="our-team"
				index="03"
				title="Our Team"
				variant="our-team"
			>
				<StyledTeamGrid>
					{team?.map((member) => (
						<StyledTeamMember key={member.name}>
							<StyledTeamMemberImage>
								<Image alt="" height={500} src={member.image} width={447} />
							</StyledTeamMemberImage>
							<StyledTeamMemberName>{member.name}</StyledTeamMemberName>
							<StyledTeamMemberTitle>{member.title}</StyledTeamMemberTitle>
						</StyledTeamMember>
					))}
				</StyledTeamGrid>
			</HomeComplexSection>
			<HomeSimpleSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				align="right"
				ctaLabel="Our Business"
				ctaLink="/investment-approach"
				eyebrow="Our investment approach"
				id="our-approach"
				image="/approach.jpg"
				index="04"
				subTitle="Our take on business is as unique as your investment"
				title="Our Approach"
			/>
			<HomeSimpleSection
				excerpt="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way forward across the South African financial."
				align="left"
				ctaLabel="Contact Us"
				ctaLink="/contact"
				eyebrow="Our investments, Your business"
				id="get-in-touch"
				image="/contact.jpg"
				index="05"
				subTitle="Have an idea? Want to talk about investments?"
				title="Get in Touch"
			/>
		</>
	)
}

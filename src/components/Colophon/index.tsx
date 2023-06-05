/*
 * Colophon
 *
 * Colophon Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Link from 'next/link'
import { Container } from '@components/Container'
import styled from '@emotion/styled';
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { breakpoints } from '@theme/breakpoints';

const StyledColophon = styled.div`
	background-color: ${colors.grey};
	border-bottom: 4px solid  ${colors.gold};
	color: #fff;
	font-family: ${fonts.primary};
	padding: 1.25rem 0;
`;

const StyledCopyright = styled.p`
	font-size: 0.875rem;
	margin: 0;
	line-height: 1.5;
`;

const StyledWrapper = styled.div`
	align-items: center;
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
		height: 2px;
		transition: all 0.3s ease-in-out;
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


interface ColophonProps { }

export const Colophon: FC<ColophonProps> = (): JSX.Element => {
	return (
		<StyledColophon>
			<Container>
				<StyledWrapper>
					<StyledCopyright>&copy; Copyright 2023. Blank Canvas Capital. All Rights Reserved</StyledCopyright>
					<nav>
						<StyledList>
							<StyledListItem>
								<Link href="/disclaimer">
									Disclaimer
								</Link>
							</StyledListItem>
							<StyledListItem>
								<Link href="/terms-conditions">
									Terms and Conditions
								</Link>
							</StyledListItem>
						</StyledList>
					</nav>
				</StyledWrapper>
			</Container>
		</StyledColophon>
	);
}

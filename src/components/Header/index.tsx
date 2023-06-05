/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Logo } from '@components/Logo';
import { Navigation } from '@components/Navigation';
import { Container } from '@components/Container';
import { colors } from '@theme/colors';

const MENU = [
	{
		id: 'about-us',
		label: 'About Us',
		href: '/about-us'
	},
	{
		id: 'investment-approach',
		label: 'Investment Approach',
		href: '/investment-approach'
	},
	{
		id: 'team',
		label: 'Team',
		href: '/team'
	},
	{
		id: 'portfolio',
		label: 'Portfolio',
		href: '/portfolio'
	},
	{
		id: 'contact-us',
		label: 'Contact Us',
		href: '/contact'
	}
]

const StyledHeader = styled.header`
	border-top: 6px solid ${colors.copper};
	padding: 1.25rem 0;

	& a {
		line-height: 0;
	}
`;

const StyledHeaderWrap = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 0 1.25rem;
`;

export const Header: FC = (): JSX.Element => {
	return (
		<StyledHeader className="site-header" id="site-header" role="banner" aria-label="Site Header">
			<Container size="1650px">
				<StyledHeaderWrap>
					<Link href="/">
						<Logo />
					</Link>
					<Navigation id="site-navigation" label="Site Navigation" menu={MENU} />
				</StyledHeaderWrap>
			</Container>
		</StyledHeader>
	)
}

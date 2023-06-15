/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/

import { useContext, FC } from 'react'
import Link from 'next/link'
import { Logo } from '@components/Logo';
import { Navigation } from '@components/Navigation';
import { Container } from '@components/Container';
import { SiteContext } from '@context/SiteContext';
import { Burger } from '@mantine/core';
import { SiteContextProps } from '@context/SiteContext';
import { StyledHeader, StyledHeaderWrap } from './Header.styled';

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
];

export const Header: FC = (): JSX.Element => {
	const {
		close,
		isOpen,
		open,
		toggle,
	} = useContext<SiteContextProps>(SiteContext);
	const ariaLabel = isOpen ? 'Close navigation' : 'Open navigation';

	return (
		<StyledHeader
			aria-label="Site Header"
			className="site-header"
			id="site-header"
			role="banner"
		>
			<Container size="1620px">
				<StyledHeaderWrap>
					<Burger
						aria-label={ariaLabel}
						onClick={toggle}
						opened={isOpen}
						size={18}
					/>
					<Link href="/">
						<Logo />
					</Link>
					<Navigation
						handleClose={close}
						handleOpen={open}
						handleToggle={toggle}
						id="site-navigation"
						isOpen={isOpen}
						label="Site Navigation"
						menu={MENU}
					/>
				</StyledHeaderWrap>
			</Container>
		</StyledHeader>
	)
}

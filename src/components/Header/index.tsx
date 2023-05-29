/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { Logo } from '@components/Logo';
import { Navigation } from '@components/Navigation';

interface HeaderProps { }

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

export const Header: FC<HeaderProps> = (): JSX.Element => {
	return (
		<header className="site-header" id="site-header" role="banner" aria-label="Site Header">
			<Logo />
			<Navigation id="site-navigation" label="Site Navigation" menu={MENU} />
		</header>
	)
}

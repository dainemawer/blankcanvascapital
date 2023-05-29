/*
 * Navigation
 *
 * Navigation Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Link from 'next/link'

interface NavigationItemProps {
	id: string,
	label: string;
	href: string;
}

interface NavigationProps {
	id: string,
	label: string;
	menu: NavigationItemProps[];
}

export const Navigation: FC<NavigationProps> = ({ id, label, menu }): JSX.Element => {
	return (
		<nav className="site-navigation" id={id} role="navigation" aria-label={label}>
			{menu.map((item: NavigationItemProps) => (
				<Link key={item.id} href={item.href}>{item.label}</Link>
			))}
		</nav>
	)
}

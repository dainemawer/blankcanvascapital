/*
 * Navigation
 *
 * Navigation Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import ActiveLink from '@components/ActiveLink';
import { NavigationProps, NavigationItemProps } from './Navigation.types';
import { StyledList, StyledListItem } from './Navigation.styled';

export const Navigation: FC<NavigationProps> = ({ id, label, menu }): JSX.Element => {
	return (
		<nav className="site-navigation" id={id} role="navigation" aria-label={label}>
			<StyledList>
				{menu.map((item: NavigationItemProps) => {
					return (
						<StyledListItem key={item.id}>
							<ActiveLink activeClassName="active" href={item.href}>{item.label}</ActiveLink>
						</StyledListItem>
					)
				})}
			</StyledList>
		</nav>
	)
}

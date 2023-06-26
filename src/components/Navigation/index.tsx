/*
 * Navigation
 *
 * Navigation Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Link from 'next/link'
import { Modal } from '@mantine/core';
import { Logo } from '@components/Logo';
import ActiveLink from '@components/ActiveLink';
import { NavigationProps, NavigationItemProps } from './Navigation.types';
import {
	StyledList,
	StyledListItem,
	StyledListItemDesktop,
	StyledDrawerList
} from './Navigation.styled';

const boxVariant = {
	hidden: {
		x: "-100vw", //move out of the site
	},
	visible: {
		x: 0, // bring it back to nrmal
		transition: {
			delay: 0.5,
			when: "beforeChildren", //use this instead of delay
			staggerChildren: 0.2, //apply stagger on the parent tag
		},
	},
};

const listVariant = {
	hidden: {
		x: -10, //move out of the site
		opacity: 0,
	},
	visible: {
		x: 0, // bring it back to nrmal
		opacity: 1,
	},
};

export const Navigation: FC<NavigationProps> = ({
	handleClose,
	id,
	isOpen,
	label,
	menu,
}): JSX.Element => (
	<nav aria-label={label} className="site-navigation" id={id} role="navigation">
		<StyledList>
			{menu && menu.map((item: NavigationItemProps) => {
				return (
					<StyledListItemDesktop key={item.id}>
						<ActiveLink activeClassName="active" href={item.href}>
							{item.label}
						</ActiveLink>
					</StyledListItemDesktop>
				)
			})}
		</StyledList>
		<Modal
			aria-label={label}
			closeButtonProps={{ 'aria-label': 'Close modal' }}
			onClose={handleClose}
			opened={isOpen}
			title="Mobile Navigation"
			transitionProps={{ transition: 'fade', duration: 400 }}
			closeOnClickOutside
			closeOnEscape
			fullScreen
		>
			<StyledDrawerList animate="visible" initial="hidden" variants={boxVariant}>
				<StyledListItem>
					<Link href="/">
						<Logo />
					</Link>
				</StyledListItem>
				{menu && menu.map((item: NavigationItemProps) => {
					return (
						<StyledListItem key={item.id} variants={listVariant}>
							<ActiveLink activeClassName="active" href={item.href}>
								{item.label}
							</ActiveLink>
						</StyledListItem>
					)
				})}
			</StyledDrawerList>
		</Modal>
	</nav>
);
